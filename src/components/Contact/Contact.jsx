import React, { useContext } from "react";
import Header from "../Header/Header";
import s from "./Contact.module.scss";
import { ThemeContext } from "../../App";

export default function Contact() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  return (
    <section className={s.contact}>
      <Header content="Contact" />
      <div className={s.contactWrapper} id={s[`${theme}`]}>
        <div>
          <div className={s.contactCard}>
            <i class="fa-solid fa-phone fa-lg"></i>
            <p>502-930-9252</p>
          </div>
          <div className={s.contactCard}>
            <i class="fa-solid fa-envelope fa-lg"></i>
            <p>kristine@codingwithkristine.com</p>
          </div>
          <div className={s.contactCard}>
            <i class="fa-solid fa-location-dot fa-lg"></i>
            <p>Louisville, Kentucky</p>
          </div>
        </div>
        <div className={s.line}></div>
        <div>
          <form action="">
            <label htmlFor="name">
              Your Name
              <input type="text" id="name" />
            </label>
            <label htmlFor="email">
              Your Email
              <input type="text" id="email" />
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
          </form>
        </div>
      </div>
    </section>
  );
}
