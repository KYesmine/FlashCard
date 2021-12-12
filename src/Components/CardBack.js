import { Box } from "@chakra-ui/react";
import React from "react";

function CardBack({ handleClick, currentAnswer }) {
  return (
    <Box
      className="card-back"
      onClick={handleClick}
      border="1px"
      borderColor="teal.800"
    >
      {currentAnswer}
    </Box>
  );
}

export default CardBack;
