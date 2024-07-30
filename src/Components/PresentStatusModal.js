import React from 'react';
import '../Css/Modal.css';

const PresentStatusModal = ({ show, handleClose, data, title }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={handleClose} className="close-button">&times;</button>
        </div>
        <div className="modal-body">
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Designation</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <button onClick={handleClose}>Close</button>
          <button onClick={() => console.log('Download PDF')}>Download PDF</button>
        </div>
      </div>
    </div>
  );
};

export default PresentStatusModal;
