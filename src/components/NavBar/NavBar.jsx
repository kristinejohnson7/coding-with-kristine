import React, { useState } from "react";
import "./NavBar.scss";
import Switch from "react-switch";
import logoLight from "../../assets/codingwithklogo.svg";
import logoDark from "../../assets/darkcodingwithklogo.svg";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import stickyLogo from "../../assets/stickylogo.svg";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function NavBar() {
  const themes = useContext(ThemeContext);
  const { theme, toggleTheme } = themes;

  const [sticky, setSticky] = useState(false);

  const handleStickyNav = () => {
    if (window.scrollY >= 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleStickyNav);

  return (
    <div className={`navbar ${sticky ? "sticky" : null} ${theme}`}>
      <header className="navHeader">
        <div className="navLogo">
          {sticky ? (
            <img src={stickyLogo} alt="logo" />
          ) : (
            <img src={theme === "dark" ? logoDark : logoLight} alt="logo" />
          )}
        </div>
        <div>
          <ul className="navBarOptions">
            <li>Home</li>
            <li>Skills</li>
            <li onClick={() => window.location.replace("/#about")}>About</li>
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
