import React, { useContext, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import s from "./Skills.module.scss";
import "react-circular-progressbar/dist/styles.css";
import Header from "../Header/Header";
import { ThemeContext } from "../../App";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNav } from "../../hooks/useNav";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function Skills() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  const control = useAnimation();
  const [ref, inView] = useInView();

  const skillsRef = useNav("Skills");

  const desktop = window.innerWidth > 900;

  useEffect(() => {
    if (desktop) {
      if (inView) {
        control.start("visible");
      }
    }
  }, [control, inView, desktop]);

  return (
    <motion.section
      ref={ref}
      variants={boxVariant}
      initial={desktop ? "hidden" : "visible"}
      animate={control}
      className={s.skills}
      id="skills"
    >
      <div id={s[`${theme}`]} className={s.skillsContent} ref={skillsRef}>
        <Header content="Skills" />
        <p id={s[`${theme}`]} className={s.skillText}>
          Coding is an art form that I am constantly working to refine. I refine
          my skills by having a drive and passion that keeps me excited to be
          constantly learning.
        </p>
        <div className={s.skillsList}>
          <div className={s.skill}>
            <i className="fa-brands fa-square-js"></i>
            <p>JavaScript</p>
          </div>
          <div className={s.skill}>
            <i className="fa-brands fa-react"></i>
            <p>React</p>
          </div>
          <div className={s.skill}>
            <i className="fa-brands fa-html5"></i>
            <p>HTML</p>
          </div>
          <div className={s.skill}>
            <i className="fa-brands fa-css3-alt"></i>
            <p>CSS</p>
          </div>
          <div className={s.skill}>
            <i className="fa-brands fa-sass"></i>
            <p>Sass</p>
          </div>
          <div className={s.skill}>
            <i className="fa-brands fa-node"></i>
            <p>Node</p>
          </div>
          <div className={s.skill}>
            <i className="fa-brands fa-node-js"></i>
            <p>Express</p>
          </div>
          <div className={s.skill}>
            <i className="fa-brands fa-envira"></i>
            <p>MongoDB</p>
          </div>
          <div className={s.skill}>
            <i className="fa-solid fa-paintbrush"></i>
            <p>User Experience & Design</p>
          </div>
          <div className={s.skill}>
            <i className="fa-brands fa-figma"></i>
            <p>Figma</p>
          </div>
          <div className={s.skill}>
            <i className="fa-brands fa-salesforce"></i>
            <p>Salesforce</p>
          </div>
          <div className={s.skill}>
            <i className="fa-brands fa-pagelines"></i>
            <p>Twig</p>
          </div>
          <div className={s.skill}>
            <i className="fa-regular fa-file"></i>
            <p>Content Management System (CMS)</p>
          </div>
          <div className={s.skill}>
            <i className="fa-solid fa-cube"></i>
            <p>ThreeJS</p>
          </div>
          <div className={s.skill}>
            <i className="fa-solid fa-code-branch"></i>
            <p>Rest API</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
