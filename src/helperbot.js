import React, { useState } from 'react';
//import {withRouter} from "react-router";

function HelperBot() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  function handleInputChange(event) {
    setCurrentMessage(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (currentMessage.trim() !== '') {
      setMessages([...messages, currentMessage]);
      setCurrentMessage('');
    }
  }

  return (
    <div>
      <h1>Chat Page</h1>

      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>

      <form onSubmit={handleFormSubmit}>
        <input 
          type='text' 
          placeholder='Type your message here...' 
          value={currentMessage} 
          onChange={handleInputChange}
        />
        <button type='submit'>Send</button>
      </form> 
    </div>
  );
}

export default HelperBot;

//code a simple chating page in react