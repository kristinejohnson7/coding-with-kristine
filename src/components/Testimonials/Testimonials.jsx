import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import s from "./Testimonials.module.scss";
import testimonials from "../../constants/testimonials";
import Header from "../Header/Header";
import { ThemeContext } from "../../App";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import angleRight from "../../assets/angleRight.svg";
import angleLeft from "../../assets/angleLeft.svg";
import { useNav } from "../../hooks/useNav";
import Testimonial from "./Testimonial";

const TestimonialSectionStyles = styled.div`
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }
`;

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function Testimonials() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];
  const { img, name, desc, title } = activeSlide;

  const control = useAnimation();
  const [ref, inView] = useInView();

  const testimonialsRef = useNav("Testimonials");

  const desktop = window.innerWidth > 900;

  useEffect(() => {
    if (desktop) {
      if (inView) {
        control.start("visible");
      }
    }
  }, [control, inView, desktop]);

  function handleNext() {
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  function handlePrev() {
    if (activeIndex === 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }

  return (
    <motion.section
      ref={ref}
      variants={boxVariant}
      initial={desktop ? "hidden" : "visible"}
      animate={control}
      className={`${s.testimonials} ${s[`${theme}`]}`}
      id="testimonials"
    >
      <div ref={testimonialsRef}>
        <TestimonialSectionStyles>
          <Header content="Testimonials" />
          {!desktop && (
            <div className={s.arrows} style={{ marginBottom: "3rem" }}>
              <div
                className={s.prev}
                onClick={handlePrev}
                role="button"
                tabIndex={0}
                onKeyDown={handlePrev}
              >
                <img src={angleLeft} alt="left arrow" />
              </div>
              <div
                className={s.next}
                onClick={handleNext}
                role="button"
                tabIndex={0}
                onKeyDown={handleNext}
              >
                <img src={angleRight} alt="right arrow" />
              </div>
            </div>
          )}
          <div className={s.testimonialWrapper}>
            <SwitchTransition component={null}>
              <CSSTransition
                key={activeSlide.id}
                timeout={300}
                classNames="fade"
              >
                <Testimonial desc={desc} name={name} title={title} img={img} />
              </CSSTransition>
            </SwitchTransition>
          </div>

          {desktop && (
            <div className={s.arrows}>
              <div
                className={s.prev}
                onClick={handlePrev}
                role="button"
                tabIndex={0}
                onKeyDown={handlePrev}
              >
                <img src={angleLeft} alt="left arrow" />
              </div>
              <div
                className={s.next}
                onClick={handleNext}
                role="button"
                tabIndex={0}
                onKeyDown={handleNext}
              >
                <img src={angleRight} alt="right arrow" />
              </div>
            </div>
          )}
        </TestimonialSectionStyles>
      </div>
    </motion.section>
  );
}
