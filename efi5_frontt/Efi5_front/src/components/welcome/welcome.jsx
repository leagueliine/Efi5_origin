import React from 'react';
import './WelcomeScreen.css';
import { Link } from 'react-router-dom'

const WelcomeScreen = () => {
  return (
    <div className="welcome-container">
      <h1 className="title">Welmcome to Efi5!</h1>
      <p className="subtitle">When you is a Dj!</p>
      <div>
        <Link to={'/login'} >Login</Link>
      </div>
      <div>
        <Link to={'/login'} >Register</Link>
      </div>

    </div>

  );
};

export { WelcomeScreen };