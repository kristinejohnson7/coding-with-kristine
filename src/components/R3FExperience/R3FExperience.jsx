import React, { useRef } from "react";
import Boxes from "../Box/Boxes";
import { OrbitControls } from "@react-three/drei";
import { softShadows } from "@react-three/drei";
import { useMatcapTexture } from "@react-three/drei";

export default function R3FExperience() {
  // const [matcapTexture] = useMatcapTexture("291912_473531_3C2C25_3A2424", 256);

  softShadows();
  const boxRef = useRef();
  return (
    <>
      <fog attach="fog" args={["white", 0, 50]} />
      <OrbitControls />
      <ambientLight intensity={0.8} color="#d9c8df" />
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} color="teal" intensity={3.5} />
      <pointLight position={[0, -10, 0]} intensity={5.5} color="teal" />

      <group position={[0, -4.4, 1]}>
        <mesh
          scale={2.5}
          position={[3, 0, -3.4]}
          ref={boxRef}
          // castShadow
          receiveShadow
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshPhongMaterial color={"#7ECBC7"} />
        </mesh>
        <mesh receiveShadow castShadow>
          <boxBufferGeometry attach="geometry" args={[4, 1.1, 0.7]} />
          <meshStandardMaterial attach="material" color="#E4DDEF" />
        </mesh>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
          receiveShadow
        >
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <shadowMaterial
            attach="material"
            transparent
            opacity={0.4}
            metalness="0.5"
          />
        </mesh>
        <mesh
          scale={0.5}
          position={[0.5, 0.01, 1.4]}
          ref={boxRef}
          receiveShadow
          castShadow
        >
          <sphereBufferGeometry args={[1, 32, 32]} />
          <meshPhongMaterial color={"#7ECBC7"} />
        </mesh>
        <Boxes />
      </group>
    </>
  );
}
