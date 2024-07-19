import React, { useEffect } from 'react';
import Modal from 'react-modal';
import '../Css/LeaveDetailsModal.css';

const LeaveDetailsModal = ({ isOpen, onRequestClose, leaveDetails }) => {
    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
          document.body.style.overflow = ''; // Re-enable scrolling
        }
        return () => {
          document.body.style.overflow = ''; // Clean up when component unmounts
        };
      }, [isOpen]);
    
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Leave Details"
      className="leave-details-modal"
      overlayClassName="leave-details-modal-overlay"
    >
      <div className="modal-content">
        {leaveDetails.length > 0 ? (
          <table className="leave-details-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Leave Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveDetails.map((leave) => (
                <tr key={leave.id}>
                  <td>{leave.id}</td>
                  <td>{leave.startDate}</td>
                  <td>{leave.endDate}</td>
                  <td>{leave.reason}</td>
                  <td>{leave.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No leave details available.</p>
        )}
      </div>
    </Modal>
  );
};

export default LeaveDetailsModal;
