import React from "react";
import ReactCardFlip from "react-card-flip";
import "./Card.css";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

function Card({ isFlipped, handleClick, current }) {
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      containerClassName="card"
    >
      <CardFront handleClick={handleClick} currentQuestion={current.question} />
      <CardBack handleClick={handleClick} currentAnswer={current.answer} />
    </ReactCardFlip>
  );
}

export default Card;
