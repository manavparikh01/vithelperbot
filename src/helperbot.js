import { ChakraProvider, theme } from "@chakra-ui/react";
import Chat from "./Chat";

const HelperBot = () => {
  return (
    <ChakraProvider theme={theme}>
      <Chat />
    </ChakraProvider>
  );
};

export default HelperBot;

//code a simple chating page in react