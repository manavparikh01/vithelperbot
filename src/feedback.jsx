import React, { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Center,
  VStack,
} from "@chakra-ui/react";

const FeedbackForm = () => {
    const [resize, setResize] = React.useState('horizontal')
  const [formData, setFormData] = useState({
    username: "",
    feedback: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    uploadFeedback(formData)
    // Reset form fields
    // setFormData({
    //   username: "",
    //   feedback: "",
    // });
  };

  const uploadFeedback = (data) => {
    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username:data.username,
          feedback:data.feedback
        }),
      };
      fetch("http://localhost:5015/feedback", requestOptions).then(
      
      setFormData({ username: "", feedback: ""})
    ).catch(() => {
      
    });
  };

  return (
    <Center h="100vh" bgColor="#3A1C58">
      <Box w={["100%", "100%", "65%"]}  p={4} borderWidth="1px" borderRadius="md">
        <Heading as="h1" size="lg" textAlign="center" mb={4} color="#C77BDA">
          Feedback Form
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={10}>
            <FormControl id="username" isRequired width="100%">
              <FormLabel color="#C77BDA">Username</FormLabel>
              <Input
              width="40%"
              minWidth="200px"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl id="feedback" isRequired width="100%"> 
              <FormLabel color="#C77BDA">Feedback</FormLabel>
              <Textarea
              width="100%"
              minWidth="200px"
              height="10vh"
              size='lg'
              resize={resize}
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
              />
            </FormControl>

            <Button size="sm" bg="#AD48C1" color="#FFE5FB" borderRadius="4"
            width="70%" minWidth="200px" paddingLeft="20px" paddingRight="20px" paddingTop="7px" paddingBottom="7px"
            border="none"
         _hover={{
               bg: "#3A1C58",
                 //bg: "#FFE5FB",
                 color: "#C77BDA",
                 border: "none",
               }}>
          SUBMIT
        </Button>
          </VStack>
        </form>
      </Box>
    </Center>
  );
};

export default FeedbackForm;
