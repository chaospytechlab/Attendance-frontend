// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../Image/lg1.png'; 
// import '../Css/Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         {/* <img src="image/lg1.png" alt="Company Logo" /> */}
//         <img src={Logo} alt="Company Logo" />

//       </div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/settings">Setting</Link></li>
//         <li><Link to="/login">Login</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Image/lg1.png';
import '../Css/Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-links">
       <Link to="/dashboard">Home</Link>
       <Link to="/profile">Setting</Link>
       <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;