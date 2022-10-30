import React, { useRef, useMemo, useContext } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  RigidBody,
  Physics,
  CuboidCollider,
  InstancedRigidBodies,
} from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ThemeContext } from "../../App";

export default function R3FExperience() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  const cube = useRef();
  const twister = useRef();
  const cubes = useRef();

  const cubeJump = () => {
    cube.current.applyImpulse({ x: 0, y: 5, z: 0 });
    cube.current.applyTorqueImpulse({
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
      z: Math.random() - 0.5,
    });
  };

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const eulerRotation = new THREE.Euler(0, time * 3.5, 0);
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(eulerRotation);
    twister.current.setNextKinematicRotation(quaternionRotation);

    const angle = time * 0.5;
    const x = Math.cos(angle) * 2.5;
    const z = Math.sin(angle) * 2.5;
    twister.current.setNextKinematicTranslation({ x: x, y: -0.8, z: z });
  });

  const cubesCount = 20;
  const cubeTransforms = useMemo(() => {
    const positions = [];
    const rotations = [];
    const scales = [];

    for (let i = 0; i < cubesCount; i++) {
      positions.push([
        (Math.random() - 0.5) * 7,
        6 + i * 0.2,
        (Math.random() - 0.5) * 7,
      ]);
      rotations.push([0, 0, 0]);
      scales.push([1, 1, 1]);
    }

    return { positions, rotations, scales };
  }, []);

  const purple = "#440bd4";
  const lightTeal = "#7ECBC7";
  const offWhite = "#E4DDEF";

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault minDistance={13} />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <pointLight position={[1, 3, 4]} color="teal" intensity={5.5} />
      <Physics>
        <RigidBody colliders="ball">
          <mesh castShadow position={[-1.5, 2, 0]} restitution={0.5}>
            <sphereGeometry />
            <meshStandardMaterial
              color={theme === "dark" ? offWhite : purple}
            />
          </mesh>
        </RigidBody>

        <RigidBody ref={cube} position={[1.5, 2, 0]} restitution={0.5}>
          <mesh castShadow onClick={cubeJump}>
            <boxGeometry />
            <meshStandardMaterial
              color={theme === "dark" ? offWhite : purple}
            />
          </mesh>
          <CuboidCollider args={[0.5, 0.5, 0.5]} />
        </RigidBody>

        <RigidBody type="fixed">
          <mesh receiveShadow position-y={-1.25}>
            <boxGeometry args={[10, 0.5, 10]} />
            <meshStandardMaterial
              color={theme === "dark" ? purple : lightTeal}
            />
          </mesh>
        </RigidBody>
        <RigidBody
          position={[0, -0.8, 0]}
          friction={0}
          type="kinematicPosition"
          ref={twister}
        >
          <mesh castShadow scale={[0.4, 0.4, 3]}>
            <boxGeometry />
            <meshStandardMaterial
              color={theme === "dark" ? offWhite : purple}
            />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, 5.5]} />
          <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, -5.5]} />
          <CuboidCollider args={[0.5, 2, 5]} position={[5.5, 1, 0]} />
          <CuboidCollider args={[0.5, 2, 5]} position={[-5.5, 1, 0]} />
        </RigidBody>
        <InstancedRigidBodies
          positions={cubeTransforms.positions}
          rotations={cubeTransforms.rotations}
          scales={cubeTransforms.scales}
        >
          <instancedMesh
            ref={cubes}
            args={[null, null, cubesCount]}
            castShadow
            receiveShadow
          >
            <boxGeometry />
            <meshStandardMaterial
              color={theme === "dark" ? lightTeal : offWhite}
            />
          </instancedMesh>
        </InstancedRigidBodies>
      </Physics>
    </>
  );
}
