// code a home page for a chating app in react

import React, { useState } from 'react';
import classes from './home.module.css';

function HomePage() {
//   const [name, setName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevents page from refreshing on form submit
//     // add logic to save user's name to database or login
//     console.log(name);
//   }

  return (
    <div className={classes.page}>
      <nav className={classes.nav}>
        <h1>VIT HELPER</h1>
      </nav>
      <div className={classes.main}>
        <h2>My Middle Div</h2>
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