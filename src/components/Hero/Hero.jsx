import React from "react";
import { Canvas } from "@react-three/fiber";
import s from "./Hero.module.scss";
import Button from "../Button/Button";
import R3FExperience from "../R3FExperience/R3FExperience";

const cameraSettings = {
  fov: 75,
  near: 0.1,
  far: 200,
  position: [4, 2, 6],
};

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.heroText}>
        <h1>
          {" "}
          <span>Creative</span>
          <br /> Web Development
        </h1>
        <Button content="let's chat" />
      </div>
      <div className={s.canvas}>
        <Canvas camera={cameraSettings} shadows>
          <R3FExperience />
        </Canvas>
      </div>
    </section>
  );
}
