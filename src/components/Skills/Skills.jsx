import React, { useContext, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import s from "./Skills.module.scss";
import "react-circular-progressbar/dist/styles.css";
import Header from "../Header/Header";
import { ThemeContext } from "../../App";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function Skills() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.section
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className={s.skills}
      id="skills"
    >
      <div id={s[`${theme}`]} className={s.skillsContent}>
        <Header content="Skills" />
        <p id={s[`${theme}`]} className={s.skillText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum modi,
          beatae voluptatibus error voluptatum accusamus deserunt? Recusandae
          officia magnam perspiciatis qui.
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
