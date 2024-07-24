import React, { useEffect } from 'react';
import '../Css/EditProfileModal.css'; // Ensure the correct path to your CSS file
import profile from '../Image/jk.png'; // Import the profile picture

const EditProfileModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2 className="modal-heading">Edit Profile</h2>
        <div className="modal-body">
          <div className="left-section">
            <img src={profile} alt="Profile" className="profile-pic" />
            <button type="button" className="change-pic-btn">Change</button>
          </div>
          <div className="right-section">
            <form>
              <div className="form-group">
                <label>Username</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Post</label>
                <select>
                  <option value="Developer">Developer</option>
                  <option value="Manager">Manager</option>
                  <option value="Designer">Designer</option>
                </select>
              </div>
              <div className="form-group">
                <label>Contact no</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Language</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" />
              </div>
            </form>
          </div>
        </div>
        <div className="modal-actions">
          <button type="submit" className="btn-save">Save</button>
          <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
