import React, { useState } from "react";
import Header from "../Header/Header";
import s from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import haley from "../../assets/Projects/hkstudio-final.png";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

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
            <motion.div
              className={s.portfolioCard}
              onClick={() => setIsOpen(!isOpen)}
              layout
              style={{
                backgroundImage: `linear-gradient(
                  45deg,
                  rgba(127, 17, 224, 0.4),
                  rgba(3,252,248, 0.3)
                ), url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "30px",
              }}
              transition={{ layout: { duration: 0.7, type: "spring" } }}
            >
              <motion.h3 layout="position"> {title}</motion.h3>
              <motion.div layout="position">
                <p>
                  <span>Skills used:</span>
                  {description}
                </p>
              </motion.div>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Learn more Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Eos totam odio, quidem reiciendis, numquam accusamus quo
                  delectus officia enim praesentium sunt molestiae id minima
                  itaque nostrum quis quos nemo illo! Nobis, excepturi. Unde,
                  recusandae in natus accusantium aliquam ipsum magnam?
                  Distinctio, nihil quisquam! Quo doloribus quasi eveniet
                  voluptatibus tempora mollitia ex repellat ad temporibus quas
                  corporis repellendus laudantium, officia saepe.
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
