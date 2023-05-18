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
    setMessages((old) => [...old, { from: "computer", text: "Loading..."}])
    fetch("http://localhost:5015/question", requestOptions).then(
      (response) => {

        response.json().then((result)=>{
      setMessages(messages.splice(-1, 1));
  
      setMessages((old) => [...old, { from: "me", text: inputMessage }]);
      setMessages((old) => [...old, { from: "computer", text: result}])});
      }
    ).catch(() => {
      setMessages((old) => [...old, {from: "computer", text: "Server is down"}])
    });
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
