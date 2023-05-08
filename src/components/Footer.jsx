import React from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

const Footer = ({ inputMessage, setInputMessage, handleSendMessage }) => {
  return (
    <Flex w="100%" mt="5">
      <Input
        placeholder="Type Something..."
        color="#FFE5FB"
        border="none"
        borderRadius="4"
        _placeholder={{
          color: "#FFE5FB"
        }}
        _focus={{
          bgColor: "#AD48C1",
          border: "none",
          outlineStyle: "none",
	        boxShadow: "none",
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSendMessage();
          }
        }}
        mx="3"
        //bgColor="#AD48C1"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <Button
        //bg="#C77BDA"
        bg="#AD48C1"
        color="#FFE5FB"
        borderRadius="4"
        _hover={{
          bg: "#3A1C58",
          //bg: "#FFE5FB",
          color: "#C77BDA",
          border: "none",
        }}
        marginRight="3"
        disabled={inputMessage.trim().length <= 0}
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </Flex>
  );
};

export default Footer;
