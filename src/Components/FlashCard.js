import React, { useState } from "react";
import Card from "./Card";
import CardController from "./CardController";
import QuestionTracker from "./QuestionTracker";
import data from "../data";

function FlashCard() {
  const [currentQuestion, setCurrentQuenstion] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextQuestion = () => {
    const nextQuestion =
      currentQuestion + 1 >= data.length ? 0 : currentQuestion + 1;
    setIsFlipped(false);
    setCurrentQuenstion(nextQuestion);
  };

  return (
    <div className="flashcard">
      <QuestionTracker
        currentQuestion={currentQuestion}
        nbrOfQuestion={data.length}
      />
      <Card
        isFlipped={isFlipped}
        handleClick={handleClick}
        current={data[currentQuestion]}
      />
      <CardController handleClick={handleNextQuestion} />
    </div>
  );
}

export default FlashCard;
