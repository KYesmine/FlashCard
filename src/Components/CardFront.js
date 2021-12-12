import { Box } from "@chakra-ui/react";
import React from "react";

function CardFront({ handleClick, currentQuestion }) {
  return (
    <Box
      className="card-front"
      onClick={handleClick}
      border="1px"
      borderColor="teal.800"
    >
      {currentQuestion}
    </Box>
  );
}

export default CardFront;
