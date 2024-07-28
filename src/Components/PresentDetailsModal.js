import React, { useEffect } from 'react';
import Modal from 'react-modal';
import '../Css/PresentDetailsModal.css';

const PresentDetailsModal = ({ isOpen, onRequestClose, presentDetails }) => {
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
      contentLabel="Present Details"
      className="present-details-modal"
      overlayClassName="present-details-modal-overlay"
    >
      <div className="modal-content">
        {presentDetails.length > 0 ? (
          <table className="present-details-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Check-In Time</th>
                <th>Check-Out Time</th>
              </tr>
            </thead>
            <tbody>
              {presentDetails.map((attendance) => (
                <tr key={attendance.id}>
                  <td>{attendance.date}</td>
                  <td>{attendance.checkInTime || 'N/A'}</td>
                  <td>{attendance.checkOutTime || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No attendance details available.</p>
        )}
      </div>
    </Modal>
  );
};

export default PresentDetailsModal;
