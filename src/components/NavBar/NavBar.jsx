import React, { useState } from "react";
import s from "./NavBar.module.scss";
import Switch from "react-switch";
import logoLight from "../../assets/codingwithklogo.svg";
import logoDark from "../../assets/darkcodingwithklogo.svg";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import stickyLogo from "../../assets/stickylogo.svg";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { NavContext } from "../../context/NavContext";
import Hamburger from "hamburger-react";

export default function NavBar() {
  const themes = useContext(ThemeContext);
  const { theme, toggleTheme } = themes;

  const [sticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  const { activeLinkId } = useContext(NavContext);

  const handleStickyNav = () => {
    if (window.scrollY >= 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleStickyNav);

  const navListOptions = [
    "About",
    "Skills",
    "Portfolio",
    "Testimonials",
    "Contact",
  ];

  const handleClickNav = (title) => {
    document
      .getElementById(title.toLowerCase())
      .scrollIntoView({ behavior: "smooth" });
  };

  const setNavLogo = () => {
    if (window.innerWidth < 850 || sticky) {
      return <img src={stickyLogo} alt="logo" />;
    } else {
      return <img src={theme === "dark" ? logoDark : logoLight} alt="logo" />;
    }
  };

  return (
    <nav
      className={`${s.navbar} ${s[`${theme}`]} ${sticky ? s.sticky : ""} ${
        window.innerWidth < 850 ? s.mobile : ""
      }`}
    >
      <div className={s.navWrapper}>
        <div className={s.navLogo}>{setNavLogo()}</div>
        <div className={s.burger} onClick={() => setShowMenu(!showMenu)}>
          <Hamburger toggled={burgerOpen} toggle={setBurgerOpen} />
        </div>
        <ul className={s.navBarOptions} id={showMenu ? s.hidden : ""}>
          {navListOptions.map((section) => {
            return (
              <li key={section}>
                <button
                  onClick={() => handleClickNav(section)}
                  className={activeLinkId === section ? s.activeClass : ""}
                >
                  {section}
                </button>
              </li>
            );
          })}
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
    </nav>
  );
}
