// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Css/Navbar.css'; // Import the CSS file

// const Navbar = ({ onLogout }) => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="logo.png" alt="Company Logo" />
//       </div>
//       <ul className="nav-links">
        // <li><Link to="/admin/dashboard">Home</Link></li>
        // <li><Link to="/admin/history">History</Link></li>
        // <li><Link to="/admin/employees">Employees</Link></li>
        // <li><Link to="/admin/settings">Settings</Link></li>
        // <li><button onClick={onLogout}>Logout</button></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Image/lg1.png';
import '../Css/Navbar.css';


const A_Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-links">
        <Link to="/admin/dashboard">Home</Link>
        <Link to="/admin/history">History</Link>
        <Link to="/admin/employees">Employees</Link>
        <Link to="/admin/settings">Settings</Link>
        <button onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default A_Navbar;



// import React from 'react';
// import '../Css/A_Navbar.css';
// import { NavLink } from 'react-router-dom';

// const A_Navbar = ({ onLogout }) => {
//   return (
//     <nav className="a-navbar">
//       <div className="a-navbar-logo">
//         <NavLink to="/">Admin Panel</NavLink>
//       </div>
//       <div className="a-navbar-links">
//         <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
//         <NavLink to="/employees" activeClassName="active">Employees</NavLink>
//         <NavLink to="/attendance" activeClassName="active">Attendance</NavLink>
//         <NavLink to="/leave-management" activeClassName="active">Leave Management</NavLink>
//         <NavLink to="/profile" activeClassName="active">Profile</NavLink>
//         {/* <NavLink to="/logout" activeClassName="active">Logout</NavLink> */}
//          <li><button onClick={onLogout}>Logout</button></li>

//       </div>
//     </nav>
//   );
// };

// export default A_Navbar;

