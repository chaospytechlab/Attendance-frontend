
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Landing.css';

import Image from '../Image/Landing.svg'; // Ensure the image path is correct
import waveImage from '../Icon/wave.svg'; // Ensure the SVG path is correct

function Landing() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };
  return (
    <div className="landing-container">
      <div className="main-content">
        <div className="content">
          <h1>Employee Attendance System</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Placerat cursus ultrices fusce et amet ornare</p>
      <button className="get-start-button" onClick={handleGetStartedClick}>Get Start</button>
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
