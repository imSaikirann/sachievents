import {
  Flex,
  Heading,
  Text,
  Box,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

export default function EventAbo() {
  return (
    <Flex h="100vh" bg="pink.100" pt="12" pl="12" color="black" pr="60px">
      <Image src="gr-removebg-preview.png" h="600px" />
      <Box w="60%" pl="10">
        <Heading fontWeight="10px">Motto of the</Heading>

        <Heading>Ms. Vs Mrs. Event</Heading>

        <UnorderedList fontSize="20px" pl="5" mt="8">
          <ListItem pt="3">
            Connecting Queens, Building Dreams: Ms. Vs Mrs. Event
          </ListItem>
          <ListItem pt="3">
            Empowering Women Entrepreneurs, One Generation at a Time!
          </ListItem>

          <Text fontWeight="bold" fontSize="20px" pt="3" ml="3">
            Join us:
          </Text>

          <ListItem pt="3" ml="7">
            To Build your network and learn from inspiring women entrepreneurs.
          </ListItem>
          <ListItem pt="3" ml="7">
            Unleash the next generation of female business leaders with
            mentorship and guidance. Experienced mentors share wisdom and pave
            the way to launch your dreams.
          </ListItem>
          <ListItem pt="3" ml="7">
            This event is more than just a competition, It’s building a brighter
            future together.
          </ListItem>
          <ListItem pt="3" ml="7">
            Learn from successful women, no matter your age or stage in your
            journey.
          </ListItem>
          <ListItem pt="3" ml="7">
            Sharpen your skills by joining the competitions and cheering each
            other on.
          </ListItem>
          <ListItem pt="3" ml="7">
            Discover your power to impact.
          </ListItem>

          <ListItem pt="3" ml="7">
            This is not about competition, it’s about collaboration!
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
}
