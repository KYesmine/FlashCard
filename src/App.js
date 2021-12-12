import { Box, Container, Flex, Heading, VStack } from "@chakra-ui/react";
import FlashCard from "./Components/FlashCard";
import { useColorMode, IconButton, Text } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { TiFlashOutline } from "react-icons/ti";

import "./App.css";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box className="app" colorScheme="gray.900" minH="100vh">
      <Container pt="15vh" maxW="container.md">
        <VStack alignItems="stretch">
          <IconButton
            colorScheme="teal"
            onClick={toggleColorMode}
            alignSelf="flex-end"
            isRound="true"
            icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          />
          <Heading
            letterSpacing={3}
            className="title"
            colorScheme="teal"
            mb="3"
          >
            <Flex align="center">
              <Text>Flash</Text>
              <TiFlashOutline />
              <Text>Card</Text>
            </Flex>
          </Heading>
          <FlashCard />
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
