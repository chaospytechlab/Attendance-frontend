import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './A_Navbar';
import UpdatePasswordModal from './UpdatePasswordModal';
import EditProfileModal from './EditProfileModal';
import '../Css/Profile.css';
import profile from '../Image/jk.png';
import Arrow from '../Icon/arrow.svg';
import Edit from '../Icon/edit.svg';

import HolidayModal from './A_Holiday'; // Import the holiday modal
import EditHolidayModal from './A_Edit_Holiday'; // Import the edit holiday modal

const A_Profile = () => {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  const [isHolidayModalOpen, setIsHolidayModalOpen] = useState(false); // State for holiday modal
  const [isEditHolidayModalOpen, setIsEditHolidayModalOpen] = useState(false); // State for edit holiday modal

  const openPasswordModal = () => setIsPasswordModalOpen(true);
//   const closePasswordModal = () => setIsPasswordModalOpen(false);

  const openEditProfileModal = () => setIsEditProfileModalOpen(true);
  const closeEditProfileModal = () => setIsEditProfileModalOpen(false);
  const closePasswordModal = () => {
    console.log('Closing password modal');
    setIsPasswordModalOpen(false);
  };

  const openHolidayModal = () => setIsHolidayModalOpen(true); // Open holiday modal
  const closeHolidayModal = () => setIsHolidayModalOpen(false); // Close holiday modal
  const openEditHolidayModal = () => setIsEditHolidayModalOpen(true); // Open edit holiday modal
  const closeEditHolidayModal = () => setIsEditHolidayModalOpen(false); // Close edit holiday modal


  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <h2>Profile</h2>
          </div>
          <div className="profile-details">
            <div className="profile-pic">
              <img src={profile} alt="Profile" />
            </div>
            <div className="profile-info">
              <h2>Amanda Kherr</h2>
              <p>Developer <span>(Flutter)</span></p>
              <p>AmandaR@gmail.com</p>
              <p>995523625</p>
              <p>cricket bangloz street-7, jamnager</p>
            </div>
            <div className="edit-icon" onClick={openEditProfileModal}>
              <img src={Edit} alt="Edit-Icon" />
            </div>
          </div>
        </div>
        <div className="profile-actions">
          <div className="action-card" onClick={openPasswordModal}>
            <div className="action-text">
              <h3>Update Password</h3>
              <p>Update your own password set new</p>
            </div>
            <div className="action-icon">
              <img src={Arrow} alt="Arrow-Icon" />
            </div>
          </div>
          <div className="action-card" onClick={openHolidayModal}>
            <div className="action-text">
              <h3>Holidays</h3>
              <p>See your future Holidays</p>
            </div>
          </div>
          <Link to="/logout" className="action-card">
            <div className="action-text">
              <h3>Logout</h3>
              <p>Click Logout</p>
            </div>
          </Link>
          <div className="action-card">
            <div className="action-text">
              <h3>Your Progress</h3>
              <p>See your progress chart</p>
            </div>
          </div>
        </div>
      </div>
      <UpdatePasswordModal isOpen={isPasswordModalOpen} onClose={closePasswordModal} />
      <EditProfileModal isOpen={isEditProfileModalOpen} onClose={closeEditProfileModal} />
      <HolidayModal isOpen={isHolidayModalOpen} onClose={closeHolidayModal}  onEdit={openEditHolidayModal}  /> {/* Holiday modal */}
      <EditHolidayModal isOpen={isEditHolidayModalOpen} onClose={closeEditHolidayModal} /> {/* Edit holiday modal */}
    </div>
  );
};

export default A_Profile;
