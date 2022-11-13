import React, { useContext } from "react";
import logoLight from "../../assets/codingwithklogo.svg";
import logoDark from "../../assets/darkcodingwithklogo.svg";
import { ThemeContext } from "../../App";
import s from "./Footer.module.scss";

export default function Footer() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  return (
    <section className={s.footer}>
      <div className={s.footerContainer}>
        <div className={`${s.footerMain} ${s[`${theme}`]}`}>
          <div className={s.logo}>
            <img src={theme === "dark" ? logoDark : logoLight} alt="logo" />
          </div>
          <div className={s.options}>
            <ul className={s.pageOptions}>
              <li onClick={() => window.location.replace("/#about")}>About</li>
              <li onClick={() => window.location.replace("/#portfolio")}>
                Portfolio
              </li>
              <li onClick={() => window.location.replace("/#testimonials")}>
                Testimonials
              </li>
              <li onClick={() => window.location.replace("/#contact")}>
                Contact
              </li>
            </ul>
            <ul className={s.socials}>
              <li>
                <div className={s.icon}>
                  <i className="fa-brands fa-linkedin-in fa-lg"></i>
                </div>
                <a href="https://www.linkedin.com/in/kristine-johnson7/">
                  LinkedIn
                </a>
              </li>
              <li>
                <div className={s.icon}>
                  <i className="fa-brands fa-github-alt fa-lg"></i>
                </div>
                <a href="https://github.com/">GitHub</a>
              </li>
              <li>
                <div className={s.icon}>
                  <i className="fa-brands fa-medium fa-lg"></i>
                </div>
                <a href="https://medium.com/@kristinethejohnson">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <p className={s.copyright}>
          {/* Copyright © 2022 Kristine Johnson. All Rights Reserved */}
        </p>
      </div>
    </section>
  );
}
