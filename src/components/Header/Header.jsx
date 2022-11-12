import React, { useContext } from "react";
import s from "./Header.module.scss";
import { ThemeContext } from "../../App";

export default function Header({ content, variant, ...props }) {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  return <h2 className={s[`${theme}`]}>{content}</h2>;
}
