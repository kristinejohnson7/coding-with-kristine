import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import s from "./Hero.module.scss";
import Button from "../Button/Button";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import R3FExperience from "../R3FExperience/R3FExperience";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Ground } from "./Ground";
import { Car } from "./Car";
import { Rings } from "./Rings";
import { Boxes } from "./Boxes";
// import { BlendFunction } from "postprocessing";
// import {
//   Bloom,
//   ChromaticAberration,
//   EffectComposer,
// } from "@react-three/postprocessing";

const cameraSettings = {
  fov: 95,
  near: 0.1,
  far: 200,
  position: [-1, 0.35, 7],
};

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={2.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      {/* 
      let color = new Color(0, 0, 0)
      */}
      <color args={["black"]} attach="background" />
      {/* <CubeCamera resolution={56}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera> */}
      {/* <Car /> */}

      {/* <Rings /> */}
      <Boxes />

      {/* 
      let spotlight = new SpotLight();
      spotlight.intensity = 1.5;
      spotlight.position.set(...)
      */}

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

      {/* <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1.3}
          width={300}
          height={300}
          kernelSize={5}
          luminanceThreshold={0.95}
          luminanceSmoothing={0.025}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0005, 0.0012]}
        />
      </EffectComposer> */}
    </>
  );
}

export default function Hero() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  return (
    <section className={s.hero} id={s[`${theme}`]}>
      {/* <div className={s.heroText}>
        <h1>
          <span>Creative</span>
          <br /> Web Development
        </h1>
        <Button content="let's chat" />
      </div> */}
      <div className={s.canvas}>
        {/* <Canvas camera={cameraSettings} shadows> */}
        {/* <R3FExperience rotation-x={Math.PI * -0.5} /> */}
        {/* </Canvas> */}
        <Suspense fallback={null}>
          <Canvas shadows camera={cameraSettings}>
            <CarShow />
          </Canvas>
        </Suspense>
      </div>
    </section>
  );
}
