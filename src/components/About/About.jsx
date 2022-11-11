import React, { useContext, useEffect } from "react";
import s from "./About.module.scss";
import headshot from "../../assets/kphoto.jpg";
import { ThemeContext } from "../../App";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function About() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  const control = useAnimation();
  const [ref, inView] = useInView();

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
      className={s.aboutContainer}
      id="about"
    >
      <div className={s.aboutWrapper}>
        <div className={s.about} id={s[`${theme}`]}>
          <div className={s.aboutPhoto}>
            <img src={headshot} alt="head shot" />
          </div>
          <div className={s.aboutText} id={s[`${theme}`]}>
            <h2>
              Hi, <br /> I'm <span>Kristine.</span>
            </h2>
            <hr />
            <p>
              I am a freelance web developer. Ever since I was in high school, I
              enjoyed creating websites. My interest in web development inspired
              me to turn this passion into a career. What I most enjoy about web
              development is the ability to utilize my logical and
              problem-solving skills, while also creating interfaces for users
              that are unique and enjoyable to use. I pride myself on creating
              projects that have creative interfaces while also having concise
              and reusable code. I want both the developer and user to enjoy my
              code.
            </p>
            <p>
              When I’m not working you can find me running, puzzling, or reading
              the latest fantasy fiction book.
            </p>
            <p>
              Feel free to reach out so that I can hear more about how I can
              help you!
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
