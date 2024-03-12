import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const avatarUrl =   "https://i.pravatar.cc/150?img=7";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

<VStack spacing={4}>
      <Avatar size="xxl" src={avatarUrl} />
      <Heading size="md" color="white">
        {greeting}
      </Heading>
      <Heading size="xl" color="white">
        {bio1}
      </Heading>
      <Heading size="xl" color="white">
        {bio2}
      </Heading>
    </VStack>
    

  </FullScreenSection>
);

export default LandingSection;
