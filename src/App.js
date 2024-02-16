import * as React from "react";
import { ChakraProvider, Flex, Heading, Stack } from "@chakra-ui/react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";

export default function App() {
  return (
    <ChakraProvider>
      <Flex direction="column">
        <Stack bgColor="gray.100" h="100vh" w="100%" gap="0">
          <Nav />
          <Home />
         
        </Stack>
        <About />
      </Flex>
    </ChakraProvider>
  );
}
