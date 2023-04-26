// code a home page for a chating app in react

import React, { useState } from 'react';
import classes from './home.module.css';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
//   const [name, setName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevents page from refreshing on form submit
//     // add logic to save user's name to database or login
//     console.log(name);
//   }
let history = useNavigate();

  function handleClick() {
    history("/helperbot")
  }

  return (
    <div className={classes.page}>
      <nav className={classes.nav}>
        <h1>VIT HELPER</h1>
      </nav>
      <div className={classes.main}>
        <h1>Welcome to our chatbot powered by hybrid BERT model</h1>
        <h2>Our model can provide precise answers</h2>
        <h2>to your questions on various topics regarding</h2>
        <h1>VIT</h1>
        <div className={classes.spacer}></div>
        <button onClick={handleClick} className={classes.but}>Try VITHelperBot</button>
      </div>
      <footer className={classes.footer}>
      Capstone Project made by Sidharth and Manav.
      </footer>
    </div>
  );
}

export default HomePage;

//code a landing page with a navbar having a title in the centre and div with a button in the centre of the page in react

//centre a heading in css

//code a page with navbar, middle div and a footer in react and make sure that the footer is at the bottom of the page

//code a footer for me with some copyright text

//on clicking on a button a new page should open in react