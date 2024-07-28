// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../Css/AdminDashboard.css'; // Importing the CSS file

// const AdminDashboard = ({ onLogout }) => {
//   const [attendance, setAttendance] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [adminAttendance, setAdminAttendance] = useState(null);
//   const [adminCheckInTime, setAdminCheckInTime] = useState(null);
//   const [adminCheckOutTime, setAdminCheckOutTime] = useState(null);
//   const [error, setError] = useState(null);
//   const [checkInRequests, setCheckInRequests] = useState([]);
//   async function approveCheckInRequest(requestId) {
//     // Fetch the check-in request
//     const checkInRequest = await fetch(`http://localhost:3000/checkInRequests/${requestId}`).then(response => response.json());

//     // Fetch the attendance record for the same employee and date
//     const attendanceRecords = await fetch(`http://localhost:3000/attendance`).then(response => response.json());
//     const attendanceRecord = attendanceRecords.find(record => record.employeeId === checkInRequest.employeeId && record.date === checkInRequest.date);

//     if (attendanceRecord) {
//       // Replace the old check-in time with the new approved check-in time
//       attendanceRecord.checkInTime = checkInRequest.requestedCheckInTime;

//       // Update the attendance record in the database
//       await fetch(`http://localhost:3000/attendance/${attendanceRecord.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(attendanceRecord)
//       });

//       // Update the status of the check-in request to approved
//       checkInRequest.status = 'approved';
//       await fetch(`http://localhost:3000/checkInRequests/${requestId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(checkInRequest)
//       });

//       console.log('Check-in time updated successfully');
//     } else {
//       // If no attendance record is found, create a new one
//       const newAttendanceRecord = {
//         id: Math.random().toString(36).substr(2, 9),
//         employeeId: checkInRequest.employeeId,
//         date: checkInRequest.date,
//         status: 'present',
//         checkInTime: checkInRequest.requestedCheckInTime
//       };

//       // Add the new attendance record to the database
//       await fetch(`http://localhost:3000/attendance`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newAttendanceRecord)
//       });

//       // Update the status of the check-in request to approved
//       checkInRequest.status = 'approved';
//       await fetch(`http://localhost:3000/checkInRequests/${requestId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(checkInRequest)
//       });

//       console.log('Check-in time updated successfully');
//     }
//   }


//   const getTodayDate = () => {
//     const today = new Date();
//     return today.toISOString().split('T')[0];
//   };

//   const todayDate = getTodayDate();

//   const fetchAdminAttendance = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/adminAttendance');
//       if (!response.ok) throw new Error('Network response was not ok');
//       const data = await response.json();
//       const todayAdminAttendance = data.find(record => record.date === todayDate);
//       setAdminAttendance(todayAdminAttendance);
//       if (todayAdminAttendance) {
//         setAdminCheckInTime(todayAdminAttendance.checkInTime);
//         setAdminCheckOutTime(todayAdminAttendance.checkOutTime);
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     const fetchAttendance = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/attendance');
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setAttendance(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/users');
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setEmployees(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/leaves');
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setLeaveRequests(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };
//     const fetchCheckInRequests = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/checkInRequests');
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setCheckInRequests(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchCheckInRequests();  
//     fetchAttendance();
//     fetchEmployees();
//     fetchLeaveRequests();
//     fetchAdminAttendance();
//   }, []);
//   const handleApproveRequest = async (requestId) => {
//     try {
//       // Fetch the check-in request
//       const request = checkInRequests.find(request => request.id === requestId);

//       // Fetch all attendance records to find if there is already a record for this employee and date
//       const attendanceResponse = await fetch('http://localhost:3001/attendance');
//       if (!attendanceResponse.ok) throw new Error('Failed to fetch attendance records');
//       const attendanceData = await attendanceResponse.json();

//       const existingRecord = attendanceData.find(record => 
//         record.employeeId === request.employeeId && record.date === request.date
//       );

//       if (existingRecord) {
//         // Update the existing attendance record with the new check-in time
//         existingRecord.checkInTime = request.requestedCheckInTime;

//         await fetch(`http://localhost:3001/attendance/${existingRecord.id}`, {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(existingRecord)
//         });
//       } else {
//         // Create a new attendance record if no existing record is found
//         const newRecord = {
//           employeeId: request.employeeId,
//           date: request.date,
//           status: 'present',
//           checkInTime: request.requestedCheckInTime
//         };

//         await fetch('http://localhost:3001/attendance', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(newRecord)
//         });
//       }

//       // Delete the check-in request after approval
//       await fetch(`http://localhost:3001/checkInRequests/${requestId}`, {
//         method: 'DELETE'
//       });

//       // Remove the approved request from the state
//       setCheckInRequests(checkInRequests.filter(request => request.id !== requestId));
//       alert('Check-in request approved');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleRejectRequest = async (requestId) => {
//     try {
//       await fetch(`http://localhost:3001/checkInRequests/${requestId}`, {
//         method: 'DELETE'
//       });

//       setCheckInRequests(checkInRequests.filter(request => request.id !== requestId));
//       alert('Check-in request rejected');
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const todaysAttendance = attendance.filter(record => record.date === todayDate);
//   const presentEmployees = todaysAttendance.filter(record => record.status === 'present');

//   // Find employees who are on leave today
//   const employeesOnLeave = leaveRequests
//     .filter(request => request.status === 'approved' && request.startDate <= todayDate && request.endDate >= todayDate)
//     .map(request => request.employeeId);

//   // Find employees who are absent
//   const absentEmployees = employees.filter(emp =>
//     !todaysAttendance.some(record => record.employeeId === emp.id) &&
//     !employeesOnLeave.includes(emp.id)
//   );

//   const pendingLeaves = leaveRequests.filter(request => request.status === 'pending');

//   // Handle check-in for admin
//   const handleCheckIn = async () => {
//     const checkInTime = new Date().toISOString();
//     try {
//       const response = await fetch('http://localhost:3001/adminAttendance', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ adminId: "1", date: todayDate, checkInTime }),
//       });
//       if (!response.ok) throw new Error('Network response was not ok');
//       setAdminCheckInTime(checkInTime);
//       fetchAdminAttendance(); // Refresh admin attendance
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Handle check-out for admin
//   const handleCheckOut = async () => {
//     const checkOutTime = new Date().toISOString();
//     try {
//       const response = await fetch(`http://localhost:3001/adminAttendance/${adminAttendance.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ checkOutTime }),
//       });
//       if (!response.ok) throw new Error('Network response was not ok');
//       setAdminCheckOutTime(checkOutTime);
//       fetchAdminAttendance(); // Refresh admin attendance
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="admin-dashboard">
//       <nav className="admin-nav">
//         <div className="logo">Company Logo</div>
//         <ul>
//           <li><Link to="/admin/dashboard">Dashboard</Link></li>
//           <li><Link to="/admin/manage-leaves">Manage Leaves</Link></li>
//           <li><Link to="/admin/employees">Employees</Link></li>
//           <li><button onClick={onLogout}>Logout</button></li>
//         </ul>
//       </nav>
//       <h2>Admin Dashboard</h2>
//       <div className="sections-container">
//         <div className="section">
//           <h3>Today's Present Employees - {presentEmployees.length}</h3>
//           <ul>
//             {presentEmployees.map((record, index) => (
//               <li key={index}>
//                 {employees.find(emp => emp.id == record.employeeId)?.username || 'Unknown'} - {record.checkInTime} to {record.checkOutTime}
//               </li>
//             ))}
//           </ul>
//           <Link to="/view-all-attendance">
//             <button className="view-all-attendance-button">View All Attendance</button>
//           </Link>
//         </div>
//         <div className="section">
//           <h3>Today's Absent Employees - {absentEmployees.length}</h3>
//           <ul>
//             {absentEmployees.map((emp, index) => (
//               <li key={index}>
//                 {emp.username}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>


//       <main>
//   <h3>Check-In Requests</h3>
//   <ul className="check-in-requests">
//     {checkInRequests.map(request => (
//       <li key={request.id}>
//         <p>Employee ID: {request.employeeId}</p>
//         <p>Date: {request.date}</p>
//         <p>Requested Check-In Time: {request.requestedCheckInTime}</p>
//         <button onClick={() => handleApproveRequest(request.id)}>Approve</button>
//         <button onClick={() => handleRejectRequest(request.id)}>Reject</button>
//       </li>
//     ))}
//   </ul>
// </main>
//       <div className="leave-and-attendance-container">
//         <div className="section leave-section">
//           <h3>Pending Leave Requests</h3>
//           <ul>
//             {pendingLeaves.map((leave, index) => (
//               <li key={index}>
//                 {leave.reason} ({leave.startDate} to {leave.endDate})
//               </li>
//             ))}
//           </ul>
//           <Link to="/admin/manage-leaves">
//             <button className="manage-leave-button">View All Leaves</button>
//           </Link>
//         </div>
//         <div className="section admin-attendance">
//           <h3>Admin Check-In/Check-Out</h3>
//           {adminCheckInTime ? (
//             <div>
//               <p>Checked in at: {new Date(adminCheckInTime).toLocaleTimeString()}</p>
//               {adminCheckOutTime ? (
//                 <p>Checked out at: {new Date(adminCheckOutTime).toLocaleTimeString()}</p>
//               ) : (
//                 <button onClick={handleCheckOut} className="check-out-button">Check Out</button>
//               )}
//             </div>
//           ) : (
//             <button onClick={handleCheckIn} className="check-in-button">Check In</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import A_Navbar from './A_Navbar';
import '../Css/AdminDashboard.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AdminDashboard = ({ onLogout }) => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [leavesData, setLeavesData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('admin');
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    // Fetch data from JSON Server
    fetch('http://localhost:3001/attendance')
      .then(response => response.json())
      .then(data => setAttendanceData(data));

    fetch('http://localhost:3001/leaves')
      .then(response => response.json())
      .then(data => setLeavesData(data));
  }, []);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const handleDateClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setDate(date);
    setShowCalendar(false);
  };

  // Chart data
  const chartData = {
    labels: ['24 July', 'Previous', 'Yesterday', 'Today'],
    datasets: [
      {
        label: 'No emp Present',
        data: [250, 270, 300, 300],
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
      },
      {
        label: 'No emp Absent',
        data: [50, 50, 50, 50],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      <A_Navbar onLogout={onLogout} />
      <div className="header">
        <h1>Attendance Admin</h1>
        <div className="calendar-container">
          <span>{date.toDateString()}</span>
          <button onClick={handleDateClick}>📅</button>
          {showCalendar && (
            <Calendar
              onChange={handleDateChange}
              value={date}
              className="calendar"
            />
          )}
        </div>
      </div>
      <div className="tabs">
        <button onClick={() => toggleTab('admin')}>Admin</button>
        <button onClick={() => toggleTab('personalize')}>Personalize</button>
      </div>
      {activeTab === 'admin' && (
        <div className="dashboard-content">
          <div className="employee-status">
            <div className="chart-container">
              <div className="section-title">Employee Status</div>
              <Bar data={chartData} />
            </div>
            <div className="leave-summary">
              <div className="section-title">Leave Summary</div>
              <div className="leave-summary-item">
                <span>Pending Leave</span>
                <span className="count">06</span>
              </div>
              <div className="leave-summary-item">
                <span>Approved Leave</span>
                <span className="count">06</span>
              </div>
              <div className="leave-summary-item">
                <span>Rejected Leave</span>
                <span className="count">01</span>
              </div>
            </div>
          </div>
          <div className="new-leave-request">
            <h2>New Leave Request</h2>
            <table>
              <thead>
                <tr>
                  <th>Employee id</th>
                  <th>Employee name</th>
                  <th>Start date</th>
                  <th>End date</th>
                  <th>Reason for Leave</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {leavesData
                  .filter(leave => leave.status === 'pending')
                  .map((leave) => (
                    <tr key={leave.id}>
                      <td>{leave.employeeId}</td>
                      <td>{/* Fetch employee name by ID */}</td>
                      <td>{leave.startDate}</td>
                      <td>{leave.endDate}</td>
                      <td>{leave.reason}</td>
                      <td>
                        <button className="approve-btn">Approve</button>
                        <button className="reject-btn">Reject</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* Add pagination controls here */}
          </div>
        </div>
      )}
      {activeTab === 'personalize' && (
        <div className="personalize-content">
          {/* Personalize content can go here */}
          This is other tab content.
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
