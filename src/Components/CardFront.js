import React from "react";

function CardFront({ handleClick, currentQuestion }) {
  return (
    <div className="card-front" onClick={handleClick}>
      {currentQuestion}
    </div>
  );
}

export default CardFront;
