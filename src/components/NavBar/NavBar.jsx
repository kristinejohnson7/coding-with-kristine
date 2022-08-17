import React from "react";
import "./NavBar.module.scss";
import logoLight from "../../assets/logo.png";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="navLogo">
        <img src={logoLight} alt="logo" />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Skills</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
