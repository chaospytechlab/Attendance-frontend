import React, { useEffect } from 'react';
import '../Css/UpdatePasswordModal.css'; // Assuming you have a CSS file for styling the modal

const UpdatePasswordModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to reset the overflow style when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Update Password</h2>
        <form>
          <label>
            Old Password
            <input type="password" />
          </label>
          <label>
            New Password
            <input type="password" />
          </label>
          <label>
            Confirm Password
            <input type="password" />
          </label>
          <div className="modal-actions">
            <button type="submit" className="btn-save">Save</button>
            <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePasswordModal;
