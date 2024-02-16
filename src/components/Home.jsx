import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
function Home() {
  return (
    <Flex
      w="100%"
      h="100vh"
      bgGradient="linear(to-t, pink.400, pink.400, pink.200)"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <HStack w="90vw">
        <Image src="home.png" />
        <Box w="100%" ml="30px">
          <Heading fontSize="60px">Happy</Heading>
          <Heading color="purple" fontSize="90px">
            Womens Day
          </Heading>
          <Text fontSize="20px" ml="25%" fontWeight="bold">
            March 8th
          </Text>
          <Heading fontSize="40px" ml="15%" color="purple">
            Ms vs Mrs Event
          </Heading>
          <Text ml="12%" fontSize="24px" color="black">An Event Celebrating Womenhood</Text>
        </Box>
      </HStack>
    </Flex>
  );
}

export default Home;
