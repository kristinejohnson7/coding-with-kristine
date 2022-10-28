import React from "react";
import "./NavBar.scss";
import logoLight from "../../assets/codingwithklogo.svg";

export default function NavBar() {
  return (
    <div className="navbar">
      <header className="navHeader">
        <div className="navLogo">
          <img src={logoLight} alt="logo" />
        </div>
        <div>
          <ul className="navBarOptions">
            <li>Home</li>
            <li>Skills</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
