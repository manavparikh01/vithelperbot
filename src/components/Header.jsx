import React from "react";
import { Flex, Avatar, AvatarBadge, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex w="100%" >
      {/* <Avatar size="lg" name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar> */}
      <Flex flexDirection="column" mx="auto" justify="center">
        <Text fontSize="lg" fontWeight="bold" color="#C77BDA" justifyContent="center" alignSelf="center">
          VIT HELPER BOT
        </Text>
        {/* <Text color="green.500">Ask Questions For Precise Answers</Text> */}
      </Flex>
    </Flex>
  );
};

export default Header;
