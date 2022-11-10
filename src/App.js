import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import { createContext, useEffect, useState, useRef } from "react";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";
import * as THREE from "three";
import texture from "./assets/particlePack/png/star_05.png";
import objTexture from "./assets/3.jpg";
import { ScrollContainer } from "react-scroll-motion";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const mountRef = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();

    const directionalLight = new THREE.DirectionalLight("#ffffff", 1);
    directionalLight.position.set(1, 1, 0);
    scene.add(directionalLight);

    //Textures

    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load(texture);

    const objTextureLoader = new THREE.TextureLoader();
    const gradientTexture = objTextureLoader.load(objTexture);
    gradientTexture.magFilter = THREE.NearestFilter;

    const material = new THREE.MeshToonMaterial({
      color: "#440bd4",
      gradientMap: gradientTexture,
    });

    const objectsDistance = 4;

    const box1 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), material);

    const box2 = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.6, 0.5, 100, 16),
      material
    );
    box1.position.y = -objectsDistance * 2.5;
    box1.position.x = -1.7;
    box2.position.y = -objectsDistance * 1;

    scene.add(box1, box2);

    const sectionMeshes = [box1, box2];

    //Particles

    const particlesCount = 300;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] =
        objectsDistance * 0.5 - Math.random() * objectsDistance * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: "white",
      sizeAttenuation: true,
      size: 0.5,
      map: particleTexture,
    });
    particlesMaterial.transparent = true;
    particlesMaterial.alphaMap = particleTexture;
    particlesMaterial.alphaTest = 0.001;

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    //Camera

    const cameraGroup = new THREE.Group();
    scene.add(cameraGroup);

    const camera = new THREE.PerspectiveCamera(
      35,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 6;
    cameraGroup.add(camera);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    let scrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
    });

    const cursor = {};
    cursor.x = 0;
    cursor.y = 0;

    window.addEventListener("mousemove", (event) => {
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = event.clientY / sizes.height - 0.5;
    });

    //Animate

    const clock = new THREE.Clock();
    let previousTime = 0;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      //Animate camera
      camera.position.y = (-scrollY / sizes.height) * objectsDistance;

      const parallaxX = cursor.x;
      const parallaxY = -cursor.y;
      cameraGroup.position.x +=
        (parallaxX - cameraGroup.position.x) * 1 * deltaTime;
      cameraGroup.position.y +=
        (parallaxY - cameraGroup.position.y) * 1 * deltaTime;

      //Animate meshes
      for (const mesh of sectionMeshes) {
        mesh.rotation.x = elapsedTime * 0.1;
        mesh.rotation.y = elapsedTime * 0.12;
      }

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ScrollContainer>
        <div id={theme} className="app">
          <div className="webgl" ref={mountRef}></div>
          <NavBar />
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </ScrollContainer>
    </ThemeContext.Provider>
  );
}

export default App;
