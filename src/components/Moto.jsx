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

export default function Moto() {
  return (
    <Flex h="100vh" bg="pink.100" pt="12" pl="12" color="black" direction="row-reverse">
      <Image src="in-removebg-preview.png" h="400px" />
      <Box w="50%">
        <Heading>Theme of Women’s Day 2024:</Heading>

        <Heading>Inspire Inclusion</Heading>
        <UnorderedList pl="5" fontSize="20px">
          <ListItem>
            <Text pt="5">
              Imagine a world without bias, where diversity is treasured. Let us
              welcome a global community that celebrates differences, fostering
              equity.
            </Text>
          </ListItem>
          <ListItem>
            <Text pt="5">
              Women, being our cute daughters, sweet sisters, loving wives, and
              adorable mothers, are the source of immense strength.
            </Text>
          </ListItem>
          <ListItem>
            <Text pt="5" fontWeight="bold">
              Acknowledging all the Women Sachi Media brings to you ‘Ms. Vs Mrs.
              Event’ at Chennai on March 8, 9, and 10.
            </Text>
          </ListItem>
          <ListItem>
            <Text pt="5">
              A Grand 3 Day event with a sense of magic, love, and support for
              all the magnificent women. Make your valuable presence and make
              this Women’s Day event memorable.
            </Text>
          </ListItem>
          <ListItem>
            <Text pt="5">
              Let us celebrate the spirit of womanhood and make this event a
              huge success.
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
}
