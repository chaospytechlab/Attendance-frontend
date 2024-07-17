// import React, { useState } from 'react';
// import '../Css/ForgetPassword.css';
// import FPImage from '../Image/ForgetPassword.png'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// const ForgetPassword = () => {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');

//   const validateEmail = (email) => {
//     // Regular expression for validating an email
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateEmail(email)) {
//       setError('Please enter a valid email address');
//       return;
//     }
//     // Proceed with the form submission
//     setError(''); // Clear the error message if validation passes
//     console.log('Form submitted');
//   }

//   return (
//     <div className="forget-password-container">
//       <div className="forget-password-card">
//         <div className="forget-password-form">
//           <h2>Forget Password</h2>
//           <p>Enter your email for the verification process, we will send a 4-digit code to your email.</p>
//           <form onSubmit={handleSubmit}>
//             <div className={`input-group ${email ? 'filled' : ''}`}>
//               <FontAwesomeIcon icon={faEnvelope} className="icon" />
//               <input
//                 type="text"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <label>Enter your email</label>
//               {error && <div className="error-message">{error}</div>}
//             </div>
//             <button type="submit" className="forget-password-btn">Continue</button>
//           </form>
//         </div>
//         <div className="forget-password-image">
//           <img src={FPImage} alt="Login Illustration" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Css/ForgetPassword.css';
import FPImage from '../Image/ForgetPassword.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/users/forgot-password', null, {
        params: { email } // Passing email as a query parameter
      });
      
      if (response.status === 200) {
        console.log('Response:', response.data);
        navigate(`/verifyemail/${email}`);
      } else {
        setError('Failed to send OTP. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send OTP. Please try again later.');
    }
  };

  return (
    <div className="forget-password-container">
      <div className="forget-password-card">
        <div className="forget-password-form">
          <h2>Forget Password</h2>
          <p>Enter your email for the verification process, we will send a 4-digit code to your email.</p>
          <form onSubmit={handleSubmit}>
            <div className={`input-group ${email ? 'filled' : ''}`}>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Enter your email</label>
              {error && <div className="error-message">{error}</div>}
            </div>
            <button type="submit" className="forget-password-btn">Continue</button>
          </form>
        </div>
        <div className="forget-password-image">
          <img src={FPImage} alt="Forget Password Illustration" />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
