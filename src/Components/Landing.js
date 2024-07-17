// Landing.js
import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <h1>This is the landing page</h1>
      <p>Welcome to our application. Click the button below to get started.</p>
      <Link to="/login">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default Landing;
