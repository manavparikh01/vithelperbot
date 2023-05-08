import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";

const Messages = ({ messages }) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <Flex w="100%" h="80%" 
    overflowY="scroll" 
    flexDirection="column" px="1"
    sx={{
      '&::-webkit-scrollbar': {
        width: '16px',
        borderRadius: '4px',
        backgroundColor: `rgba(0, 0, 0, 0.05)`,
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: `rgba(235, 133, 246, 0.5)`,
        borderRadius: '4px',
      },
    }}>
      {messages.map((item, index) => {
        if (item.from === "me") {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex
                // bg="black"
                color="#FFE5FB"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
              >
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        } else {
          return (
            <Flex key={index} w="100%" bg="#C77BDA" justifyItems="center" alignItems="center"
            paddingLeft="2" paddingTop="2" paddingBottom="2" paddingRight="2" borderRadius="5">
              <Avatar
                name="VIT"
                //src="https://getavataaars.com/?avatarStyle=Circle&clotheType=BlazerShirt&eyeType=Hearts&eyebrowType=Angry&facialHairColor=Platinum&facialHairType=BeardMajestic&mouthType=Tongue&skinColor=Light&topType=Eyepatch"
                src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                size="sm"
                bg="#3A1C58"
              ></Avatar>
              <Flex
                //bg="gray.100"
                color="#FFE5FB"
                minW="100px"
                maxW="350px"
                //my="1"
                p="3"
              >
                <Text>{item.text}</Text>
              </Flex>
            </Flex>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default Messages;
