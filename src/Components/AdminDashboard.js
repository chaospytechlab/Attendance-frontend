// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import '../Css/AdminDashboard.css'; // Importing the CSS file

// // const AdminDashboard = ({ onLogout }) => {
// //   const [attendance, setAttendance] = useState([]);
// //   const [employees, setEmployees] = useState([]);
// //   const [leaveRequests, setLeaveRequests] = useState([]);
// //   const [adminAttendance, setAdminAttendance] = useState(null);
// //   const [adminCheckInTime, setAdminCheckInTime] = useState(null);
// //   const [adminCheckOutTime, setAdminCheckOutTime] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [checkInRequests, setCheckInRequests] = useState([]);
// //   async function approveCheckInRequest(requestId) {
// //     // Fetch the check-in request
// //     const checkInRequest = await fetch(`http://localhost:3000/checkInRequests/${requestId}`).then(response => response.json());

// //     // Fetch the attendance record for the same employee and date
// //     const attendanceRecords = await fetch(`http://localhost:3000/attendance`).then(response => response.json());
// //     const attendanceRecord = attendanceRecords.find(record => record.employeeId === checkInRequest.employeeId && record.date === checkInRequest.date);

// //     if (attendanceRecord) {
// //       // Replace the old check-in time with the new approved check-in time
// //       attendanceRecord.checkInTime = checkInRequest.requestedCheckInTime;

// //       // Update the attendance record in the database
// //       await fetch(`http://localhost:3000/attendance/${attendanceRecord.id}`, {
// //         method: 'PUT',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(attendanceRecord)
// //       });

// //       // Update the status of the check-in request to approved
// //       checkInRequest.status = 'approved';
// //       await fetch(`http://localhost:3000/checkInRequests/${requestId}`, {
// //         method: 'PUT',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(checkInRequest)
// //       });

// //       console.log('Check-in time updated successfully');
// //     } else {
// //       // If no attendance record is found, create a new one
// //       const newAttendanceRecord = {
// //         id: Math.random().toString(36).substr(2, 9),
// //         employeeId: checkInRequest.employeeId,
// //         date: checkInRequest.date,
// //         status: 'present',
// //         checkInTime: checkInRequest.requestedCheckInTime
// //       };

// //       // Add the new attendance record to the database
// //       await fetch(`http://localhost:3000/attendance`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(newAttendanceRecord)
// //       });

// //       // Update the status of the check-in request to approved
// //       checkInRequest.status = 'approved';
// //       await fetch(`http://localhost:3000/checkInRequests/${requestId}`, {
// //         method: 'PUT',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(checkInRequest)
// //       });

// //       console.log('Check-in time updated successfully');
// //     }
// //   }


// //   const getTodayDate = () => {
// //     const today = new Date();
// //     return today.toISOString().split('T')[0];
// //   };

// //   const todayDate = getTodayDate();

// //   const fetchAdminAttendance = async () => {
// //     try {
// //       const response = await fetch('http://localhost:3001/adminAttendance');
// //       if (!response.ok) throw new Error('Network response was not ok');
// //       const data = await response.json();
// //       const todayAdminAttendance = data.find(record => record.date === todayDate);
// //       setAdminAttendance(todayAdminAttendance);
// //       if (todayAdminAttendance) {
// //         setAdminCheckInTime(todayAdminAttendance.checkInTime);
// //         setAdminCheckOutTime(todayAdminAttendance.checkOutTime);
// //       }
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     const fetchAttendance = async () => {
// //       try {
// //         const response = await fetch('http://localhost:3001/attendance');
// //         if (!response.ok) throw new Error('Network response was not ok');
// //         const data = await response.json();
// //         setAttendance(data);
// //       } catch (error) {
// //         setError(error.message);
// //       }
// //     };

// //     const fetchEmployees = async () => {
// //       try {
// //         const response = await fetch('http://localhost:3001/users');
// //         if (!response.ok) throw new Error('Network response was not ok');
// //         const data = await response.json();
// //         setEmployees(data);
// //       } catch (error) {
// //         setError(error.message);
// //       }
// //     };

// //     const fetchLeaveRequests = async () => {
// //       try {
// //         const response = await fetch('http://localhost:3001/leaves');
// //         if (!response.ok) throw new Error('Network response was not ok');
// //         const data = await response.json();
// //         setLeaveRequests(data);
// //       } catch (error) {
// //         setError(error.message);
// //       }
// //     };
// //     const fetchCheckInRequests = async () => {
// //       try {
// //         const response = await fetch('http://localhost:3001/checkInRequests');
// //         if (!response.ok) throw new Error('Network response was not ok');
// //         const data = await response.json();
// //         setCheckInRequests(data);
// //       } catch (error) {
// //         setError(error.message);
// //       }
// //     };

// //     fetchCheckInRequests();  
// //     fetchAttendance();
// //     fetchEmployees();
// //     fetchLeaveRequests();
// //     fetchAdminAttendance();
// //   }, []);
// //   const handleApproveRequest = async (requestId) => {
// //     try {
// //       // Fetch the check-in request
// //       const request = checkInRequests.find(request => request.id === requestId);

// //       // Fetch all attendance records to find if there is already a record for this employee and date
// //       const attendanceResponse = await fetch('http://localhost:3001/attendance');
// //       if (!attendanceResponse.ok) throw new Error('Failed to fetch attendance records');
// //       const attendanceData = await attendanceResponse.json();

// //       const existingRecord = attendanceData.find(record => 
// //         record.employeeId === request.employeeId && record.date === request.date
// //       );

// //       if (existingRecord) {
// //         // Update the existing attendance record with the new check-in time
// //         existingRecord.checkInTime = request.requestedCheckInTime;

// //         await fetch(`http://localhost:3001/attendance/${existingRecord.id}`, {
// //           method: 'PUT',
// //           headers: { 'Content-Type': 'application/json' },
// //           body: JSON.stringify(existingRecord)
// //         });
// //       } else {
// //         // Create a new attendance record if no existing record is found
// //         const newRecord = {
// //           employeeId: request.employeeId,
// //           date: request.date,
// //           status: 'present',
// //           checkInTime: request.requestedCheckInTime
// //         };

// //         await fetch('http://localhost:3001/attendance', {
// //           method: 'POST',
// //           headers: { 'Content-Type': 'application/json' },
// //           body: JSON.stringify(newRecord)
// //         });
// //       }

// //       // Delete the check-in request after approval
// //       await fetch(`http://localhost:3001/checkInRequests/${requestId}`, {
// //         method: 'DELETE'
// //       });

// //       // Remove the approved request from the state
// //       setCheckInRequests(checkInRequests.filter(request => request.id !== requestId));
// //       alert('Check-in request approved');
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   const handleRejectRequest = async (requestId) => {
// //     try {
// //       await fetch(`http://localhost:3001/checkInRequests/${requestId}`, {
// //         method: 'DELETE'
// //       });

// //       setCheckInRequests(checkInRequests.filter(request => request.id !== requestId));
// //       alert('Check-in request rejected');
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   const todaysAttendance = attendance.filter(record => record.date === todayDate);
// //   const presentEmployees = todaysAttendance.filter(record => record.status === 'present');

// //   // Find employees who are on leave today
// //   const employeesOnLeave = leaveRequests
// //     .filter(request => request.status === 'approved' && request.startDate <= todayDate && request.endDate >= todayDate)
// //     .map(request => request.employeeId);

// //   // Find employees who are absent
// //   const absentEmployees = employees.filter(emp =>
// //     !todaysAttendance.some(record => record.employeeId === emp.id) &&
// //     !employeesOnLeave.includes(emp.id)
// //   );

// //   const pendingLeaves = leaveRequests.filter(request => request.status === 'pending');

// //   // Handle check-in for admin
// //   const handleCheckIn = async () => {
// //     const checkInTime = new Date().toISOString();
// //     try {
// //       const response = await fetch('http://localhost:3001/adminAttendance', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ adminId: "1", date: todayDate, checkInTime }),
// //       });
// //       if (!response.ok) throw new Error('Network response was not ok');
// //       setAdminCheckInTime(checkInTime);
// //       fetchAdminAttendance(); // Refresh admin attendance
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   // Handle check-out for admin
// //   const handleCheckOut = async () => {
// //     const checkOutTime = new Date().toISOString();
// //     try {
// //       const response = await fetch(`http://localhost:3001/adminAttendance/${adminAttendance.id}`, {
// //         method: 'PUT',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ checkOutTime }),
// //       });
// //       if (!response.ok) throw new Error('Network response was not ok');
// //       setAdminCheckOutTime(checkOutTime);
// //       fetchAdminAttendance(); // Refresh admin attendance
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   if (error) {
// //     return <div className="error">Error: {error}</div>;
// //   }

// //   return (
// //     <div className="admin-dashboard">
// //       <nav className="admin-nav">
// //         <div className="logo">Company Logo</div>
// //         <ul>
// //           <li><Link to="/admin/dashboard">Dashboard</Link></li>
// //           <li><Link to="/admin/manage-leaves">Manage Leaves</Link></li>
// //           <li><Link to="/admin/employees">Employees</Link></li>
// //           <li><button onClick={onLogout}>Logout</button></li>
// //         </ul>
// //       </nav>
// //       <h2>Admin Dashboard</h2>
// //       <div className="sections-container">
// //         <div className="section">
// //           <h3>Today's Present Employees - {presentEmployees.length}</h3>
// //           <ul>
// //             {presentEmployees.map((record, index) => (
// //               <li key={index}>
// //                 {employees.find(emp => emp.id == record.employeeId)?.username || 'Unknown'} - {record.checkInTime} to {record.checkOutTime}
// //               </li>
// //             ))}
// //           </ul>
// //           <Link to="/view-all-attendance">
// //             <button className="view-all-attendance-button">View All Attendance</button>
// //           </Link>
// //         </div>
// //         <div className="section">
// //           <h3>Today's Absent Employees - {absentEmployees.length}</h3>
// //           <ul>
// //             {absentEmployees.map((emp, index) => (
// //               <li key={index}>
// //                 {emp.username}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>


// //       <main>
// //   <h3>Check-In Requests</h3>
// //   <ul className="check-in-requests">
// //     {checkInRequests.map(request => (
// //       <li key={request.id}>
// //         <p>Employee ID: {request.employeeId}</p>
// //         <p>Date: {request.date}</p>
// //         <p>Requested Check-In Time: {request.requestedCheckInTime}</p>
// //         <button onClick={() => handleApproveRequest(request.id)}>Approve</button>
// //         <button onClick={() => handleRejectRequest(request.id)}>Reject</button>
// //       </li>
// //     ))}
// //   </ul>
// // </main>
// //       <div className="leave-and-attendance-container">
// //         <div className="section leave-section">
// //           <h3>Pending Leave Requests</h3>
// //           <ul>
// //             {pendingLeaves.map((leave, index) => (
// //               <li key={index}>
// //                 {leave.reason} ({leave.startDate} to {leave.endDate})
// //               </li>
// //             ))}
// //           </ul>
// //           <Link to="/admin/manage-leaves">
// //             <button className="manage-leave-button">View All Leaves</button>
// //           </Link>
// //         </div>
// //         <div className="section admin-attendance">
// //           <h3>Admin Check-In/Check-Out</h3>
// //           {adminCheckInTime ? (
// //             <div>
// //               <p>Checked in at: {new Date(adminCheckInTime).toLocaleTimeString()}</p>
// //               {adminCheckOutTime ? (
// //                 <p>Checked out at: {new Date(adminCheckOutTime).toLocaleTimeString()}</p>
// //               ) : (
// //                 <button onClick={handleCheckOut} className="check-out-button">Check Out</button>
// //               )}
// //             </div>
// //           ) : (
// //             <button onClick={handleCheckIn} className="check-in-button">Check In</button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;

// // import React, { useState, useEffect } from 'react';
// // import { Bar } from 'react-chartjs-2';
// // import 'chart.js/auto';
// // import A_Navbar from './A_Navbar';
// // import '../Css/AdminDashboard.css';
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';

// // const AdminDashboard = ({ onLogout }) => {
// //   const [attendanceData, setAttendanceData] = useState([]);
// //   const [leavesData, setLeavesData] = useState([]);
// //   const [date, setDate] = useState(new Date());
// //   const [activeTab, setActiveTab] = useState('admin');
// //   const [showCalendar, setShowCalendar] = useState(false);

// //   useEffect(() => {
// //     // Fetch data from JSON Server
// //     fetch('http://localhost:3001/attendance')
// //       .then(response => response.json())
// //       .then(data => setAttendanceData(data));

// //     fetch('http://localhost:3001/leaves')
// //       .then(response => response.json())
// //       .then(data => setLeavesData(data));
// //   }, []);

// //   const toggleTab = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const handleDateClick = () => {
// //     setShowCalendar(!showCalendar);
// //   };

// //   const handleDateChange = (date) => {
// //     setDate(date);
// //     setShowCalendar(false);
// //   };

// //   // Chart data
// //   const chartData = {
// //     labels: ['24 July', 'Previous', 'Yesterday', 'Today'],
// //     datasets: [
// //       {
// //         label: 'No emp Present',
// //         data: [250, 270, 300, 300],
// //         backgroundColor: 'rgba(0, 123, 255, 0.5)',
// //       },
// //       {
// //         label: 'No emp Absent',
// //         data: [50, 50, 50, 50],
// //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
// //       },
// //     ],
// //   };

// //   return (
// //     <div className="admin-dashboard">
// //       <A_Navbar onLogout={onLogout} />
// //       <div className="header">
// //         <h1>Attendance Admin</h1>
// //         <div className="calendar-container">
// //           <span>{date.toDateString()}</span>
// //           <button onClick={handleDateClick}>📅</button>
// //           {showCalendar && (
// //             <Calendar
// //               onChange={handleDateChange}
// //               value={date}
// //               className="calendar"
// //             />
// //           )}
// //         </div>
// //       </div>
// //       <div className="tabs">
// //         <button onClick={() => toggleTab('admin')}>Admin</button>
// //         <button onClick={() => toggleTab('personalize')}>Personalize</button>
// //       </div>
// //       {activeTab === 'admin' && (
// //         <div className="dashboard-content">
// //           <div className="employee-status">
// //             <div className="chart-container">
// //               <div className="section-title">Employee Status</div>
// //               <Bar data={chartData} />
// //             </div>
// //             <div className="leave-summary">
// //               <div className="section-title">Leave Summary</div>
// //               <div className="leave-summary-item">
// //                 <span>Pending Leave</span>
// //                 <span className="count">06</span>
// //               </div>
// //               <div className="leave-summary-item">
// //                 <span>Approved Leave</span>
// //                 <span className="count">06</span>
// //               </div>
// //               <div className="leave-summary-item">
// //                 <span>Rejected Leave</span>
// //                 <span className="count">01</span>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="new-leave-request">
// //             <h2>New Leave Request</h2>
// //             <table>
// //               <thead>
// //                 <tr>
// //                   <th>Employee id</th>
// //                   <th>Employee name</th>
// //                   <th>Start date</th>
// //                   <th>End date</th>
// //                   <th>Reason for Leave</th>
// //                   <th>Action</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {leavesData
// //                   .filter(leave => leave.status === 'pending')
// //                   .map((leave) => (
// //                     <tr key={leave.id}>
// //                       <td>{leave.employeeId}</td>
// //                       <td>{/* Fetch employee name by ID */}</td>
// //                       <td>{leave.startDate}</td>
// //                       <td>{leave.endDate}</td>
// //                       <td>{leave.reason}</td>
// //                       <td>
// //                         <button className="approve-btn">Approve</button>
// //                         <button className="reject-btn">Reject</button>
// //                       </td>
// //                     </tr>
// //                   ))}
// //               </tbody>
// //             </table>
// //             {/* Add pagination controls here */}
// //           </div>
// //         </div>
// //       )}
// //       {activeTab === 'personalize' && (
// //         <div className="personalize-content">
// //           {/* Personalize content can go here */}
// //           This is other tab content.
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AdminDashboard;




// // import React, { useState, useEffect } from 'react';
// // import { Bar } from 'react-chartjs-2';
// // import 'chart.js/auto';
// // import A_Navbar from './A_Navbar';
// // import '../Css/AdminDashboard.css';
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';
// // import { ReactComponent as AdminIcon } from '../Icon/a_tab.svg';
// // import { ReactComponent as PersonalizeIcon } from '../Icon/u_tab.svg';

// // import EmployeeDashboard from './EmployeeDashboard';

// // const AdminDashboard = ({ onLogout }) => {
// //   const [attendanceData, setAttendanceData] = useState([]);
// //   const [leavesData, setLeavesData] = useState([]);
// //   const [date, setDate] = useState(new Date());
// //   const [activeTab, setActiveTab] = useState('admin');
// //   const [showCalendar, setShowCalendar] = useState(false);

// //   useEffect(() => {
// //     // Fetch data from JSON Server
// //     fetch('http://localhost:3001/attendance')
// //       .then(response => response.json())
// //       .then(data => setAttendanceData(data));

// //     fetch('http://localhost:3001/leaves')
// //       .then(response => response.json())
// //       .then(data => setLeavesData(data));
// //   }, []);

// //   const toggleTab = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const handleDateClick = () => {
// //     setShowCalendar(!showCalendar);
// //   };

// //   const handleDateChange = (date) => {
// //     setDate(date);
// //     setShowCalendar(false);
// //   };

// //   // Chart data
// //   const chartData = {
// //     labels: ['24 July', 'Previous', 'Yesterday', 'Today'],
// //     datasets: [
// //       {
// //         label: 'No emp Present',
// //         data: [250, 270, 300, 300],
// //         backgroundColor: 'rgba(0, 123, 255, 0.5)',
// //       },
// //       {
// //         label: 'No emp Absent',
// //         data: [50, 50, 50, 50],
// //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
// //       },
// //     ],
// //   };

// //   return (
// //     <div className="admin-dashboard">
// //       <A_Navbar onLogout={onLogout} />
// //       <div className="header">
// //         <h1>Attendance Admin</h1>
// //         <div className="calendar-container">
// //           <span>{date.toDateString()}</span>
// //           <button onClick={handleDateClick}>📅</button>
// //           {showCalendar && (
// //             <Calendar
// //               onChange={handleDateChange}
// //               value={date}
// //               className="calendar"
// //             />
// //           )}
// //         </div>
// //       </div>
// //       <div className="tabs">
// //         <button 
// //           className={activeTab === 'admin' ? 'active' : ''} 
// //           onClick={() => toggleTab('admin')}
// //         >
// //             <AdminIcon className="tab-icon" /> Admin
// //         </button>
// //         <button 
// //           className={activeTab === 'personalize' ? 'active' : ''} 
// //           onClick={() => toggleTab('personalize')}
// //         >
// //           <PersonalizeIcon className="tab-icon" /> Personalize
// //         </button>
// //       </div>
// //       {activeTab === 'admin' && (
// //         <div className="dashboard-content">
// //           <div className="employee-status">
// //             <div className="chart-container">
// //               <div className="section-title">Employee Status</div>
// //               <Bar data={chartData} />
// //             </div>
// //             <div className="leave-summary">
// //               <div className="section-title">Leave Summary</div>
// //               <div className="leave-summary-item">
// //                 <span>Pending Leave</span>
// //                 <span className="count">06</span>
// //               </div>
// //               <div className="leave-summary-item">
// //                 <span>Approved Leave</span>
// //                 <span className="count">06</span>
// //               </div>
// //               <div className="leave-summary-item">
// //                 <span>Rejected Leave</span>
// //                 <span className="count">01</span>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="new-leave-request">
// //             <h2>New Leave Request</h2>
// //             <table>
// //               <thead>
// //                 <tr>
// //                   <th>Employee id</th>
// //                   <th>Employee name</th>
// //                   <th>Start date</th>
// //                   <th>End date</th>
// //                   <th>Reason for Leave</th>
// //                   <th>Action</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {leavesData
// //                   .filter(leave => leave.status === 'pending')
// //                   .map((leave) => (
// //                     <tr key={leave.id}>
// //                       <td>{leave.employeeId}</td>
// //                       <td>{/* Fetch employee name by ID */}</td>
// //                       <td>{leave.startDate}</td>
// //                       <td>{leave.endDate}</td>
// //                       <td>{leave.reason}</td>
// //                       <td>
// //                         <button className="approve-btn">Approve</button>
// //                         <button className="reject-btn">Reject</button>
// //                       </td>
// //                     </tr>
// //                   ))}
// //               </tbody>
// //             </table>
// //             {/* Add pagination controls here */}
// //           </div>
// //         </div>
// //       )}
// //       {activeTab === 'personalize' && (
// //         <div className="personalize-content">
// //           {/* Personalize content can go here */}
// //           This is other tab content.
// //           {/* <EmployeeDashboard /> */}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AdminDashboard;


// import React, { useState, useEffect ,useRef } from 'react';
// import { Bar } from 'react-chartjs-2';
// import 'chart.js/auto';
// import A_Navbar from './A_Navbar';
// import '../Css/AdminDashboard.css';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { ReactComponent as AdminIcon } from '../Icon/a_tab.svg';
// import { ReactComponent as PersonalizeIcon } from '../Icon/u_tab.svg';
// //Models
// import Modal from './Modal'; // Present Modal

// import EmployeeDashboard from './EmployeeDashboard';

// import { Chart, registerables } from 'chart.js';

// Chart.register(...registerables);

// const AdminDashboard = ({ onLogout }) => {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [leavesData, setLeavesData] = useState([]);
//   const [date, setDate] = useState(new Date());
//   const [activeTab, setActiveTab] = useState('admin');
//   const [showCalendar, setShowCalendar] = useState(false);
//     const [showModal, setShowModal] = useState(false);
//     const [presentData, setPresentData] = useState([]);
//     const chartRef = useRef(null);

//     const handleModalClose = () => setShowModal(false);

//   useEffect(() => {
//     // Fetch data from JSON Server
//     fetch('http://localhost:3001/attendance')
//       .then(response => response.json())
//       .then(data => setAttendanceData(data));

//     fetch('http://localhost:3001/leaves')
//       .then(response => response.json())
//       .then(data => setLeavesData(data));
//   }, []);

//   const toggleTab = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleDateClick = () => {
//     setShowCalendar(!showCalendar);
//   };

//   const handleDateChange = (date) => {
//     setDate(date);
//     setShowCalendar(false);
//   };

//   // // Chart data
//   // const chartData = {
//   //   labels: ['24 July', 'Previous', 'Yesterday', 'Today'],
//   //   datasets: [
//   //     {
//   //       label: 'No emp Present',
//   //       data: [250, 270, 300, 300],
//   //       backgroundColor: 'rgba(0, 123, 255, 0.5)',
//   //     },
//   //     {
//   //       label: 'No emp Absent',
//   //       data: [50, 50, 50, 50],
//   //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//   //     },
//   //   ],
//   // };


// const chartData = {
//   labels: ['24 July', 'Previous', 'Yesterday', 'Today'],
//   datasets: [
//     {
//       label: 'No emp Present',
//       data: [250, 270, 300, 300],
//       backgroundColor: 'rgba(0, 123, 255, 0.5)',
//       barThickness: 30,
//       hoverBorderColor: '#007bff',
//     },
//     {
//       label: 'No emp Absent',
//       data: [50, 50, 50, 50],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       barThickness: 30,
//       hoverBorderColor: '#007bff',
//     },
//   ],
// };

// const chartOptions = {
//   responsive: true,
//   maintainAspectRatio: false,
//   onClick: (event, elements) => {
//     if (elements.length > 0) {
//       const datasetIndex = elements[0].datasetIndex;
//       const index = elements[0].index;
//       const label = chartData.labels[index];
//       const datasetLabel = chartData.datasets[datasetIndex].label;
//       const value = chartData.datasets[datasetIndex].data[index];

   
//       if (datasetLabel === 'No emp Present') {
//         fetchPresentData();
//         setShowModal(true);
//       }
//     }
//   },
//   scales: {
//     x: {
//       barThickness: 10, // Adjust this value to decrease column width
//     },
//   },
  
// };

// const chartContainerStyle = {
//   width: '90%', // Adjust this value to increase chart width
//   height: '400px', // Adjust this value to set chart height
 
// };


//   // Simulate fetching data from a JSON file
//   const fetchPresentData = () => {
//     // Here you should fetch the data from your JSON file
//     // For demonstration, using hardcoded data
//     const data = [
//       {
//         id: '15f9',
//         employeeId: '1ba6',
//         username: 'vv',
//         role: 'employee',
//         date: '2024-07-04',
//         status: 'present',
//         checkInTime: '8:00 AM',
//         checkOutTime: '5:00 PM',
//       },
//       {
//         id: '02ca',
//         employeeId: 'ec3c',
//         username: 'suga',
//         role: 'employee',
//         date: '2024-07-07',
//         status: 'present',
//         checkInTime: '9:00 AM',
//         checkOutTime: '6:00 PM',
//       },
//     ];
//     setPresentData(data);
//   };
//   return (
    
//     <div className="admin-dashboard">
//       <A_Navbar onLogout={onLogout} />
//       <div className="header">
//         <h1>Attendance Admin</h1>
//         <div className="calendar-container">
//           <span>{date.toDateString()}</span>
//           <button onClick={handleDateClick}>📅</button>
//           {showCalendar && (
//             <Calendar
//               onChange={handleDateChange}
//               value={date}
//               className="calendar"
//             />
//           )}
//         </div>
//       </div>
//       <div className="tabs">
//         <button 
//           className={activeTab === 'admin' ? 'active' : ''} 
//           onClick={() => toggleTab('admin')}
//         >
//           <AdminIcon className="tab-icon" style={{ fill: activeTab === 'admin' ? 'white' : 'black' }} /> Admin
//         </button>
//         <button 
//           className={activeTab === 'personalize' ? 'active' : ''} 
//           onClick={() => toggleTab('personalize')}
//         >
//           <PersonalizeIcon className="tab-icon" style={{ fill: activeTab === 'personalize' ? 'white' : 'black' }} /> Personalize
//         </button>
//       </div>
//       {activeTab === 'admin' && (
//         <div className="dashboard-content">
//           <div className="employee-status">
//             <div className="chart-container">
//               <div className="section-title">Employee Status</div>
//               <Bar data={chartData}   style={chartContainerStyle}  options={chartOptions}  />
//               <Modal show={showModal} handleClose={handleModalClose} data={presentData} />        
//             </div>
//             <div className="leave-summary">
//               <div className="section-title">Leave Summary</div>
//               <div className="leave-summary-item">
//                 <span>Pending Leave</span>
//                 <span className="count">06</span>
//               </div>
//               <div className="leave-summary-item">
//                 <span>Approved Leave</span>
//                 <span className="count">06</span>
//               </div>
//               <div className="leave-summary-item">
//                 <span>Rejected Leave</span>
//                 <span className="count">01</span>
//               </div>
//             </div>
//           </div>
//           <div className="new-leave-request">
//             <h2>New Leave Request</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Employee id</th>
//                   <th>Employee name</th>
//                   <th>Start date</th>
//                   <th>End date</th>
//                   <th>Reason for Leave</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leavesData
//                   .filter(leave => leave.status === 'pending')
//                   .map((leave) => (
//                     <tr key={leave.id}>
//                       <td>{leave.employeeId}</td>
//                       <td>{/* Fetch employee name by ID */}</td>
//                       <td>{leave.startDate}</td>
//                       <td>{leave.endDate}</td>
//                       <td>{leave.reason}</td>
//                       <td>
//                         <button className="approve-btn">Approve</button>
//                         <button className="reject-btn">Reject</button>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//             {/* Add pagination controls here */}
//           </div>
//         </div>
//       )}
//       {activeTab === 'personalize' && (
//         <div className="personalize-content">
//           {/* Personalize content can go here */}
//           This is other tab content.
//            {/* <EmployeeDashboard /> */}

//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;











import React, { useState, useEffect ,useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import A_Navbar from './A_Navbar';
import '../Css/AdminDashboard.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ReactComponent as AdminIcon } from '../Icon/a_tab.svg';
import { ReactComponent as PersonalizeIcon } from '../Icon/u_tab.svg';
// Models
import Modal from './Modal'; // Present Modal
import AbsentModal from './AbsentModal'; // Absent Modal
import PresentStatusModal from './PresentStatusModal';

import EmployeeDashboard from './EmployeeDashboard';
import LeaveDetailsModal from './LeaveDetailsModal';
import A_LeaveDetailsModal from './A_LeavDetailsModel';

import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const AdminDashboard = ({ onLogout, initialLeaves  }) => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [leavesData, setLeavesData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('admin');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAbsentModal, setShowAbsentModal] = useState(false);

  const [showTodayStatusModal, setShowTodayStatusModal] = useState(false);

  const [presentData, setPresentData] = useState([]);
  const [absentData, setAbsentData] = useState([]);
  const chartRef = useRef(null);
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(''); // Track selected status
  const [attendance, setAttendance] = useState([]);
  const handleModalClose = () => setShowModal(false);
  const handleAbsentModalClose = () => setShowAbsentModal(false);

  const [employeeData, setEmployeeData] = useState([]);


// Define your state and data fetching functions for the third modal
const [showPresentStatusModal, setShowPresentStatusModal] = useState(true);
const [presentStatusData, setPresentStatusData] = useState([]);
const [error, setError] = useState(null);
const [filteredLeaves, setFilteredLeaves] = useState([]);
const [leaves, setLeaves] = useState([]);
const [users, setUsers] = useState([]);

  const [modalTitle, setModalTitle] = useState('');
  useEffect(() => {
    // Fetch data from JSON Server
    fetch('http://localhost:3001/attendance')
      .then(response => response.json())
      .then(data => setAttendanceData(data));

    fetch('http://localhost:3001/leaves')
      .then(response => response.json())
      .then(data => setLeavesData(data));

      const fetchLeaves = async () => {
        try {
          const response = await fetch(`http://localhost:3001/leaves`);
          if (!response.ok) throw new Error('Network response was not ok');
          const data = await response.json();
          setLeaves(data);
          setFilteredLeaves(data); // Set filtered leaves initially to all leaves
        } catch (error) {
          setError(error.message);
        }
      };

    fetchLeaves();
  }, []);
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch('http://localhost:3001/attendance');
        const data = await response.json();
        setAttendance(data.attendance || []);
        setUsers(data.users || []);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchAttendance();
  }, []);

  const handleShowTodayStatus = () => {
    console.log("Attendance data:", attendance); // Debug log
    if (!attendance || attendance.length === 0) {
      console.warn('Attendance data is not available.');
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    const presentEmployees = attendance
      .filter(record => record.date === today && record.status === 'present')
      .map(record => {
        const user = users.find(user => user.id === record.employeeId);
        return {
          ...record,
          username: user?.username || 'Unknown',
          role: user?.role || 'Unknown',
        };
      });

    console.log("Present employees:", presentEmployees); // Debug log
    setPresentStatusData(presentEmployees);
    setShowTodayStatusModal(true);
  };

  const handleTodayModalClose = () => {
    setShowTodayStatusModal(false);
  };


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

  const chartData = {
    labels: ['24 July', 'Previous', 'Yesterday', 'Today'],
    datasets: [
      {
        label: 'No emp Present',
        data: [250, 270, 300, 300],
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        barThickness: 30,
        hoverBorderColor: '#007bff',
      },
      {
        label: 'No emp Absent',
        data: [50, 50, 50, 50],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        barThickness: 30,
        hoverBorderColor: '#007bff',
      },
    ],
    
  };
  const openLeaveModal = () => setIsLeaveModalOpen(true);
  const closeLeaveModal = () => setIsLeaveModalOpen(false);
  
// Filter functions
const showPendingLeaves = () => {
  setSelectedStatus('pending');
  setFilteredLeaves(leaves.filter(leave => leave.status === 'pending'));
  openLeaveModal();
};

const showApprovedLeaves = () => {
  setSelectedStatus('approved');
  setFilteredLeaves(leaves.filter(leave => leave.status === 'approved'));
  openLeaveModal();
};
const showRejectedLeaves = () => {
  setSelectedStatus('reject');
  setFilteredLeaves(leaves.filter(leave => leave.status === 'rejected'));
  openLeaveModal();
};
const leaveDetails = filteredLeaves; 

  useEffect(() => {
    console.log('showTodayStatusModal updated:', showTodayStatusModal);
  }, [showTodayStatusModal]);
  

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  onClick: (event, elements) => {
    console.log('Click event detected');
    console.log('Elements:', elements);

    if (elements.length > 0) {
      const datasetIndex = elements[0].datasetIndex;
      const index = elements[0].index;
      // console.log('Clicked label:', chartData.labels[index]); // Verify the label
      const datasetLabel = chartData.datasets[datasetIndex].label;

     if (datasetLabel === 'No emp Present') {
        fetchPresentData();
        setShowModal(true);
      } else if (datasetLabel === 'No emp Absent') {
        fetchAbsentData();
        setShowAbsentModal(true);
      }
    } 
  },
  scales: {
    x: {
      barThickness: 10,
    },
  },
  interaction: {
    mode: 'nearest', // Determines which element is 'nearest' to the event position
    axis: 'x', // 'x', 'y', or 'xy' - determines which axis to use for the interaction
    intersect: true, // Ensures that the interaction only happens when the point intersects with an element
  },
};

  const chartContainerStyle = {
    width: '90%', // Adjust this value to increase chart width
    height: '400px', // Adjust this value to set chart height
  };

  // Simulate fetching data from a JSON file
  const fetchPresentData = () => {
    // Here you should fetch the data from your JSON file
    // For demonstration, using hardcoded data
    const data = [
      {
        id: '15f9',
        employeeId: '1ba6',
        username: 'vv',
        role: 'employee',
        date: '2024-07-04',
        status: 'present',
        checkInTime: '8:00 AM',
        checkOutTime: '5:00 PM',
      },
      {
        id: '02ca',
        employeeId: 'ec3c',
        username: 'suga',
        role: 'employee',
        date: '2024-07-07',
        status: 'present',
        checkInTime: '9:00 AM',
        checkOutTime: '6:00 PM',
      },
    ];
    setPresentData(data);
    console.log("Fetching today's status details");
  };

  const fetchAbsentData = () => {
    // Here you should fetch the data from your JSON file
    // For demonstration, using hardcoded data
    const data = [
      {
        id: '15f9',
        employeeId: '1ba6',
        username: 'vv',
        role: 'employee',
        date: '2024-07-04',
        status: 'absent',
        role: 'Product Manager',
        startDate: '2024-07-02',
        endDate: '2024-07-05',
        reason: 'Personal Leave',
      },
      {
        id: '02ca',
        employeeId: 'ec3c',
        username: 'suga',
        role: 'employee',
        date: '2024-07-07',
        status: 'absent',
        role: 'Product Manager',
        startDate: '2024-07-02',
        endDate: '2024-07-05',
        reason: 'Personal Leave',
      },
    ];
    setAbsentData(data);
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
        <button 
          className={activeTab === 'admin' ? 'active' : ''} 
          onClick={() => toggleTab('admin')}
        >
          <AdminIcon className="tab-icon" style={{ fill: activeTab === 'admin' ? 'white' : 'black' }} /> Admin
        </button>
        <button 
          className={activeTab === 'personalize' ? 'active' : ''} 
          onClick={() => toggleTab('personalize')}
        >
          <PersonalizeIcon className="tab-icon" style={{ fill: activeTab === 'personalize' ? 'white' : 'black' }} /> Personalize
        </button>
      </div>
      {activeTab === 'admin' && (
        <div className="dashboard-content">
          <div className="employee-status">
            <div className="chart-container">
              <div className="section-title-chart">
              <h2>Employee Status</h2>
              <h3  onClick={handleShowTodayStatus}>Today Status</h3>
              </div>
              <Bar data={chartData} style={chartContainerStyle} options={chartOptions} />
              <Modal show={showModal} handleClose={handleModalClose} data={presentData} />        
              <AbsentModal show={showAbsentModal} handleClose={handleAbsentModalClose} data={absentData} />        
              <PresentStatusModal
        show={showTodayStatusModal}
        handleClose={handleTodayModalClose}
        data={presentStatusData}
        title="Today's Employee Status"
      />
            </div>
            <div className="leave-summary">
              <div className="section-title">Leave Summary</div>
              <div className="leave-summary-item" onClick={showPendingLeaves}>
                <span>Pending Leave</span>
                <span className="count">{leaves.filter(leave => leave.status === 'pending').length}</span>
              </div>
              <div className="leave-summary-item"  onClick={showApprovedLeaves}>
                <span>Approved Leave</span>
                <span className="count">{leaves.filter(leave => leave.status === 'approved').length}</span>
              </div>
              <div className="leave-summary-item"  onClick={showRejectedLeaves}>
                <span>Rejected Leave</span>
                <span className="count">{leaves.filter(leave => leave.status === 'rejected').length}</span>
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
          {/* <LeaveDetailsModal
        isOpen={isLeaveModalOpen}
        onRequestClose={closeLeaveModal}
        leaveDetails={leaveDetails}
      /> */}
          <A_LeaveDetailsModal
        isOpen={isLeaveModalOpen}
        onRequestClose={closeLeaveModal}
        leaveDetails={leaveDetails}
        selectedStatus={selectedStatus}
      />
          <PresentStatusModal
  handleClose={handleModalClose}
  data={presentData} // Data for present employees
  title={modalTitle}
/>
        </div>
      )}
      {activeTab === 'personalize' && (
        <div className="personalize-content">
          {/* Personalize content can go here */}
          This is other tab content.
           {/* <EmployeeDashboard /> */}

        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
















// ----------//999999999999999999999-----------------------


// import React, { useState, useEffect ,useRef } from 'react';
// import { Bar } from 'react-chartjs-2';
// import 'chart.js/auto';
// import A_Navbar from './A_Navbar';
// import '../Css/AdminDashboard.css';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { ReactComponent as AdminIcon } from '../Icon/a_tab.svg';
// import { ReactComponent as PersonalizeIcon } from '../Icon/u_tab.svg';
// // Models
// import Modal from './Modal'; // Present Modal
// import AbsentModal from './AbsentModal'; // Absent Modal
// import PresentStatusModal from './PresentStatusModal';
// import LeaveDetailsModal from './LeaveDetailsModal';

// import EmployeeDashboard from './EmployeeDashboard';

// import { Chart, registerables } from 'chart.js';

// Chart.register(...registerables);

// const AdminDashboard = ({ onLogout }) => {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [leavesData, setLeavesData] = useState([]);
//   const [date, setDate] = useState(new Date());
//   const [activeTab, setActiveTab] = useState('admin');
//   const [showCalendar, setShowCalendar] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [showAbsentModal, setShowAbsentModal] = useState(false);

//   const [showTodayStatusModal, setShowTodayStatusModal] = useState(false);

//   const [presentData, setPresentData] = useState([]);
//   const [absentData, setAbsentData] = useState([]);
//   const chartRef = useRef(null);

//   const handleModalClose = () => setShowModal(false);
//   const handleAbsentModalClose = () => setShowAbsentModal(false);

//   const [employeeData, setEmployeeData] = useState([]);

//   //Fetch Leave
//   const [leaves, setLeaves] = useState([]);
//   const [error, setError] = useState(null);
//   const openLeaveModal = () => setIsLeaveModalOpen(true);
//   const closeLeaveModal = () => setIsLeaveModalOpen(false);
//   const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
//   const [filteredLeaves, setFilteredLeaves] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState(''); // Track selected status

// // Define your state and data fetching functions for the third modal
// const [showPresentStatusModal, setShowPresentStatusModal] = useState(true);
// const [presentStatusData, setPresentStatusData] = useState([]);

//   const [modalTitle, setModalTitle] = useState('');
//   useEffect(() => {
//     // Fetch data from JSON Server
//     fetch('http://localhost:3001/attendance')
//       .then(response => response.json())
//       .then(data => setAttendanceData(data));

//       const fetchLeaves = async () => {
//         try {
//           const response = await fetch(`http://localhost:3001/leaves`);
//           if (!response.ok) throw new Error('Network response was not ok');
//           const data = await response.json();
//           setLeaves(data);
//           setFilteredLeaves(data); // Set filtered leaves initially to all leaves
//         } catch (error) {
//           setError(error.message);
//         }
//       };
//       fetchLeaves();
//   }, []);
//   const leaveDetails = filteredLeaves; 

//     // Filter functions
//     const showPendingLeaves = () => {
//       setSelectedStatus('pending');
//       setFilteredLeaves(leaves.filter(leave => leave.status === 'pending'));
//       openLeaveModal();
//     };
    
//   const showApprovedLeaves = () => {
//     setSelectedStatus('approved');
//     setFilteredLeaves(leaves.filter(leave => leave.status === 'approved'));
//     openLeaveModal();
//   };
//   const showRejectedLeaves = () => {
//     setSelectedStatus('reject');
//     setFilteredLeaves(leaves.filter(leave => leave.status === 'rejected'));
//     openLeaveModal();
//   };
//   const toggleTab = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleDateClick = () => {
//     setShowCalendar(!showCalendar);
//   };

//   const handleDateChange = (date) => {
//     setDate(date);
//     setShowCalendar(false);
//   };

//   const chartData = {
//     labels: ['24 July', 'Previous', 'Yesterday', 'Today'],
//     datasets: [
//       {
//         label: 'No emp Present',
//         data: [250, 270, 300, 300],
//         backgroundColor: 'rgba(0, 123, 255, 0.5)',
//         barThickness: 30,
//         hoverBorderColor: '#007bff',
//       },
//       {
//         label: 'No emp Absent',
//         data: [50, 50, 50, 50],
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         barThickness: 30,
//         hoverBorderColor: '#007bff',
//       },
//     ],
    
//   };

//   useEffect(() => {
//     console.log('showTodayStatusModal updated:', showTodayStatusModal);
//   }, [showTodayStatusModal]);
  


// const chartOptions = {
//   responsive: true,
//   maintainAspectRatio: false,
//   onClick: (event, elements) => {
//     console.log('Click event detected');
//     console.log('Elements:', elements);

//     if (elements.length > 0) {
//       const datasetIndex = elements[0].datasetIndex;
//       const index = elements[0].index;
//       console.log('Clicked label:', chartData.labels[index]); // Verify the label
//       const datasetLabel = chartData.datasets[datasetIndex].label;

//       if (chartData.labels === 'Today') {
//         console.log('Today label clicked');
//         alert("This si todays satuus pop up displyed"); // Debugging log
//         fetchTodayStatus();
//         setShowTodayStatusModal(true);
//       }else if (datasetLabel === 'No emp Present') {
//         // alert("This si todays satuus pop up displyed"); // Debugging log
//         fetchPresentData();
//         setShowModal(true);
//       } else if (datasetLabel === 'No emp Absent') {
//         fetchAbsentData();
//         setShowAbsentModal(true);
//       }
//     } 
//   },
//   scales: {
//     x: {
//       barThickness: 10,
//     },
//   },
//   interaction: {
//     mode: 'nearest', // Determines which element is 'nearest' to the event position
//     axis: 'x', // 'x', 'y', or 'xy' - determines which axis to use for the interaction
//     intersect: true, // Ensures that the interaction only happens when the point intersects with an element
//   },
// };
// // const chartOptions = {
// //   responsive: true,
// //   maintainAspectRatio: false,
// //   onClick: (event, elements) => {
// //     console.log('Click event detected');
// //     console.log('Elements:', elements);

// //     if (elements.length > 0) {
// //       const datasetIndex = elements[0].datasetIndex;
// //       const index = elements[0].index;
// //       const clickedLabel = chartData.labels[index]; // Get the specific clicked label
// //       const datasetLabel = chartData.datasets[datasetIndex].label;

// //       console.log('Clicked label:', clickedLabel); // Verify the label

// //       if (clickedLabel === 'Today') {
// //         console.log('Today label clicked');
// //         alert("This is today's status popup displayed"); // Debugging log
// //         fetchTodayStatus();
// //         setShowTodayStatusModal(true);
// //         console.log('showTodayStatusModal updated:', showTodayStatusModal);
// //       } else if (datasetLabel === 'No emp Present') {
// //         console.log('No emp Present label clicked');
// //         alert("Present data popup displayed"); // Debugging log
// //         fetchPresentData();
// //         setShowModal(true);
// //         console.log('showModal updated:', showModal);
// //       } else if (datasetLabel === 'No emp Absent') {
// //         console.log('No emp Absent label clicked');
// //         alert("Absent data popup displayed"); // Debugging log
// //         fetchAbsentData();
// //         setShowAbsentModal(true);
// //         console.log('showAbsentModal updated:', showAbsentModal);
// //       }
// //     }
// //   },
// //   scales: {
// //     x: {
// //       barThickness: 10,
// //     },
// //   },
// //   interaction: {
// //     mode: 'nearest', // Determines which element is 'nearest' to the event position
// //     axis: 'x', // 'x', 'y', or 'xy' - determines which axis to use for the interaction
// //     intersect: true, // Ensures that the interaction only happens when the point intersects with an element
// //   },
// // };


  
  
//   // Example fetch functions and modal state handlers
//   const fetchTodayStatus = () => {
//     // Fetch today's status details
//     const data = [
//       {
//               id: '15f9',
//               employeeId: '1ba6',
//               username: 'vv',
//               role: 'employee',
//               date: '2024-07-04',
//               status: 'present',
//               checkInTime: '8:00 AM',
//               checkOutTime: '5:00 PM',
//             },
//             {
//               id: '02ca',
//               employeeId: 'ec3c',
//               username: 'suga',
//               role: 'employee',
//               date: '2024-07-07',
//               status: 'present',
//               checkInTime: '9:00 AM',
//               checkOutTime: '6:00 PM',
//             },
//     ];
//     setShowTodayStatusModal(data);
//   };

//   const chartContainerStyle = {
//     width: '90%', // Adjust this value to increase chart width
//     height: '400px', // Adjust this value to set chart height
//   };

//   // Simulate fetching data from a JSON file
//   const fetchPresentData = () => {
//     // Here you should fetch the data from your JSON file
//     // For demonstration, using hardcoded data
//     const data = [
//       {
//         id: '15f9',
//         employeeId: '1ba6',
//         username: 'vv',
//         role: 'employee',
//         date: '2024-07-04',
//         status: 'present',
//         checkInTime: '8:00 AM',
//         checkOutTime: '5:00 PM',
//       },
//       {
//         id: '02ca',
//         employeeId: 'ec3c',
//         username: 'suga',
//         role: 'employee',
//         date: '2024-07-07',
//         status: 'present',
//         checkInTime: '9:00 AM',
//         checkOutTime: '6:00 PM',
//       },
//     ];
//     setPresentData(data);
//     console.log("Fetching today's status details");
//   };

//   const fetchAbsentData = () => {
//     // Here you should fetch the data from your JSON file
//     // For demonstration, using hardcoded data
//     const data = [
//       {
//         id: '15f9',
//         employeeId: '1ba6',
//         username: 'vv',
//         role: 'employee',
//         date: '2024-07-04',
//         status: 'absent',
//         role: 'Product Manager',
//         startDate: '2024-07-02',
//         endDate: '2024-07-05',
//         reason: 'Personal Leave',
//       },
//       {
//         id: '02ca',
//         employeeId: 'ec3c',
//         username: 'suga',
//         role: 'employee',
//         date: '2024-07-07',
//         status: 'absent',
//         role: 'Product Manager',
//         startDate: '2024-07-02',
//         endDate: '2024-07-05',
//         reason: 'Personal Leave',
//       },
//     ];
//     setAbsentData(data);
//   };



//   return (
//     <div className="admin-dashboard">
//       <A_Navbar onLogout={onLogout} />
//       <div className="header">
//         <h1>Attendance Admin</h1>
//         <div className="calendar-container">
//           <span>{date.toDateString()}</span>
//           <button onClick={handleDateClick}>📅</button>
//           {showCalendar && (
//             <Calendar
//               onChange={handleDateChange}
//               value={date}
//               className="calendar"
//             />
//           )}
//         </div>
//       </div>
//       <div className="tabs">
//         <button 
//           className={activeTab === 'admin' ? 'active' : ''} 
//           onClick={() => toggleTab('admin')}
//         >
//           <AdminIcon className="tab-icon" style={{ fill: activeTab === 'admin' ? 'white' : 'black' }} /> Admin
//         </button>
//         <button 
//           className={activeTab === 'personalize' ? 'active' : ''} 
//           onClick={() => toggleTab('personalize')}
//         >
//           <PersonalizeIcon className="tab-icon" style={{ fill: activeTab === 'personalize' ? 'white' : 'black' }} /> Personalize
//         </button>
//       </div>
//       {activeTab === 'admin' && (
//         <div className="dashboard-content">
//           <div className="employee-status">
//             <div className="chart-container">
//               <div className="section-title">Employee Status</div>
//               <Bar data={chartData} style={chartContainerStyle} options={chartOptions} />
//               <Modal show={showModal} handleClose={handleModalClose} data={presentData} />        
//               <AbsentModal show={showAbsentModal} handleClose={handleAbsentModalClose} data={absentData} />        
//               <PresentStatusModal
//         show={showTodayStatusModal}
//         handleClose={() => setShowTodayStatusModal(false)}
//         data={presentStatusData}
//         title="Today's Employee Status"
//       />
//             </div>
//               {/* <PresentStatusModal show={showTodayStatusModal} handleClose={() => setShowPresentStatusModal(false)} data={presentStatusData} /> */}

//             <div className="leave-summary">
//               <div className="section-title">Leave Summary</div>
//               <div className="leave-summary-item" onClick={showPendingLeaves}>
//                 <span>Pending Leave</span>
//                 <span className="count">{leaves.filter(leave => leave.status === 'pending').length}</span>
//               </div>
//               <div className="leave-summary-item">
//                 <span>Approved Leave</span>
//                 <span className="count">06</span>
//               </div>
//               <div className="leave-summary-item">
//                 <span>Rejected Leave</span>
//                 <span className="count">01</span>
//               </div>
//             </div>
//           </div>
//           <div className="new-leave-request">
//             <h2>New Leave Request</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Employee id</th>
//                   <th>Employee name</th>
//                   <th>Start date</th>
//                   <th>End date</th>
//                   <th>Reason for Leave</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leavesData
//                   .filter(leave => leave.status === 'pending')
//                   .map((leave) => (
//                     <tr key={leave.id}>
//                       <td>{leave.employeeId}</td>
//                       <td>{/* Fetch employee name by ID */}</td>
//                       <td>{leave.startDate}</td>
//                       <td>{leave.endDate}</td>
//                       <td>{leave.reason}</td>
//                       <td>
//                         <button className="approve-btn">Approve</button>
//                         <button className="reject-btn">Reject</button>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//             {/* Add pagination controls here */}
//           </div>
//           <LeaveDetailsModal
//         isOpen={isLeaveModalOpen}
//         onRequestClose={closeLeaveModal}
//         leaveDetails={leaveDetails}
//       />
//         </div>
//       )}
//       {activeTab === 'personalize' && (
//         <div className="personalize-content">
//           {/* Personalize content can go here */}
//           This is other tab content.
//            {/* <EmployeeDashboard /> */}

//         </div>
//       )}
//     </div>
    
//   );
// };

// export default AdminDashboard;
