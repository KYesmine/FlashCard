import { Box, Container, Heading } from "@chakra-ui/react";
import FlashCard from "./Components/FlashCard";

import "./App.css";

function App() {
  return (
    <Box className="app" bg="gray.900" minH="100vh">
      <Container pt="15vh" maxW="container.md">
        <Heading
          as="h1"
          mb="8"
          letterSpacing={3}
          className="title"
          color="white"
        >
          FlashCard
        </Heading>
        <FlashCard />
      </Container>
    </Box>
  );
}

export default App;
