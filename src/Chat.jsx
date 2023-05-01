import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Messages from "./components/Messages";

const Chat = () => {
  const [messages, setMessages] = useState([
    { from: "computer", text: "Hi, My Name is HoneyChat" },
    { from: "me", text: "Hey there" },
    { from: "me", text: "Myself Ferin Patel" },
    {
      from: "computer",
      text:
        "Nice to meet you. You can send me message and i'll reply you with same message."
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");
    fetchAnswer(inputMessage)
  };
  const fetchAnswer = (question) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question:question
      }),
    };
    fetch("http://localhost:5015/question", requestOptions).then(
      (response) => {

        response.json().then((result)=>{
      setMessages((old) => [...old, { from: "computer", text: result}])});
      }
    );
  };
  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w={["100%", "100%", "40%"]} h="90%" flexDir="column">
        <Header />
        <Divider />
        <Messages messages={messages} />
        <Divider />
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
