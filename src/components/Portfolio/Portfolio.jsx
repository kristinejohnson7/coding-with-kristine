import React, { useContext, useState, useEffect } from "react";
import Header from "../Header/Header";
import s from "./Portfolio.module.scss";
import { portfolio } from "../../constants/portfolio";
import Button from "../Button/Button";
import Card from "./Card";
import { ThemeContext } from "../../App";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNav } from "../../hooks/useNav";

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

export default function Portfolio() {
  const themes = useContext(ThemeContext);
  const { theme } = themes;
  const [filteredPortfolio, setFilteredPortfolio] = useState(
    portfolio.filter((item) => item.type === "react")
  );
  const [portfolioType, setPortfolioType] = useState("react");

  const control = useAnimation();
  const [ref, inView] = useInView();

  const portfolioRef = useNav("Portfolio");

  const desktop = window.innerWidth > 900;

  useEffect(() => {
    if (desktop) {
      if (inView) {
        control.start("visible");
      }
    }
  }, [control, inView, desktop]);

  const portfolioData = filteredPortfolio.map((item, index) => {
    const { title, description, img, gitHubLink, projectLink } = item;
    return (
      <Card
        key={`card-${index}`}
        title={title}
        description={description}
        imgSrc={img}
        gitHubLink={gitHubLink}
        projectLink={projectLink}
      />
    );
  });

  const handleFilteredPortfolio = (type) => {
    setFilteredPortfolio(portfolio.filter((item) => item.type === type));
    setPortfolioType(type);
  };

  return (
    <motion.section
      ref={ref}
      variants={boxVariant}
      initial={desktop ? "hidden" : "visible"}
      animate={control}
      className={`${s.portfolio} ${s[`${theme}`]}`}
      id="portfolio"
    >
      <div ref={portfolioRef}>
        <div className={s.portfolioHeader}>
          <Header content="Portfolio" />
          {/* <p className={s.portfolioIntroText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            maiores alias ducimus ullam iusto eum. Rerum eius molestias, harum
            consequuntur assumenda necessitatibus nisi quae perferendis
            explicabo blanditiis nesciunt eos optio?
          </p> */}
        </div>
        <div className={s.portfolioFilter}>
          <Button
            style={{
              backgroundImage:
                portfolioType === "react"
                  ? "linear-gradient(45deg,rgba(127, 17, 224, 0.7),rgba(3, 252, 248, 0.7))"
                  : null,
            }}
            onClick={() => handleFilteredPortfolio("react")}
          >
            React
          </Button>
          <Button
            style={{
              backgroundImage:
                portfolioType === "javascript"
                  ? "linear-gradient(45deg,rgba(127, 17, 224, 0.7),rgba(3, 252, 248, 0.7))"
                  : null,
            }}
            onClick={() => handleFilteredPortfolio("javascript")}
          >
            JavaScript
          </Button>
          <Button
            style={{
              backgroundImage:
                portfolioType === "node"
                  ? "linear-gradient(45deg,rgba(127, 17, 224, 0.7),rgba(3, 252, 248, 0.7))"
                  : null,
            }}
            onClick={() => handleFilteredPortfolio("node")}
          >
            Node
          </Button>
        </div>
        <div className={s.portfolioItems}>{portfolioData}</div>
      </div>
    </motion.section>
  );
}
