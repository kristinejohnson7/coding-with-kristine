import React, { useContext } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Ground } from "./Ground";
import { Rings } from "./Rings";
import { Boxes } from "./Boxes";
import { ThemeContext } from "../../App";

export default function Tunnel() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={2.45} />
      <PerspectiveCamera makeDefault fov={90} position={[3, 2, 5]} />

      <color
        args={[theme === "dark" ? "black" : "#440bd4"]}
        attach="background"
      />

      <Rings />
      <Boxes />

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />
    </>
  );
}
