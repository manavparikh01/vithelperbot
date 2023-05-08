import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Messages from "./components/Messages";
import DividerFooter from "./components/DividerFooter";

const Chat = () => {
  const [messages, setMessages] = useState([
    { from: "computer", text: "Hi, nice to meet you. I can solve your doubts related to VIT" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: data }]);
    }, 1000);
  };

  return (
    <Flex w="100%" h="100vh" justify="center" align="center" bgColor="#3A1C58">
      <Flex w={["100%", "100%", "65%"]} h="95%" flexDir="column">
        <Header />
        <Divider />
        <Messages messages={messages} />
        <DividerFooter />
        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;
