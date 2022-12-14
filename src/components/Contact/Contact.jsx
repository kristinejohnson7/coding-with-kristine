import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import s from "./Contact.module.scss";
import { ThemeContext } from "../../App";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import ContactExperience from "../ContactExperience/ContactExperience";
import { useNav } from "../../hooks/useNav";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function Contact() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  const cameraSettings = {
    fov: window.innerWidth > 500 ? 65 : 90,
    near: 0.1,
    far: 80,
    position: [-1, 4.35, 10],
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  const contactRef = useNav("Contact");

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
      className={s.contact}
      id="contact"
    >
      <div className={`${s.contactWrapper} ${s[`${theme}`]}`} ref={contactRef}>
        <div className={s.threeExperience}>
          <Canvas shadows camera={cameraSettings}>
            <ContactExperience />
          </Canvas>
        </div>
        <div className={s.line}></div>
        <div className={s.form}>
          <Header content="Contact" />
          <form
            action="https://getform.io/f/6e810cc0-5823-499f-b1fd-7b27ccdf9600"
            method="POST"
            target="_blank"
          >
            <input
              type="hidden"
              id="captchaResponse"
              name="g-recaptcha-response"
            />
            <label htmlFor="name">
              Your Name
              <input type="text" id="name" />
            </label>
            <label htmlFor="email">
              Your Email
              <input type="email" id="email" />
            </label>
            <label htmlFor="message">
              Your Message
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="6"
              ></textarea>
            </label>
            <input type="submit" className={s.submitBtn} />
          </form>
        </div>
      </div>
    </motion.section>
  );
}
