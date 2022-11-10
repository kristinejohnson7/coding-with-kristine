import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import s from "./Hero.module.scss";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import Tunnel from "./Tunnel";

const cameraSettings = {
  fov: 95,
  near: 0.1,
  far: 200,
  position: [-1, 0.35, 7],
};

export default function Hero() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  return (
    <section className={s.hero} id={s[`${theme}`]}>
      <div className={s.canvas}>
        <Suspense fallback={null}>
          <Canvas shadows camera={cameraSettings}>
            <Tunnel />
          </Canvas>
        </Suspense>
      </div>
    </section>
  );
}
