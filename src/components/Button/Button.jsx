import React, { useContext } from "react";
import s from "./Button.module.scss";
import { ThemeContext } from "../../App";

export default function Button({ content, ...props }) {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  return (
    <button className={`${s.btn} ${s[`${theme}`]}`} {...props}>
      {content}
    </button>
  );
}
