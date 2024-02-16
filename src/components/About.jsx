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

export default function About() {
  return (
    <Flex bg="pink.100" h="100%" >
      <Flex direction="column">
        <Heading
          bg="pink.100"
          fontSize="48px"
          pt="4"
          pl="10"
          color="gray.800"
          textAlign="center"
        >
          About Us
        </Heading>
        <Heading color="gray.700" mt="50px" ml="14">
          Sachi Events
        </Heading>
        <Flex>
          <Box pl="14">
            <Text w="800px" fontSize="20px" pl="5" color="gray.800" pt="30px">
              Turn your dream events in to a reality with Sachi. Whether you
              envision an indoor or outdoor celebration, webring your vision to
              life, allowing you to relax and savor the occasion.
            </Text>
            <Box pl="5" w="560px" pt="20px">
              <Flex>
                <Image src="vision-removebg-preview.png" w="48px" my="5" />
                <Text pt="8" fontSize="18px" color="black" pl="6">
                  To redefine the industry by architecting captivating events
                  that inspire.
                </Text>
              </Flex>
              <Flex>
                <Image src="mission-removebg-preview.png" w="48px" my="5" />
                <Text pt="8" fontSize="18px" color="black" pl="6">
                  To foster positive change in society through exception
                  alevents.
                </Text>
              </Flex>
              <Flex>
                <Image
                  src="Untitled_design-removebg-preview.png"
                  w="48px"
                  my="5"
                />
                <Text pt="8" fontSize="18px" color="black" pl="6">
                  Experiences Designed for Today's Clientele.
                </Text>
              </Flex>
            </Box>
            <Box pl="5" w="750px" pt="20px" pb="30px">
              <Text fontSize="20px" color="black">
                For us, events are not just moments; they are opportunities for
                transformation. We believe in the power of gatherings to in
                spire, educate, and connect people. Join us in creating
                significant memories
              </Text>
            </Box>
          </Box>
          <Image src="hands-removebg-preview(1).png" />
        </Flex>
        <Flex direction="row-reverse">
          <Box mt="12" ml="220px" pb="12">
            <Heading color="gray.700">Who Are We?</Heading>
            <Box fontSize="20px" color="black" pl="5" w="650px" pt="8">
              <UnorderedList>
                <ListItem>
                  As a Start-up and creative agency, the options are unrivaled
                  and dedicated to providing the most comprehensive support with
                  Top-tier services.
                </ListItem>
                <ListItem pt="5">
                  Affordable & Adaptable: Our solutions cater to various needs,
                  offering a range of cost-effective and customizable packages
                </ListItem>
                <ListItem pt="5">
                  Committed & Accountable: We take responsibility forevery
                  client, ensuring their needs are efficiently and dutifully
                  met.
                </ListItem>
                <ListItem pt="5">
                  Skilled & Diverse: Our team is a blend of experienced mentors
                  and innovative young talents, satisfying your demands with
                  expertise and creativity.
                </ListItem>
                <ListItem pt="5">
                  Punctual & Considerate: Wevalue your time. Your requirements
                  are met promptly and thoughtfully, precisely when you need
                  them .
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Box>
          <Image src="logo.jpg" h="450px" w="350px" pt="120px"/>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
