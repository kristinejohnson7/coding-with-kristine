import React, { useContext } from "react";
import Header from "../Header/Header";
import s from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { portfolio } from "../../constants/portfolio";
import Button from "../Button/Button";
import Card from "./Card";
import { ThemeContext } from "../../App";

export default function Portfolio() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;

  const portfolioData = portfolio.map((item, index) => {
    return (
      <Card
        key={`card-${index}`}
        title={item.title}
        description={item.description}
        imgSrc={item.img}
      />
    );
  });

  return (
    <section className={s.portfolio} id={s[`${theme}`]}>
      <div className={s.portfolioHeader}>
        <Header content="Portfolio" />
        <p className={s.portfolioIntroText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores
          alias ducimus ullam iusto eum. Rerum eius molestias, harum
          consequuntur assumenda necessitatibus nisi quae perferendis explicabo
          blanditiis nesciunt eos optio?
        </p>
      </div>
      <div className={s.portfolioFilter}>
        <Button content="All" />
        <Button content="React" />
        <Button content="JavaScript" />
        <Button content="Node" />
      </div>
      <motion.div
        className={s.portfolioItems}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
        }}
      >
        {portfolioData}
      </motion.div>
    </section>
  );
}
