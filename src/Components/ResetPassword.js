// import React, { useState } from 'react';
// import '../Css/ResetPassword.css';
// import ResetpasswordImage from '../Image/ResetPassword.png'; 

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// function ResetPassword() {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [errors, setErrors] = useState({ password: '', confirmPassword: '' });

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordVisible(!confirmPasswordVisible);
//   };

//   const validatePassword = () => {
//     let valid = true;
//     let errors = {};

//     if (!password) {
//       errors.password = 'Please enter a password.';
//       valid = false;
//     } else if (password.length < 8) {
//       errors.password = 'Password must be at least 8 characters long.';
//       valid = false;
//     }

//     if (!confirmPassword) {
//       errors.confirmPassword = 'Please enter the confirm password.';
//       valid = false;
//     } else if (password !== confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match.';
//       valid = false;
//     }

//     setErrors(errors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validatePassword()) {
//       // Handle form submission
//       console.log('Form submitted successfully');
//     }
//   };

//   return (
//     <div className="page-container">
//       <div className="reset-password-container">
//         <div className="reset-password-card">
//           <div className="reset-password-form">
//             <h2>Reset Password</h2>
//             <p>Set the new password for your account so 
//             you can login <br /> and access all the features.</p>
//             <form onSubmit={handleSubmit}>
//               <div className={`input-group ${password ? 'filled' : ''}`}>
//                 <FontAwesomeIcon icon={faLock} className="icon" />
//                 <input
//                   type={passwordVisible ? 'text' : 'password'}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <label>Enter new Password</label>
//                 <FontAwesomeIcon
//                   icon={passwordVisible ? faEye : faEyeSlash}
//                   className="toggle-password"
//                   onClick={togglePasswordVisibility}
//                 />
//                 {errors.password && <div className="error-message">{errors.password}</div>}
//               </div>
//               <div className={`input-group ${confirmPassword ? 'filled' : ''}`}>
//                 <FontAwesomeIcon icon={faLock} className="icon" />
//                 <input
//                   type={confirmPasswordVisible ? 'text' : 'password'}
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//                 <label>Enter confirm Password</label>
//                 <FontAwesomeIcon
//                   icon={confirmPasswordVisible ? faEye : faEyeSlash}
//                   className="toggle-password"
//                   onClick={toggleConfirmPasswordVisibility}
//                 />
//                 {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
//               </div>
//               <button type="submit" className="reset-password-btn">Continue</button>
//             </form>
//           </div>
//           <div className="reset-password-image">
//             <img src={ResetpasswordImage} alt="reset-password Illustration" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResetPassword;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Assuming React Router v6 or higher
import axios from 'axios';
import '../Css/ResetPassword.css';
import ResetPasswordImage from '../Image/ResetPassword.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ResetPassword = () => {
  const { email, otp } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Hook for navigation

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validatePassword = () => {
    let valid = true;
    const errors = {};

    if (!password) {
      errors.password = 'Please enter a password.';
      valid = false;
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
      valid = false;
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Please enter the confirm password.';
      valid = false;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validatePassword()) {
      try {
        const url = `http://127.0.0.1:8000/users/reset-password?email=${encodeURIComponent(email)}&otp=${otp}&new_password=${encodeURIComponent(password)}`;
        
        const response = await axios.post(url);
  
        if (response.status === 200 && response.data.message === 'Password reset successful') {
          alert('Password updated successfully!');
          navigate('/login'); // Navigate to login page or any other page
        } else {
          alert('Failed to update password. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to update password. Please try again later.');
      }
    }
  };
  
  return (
    <div className="page-container">
      <div className="reset-password-container">
        <div className="reset-password-card">
          <div className="reset-password-form">
            <h2>Reset Password</h2>
            <p>Set the new password for your account.</p>
            <form onSubmit={handleSubmit}>
              <div className={`input-group ${password ? 'filled' : ''}`}>
                <FontAwesomeIcon icon={faLock} className="icon" />
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Enter new Password</label>
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
                <label>Enter confirm Password</label>
                <FontAwesomeIcon
                  icon={confirmPasswordVisible ? faEye : faEyeSlash}
                  className="toggle-password"
                  onClick={toggleConfirmPasswordVisibility}
                />
                {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
              </div>
              <button type="submit" className="reset-password-btn">Continue</button>
            </form>
          </div>
          <div className="reset-password-image">
            <img src={ResetPasswordImage} alt="Reset Password Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
