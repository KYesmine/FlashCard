import React, { useState } from "react";
import Card from "./Card";
import CardController from "./CardController";
import QuestionTracker from "./QuestionTracker";

const data = [
  {
    question: "this is the question number 1",
    answer: "this is the answer to the question number 1",
  },
  {
    question: "this is the question number 2",
    answer: "this is the answer to the question number 2",
  },
  {
    question: "this is the question number 3",
    answer: "this is the answer to the question number 3",
  },
  {
    question: "this is the question number 4",
    answer: "this is the answer to the question number 4",
  },
  {
    question: "this is the question number 5",
    answer: "this is the answer to the question number 5",
  },
  {
    question: "this is the question number 6",
    answer: "this is the answer to the question number 6",
  },
];

function FlashCard() {
  const [questions, setQuestions] = useState(data);
  const [currentQuestion, setCurrentQuenstion] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextQuestion = () => {
    const nextQuestion =
      currentQuestion + 1 >= questions.length ? 0 : currentQuestion + 1;
    setIsFlipped(false);
    setCurrentQuenstion(nextQuestion);
  };

  return (
    <div className="flashcard">
      <QuestionTracker
        currentQuestion={currentQuestion}
        nbrOfQuestion={questions.length}
      />
      <Card
        isFlipped={isFlipped}
        handleClick={handleClick}
        current={questions[currentQuestion]}
      />
      <CardController handleClick={handleNextQuestion} />
    </div>
  );
}

export default FlashCard;
