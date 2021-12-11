import { Box } from "@chakra-ui/react";
import React from "react";

function QuestionTracker({ currentQuestion, nbrOfQuestion }) {
  return (
    <Box mb="3" color="teal" fontWeight="700" letterSpacing={1}>
      {currentQuestion + 1}/{nbrOfQuestion}
    </Box>
  );
}

export default QuestionTracker;
