import React, { useContext, useState } from "react";
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
  const [filteredPortfolio, setFilteredPortfolio] = useState(
    portfolio.filter((item) => item.type === "react")
  );
  const [portfolioType, setPortfolioType] = useState("react");

  const portfolioData = filteredPortfolio.map((item, index) => {
    return (
      <Card
        key={`card-${index}`}
        title={item.title}
        description={item.description}
        imgSrc={item.img}
      />
    );
  });

  const handleFilteredPortfolio = (type) => {
    setFilteredPortfolio(portfolio.filter((item) => item.type === type));
    setPortfolioType(type);
  };

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
        <Button
          content="React"
          style={{
            backgroundImage:
              portfolioType === "react"
                ? "linear-gradient(45deg,rgba(127, 17, 224, 0.7),rgba(3, 252, 248, 0.7))"
                : null,
          }}
          onClick={() => handleFilteredPortfolio("react")}
        />
        <Button
          content="JavaScript"
          style={{
            backgroundImage:
              portfolioType === "javascript"
                ? "linear-gradient(45deg,rgba(127, 17, 224, 0.7),rgba(3, 252, 248, 0.7))"
                : null,
          }}
          onClick={() => handleFilteredPortfolio("javascript")}
        />
        <Button
          content="Node"
          style={{
            backgroundImage:
              portfolioType === "node"
                ? "linear-gradient(45deg,rgba(127, 17, 224, 0.7),rgba(3, 252, 248, 0.7))"
                : null,
          }}
          onClick={() => handleFilteredPortfolio("node")}
        />
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
