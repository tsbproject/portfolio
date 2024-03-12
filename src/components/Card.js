import { color, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
  <VStack
  backgroundColor="white"
  borderWidth="1px"
  borderRadius="lg"
  overflow="hidden"
  boxShadow="lg"
  p={4}
  maxW="xl"
  w="100%"
  alignItems="flex-start"
>
  <Image src={imageSrc} alt={title} />
  <Heading size="md" mt={2} color={"gray.600"}>
    {title}
  </Heading>
  <Text fontSize="sm" mt={2} color="gray.600">
    {description}
  </Text>
  <HStack mt={4}>
    <Text fontSize="md" color="blue.500">
      See more
    </Text>
    <FontAwesomeIcon  icon={faArrowRight} color="blue"  />
  </HStack>
</VStack>
  )};

export default Card;
