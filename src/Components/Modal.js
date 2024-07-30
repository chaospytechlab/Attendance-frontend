import React from 'react';
import '../Css/Modal.css';
import profile from '../Image/jk.png';

const Modal = ({ show, handleClose, data }) => {
  return (
    <>
      <div className={`modal-overlay ${show ? 'show' : ''}`} onClick={handleClose}></div>
      <div className={`modal-content ${show ? 'show' : ''}`}>
        <div className="modal-header">
          <h2>Today Present</h2>
          <input type="text" placeholder="Search employee.." />
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Employee name</th>
              <th>Designation</th>
              <th>Check-in time</th>
              <th>Check-out time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
            <img src={profile} alt="Profile"  />
                </td>
                <td className="employee-name">
                  {/* <img src={item.profilePicture || 'default-profile.png'} alt={`${item.username}'s profile`} /> */}                  
                  {item.username}
                </td>
                <td>{item.role}</td>
                <td>{item.checkInTime || 'N/A'}</td>
                <td>{item.checkOutTime || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Modal;
