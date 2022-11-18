import React from "react";
import angleRight from "../../assets/angleRight.svg";
import angleLeft from "../../assets/angleLeft.svg";
import s from "./Arrows.module.scss";

export default function Arrows({ handlePrev, handleNext }) {
  return (
    <div className={s.arrows} style={{ marginBottom: "3rem" }}>
      <div
        className={s.prev}
        onClick={handlePrev}
        role="button"
        tabIndex={0}
        onKeyDown={handlePrev}
      >
        <img src={angleLeft} alt="left arrow" />
      </div>
      <div
        className={s.next}
        onClick={handleNext}
        role="button"
        tabIndex={0}
        onKeyDown={handleNext}
      >
        <img src={angleRight} alt="right arrow" />
      </div>
    </div>
  );
}
