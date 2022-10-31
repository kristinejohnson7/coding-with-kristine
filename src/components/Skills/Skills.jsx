import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s from "./Skills.module.scss";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";
import VisibilitySensor from "react-visibility-sensor";
import Header from "../Header/Header";
import { ThemeContext } from "../../App";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, FreeMode, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

const skills = [
  { name: "React", percent: 95 },
  { name: "JavaScript", percent: 95 },
  { name: "ThreeJS", percent: 80 },
  { name: "MongoDB", percent: 80 },
  { name: "User Design", percent: 90 },
];

export default function Skills() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  return (
    <section className={s.skills} id="skills">
      <div id={s[`${theme}`]} className={s.skillWrapper}>
        <Header content="Skills" />
        <p id={s[`${theme}`]} className={s.skillText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum modi,
          beatae voluptatibus error voluptatum accusamus deserunt? Recusandae
          officia magnam perspiciatis qui.
        </p>
        <div>
          <Swiper
            // install Swiper modules
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
          >
            {skills.map((skill) => {
              const { name, percent } = skill;
              return (
                <SwiperSlide>
                  <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentShowing = isVisible ? percent : 0;
                      return (
                        <div className={s.skillCircle}>
                          <CircularProgressbarWithChildren
                            value={percentShowing}
                            text={`${percentShowing}%`}
                            strokeWidth={10}
                            styles={buildStyles({
                              strokeLinecap: "butt",
                              pathColor: "#440bd4",
                              textColor: theme === "dark" ? "white" : "black",
                              trailColor: "transparent",
                            })}
                          >
                            <RadialSeparators
                              count={12}
                              style={{
                                background: "#fff",
                                width: "2px",
                                // This needs to be equal to props.strokeWidth
                                height: `${10}%`,
                              }}
                            />
                          </CircularProgressbarWithChildren>
                          <h5 id={s[`${theme}`]}>{name}</h5>
                        </div>
                      );
                    }}
                  </VisibilitySensor>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
