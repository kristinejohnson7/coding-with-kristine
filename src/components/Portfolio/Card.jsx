import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Fragment, useRef, useState } from "react";
import s from "./Card.module.scss";

export default function Card({ title, description, imgSrc }) {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);

  return (
    <Fragment>
      <CardLink
        ref={card}
        isCardOpened={isCardOpened}
        className={s.cardLink}
        layout
        onClick={() => {
          setIsCardOpened(true);
          if (!isCardOpened) {
            setCardDimensions({
              width: card.current.clientWidth,
              height: card.current.clientHeight,
            });
          }
        }}
      >
        <CardImage layout="scale" src={imgSrc} />
        <CardHeader
          className={s.cardHeader}
          isCardOpened={isCardOpened}
          layout="position"
        >
          {title}
        </CardHeader>

        {isCardOpened && (
          <CardDescription initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {description}
          </CardDescription>
        )}
      </CardLink>
      {isCardOpened && (
        <Fragment>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
            }}
          ></div>
          <CardBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsCardOpened(false)}
          />
        </Fragment>
      )}
    </Fragment>
  );
}

const CardLink = styled(motion.div)`
  height: 100%;
  width: 300px;
  ${(props) =>
    props.isCardOpened &&
    css`
      width: min(40rem, 95%);
      height: 500px;
      overflow-y: auto;
      overflow-x: hidden;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 10;
      padding: 2rem;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      background: black;
    `}
`;

const CardHeader = styled(motion.h2)`
  margin: 0.5rem 0;
  font-size: 3em;
  font-weight: 700;
  color: white;
`;

const CardDescription = styled(motion.p)`
  font-weight: 100;
  font-size: 1.5em;
  color: #ffffff;
`;

const CardImage = styled(motion.img)`
  width: 300px;
  height: 237px;
  margin: 0 auto;
`;

const CardBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.7);
`;
