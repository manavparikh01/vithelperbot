import React from "react";
import { Flex, Avatar, AvatarBadge, Text, Button, Spacer, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let history = useNavigate();

  function handleClick() {
    //history("/feedback")
    window.open("/feedback", "_blank");
  }
  return (
    <Flex
    w="100%"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingLeft="1rem"
      paddingRight="1rem"
      //padding="1rem"
      //bg="gray.800"
      //color="white"
    >
      <Box>
        <Box fontSize="lg" fontWeight="bold" color="#C77BDA">
          VIT HELPER BOT
        </Box>
      </Box>

      <Box>
        <Button size="sm" bg="#AD48C1" color="#FFE5FB" borderRadius="4" onClick={handleClick}
         _hover={{
               bg: "#3A1C58",
                 //bg: "#FFE5FB",
                 color: "#C77BDA",
                 border: "none",
               }}>
          Feedback
        </Button>
      </Box>
    </Flex>
  

    // <Flex w="100%" >
    //   {/* <Avatar size="lg" name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
    //     <AvatarBadge boxSize="1.25em" bg="green.500" />
    //   </Avatar> */}
    //   <Flex minWidth='max-content' flexDirection="row" 
    //   //mx="auto" 
    //   justify="center">
    //     <Text fontSize="lg" fontWeight="bold" color="#C77BDA" justifyContent="center" alignSelf="center">
    //       VIT HELPER BOT
    //     </Text>
    //     <Spacer />
    //     <Button
    //     //bg="#C77BDA"
    //     //variant={"outline"}
    //     bg="#AD48C1"
    //     color="#FFE5FB"
    //     borderRadius="4"
    //     _hover={{
    //       bg: "#3A1C58",
    //       //bg: "#FFE5FB",
    //       color: "#C77BDA",
    //       border: "none",
    //     }}
    //     marginRight="3"
    //     //disabled={inputMessage.trim().length <= 0}
    //     //onClick={handleSendMessage}
    //   >
    //     Feedback
    //   </Button>
    //     {/* <Text color="green.500">Ask Questions For Precise Answers</Text> */}
    //   </Flex>
    // </Flex>
  );
};

export default Header;
