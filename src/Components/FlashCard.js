import React, { useState } from "react";
import CardController from "./CardController";
import QuestionTracker from "./QuestionTracker";
import Card from "./Card";
import data from "../data";

// TODO Implement Perfect/Good/Not Good/Bad Controllers
// TODO Getting questions by weighted probability
// Perfect => 1 / Good => 2 / Not Good => 3 / Bad => 4

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
