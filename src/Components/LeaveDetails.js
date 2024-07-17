import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../Css/LeaveDetails.css';

const LeaveDetails = ({ user }) => {
  const [leaves, setLeaves] = useState([]);
  const [error, setError] = useState(null);
  const [filteredLeaves, setFilteredLeaves] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('');

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await fetch(`http://localhost:3001/leaves?employeeId=${user.id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setLeaves(data);
        setFilteredLeaves(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchLeaves();
  }, [user.id]);

  const handleMonthChange = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);

    const filtered = leaves.filter(leave => {
      const leaveDate = new Date(leave.startDate);
      return leaveDate.getMonth() === parseInt(month);
    });
    setFilteredLeaves(filtered);
    setIsModalOpen(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="leave-details">
      <nav className="navbar">
        <div className="logo">Company Logo</div>
        <ul className="nav-links">
          <li><Link to="/dashboard">Attendance</Link></li>
          <li><Link to="/leavemanagement">Leave Request</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <header>
        <h2>Leave Details</h2>
        <button className="filter-btn" onClick={() => setIsModalOpen(true)}>Filter Leave</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.startDate}</td>
              <td>{leave.endDate}</td>
              <td>{leave.reason}</td>
              <td>{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Filter Leave"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Filter Leave</h2>
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="">Select Month</option>
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default LeaveDetails;
