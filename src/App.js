import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <NextUIProvider>
      <NavBar />
      <Hero />
    </NextUIProvider>
  );
}

export default App;
