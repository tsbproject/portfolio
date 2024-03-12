import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Flex, HStack, Link } from "@chakra-ui/react";

const socials = [
  { 
    // id:"1",
    icon: faEnvelope,
    url: "mailto: tsbolarinwa@gmail.com",
    
  },
  {
    // id:"2",
    icon: faGithub,
    url: "https://github.com/tsbproject",
  },
  {
    // id:"3",
    icon: faLinkedin,
    url: "https://www.linkedin.com/https://www.linkedin.com/in/tayo-bolarinwa-a6b1252a5/",
  },
  {
    // id:"4",
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    // id:"5",
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = ( {} ) => {
  // const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     setIsHeaderVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);
 
 
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="relative"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
     
    
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        
         
        >
        

      
       
          <nav>
           <HStack spacing={4}
             listStyleType="none"
           > 
             
              
              {socials.map((social, i) => (
               <Link  key={i}
                 href={social.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={social.icon} />
                </Link>

                  
                
              ))}
     
       
        

            
            
                
                
                
                
                
             
             
           </HStack>
            
          </nav>
          <nav>
            
            <HStack spacing={8}
              listStyleType="none"
            >
             
             <Link onClick={handleClick("projects-section")}>Project</Link>
             <Link onClick={handleClick("contactme-section")}>Contact me</Link>
             
             </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
