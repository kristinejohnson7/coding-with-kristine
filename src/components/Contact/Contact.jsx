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
        <div className={s.cards}>
          <div className={s.contactCard}>
            <i class="fa-solid fa-phone fa-lg"></i>
            <p>502-930-9252</p>
          </div>
          <div className={s.contactCard}>
            <i class="fa-solid fa-envelope fa-lg"></i>
            <p className={s.email}>kristine@codingwithkristine.com</p>
          </div>
          <div className={s.contactCard}>
            <i class="fa-solid fa-location-dot fa-lg"></i>
            <p>Louisville, Kentucky</p>
          </div>
        </div>
        <div className={s.line}></div>
        <div className={s.form}>
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
    </section>
  );
}
