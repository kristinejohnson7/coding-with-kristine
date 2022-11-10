import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import s from "./Contact.module.scss";
import { ThemeContext } from "../../App";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import ContactExperience from "../ContactExperience/ContactExperience";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const cameraSettings = {
  fov: 65,
  near: 0.1,
  far: 80,
  position: [-1, 4.35, 10],
};

export default function Contact() {
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
      className={s.contact}
    >
      <div className={s.contactWrapper} id={s[`${theme}`]}>
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
