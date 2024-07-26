import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Landing.css';

import Image from '../Image/Landing.png'; // Ensure the image path is correct
import waveImage from '../Icon/wave.svg'; // Ensure the SVG path is correct

function Landing() {
  return (
    <div className="landing-container">
      <div className="main-content">
        <div className="content">
          <h1>Employee Attendance System</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Placerat cursus ultrices fusce et amet ornare</p>
          <Link to="/login">
            <button className="get-start-button">Get Start</button>
          </Link>
        </div>
        <div className="image-container">
          <img src={Image} alt="Employee Attendance System" />
        </div>
      </div>
      <div className="wave-container">
        <img src={waveImage} alt="Wave" />
      </div>
    </div>
  );
}

export default Landing;
