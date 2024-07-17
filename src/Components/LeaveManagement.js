// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../Css/RequestLeave.css';

// const RequestLeave = ({ user }) => {
//   const [reason, setReason] = useState('');
//   const [customReason, setCustomReason] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     const leaveReason = reason === 'Custom' ? customReason : reason;

//     fetch('http://localhost:3001/leaves', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         employeeId: user.id,
//         startDate,
//         endDate,
//         reason: leaveReason,
//         status: 'pending'
//       })
//     }).then(() => navigate('/leavemanagement'));
//   };

//   return (
//     <div className="request-leave-page">
//       <nav className="navbar">
//         <div className="logo">Company Logo</div>
//         <ul className="nav-links">
//           <li><Link to="/dashboard">Attendance</Link></li>
//           <li><Link to="/leavemanagement">Leave Request</Link></li>
//           <li><Link to="/profile">Profile</Link></li>
//         </ul>
//       </nav>
//       <div className="leave-request-form">
//         <h2>Leave Request</h2>
//         <label>Reason for Leave:</label>
//         <select value={reason} onChange={(e) => setReason(e.target.value)}>
//           <option value="">Select Reason</option>
//           <option value="Sick Leave">Sick Leave</option>
//           <option value="Vacation">Vacation</option>
//           <option value="Personal Leave">Personal Leave</option>
//           <option value="Custom">Custom</option>
//         </select>
//         {reason === 'Custom' && (
//           <input
//             type="text"
//             value={customReason}
//             onChange={(e) => setCustomReason(e.target.value)}
//             placeholder="Custom Reason"
//           />
//         )}
//         <label>Start Date:</label>
//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//         <label>End Date:</label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         />
//         <div className="form-buttons">
//           <button className="btn submit-btn" onClick={handleSubmit}>Submit</button>
//           <button className="btn cancel-btn" onClick={() => navigate('/leavemanagement')}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RequestLeave;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/RequestLeave.css';

const RequestLeave = ({ user }) => {
  const [reason, setReason] = useState('');
  const [customReason, setCustomReason] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const leaveReason = reason === 'Custom' ? customReason : reason;

    fetch('http://localhost:3001/leaves', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        employeeId: user.id,
        startDate,
        endDate,
        reason: leaveReason,
        status: 'pending'
      })
    })
    .then(response => response.json())
    .then(() => {
      alert('Leave request submitted successfully!');
      setReason('');
      setCustomReason('');
      setStartDate('');
      setEndDate('');
      navigate('/leavemanagement');
    })
    .catch(error => {
      alert('Failed to submit leave request.');
      console.error('Error:', error);
    });
  };

  return (
    <div className="request-leave-page">
      <nav className="navbar">
        <div className="logo">Company Logo</div>
        <ul className="nav-links">
          <li><Link to="/dashboard">Attendance</Link></li>
          <li><Link to="/leavemanagement">Leave Request</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <div className="leave-request-form">
        <h2>Leave Request</h2>
        <label>Reason for Leave:</label>
        <select value={reason} onChange={(e) => setReason(e.target.value)}>
          <option value="">Select Reason</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Vacation">Vacation</option>
          <option value="Personal Leave">Personal Leave</option>
          <option value="Custom">Custom</option>
        </select>
        {reason === 'Custom' && (
          <input
            type="text"
            value={customReason}
            onChange={(e) => setCustomReason(e.target.value)}
            placeholder="Custom Reason"
          />
        )}
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <div className="form-buttons">
          <button className="btn submit-btn" onClick={handleSubmit}>Submit</button>
          <button className="btn cancel-btn" onClick={() => navigate('/leavemanagement')}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default RequestLeave;
