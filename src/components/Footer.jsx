import { Avatar, Box, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import mtcSrc from "../Image/aman.jpeg";



const Footer = () => {
  return (
    <Box
     bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} fontSize={"3xl"}>About Us</Text>
          <Text
            fontSize={"lg"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          
          <Image  src={mtcSrc} style={{borderRadius:"50%",
           }}/>
          <text>Our Founder</text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
