// /* Profile.js */

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Css/Profile.css'; // Assuming you have a CSS file for Profile styling

// const Profile = ({ user }) => {
//   return (
//     <div className="profile-container">
//       <nav className="navbar">
//         <div className="logo">Company Logo</div>
//         <ul className="nav-links">
//           <li><Link to="/dashboard">Attendance</Link></li>
//           <li><Link to="/leavemanagement">Leave Request</Link></li>
//           <li><Link to="/profile">Profile</Link></li>
//         </ul>
//       </nav>
//       <div className="profile-header">
//         <h2>Profile</h2>
//       </div>
//       <div className="profile-content">
//         <div className="profile-pic">
//           {user.username[0].toUpperCase()}
//         </div>
//         <div className="profile-info">
//           <p><strong>Name:</strong> {user.username}</p>
//           <p><strong>ID:</strong> {user.id}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Designation:</strong> {user.role}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import '../Css/Profile.css'; // Assuming you have a CSS file for Profile styling

const Profile = ({ user }) => {
  return (
    <div>
      <Navbar />

    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-header">
            <h2>Profile</h2>
          </div>
          <div className="profile-pic">
            <img src={user.profilePic} alt="Profile" />
          </div>
          <div className="profile-info">
            <h2>Amanda Kherr</h2>
            <p>Developer <span>(Flutter)</span></p>
            <p>AmandaR@gmail.com</p>
            <p>995523625</p>
            <p>cricket bangloz street-7, jamnager</p>
          </div>
          <div className="edit-icon">
            <Link to="/edit-profile">
              <img src="/path/to/edit-icon.png" alt="Edit" />
            </Link>
          </div>
        </div>
        <div className="profile-actions">
          <Link to="/update-password" className="action-card">
            <h3>Update Password</h3>
            <p>Update your own password set new</p>
            <div className="action-icon">→</div>
          </Link>
          <Link to="/holidays" className="action-card">
            <h3>Holidays</h3>
            <p>See your future Holidays</p>
          </Link>
          <Link to="/logout" className="action-card">
            <h3>Logout</h3>
            <p>Click Logout</p>
          </Link>
          <Link to="/progress" className="action-card">
            <h3>Your Progress</h3>
            <p>See your progress chart</p>
          </Link>
        </div>
      </div>
    </div>


    </div>
  );
};

export default Profile;
