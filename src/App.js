import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import { createContext, useState } from "react";
import Skills from "./components/Skills/Skills";

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
        <Skills />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
