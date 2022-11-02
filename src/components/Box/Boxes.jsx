import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Box from "./Box";

export default function Boxes({ number = 11 }) {
  const ref = useRef();

  const positions = [...Array(number)].map(() => [
    3 - Math.random() * 6,
    Math.random() * 5,
    3 - Math.random() * 6,
  ]);

  useFrame(
    (state) =>
      (ref.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() / 10) * Math.PI)
  );

  return (
    <group ref={ref}>
      {positions.map((pos, index) => (
        <Box key={index} position={pos} />
      ))}
    </group>
  );
}
