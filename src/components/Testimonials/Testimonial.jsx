import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import s from "./Testimonial.module.scss";

export default function Testimonial({ img, name, title, desc }) {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  return (
    <div className={`${s.testimonialInfo} ${s[`${theme}`]}`}>
      <div className={s.desc}>
        <div className={s.image}>
          <img src={img} alt="testimony headshot" />
        </div>
        <h4 className={s.name}>{name}</h4>

        <p className={s.title}>{title}</p>
        <p className={s.description}>{desc}</p>
      </div>
    </div>
  );
}
