import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import { createContext, useState } from "react";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  console.log("theme", theme);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="app">
        <NavBar />
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
