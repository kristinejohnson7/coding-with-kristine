import React from "react";
import s from "./Button.module.scss";

export default function Button({ content, ...props }) {
  return (
    <button class={s.btn} {...props}>
      {content}
    </button>
  );
}
