import { Button } from "@chakra-ui/react";
import React from "react";

function CardController({ handleClick }) {
  return (
    <div className="card-controller">
      <Button mt="4" colorScheme="teal" variant="solid" onClick={handleClick}>
        Next
      </Button>
    </div>
  );
}

export default CardController;
