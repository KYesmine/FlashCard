import { Box, Button } from "@chakra-ui/react";
import React from "react";

function CardController({ handleClick }) {
  return (
    <Box className="card-controller" d="flex" justifyContent="flex-end">
      <Button mt="6" colorScheme="teal" variant="solid" onClick={handleClick}>
        Next
      </Button>
    </Box>
  );
}

export default CardController;
