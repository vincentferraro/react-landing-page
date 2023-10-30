import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <VStack borderRadius="2xl" backgroundColor="#fefefe" >
    <Image borderRadius="2xl"src={imageSrc} />
    <VStack align="start">
    <Heading   p={4} size="md" color="black">{title}</Heading>
    <Text  pl={4} pr={4} color="grey">{description}</Text>
      <HStack p={4} color="black">
          <Text>See more</Text> <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
    
    </VStack>
  )
};

export default Card;
