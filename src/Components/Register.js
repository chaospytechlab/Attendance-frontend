import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Register.css';
import registerImage from '../Image/login.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios'; // Add axios for making API calls


function Register() { 
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // useNavigate hook for navigation

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validate = () => {
    let tempErrors = {};
    if (!username) tempErrors.username = "Please enter a username.";
    if (!email) {
      tempErrors.email = "Please enter an email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!password) {
      tempErrors.password = "Please enter a password.";
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long.";
    }
    if (!confirmPassword) {
      tempErrors.confirmPassword = "Please enter a confirmation password.";
    } else if (password !== confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // const response = await axios.post('http://127.0.0.1:8003/users', {
        // const response = await axios.post('http://192.168.1.3:8003/users', {
        const response = await axios.post('http://localhost:3001/users', {
          username,
          email,
          password
        });
        const userId = response.data.user_id; // Ensure this matches your API response structure
        localStorage.setItem('userId', userId); // Store the user ID in local storage
        console.log("User registered successfully");
        alert('Registered successfully');
        navigate('/login'); // Navigate to login page after successful registration
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     try {
  //       await axios.post('http://192.168.1.3:8003/users', {
  //         username,
  //         email,
  //         password
  //       });
  //      Storage.setItem('userId', userId); // Store the user ID in local storage
  //       console.log("User registered successfully");
  //       alert('Register succesfully');
  //       navigate('/login'); // Navigate to login page after successful registration
  //     } catch (error) {
  //       console.error("Error registering user:", error);
  //     }
  //   }
  // };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-form">
          <h2>Register</h2>
          <form  onSubmit={handleSubmit}>
            <div className={`input-group ${username ? 'filled' : ''}`}>
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
              <label>Enter your username</label>
              {errors.username && <div className="error-message">{errors.username}</div>}
            </div>
            <div className={`input-group ${email ? 'filled' : ''}`}>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input 
                type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <label>Enter your email</label>
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div className={`input-group ${password ? 'filled' : ''}`}>
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Enter your password</label>
              <FontAwesomeIcon
                icon={passwordVisible ? faEye : faEyeSlash}
                className="toggle-password"
                onClick={togglePasswordVisibility}
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>
            <div className={`input-group ${confirmPassword ? 'filled' : ''}`}>
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label>Enter confirm password</label>
              <FontAwesomeIcon
                icon={confirmPasswordVisible ? faEye : faEyeSlash}
                className="toggle-password"
                onClick={toggleConfirmPasswordVisibility}
              />
              {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
            </div>
            <button type="submit" className="register-btn">Register</button>
          </form>
          <div className="login-link">
            Already have an account? <Link to="/login">Login now</Link>
          </div>
        </div>
        <div className="register-image">
          <img src={registerImage} alt="Register Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Register;

