import React, { useState } from 'react';
import '../Css/A_History.css';
import A_Navbar from './A_Navbar'; // Import the Navbar component

import profile from '../Image/jk.png';
//icons/ svg
import Search from '../Icon/search.svg';

const A_History = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  // Sample data for employees and attendance (Replace with your JSON data)
  const employees = [
    { id: 1, name: 'Ajay Shih', designation: 'Software Engineer', imgSrc: {profile} },
    { id: 2, name: 'Ajk Shih', designation: 'Manager', imgSrc: {profile} },
    { id: 3, name: 'Alexandar Kherr', designation: 'Developer', imgSrc: {profile} },
    { id: 4, name: 'Amanda Kherr', designation: 'Designer', imgSrc: {profile} },
    { id: 5, name: 'Ajay Shih', designation: 'Software Engineer', imgSrc: {profile} },
    { id: 6, name: 'Ajk Shih', designation: 'Manager', imgSrc: {profile} },
    { id: 7, name: 'Alexandar Kherr', designation: 'Developer', imgSrc: {profile} },
    { id: 8, name: 'Amanda Kherr', designation: 'Designer', imgSrc: {profile} },
  ];

  // Sample attendance data
  const allAttendance = [
    { date: '23-04-2024', status: 'Present', checkInTime: '5:00 PM', checkOutTime: '6:00 AM' },
    // More records...
  ];

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
    // Fetch and set attendance records for the selected employee
  };

  return (
    <div className="a-history">
      <A_Navbar /> {/* Include the navbar */}
      <div className="header">
      <div className="search-bar">
          <input type="text" placeholder="Search employee..." />
          <span className="search-icon">
          <img src={Search} alt="Profile"  />
          </span>
        </div>
        <div className="report-section">
          <button>Report</button>
        </div>
      </div>
      <h2>Attendance Month-August</h2>
      <div className="employee-cards">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className={`employee-card ${selectedEmployee?.id === employee.id ? 'selected' : ''}`}
            onClick={() => handleEmployeeSelect(employee)}
          >
            <img src={employee.imgSrc} alt={employee.name} />
            <h3>{employee.name}</h3>
            <p>{employee.designation}</p>
            <button>View</button>
          </div>
        ))}
        <div className="arrow-icon">→</div>
      </div>
      <div className="attendance-history">
        <h3>Attendance History</h3>
        {selectedEmployee && (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
                <th>Check-in Time</th>
                <th>Check-out Time</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record) => (
                <tr key={record.date}>
                  <td>{record.date}</td>
                  <td>{record.status}</td>
                  <td>{record.checkInTime}</td>
                  <td>{record.checkOutTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="pagination">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </div>
    </div>
  );
};

export default A_History;
