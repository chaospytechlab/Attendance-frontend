
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import Navbar from './Navbar'; // Assuming you have a Navbar component
// import UpdatePasswordModal from './UpdatePasswordModal'; // Import the modal component
// import EditProfileModal from './EditProfileModal'; // Import the new modal component
// import '../Css/Profile.css'; // Assuming you have a CSS file for Profile styling
// import profile from '../Image/jk.png';


// import Arrow from '../Icon/arrow.svg'
// import Edit from '../Icon/edit.svg'

// const Profile = ({ user }) => {
//   const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
//   const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

//   const openPasswordModal = () => setIsPasswordModalOpen(true);
//   const closePasswordModal = () => setIsPasswordModalOpen(false);

//   const openEditProfileModal = () => setIsEditProfileModalOpen(true);
//   const closeEditProfileModal = () => setIsEditProfileModalOpen(false);

//   return (
//     <div>
//       <Navbar />
//       <div className="profile-container">
//         <div className="profile-card">
//           <div className="profile-header">
//             <h2>Profile</h2>
//           </div>
//           <div className="profile-details">
//             <div className="profile-pic">
//               <img src={profile} alt="Profile" />
//             </div>
//             <div className="profile-info">
//               <h2>Amanda Kherr</h2>
//               <p>Developer <span>(Flutter)</span></p>
//               <p>AmandaR@gmail.com</p>
//               <p>995523625</p>
//               <p>cricket bangloz street-7, jamnager</p>
//             </div>
//             <div className="edit-icon" onClick={openEditProfileModal}>
//             <img src={Edit} alt="Edit-Icon" />
//             </div>
//           </div>
//         </div>
//         <div className="profile-actions">
//           <div className="action-card" onClick={openPasswordModal}>
//             <div className="action-text">
//               <h3>Update Password</h3>
//               <p>Update your own password set new</p>
//             </div>
//             <div className="action-icon">
//                   <img src={Arrow} alt="Arrow-Icon" />
//             </div>
//           </div>
//           <Link to="/holidays" className="action-card">
//             <div className="action-text">
//               <h3>Holidays</h3>
//               <p>See your future Holidays</p>
//             </div>
//           </Link>
//           <Link to="/logout" className="action-card">
//             <div className="action-text">
//               <h3>Logout</h3>
//               <p>Click Logout</p>
//             </div>
//           </Link>
//           <Link to="/progress" className="action-card">
//             <div className="action-text">
//               <h3>Your Progress</h3>
//               <p>See your progress chart</p>
//             </div>
//           </Link>
//         </div>
//       </div>
//       <UpdatePasswordModal isOpen={isPasswordModalOpen} onClose={closePasswordModal} />
//       <EditProfileModal isOpen={isEditProfileModalOpen} onClose={closeEditProfileModal} />
//     </div>
//   );
// };

// export default Profile;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import UpdatePasswordModal from './UpdatePasswordModal';
// import EditProfileModal from './EditProfileModal';
// import '../Css/Profile.css';
// import profile from '../Image/jk.png';
// import Arrow from '../Icon/arrow.svg';
// import Edit from '../Icon/edit.svg';

// const Profile = () => { // Ensure the component name starts with an uppercase letter
//   const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
//   const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

//   const openPasswordModal = () => setIsPasswordModalOpen(true);
//   const closePasswordModal = () => setIsPasswordModalOpen(false);

//   const openEditProfileModal = () => setIsEditProfileModalOpen(true);
//   const closeEditProfileModal = () => setIsEditProfileModalOpen(false);

//   return (
//     <div>
//       <Navbar />
//       <div className="profile-container">
//         <div className="profile-card">
//           <div className="profile-header">
//             <h2>Profile</h2>
//           </div>
//           <div className="profile-details">
//             <div className="profile-pic">
//               <img src={profile} alt="Profile" />
//             </div>
//             <div className="profile-info">
//               <h2>Amanda Kherr</h2>
//               <p>Developer <span>(Flutter)</span></p>
//               <p>AmandaR@gmail.com</p>
//               <p>995523625</p>
//               <p>cricket bangloz street-7, jamnager</p>
//             </div>
//             <div className="edit-icon" onClick={openEditProfileModal}>
//               <img src={Edit} alt="Edit-Icon" />
//             </div>
//           </div>
//         </div>
//         <div className="profile-actions">
//           <div className="action-card" onClick={openPasswordModal}>
//             <div className="action-text">
//               <h3>Update Password</h3>
//               <p>Update your own password set new</p>
//             </div>
//             <div className="action-icon">
//               <img src={Arrow} alt="Arrow-Icon" />
//             </div>
//           </div>
//           <Link to="/holidays" className="action-card">
//             <div className="action-text">
//               <h3>Holidays</h3>
//               <p>See your future Holidays</p>
//             </div>
//           </Link>
//           <Link to="/logout" className="action-card">
//             <div className="action-text">
//               <h3>Logout</h3>
//               <p>Click Logout</p>
//             </div>
//           </Link>
//           <Link to="/progress" className="action-card">
//             <div className="action-text">
//               <h3>Your Progress</h3>
//               <p>See your progress chart</p>
//             </div>
//           </Link>
//         </div>
//       </div>
//       <UpdatePasswordModal isOpen={isPasswordModalOpen} onClose={closePasswordModal} />
//       <EditProfileModal isOpen={isEditProfileModalOpen} onClose={closeEditProfileModal} />
//     </div>
//   );
// };

// export default Profile;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import UpdatePasswordModal from './UpdatePasswordModal';
import EditProfileModal from './EditProfileModal';
import '../Css/Profile.css';
import profile from '../Image/jk.png';
import Arrow from '../Icon/arrow.svg';
import Edit from '../Icon/edit.svg';

const Profile = () => {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  const openPasswordModal = () => setIsPasswordModalOpen(true);
  // const closePasswordModal = () => setIsPasswordModalOpen(false);

  const openEditProfileModal = () => setIsEditProfileModalOpen(true);
  const closeEditProfileModal = () => setIsEditProfileModalOpen(false);
  const closePasswordModal = () => {
    console.log('Closing password modal');
    setIsPasswordModalOpen(false);
  };
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
          <Link to="/holidays" className="action-card">
            <div className="action-text">
              <h3>Holidays</h3>
              <p>See your future Holidays</p>
            </div>
          </Link>
          <Link to="/logout" className="action-card">
            <div className="action-text">
              <h3>Logout</h3>
              <p>Click Logout</p>
            </div>
          </Link>
          <Link to="/progress" className="action-card">
            <div className="action-text">
              <h3>Your Progress</h3>
              <p>See your progress chart</p>
            </div>
          </Link>
        </div>
      </div>
      <UpdatePasswordModal isOpen={isPasswordModalOpen} onClose={closePasswordModal} />
      <EditProfileModal isOpen={isEditProfileModalOpen} onClose={closeEditProfileModal} />
    </div>
  );
};

export default Profile;
