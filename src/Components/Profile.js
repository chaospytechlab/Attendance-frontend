/* Profile.js */

import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Profile.css'; // Assuming you have a CSS file for Profile styling

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <nav className="navbar">
        <div className="logo">Company Logo</div>
        <ul className="nav-links">
          <li><Link to="/dashboard">Attendance</Link></li>
          <li><Link to="/leavemanagement">Leave Request</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <div className="profile-header">
        <h2>Profile</h2>
      </div>
      <div className="profile-content">
        <div className="profile-pic">
          {user.username[0].toUpperCase()}
        </div>
        <div className="profile-info">
          <p><strong>Name:</strong> {user.username}</p>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Designation:</strong> {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
