import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

export default function Box({ position = [0, 0, 0], ...props }) {
  const [hovered, setHover] = useState(false);

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const ref = useRef();

  const factor = 0.5 + Math.random();

  useFrame((state) => {
    const t = easeInOutCubic(
      (1.5 + Math.sin(state.clock.getElapsedTime() * factor)) / 2
    );
    ref.current.position.y = position[1] + t * 3;
    // ref.current.scale.y = 1 + t;
    // ref.current.scale.x = 0.1 + t;
  });

  return (
    <mesh
      ref={ref}
      position={position}
      {...props}
      castShadow
      receiveShadow
      scale={[0.87, 0.87, 0.87]}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhongMaterial
        attach="material"
        color={hovered ? "pink" : "#6C1EED"}
        roughness={0}
        metalness={0.4}
      />
    </mesh>
  );
}
