import React from "react";
import { Canvas } from "@react-three/fiber";
import s from "./Hero.module.scss";
import Button from "../Button/Button";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import R3FExperience from "../R3FExperience/R3FExperience";

const cameraSettings = {
  fov: 75,
  near: 0.1,
  far: 200,
  position: [4, 2, 6],
};

export default function Hero() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  return (
    <section className={s.hero} id={s[`${theme}`]}>
      <div className={s.heroText}>
        <h1>
          <span>Creative</span>
          <br /> Web Development
        </h1>
        <Button content="let's chat" />
      </div>
      <div className={s.canvas}>
        <Canvas camera={cameraSettings} shadows>
          <R3FExperience rotation-x={Math.PI * -0.5} />
        </Canvas>
      </div>
    </section>
  );
}
