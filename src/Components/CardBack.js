import React from "react";

function CardBack({ handleClick, currentAnswer }) {
  return (
    <div className="card-back" onClick={handleClick}>
      {currentAnswer}
    </div>
  );
}

export default CardBack;
