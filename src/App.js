import * as React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Home from "./components/Home";
import Nav from "./components/Nav";

export default function App() {
  return (
    <ChakraProvider>
      <Flex bgColor='gray.100' h='100vh' w='100%'  direction='column'>
       <Nav/>
        <Home />
      </Flex>
    </ChakraProvider>
  );
}
