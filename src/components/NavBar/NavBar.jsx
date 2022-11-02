import React from "react";
import "./NavBar.scss";
import Switch from "react-switch";
import logoLight from "../../assets/codingwithklogo.svg";
import logoDark from "../../assets/darkcodingwithklogo.svg";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function NavBar() {
  const themes = useContext(ThemeContext);
  const { theme, toggleTheme } = themes;

  return (
    <div className="navbar">
      <header className="navHeader">
        <div className="navLogo">
          <img src={theme === "dark" ? logoDark : logoLight} alt="logo" />
        </div>
        <div>
          <ul className="navBarOptions">
            <li>Home</li>
            <li>Skills</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <div>
              <Switch
                className="switch"
                onChange={toggleTheme}
                checked={theme === "dark"}
                checkedIcon={
                  <img src={moon} className="checkIcon" alt="theme switch" />
                }
                uncheckedIcon={
                  <img src={sun} className="checkIcon" alt="theme switch" />
                }
                onColor="#767676"
                offColor="#7ecbc7"
                activeBoxShadow="'0 0 2px 3px #440bd4'	"
              />
            </div>
          </ul>
        </div>
      </header>
    </div>
  );
}
