import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/EditProfileModal.css'; // Ensure the correct path to your CSS file
import profile from '../Image/jk.png'; // Default profile picture

const EditProfileModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    department: '',
    post: '',
    contact_no: '',
    address: '',
    profileImage: null // Add state for profile image file
  });
  const [userId, setUserId] = useState(null); // State to store userId
  const [imagePreview, setImagePreview] = useState(profile); // Preview image state

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

  useEffect(() => {
    // Retrieve the user ID from local storage when the component mounts
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
      // Optionally, fetch user data to populate the form
      axios.get(`http://192.168.1.3:8003/users/${storedUserId}`)
        .then(response => {
          setFormData(prevData => ({
            ...prevData,
            ...response.data,
            profileImage: null // Reset profile image state
          }));
          setImagePreview(response.data.profileImage || profile); // Set profile image preview
        })
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevData => ({
        ...prevData,
        profileImage: file
      }));
      setImagePreview(URL.createObjectURL(file)); // Set image preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userId) {
      try {
        // Create a FormData object to send both profile data and the image file
        const profileData = new FormData();
        profileData.append('user_id', userId);
        profileData.append('username', formData.username);
        profileData.append('department', formData.department);
        profileData.append('post', formData.post);
        profileData.append('contact_no', formData.contact_no);
        profileData.append('address', formData.address);

        // Send the profile data
        await axios.put('http://192.168.1.3:8003/users/edit_profile', profileData, {
          headers: {
            'Content-Type': 'multipart/form-data' // Required for file uploads
          }
        });
        console.log('Profile updated successfully');

        // If a new image is selected, upload it separately
        if (formData.profileImage) {
          const imageData = new FormData();
          imageData.append('profileImage', formData.profileImage, formData.profileImage.name);

          await axios.put(`http://192.168.1.3:8003/users/edit_profile_image?user_id=${userId}`, imageData, {
            headers: {
              'Content-Type': 'multipart/form-data' // Required for file uploads
            }
          });
          console.log('Profile image updated successfully');
        }

        onClose();
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2 className="modal-heading">Edit Profile</h2>
        <div className="modal-body">
          <div className="left-section">
            <img src={imagePreview} alt="Profile" className="profile-pic" />
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="file-input"
            />
            <button 
              type="button" 
              className="change-pic-btn"
            >
              Change
            </button>
          </div>
          <div className="right-section">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input 
                  type="text" 
                  name="username"
                  value={formData.username}
                  onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <label>Department</label>
                <select 
                  name="department" 
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="IT">IT</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
              <div className="form-group">
                <label>Post</label>
                <select 
                  name="post" 
                  value={formData.post}
                  onChange={handleChange}
                >
                  <option value="Developer">Developer</option>
                  <option value="Manager">Manager</option>
                  <option value="Designer">Designer</option>
                </select>
              </div>
              <div className="form-group">
                <label>Contact no</label>
                <input 
                  type="text" 
                  name="contact_no"
                  value={formData.contact_no}
                  onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleChange} 
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="btn-save">Save</button>
                <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
