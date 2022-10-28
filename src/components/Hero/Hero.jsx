import React from "react";
import { Canvas } from "@react-three/fiber";
import s from "./Hero.module.scss";
import R3FExperience from "../R3FExperience/R3FExperience";

const cameraSettings = {
  fov: 70,
  near: 1,
  far: 500,
  position: [-6, 3, 10],
};

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.canvas}>
        <Canvas camera={cameraSettings} shadows>
          <R3FExperience />
        </Canvas>
      </div>
    </section>
  );
}
