// // LeaveRequestModal.js
// import React from 'react';
// import Modal from 'react-modal';
// import '../Css/LeaveRequestModal.css';
// import calendarIcon from '../Icon/date_calander.svg';
// import closeIcon from '../Icon/close.svg'; // Import the cross icon

// const LeaveRequestModal = ({ isOpen, onRequestClose }) => {
//     return (
//         <Modal
//             isOpen={isOpen}
//             onRequestClose={onRequestClose}
//             contentLabel="Leave Request"
//             className="leave-request-modal"
//             overlayClassName="leave-request-modal-overlay"
//         >
//             <div className="leave-request-popup">
//                 <button className="close-button" onClick={onRequestClose}>
//                     <img src={closeIcon} alt="Close" />
//                 </button>
//                 <h1>Leave Request</h1>
//                 <p>Make a Request for Leave</p>
//                 <form>
//                     <div className="form-group">
//                         <label>Employee Id : <span>12345695</span> </label>
//                     </div>
//                     <div className="form-group">
//                         <label>Employee Name : <span>Amar Kundara</span>  </label>
//                     </div>
//                     <div className="form-group-dp">
//                         <label>Reason for Leave:</label>
//                         <select>
//                             <option value="sick">Sick Leave</option>
//                             <option value="casual">Casual Leave</option>
//                             <option value="annual">Annual Leave</option>
//                         </select>
//                     </div>
//                     <div className="form-group-dates">
//                         <div className="form-group-date">
//                             <img src={calendarIcon} alt="calendar icon" />
//                             <label>Start Date</label>
//                             <input type="date" />
//                         </div>
//                         <div className="form-group-date end-date">
//                             <img src={calendarIcon} alt="calendar icon" />
//                             <label>End Date</label>
//                             <input type="date" />
//                         </div>
//                     </div>
//                     <div className="form-buttons">
//                         <button type="submit" className="request-button">Request</button>
//                         <button type="button" className="cancel-button" onClick={onRequestClose}>Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </Modal>
//     );
// };

// export default LeaveRequestModal;

// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import '../Css/LeaveRequestModal.css';
// import calendarIcon from '../Icon/date_calander.svg';
// import closeIcon from '../Icon/close.svg';

// const LeaveRequestModal = ({ isOpen, onRequestClose }) => {
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [reason, setReason] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const employeeId = localStorage.getItem('userId'); // Get employee_id from local storage

//         if (!employeeId) {
//             console.error('Employee ID not found in local storage');
//             return;
//         }

//         const leaveRequest = {
//             employee_id: employeeId,
//             start_date: startDate,
//             end_date: endDate,
//             reason,
//             status: 'pending',
//         };

//         try {
//             const response = await fetch('http://127.0.0.1:8003/users/leaves', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(leaveRequest),
//             });

//             if (response.ok) {
//                 // Handle successful response
//                 console.log('Leave request submitted successfully');
//                 onRequestClose(); // Close modal after successful submission
//             } else {
//                 // Handle error response
//                 console.error('Failed to submit leave request');
//             }
//         } catch (error) {
//             console.error('An error occurred while submitting the leave request:', error);
//         }
//     };

//     return (
//         <Modal
//             isOpen={isOpen}
//             onRequestClose={onRequestClose}
//             contentLabel="Leave Request"
//             className="leave-request-modal"
//             overlayClassName="leave-request-modal-overlay"
//         >
//             <div className="leave-request-popup">
//                 <button className="close-button" onClick={onRequestClose}>
//                     <img src={closeIcon} alt="Close" />
//                 </button>
//                 <h1>Leave Request</h1>
//                 <p>Make a Request for Leave</p>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label>Employee Id: <span>{localStorage.getItem('userId')}</span></label>
//                     </div>
//                     <div className="form-group">
//                         <label>Employee Name: <span>Amar Kundara</span></label>
//                     </div>
//                     <div className="form-group-dp">
//                         <label>Reason for Leave:</label>
//                         <select value={reason} onChange={(e) => setReason(e.target.value)}>
//                             <option value="sick">Sick Leave</option>
//                             <option value="casual">Casual Leave</option>
//                             <option value="annual">Annual Leave</option>
//                         </select>
//                     </div>
//                     <div className="form-group-dates">
//                         <div className="form-group-date">
//                             <img src={calendarIcon} alt="calendar icon" />
//                             <label>Start Date</label>
//                             <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
//                         </div>
//                         <div className="form-group-date end-date">
//                             <img src={calendarIcon} alt="calendar icon" />
//                             <label>End Date</label>
//                             <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
//                         </div>
//                     </div>
//                     <div className="form-buttons">
//                         <button type="submit" className="request-button">Request</button>
//                         <button type="button" className="cancel-button" onClick={onRequestClose}>Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </Modal>
//     );
// };

// export default LeaveRequestModal;
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../Css/LeaveRequestModal.css';
import calendarIcon from '../Icon/date_calander.svg';
import closeIcon from '../Icon/close.svg';

const LeaveRequestModal = ({ isOpen, onRequestClose }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('sick'); // Default value set to 'sick'

    const handleSubmit = async (e) => {
        e.preventDefault();
        const employeeId = localStorage.getItem('userId'); // Get employee_id from local storage

        if (!employeeId) {
            console.error('Employee ID not found in local storage');
            return;
        }

        const leaveRequest = {
            employee_id: employeeId,
            start_date: startDate,
            end_date: endDate,
            reason,
            status: 'pending',
        };

        try {
            const response = await fetch('http://127.0.0.1:8003/users/leaves', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(leaveRequest),
            });

            if (response.ok) {
                console.log('Leave request submitted successfully');
                alert('Leave request submitted successfully');
                onRequestClose(); // Close modal after successful submission
            } else {
                console.error('Failed to submit leave request');
            }
        } catch (error) {
            console.error('An error occurred while submitting the leave request:', error);
            alert('An error occurred while submitting the leave request');
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Leave Request"
            className="leave-request-modal"
            overlayClassName="leave-request-modal-overlay"
        >
            <div className="leave-request-popup">
                <button className="close-button" onClick={onRequestClose}>
                    <img src={closeIcon} alt="Close" />
                </button>
                <h1>Leave Request</h1>
                <p>Make a Request for Leave</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Employee Id: <span>{localStorage.getItem('userId')}</span></label>
                    </div>
                    <div className="form-group">
                        <label>Employee Name: <span>Amar Kundara</span></label>
                    </div>
                    <div className="form-group-dp">
                        <label>Reason for Leave:</label>
                        <select value={reason} onChange={(e) => setReason(e.target.value)}>
                            <option value="sick">Sick Leave</option>
                            <option value="casual">Casual Leave</option>
                            <option value="annual">Annual Leave</option>
                        </select>
                    </div>
                    <div className="form-group-dates">
                        <div className="form-group-date">
                            <img src={calendarIcon} alt="calendar icon" />
                            <label>Start Date</label>
                            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                        </div>
                        <div className="form-group-date end-date">
                            <img src={calendarIcon} alt="calendar icon" />
                            <label>End Date</label>
                            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="request-button">Request</button>
                        <button type="button" className="cancel-button" onClick={onRequestClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default LeaveRequestModal;
