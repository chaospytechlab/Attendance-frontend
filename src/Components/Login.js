

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../Css/Login.css';
// import loginImage from '../Image/login.png'; 
// import logo from '../Image/lg1.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// function Login({ setUser }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validate = () => {
//     let tempErrors = {};
//     if (!email) {
//       tempErrors.email = "Please enter an email.";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       tempErrors.email = "Email is not valid.";
//     }
//     if (!password) {
//       tempErrors.password = "Please enter a password.";
//     }
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (validate()) {
//   //     try {
//   //       const response = await axios.get('http://localhost:3001/users');
//   //       const user = response.data.find(u => u.email === email && u.password === password);
//   //       if (user) {
//   //         console.log("Login successful");
//   //         alert('Login Successful'); 
//   //         sessionStorage.setItem('user', JSON.stringify(user));
//   //         sessionStorage.setItem('isLoggedIn', 'true');
//   //         setUser(user);
//   //         navigate(user.role === 'admin' ? '/admin-dashboard' : '/dashboard');
//   //       } else {
//   //         // setErrors({ ...errors, general: "Invalid email or password" });
//   //          alert(' "Invalid email or password');

//   //       }
//   //     } catch (error) {
//   //       console.error("Error logging in:", error);
//   //       alert('Error logging in. Please try again.');
//   //     }
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const response = await axios.post(`http://127.0.0.1:8003/users/login`, null, {
//         // const response = await axios.post(`http://192.168.1.3:8003/users/login`, null, {
//           params: {
//             email: email,
//             password: password
//           }
//         });
  
//         // Assuming the API responds with user data if the login is successful
//         const user = response.data;
  
//         if (user) {
//           console.log("Login successful");
//           alert('Login Successful');
//           sessionStorage.setItem('user', JSON.stringify(user));
//           sessionStorage.setItem('isLoggedIn', 'true');
//           setUser(user);
//           navigate(user.role === 'admin' ? '/admin-dashboard' : '/dashboard');
//         } else {
//           alert('Invalid email or password');
//         }
//       } catch (error) {
//         console.error("Error logging in:", error);
//         alert('Error logging in. Please try again.');
//       }
//     }
//   };
  
  

//   return (
//     <div className="page-container">
    
//       <div className="login-container">
//         <div className="login-card">
//           <div className="login-form">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//               <div className={`input-group ${email ? 'filled' : ''}`}>
//                 <FontAwesomeIcon icon={faEnvelope} className="icon" />
//                 <input
//                   type="text"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label>Enter your email</label>
//                 {errors.email && <div className="error-message">{errors.email}</div>}
//               </div>
//               <div className={`input-group ${password ? 'filled' : ''}`}>
//                 <FontAwesomeIcon icon={faLock} className="icon" />
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <label>Enter your password</label>
//                 {errors.password && <div className="error-message">{errors.password}</div>}
//               </div>
//               {errors.general && <div className="error-message">{errors.general}</div>}
//               <div className="forgot-password">
//                 <Link to="/forgetpassword">Forget Password?</Link>
//               </div>
//               <button type="submit" className="login-btn">Login</button>
//             </form>
//             <div className="register-link">
//               Don't have an account? <Link to="/register">SignUp now</Link>
//             </div>
//           </div>
//           <div className="login-image">
//             <img src={loginImage} alt="Login Illustration" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;









import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Login.css';
import loginImage from '../Image/login.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!email) {
      tempErrors.email = "Please enter an email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!password) {
      tempErrors.password = "Please enter a password.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.get('http://localhost:3001/users');
        const user = response.data.find(u => u.email === email && u.password === password);
        if (user) {
          console.log("Login successful");
          alert('Login Successful'); 
          sessionStorage.setItem('user', JSON.stringify(user));
          sessionStorage.setItem('isLoggedIn', 'true');
          setUser(user);
          navigate(user.role === 'admin' ? '/admin-dashboard' : '/dashboard');
        } else {
          // setErrors({ ...errors, general: "Invalid email or password" });
           alert(' "Invalid email or password');

        }
      } catch (error) {
        console.error("Error logging in:", error);
        alert('Error logging in. Please try again.');
      }
    }
  };


  return (
    <div className="page-container">
      <div className="login-container">
        <div className="login-card">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Enter your password</label>
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>
              {errors.general && <div className="error-message">{errors.general}</div>}
              <div className="forgot-password">
                <Link to="/forgetpassword">Forget Password?</Link>
              </div>
              <button type="submit" className="login-btn">Login</button>
            </form>
            <div className="register-link">
              Don't have an account? <Link to="/register">SignUp now</Link>
            </div>
          </div>
          <div className="login-image">
            <img src={loginImage} alt="Login Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

// // --------------///////////////-------------------




