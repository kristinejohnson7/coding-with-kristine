import React from "react";
import Header from "../Header/Header";
import s from "./Portfolio.module.scss";
import haley from "../../assets/Projects/hkstudio-final.png";

export default function Portfolio() {
  const projects = [
    { title: "Haley Klein E-Commerce", description: "React", img: haley },
    { title: "Haley Klein E-Commerce", description: "React", img: haley },
    { title: "Haley Klein E-Commerce", description: "React", img: haley },
    { title: "Haley Klein E-Commerce", description: "React", img: haley },
  ];
  return (
    <section className={s.portfolio}>
      <div className={s.portfolioHeader}>
        <Header content="Portfolio" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores
          alias ducimus ullam iusto eum. Rerum eius molestias, harum
          consequuntur assumenda necessitatibus nisi quae perferendis explicabo
          blanditiis nesciunt eos optio?
        </p>
      </div>
      <div className={s.portfolioFilter}>
        <button>Tab 1 </button>
        <button>Tab 2 </button>
        <button>Tab 3 </button>
      </div>
      <div className={s.portfolioItems}>
        {projects.map((project) => {
          const { title, description, img } = project;
          return (
            <div className={s.portfolioCard}>
              <img src={img} alt="portfolio item" />
              <div className={s.portfolioText}>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
