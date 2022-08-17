import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <NextUIProvider>
      <NavBar />
    </NextUIProvider>
  );
}

export default App;
