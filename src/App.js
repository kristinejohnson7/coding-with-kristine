import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import { createContext, useEffect, useMemo, useState, useRef } from "react";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
// import texture from "./assets/particlePack/png/trace_06.png";
import texture from "./assets/particlePack/png/star_05.png";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const mountRef = useRef(null);
  useEffect(() => {
    /**
     * Base
     */
    // Canvas

    // Scene
    const scene = new THREE.Scene();

    //Texture

    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load(texture);

    /**
     * Objects
     */

    //Particles

    //Geometry
    const particlesCount = 300;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      // positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
      // positions[i * 3 + 1] = 5 * 0.5 - Math.random() * 4 * 3;
      // positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    //Material
    const particlesMaterial = new THREE.PointsMaterial({
      color: "white",
      sizeAttenuation: true,
      size: 0.5,
      map: particleTexture,
    });
    // particlesMaterial.map = particleTexture;
    particlesMaterial.transparent = true;
    particlesMaterial.alphaMap = particleTexture;
    particlesMaterial.alphaTest = 0.001;

    //Points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    // particles.rotation.x = 0.1;
    scene.add(particles);

    //Lights

    const directionalLight = new THREE.DirectionalLight("#ffffff", 1);
    directionalLight.position.set(1, 1, 0);
    scene.add(directionalLight);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      35,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 6;
    scene.add(camera);

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    //Scroll

    let scrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
    });
    /**
     * Animate
     */
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      //Animate camera
      camera.position.y = -scrollY / sizes.height;
      particles.rotation.x = 10 * (elapsedTime * 0.0009);
      particles.rotation.y = 10 * (elapsedTime * 0.00008);

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="app">
        <div className="webgl" ref={mountRef}>
          {/* <Canvas>
            <perspectiveCamera
              fov={65}
              aspect={sizes.width / sizes.height}
              position={[0, 0, 3]}
              near={0.1}
              far={100}
              rotation-x={Math.PI * -0.5}
            >
              <Particles />
            </perspectiveCamera>
            <ambientLight />
          </Canvas> */}
        </div>
        <NavBar />
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

export const Particles = () => {
  const count = 500;

  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      sizes[i] = Math.random() < 0.03 ? 15 : 6;
    }

    return [positions, sizes];
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach={"attributes.position"}
          count={positions.length / 3}
          color="red"
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} />
    </points>
  );
};
