// import React, { useState } from 'react';
// import '../Css/VerifyEmail.css';
// import verifyImage from '../Image/VerifyEmail.png'; // Ensure the path is correct

// function VerifyEmail() {
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const [error, setError] = useState('');

//   const handleOtpChange = (e, index) => {
//     const newOtp = [...otp];
//     const value = e.target.value;
//     if (/^[0-9]$/.test(value) || value === '') {
//       newOtp[index] = value;
//       setOtp(newOtp);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (otp.some((digit) => digit === '')) {
//       setError('Enter the 4 digit code that you received on your email.');
//     } else {
//       setError('');
//       // Handle form submission
//     }
//   };

//   return (
//     <div className="main-container">
//       <div className="card-container">
//         <div className="form-container">
//           <h2>Verify email</h2>
//           <p>Enter the 4 digit code that you received on your email.</p>
//           <span className="verification-code">Verification code</span>

//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   maxLength="1"
//                   value={digit}
//                   onChange={(e) => handleOtpChange(e, index)}
//                 />
//               ))}
//             </div>
//             {error && <span className="error-message">{error}</span>}
//             <button type="submit" className="continue-btn">Continue</button>
//           </form>
//         </div>
//         <div className="image-container">
//           <img src={verifyImage} alt="Verify Email" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VerifyEmail;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Assuming React Router v6 or higher
import axios from 'axios';
import '../Css/VerifyEmail.css';
import verifyImage from '../Image/VerifyEmail.png';

const VerifyEmail = () => {
  const { email } = useParams();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOTP = otp.join('');

    try {
      const response = await axios.post(`http://127.0.0.1:8000/users/verify-otp?email=${encodeURIComponent(email)}&otp=${enteredOTP}`);
      
      if (response.status === 200 && response.data.message === 'OTP verified successfully') {
        navigate(`/resetpassword/${email}/${enteredOTP}`); // Navigate to reset password page
      } else {
        setError('Failed to verify OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to verify OTP. Please try again later.');
    }
  };

  return (
    <div className="main-container">
      <div className="card-container">
        <div className="form-container">
          <h2>Verify Email</h2>
          <p>Enter the 4-digit code that you received on your email.</p>
          <span className="verification-code">Verification Code</span>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                />
              ))}
            </div>
            {error && <span className="error-message">{error}</span>}
            <button type="submit" className="continue-btn">Continue</button>
          </form>
        </div>
        <div className="image-container">
          <img src={verifyImage} alt="Verify Email Illustration" />
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
