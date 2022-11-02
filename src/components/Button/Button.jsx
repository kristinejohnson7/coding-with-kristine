import React, { useContext } from "react";
import s from "./Button.module.scss";
import { ThemeContext } from "../../App";

export default function Button({ content, ...props }) {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  return (
    <button id={s[`${theme}`]} className={s.btn} {...props}>
      {content}
    </button>
  );
}
