// // // // import React, { useEffect, useState } from 'react';
// // // // import { Link } from 'react-router-dom';  
// // // // import '../Css/AdminDashboard.css'; // Importing the CSS file

// // // // const AdminDashboard = () => {
// // // //   const [attendance, setAttendance] = useState([]);
// // // //   const [employees, setEmployees] = useState([]);
// // // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchAttendance = async () => {
// // // //       try {
// // // //         const response = await fetch('http://localhost:3001/attendance');
// // // //         if (!response.ok) throw new Error('Network response was not ok');
// // // //         const data = await response.json();
// // // //         setAttendance(data);
// // // //       } catch (error) {
// // // //         setError(error.message);
// // // //       }
// // // //     };

// // // //     const fetchEmployees = async () => {
// // // //       try {
// // // //         const response = await fetch('http://localhost:3001/users');
// // // //         if (!response.ok) throw new Error('Network response was not ok');
// // // //         const data = await response.json();
// // // //         setEmployees(data);
// // // //       } catch (error) {
// // // //         setError(error.message);
// // // //       }
// // // //     };

// // // //     const fetchLeaveRequests = async () => {
// // // //       try {
// // // //         const response = await fetch('http://localhost:3001/leaves');
// // // //         if (!response.ok) throw new Error('Network response was not ok');
// // // //         const data = await response.json();
// // // //         setLeaveRequests(data);
// // // //       } catch (error) {
// // // //         setError(error.message);
// // // //       }
// // // //     };

// // // //     fetchAttendance();
// // // //     fetchEmployees();
// // // //     fetchLeaveRequests();
// // // //   }, []);

// // // //   const getTodayDate = () => {
// // // //     const today = new Date();
// // // //     return today.toISOString().split('T')[0];
// // // //   };

// // // //   const todayDate = getTodayDate();
// // // //   const todaysAttendance = attendance.filter(record => record.date === todayDate);
// // // //   const presentEmployees = todaysAttendance.filter(record => record.status === 'present');
// // // //   const absentEmployees = todaysAttendance.filter(record => record.status === 'absent');
// // // //   const pendingLeaves = leaveRequests.filter(request => request.status === 'pending');

// // // //   if (error) {
// // // //     return <div className="error">Error: {error}</div>;
// // // //   }

// // // //   return (
// // // //     <div className="admin-dashboard">
// // // //       <nav className="admin-nav">
// // // //         <div className="logo">Company Logo</div>
// // // //         <ul>
// // // //           <li><Link to="/admin/dashboard">Dashboard</Link></li>
// // // //           <li><Link to="/admin/manage-leaves">Manage Leaves</Link></li>
// // // //           <li><Link to="/admin/employees">Employees</Link></li>
// // // //         </ul>
// // // //       </nav>
// // // //       <h2>Admin Dashboard</h2>
// // // //       <div className="sections-container">
// // // //         <div className="section">
// // // //           <h3>Today's Present Employees</h3>
// // // //           <ul>
// // // //             {presentEmployees.map((record, index) => (
// // // //               <li key={index}>
// // // //                 {employees.find(emp => emp.id == record.employeeId)?.username || 'Unknown'} - {record.checkInTime} to {record.checkOutTime}
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //           <Link to="/view-all-attendance">
// // // //             <button className="view-all-attendance-button">View All Attendance</button>
// // // //           </Link>
// // // //         </div>
// // // //         <div className="section">
// // // //           <h3>Today's Absent Employees</h3>
// // // //           <ul>
// // // //             {absentEmployees.map((record, index) => (
// // // //               <li key={index}>
// // // //                 {employees.find(emp => emp.id == record.employeeId)?.username || 'Unknown'}
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //           <Link to="/view-all-attendance">
// // // //             <button className="view-all-attendance-button">View All Attendance</button>
// // // //           </Link>
// // // //         </div>
// // // //       </div>
// // // //       <div className="section">
// // // //         <h3>Pending Leave Requests</h3>
// // // //         <ul>
// // // //           {pendingLeaves.map((leave, index) => (
// // // //             <li key={index}>
// // // //               {leave.reason} ({leave.startDate} to {leave.endDate})
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //         <Link to="/admin/manage-leaves">
// // // //           <button className="manage-leave-button">View All Leaves</button>
// // // //         </Link>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AdminDashboard;
// // // import React, { useEffect, useState } from 'react';
// // // import { Link } from 'react-router-dom';  
// // // import '../Css/AdminDashboard.css'; // Importing the CSS file

// // // const AdminDashboard = () => {
// // //   const [attendance, setAttendance] = useState([]);
// // //   const [employees, setEmployees] = useState([]);
// // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchAttendance = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:3001/attendance');
// // //         if (!response.ok) throw new Error('Network response was not ok');
// // //         const data = await response.json();
// // //         setAttendance(data);
// // //       } catch (error) {
// // //         setError(error.message);
// // //       }
// // //     };

// // //     const fetchEmployees = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:3001/users');
// // //         if (!response.ok) throw new Error('Network response was not ok');
// // //         const data = await response.json();
// // //         setEmployees(data);
// // //       } catch (error) {
// // //         setError(error.message);
// // //       }
// // //     };

// // //     const fetchLeaveRequests = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:3001/leaves');
// // //         if (!response.ok) throw new Error('Network response was not ok');
// // //         const data = await response.json();
// // //         setLeaveRequests(data);
// // //       } catch (error) {
// // //         setError(error.message);
// // //       }
// // //     };

// // //     fetchAttendance();
// // //     fetchEmployees();
// // //     fetchLeaveRequests();
// // //   }, []);

// // //   const getTodayDate = () => {
// // //     const today = new Date();
// // //     return today.toISOString().split('T')[0];
// // //   };

// // //   const todayDate = getTodayDate();
// // //   const todaysAttendance = attendance.filter(record => record.date === todayDate);
// // //   const presentEmployees = todaysAttendance.filter(record => record.status === 'present');

// // //   // Find employees who are on leave today
// // //   const employeesOnLeave = leaveRequests
// // //     .filter(request => request.status === 'approved' && request.startDate <= todayDate && request.endDate >= todayDate)
// // //     .map(request => request.employeeId);

// // //   // Find employees who are absent
// // //   const absentEmployees = employees.filter(emp => 
// // //     !todaysAttendance.some(record => record.employeeId === emp.id) && 
// // //     !employeesOnLeave.includes(emp.id)
// // //   );

// // //   const pendingLeaves = leaveRequests.filter(request => request.status === 'pending');

// // //   if (error) {
// // //     return <div className="error">Error: {error}</div>;
// // //   }

// // //   return (
// // //     <div className="admin-dashboard">
// // //       <nav className="admin-nav">
// // //         <div className="logo">Company Logo</div>
// // //         <ul>
// // //           <li><Link to="/admin/dashboard">Dashboard</Link></li>
// // //           <li><Link to="/admin/manage-leaves">Manage Leaves</Link></li>
// // //           <li><Link to="/admin/employees">Employees</Link></li>
// // //         </ul>
// // //       </nav>
// // //       <h2>Admin Dashboard</h2>
// // //       <div className="sections-container">
// // //         <div className="section">
// // //           <h3>Today's Present Employees</h3>
// // //           <ul>
// // //             {presentEmployees.map((record, index) => (
// // //               <li key={index}>
// // //                 {employees.find(emp => emp.id == record.employeeId)?.username || 'Unknown'} - {record.checkInTime} to {record.checkOutTime}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //           <Link to="/view-all-attendance">
// // //             <button className="view-all-attendance-button">View All Attendance</button>
// // //           </Link>
// // //         </div>
// // //         <div className="section">
// // //           <h3>Today's Absent Employees</h3>
// // //           <ul>
// // //             {absentEmployees.map((emp, index) => (
// // //               <li key={index}>
// // //                 {emp.username}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //           <Link to="/view-all-attendance">
// // //             <button className="view-all-attendance-button">View All Attendance</button>
// // //           </Link>
// // //         </div>
// // //       </div>
// // //       <div className="section">
// // //         <h3>Pending Leave Requests</h3>
// // //         <ul>
// // //           {pendingLeaves.map((leave, index) => (
// // //             <li key={index}>
// // //               {leave.reason} ({leave.startDate} to {leave.endDate})
// // //             </li>
// // //           ))}
// // //         </ul>
// // //         <Link to="/admin/manage-leaves">
// // //           <button className="manage-leave-button">View All Leaves</button>
// // //         </Link>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminDashboard;




// // // import React, { useEffect, useState } from 'react';
// // // import { Link } from 'react-router-dom';  
// // // import '../Css/AdminDashboard.css'; // Importing the CSS file

// // // const AdminDashboard = ({onLogout}) => {
// // //   const [attendance, setAttendance] = useState([]);
// // //   const [employees, setEmployees] = useState([]);
// // //   const [leaveRequests, setLeaveRequests] = useState([]);
// // //   const [adminAttendance, setAdminAttendance] = useState(null);
// // //   const [adminCheckInTime, setAdminCheckInTime] = useState(null);
// // //   const [adminCheckOutTime, setAdminCheckOutTime] = useState(null);
// // //   const [error, setError] = useState(null);
  
// // //   const getTodayDate = () => {
// // //     const today = new Date();
// // //     return today.toISOString().split('T')[0]; 
// // //   };

// // //   const todayDate = getTodayDate();

// // //   const fetchAdminAttendance = async () => {
// // //     try {
// // //       const response = await fetch('http://localhost:3001/adminAttendance');
// // //       if (!response.ok) throw new Error('Network response was not ok');
// // //       const data = await response.json();
// // //       const todayAdminAttendance = data.find(record => record.date === todayDate);
// // //       setAdminAttendance(todayAdminAttendance);
// // //       if (todayAdminAttendance) {
// // //         setAdminCheckInTime(todayAdminAttendance.checkInTime);
// // //         setAdminCheckOutTime(todayAdminAttendance.checkOutTime);
// // //       }
// // //     } catch (error) {
// // //       setError(error.message);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     const fetchAttendance = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:3001/attendance');
// // //         if (!response.ok) throw new Error('Network response was not ok');
// // //         const data = await response.json();
// // //         setAttendance(data);
// // //       } catch (error) {
// // //         setError(error.message);
// // //       }
// // //     };

// // //     const fetchEmployees = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:3001/users');
// // //         if (!response.ok) throw new Error('Network response was not ok');
// // //         const data = await response.json();
// // //         setEmployees(data);
// // //       } catch (error) {
// // //         setError(error.message);
// // //       }
// // //     };

// // //     const fetchLeaveRequests = async () => {
// // //       try {
// // //         const response = await fetch('http://localhost:3001/leaves');
// // //         if (!response.ok) throw new Error('Network response was not ok');
// // //         const data = await response.json();
// // //         setLeaveRequests(data);
// // //       } catch (error) {
// // //         setError(error.message);
// // //       }
// // //     };

// // //     fetchAttendance();
// // //     fetchEmployees();
// // //     fetchLeaveRequests();
// // //     fetchAdminAttendance();
// // //   }, []);

// // //   const todaysAttendance = attendance.filter(record => record.date === todayDate);
// // //   const presentEmployees = todaysAttendance.filter(record => record.status === 'present');

// // //   // Find employees who are on leave today
// // //   const employeesOnLeave = leaveRequests
// // //     .filter(request => request.status === 'approved' && request.startDate <= todayDate && request.endDate >= todayDate)
// // //     .map(request => request.employeeId);

// // //   // Find employees who are absent
// // //   const absentEmployees = employees.filter(emp => 
// // //     !todaysAttendance.some(record => record.employeeId === emp.id) && 
// // //     !employeesOnLeave.includes(emp.id)
// // //   );

// // //   const pendingLeaves = leaveRequests.filter(request => request.status === 'pending');

// // //   // Handle check-in for admin
// // //   const handleCheckIn = async () => {
// // //     const checkInTime = new Date().toISOString();
// // //     try {
// // //       const response = await fetch('http://localhost:3001/adminAttendance', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({ adminId: "1", date: todayDate, checkInTime }),
// // //       });
// // //       if (!response.ok) throw new Error('Network response was not ok');
// // //       setAdminCheckInTime(checkInTime);
// // //       fetchAdminAttendance(); // Refresh admin attendance
// // //     } catch (error) {
// // //       setError(error.message);
// // //     }
// // //   };

// // //   // Handle check-out for admin
// // //   const handleCheckOut = async () => {
// // //     const checkOutTime = new Date().toISOString();
// // //     try {
// // //       const response = await fetch(`http://localhost:3001/adminAttendance/${adminAttendance.id}`, {
// // //         method: 'PUT',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({ checkOutTime }),
// // //       });
// // //       if (!response.ok) throw new Error('Network response was not ok');
// // //       setAdminCheckOutTime(checkOutTime);
// // //       fetchAdminAttendance(); // Refresh admin attendance
// // //     } catch (error) {
// // //       setError(error.message);
// // //     }
// // //   };

// // //   if (error) {
// // //     return <div className="error">Error: {error}</div>;
// // //   }

// // //   return (
// // //     <div className="admin-dashboard">
// // //       <nav className="admin-nav">
// // //         <div className="logo">Company Logo</div>
// // //         <ul>
// // //           <li><Link to="/admin/dashboard">Dashboard</Link></li>
// // //           <li><Link to="/admin/manage-leaves">Manage Leaves</Link></li>
// // //           <li><Link to="/admin/employees">Employees</Link></li>
// // //           <li><button onClick={onLogout}>Logout</button></li>
// // //         </ul>
// // //       </nav>
// // //       <h2>Admin Dashboard</h2>
// // //       <div className="sections-container">
// // //         <div className="section">
// // //           <h3>Today's Present Employees</h3>
// // //           <ul>
// // //             {presentEmployees.map((record, index) => (
// // //               <li key={index}>
// // //                 {employees.find(emp => emp.id == record.employeeId)?.username || 'Unknown'} - {record.checkInTime} to {record.checkOutTime}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //           <Link to="/view-all-attendance">
// // //             <button className="view-all-attendance-button">View All Attendance</button>
// // //           </Link>
// // //         </div>
// // //         <div className="section">
// // //           <h3>Today's Absent Employees</h3>
// // //           <ul>
// // //             {absentEmployees.map((emp, index) => (
// // //               <li key={index}>
// // //                 {emp.username}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //           {/* <Link to="/view-all-attendance">
// // //             <button className="view-all-attendance-button">View All Attendance</button>
// // //           </Link> */}
// // //         </div>
// // //       </div>
// // //       <div className="leave-and-attendance-container">
// // //         <div className="section leave-section">
// // //           <h3>Pending Leave Requests</h3>
// // //           <ul>
// // //             {pendingLeaves.map((leave, index) => (
// // //               <li key={index}>
// // //                 {leave.reason} ({leave.startDate} to {leave.endDate})
// // //               </li>
// // //             ))}
// // //           </ul>
// // //           <Link to="/admin/manage-leaves">
// // //             <button className="manage-leave-button">View All Leaves</button>
// // //           </Link>
// // //         </div>
// // //         <div className="section admin-attendance">
// // //           <h3>Admin Check-In/Check-Out</h3>
// // //           {adminCheckInTime ? (
// // //             <div>
// // //               <p>Checked in at: {new Date(adminCheckInTime).toLocaleTimeString()}</p>
// // //               {adminCheckOutTime ? (
// // //                 <p>Checked out at: {new Date(adminCheckOutTime).toLocaleTimeString()}</p>
// // //               ) : (
// // //                 <button onClick={handleCheckOut} className="check-out-button">Check Out</button>
// // //               )}
// // //             </div>
// // //           ) : (
// // //             <button onClick={handleCheckIn} className="check-in-button">Check In</button>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminDashboard;



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

// //     fetchAttendance();
// //     fetchEmployees();
// //     fetchLeaveRequests();
// //     fetchAdminAttendance();
// //   }, []);

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
// //       <div className="summary">
// //         <h3>Attendance Summary</h3>
// //         <p>Total Employees: {employees.length}</p>
// //         <p>Present Today: {presentEmployees.length}</p>
// //         <p>Absent Today: {absentEmployees.length}</p>
// //       </div>
// //       <div className="sections-container">
// //         <div className="section">
// //           <h3>Today's Present Employees</h3>
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
// //           <h3>Today's Absent Employees</h3>
// //           <ul>
// //             {absentEmployees.map((emp, index) => (
// //               <li key={index}>
// //                 {emp.username}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
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



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/AdminDashboard.css'; // Importing the CSS file

const AdminDashboard = ({ onLogout }) => {
  const [attendance, setAttendance] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [adminAttendance, setAdminAttendance] = useState(null);
  const [adminCheckInTime, setAdminCheckInTime] = useState(null);
  const [adminCheckOutTime, setAdminCheckOutTime] = useState(null);
  const [error, setError] = useState(null);
  const [checkInRequests, setCheckInRequests] = useState([]);
  async function approveCheckInRequest(requestId) {
    // Fetch the check-in request
    const checkInRequest = await fetch(`http://localhost:3000/checkInRequests/${requestId}`).then(response => response.json());
  
    // Fetch the attendance record for the same employee and date
    const attendanceRecords = await fetch(`http://localhost:3000/attendance`).then(response => response.json());
    const attendanceRecord = attendanceRecords.find(record => record.employeeId === checkInRequest.employeeId && record.date === checkInRequest.date);
  
    if (attendanceRecord) {
      // Replace the old check-in time with the new approved check-in time
      attendanceRecord.checkInTime = checkInRequest.requestedCheckInTime;
  
      // Update the attendance record in the database
      await fetch(`http://localhost:3000/attendance/${attendanceRecord.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(attendanceRecord)
      });
  
      // Update the status of the check-in request to approved
      checkInRequest.status = 'approved';
      await fetch(`http://localhost:3000/checkInRequests/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(checkInRequest)
      });
  
      console.log('Check-in time updated successfully');
    } else {
      // If no attendance record is found, create a new one
      const newAttendanceRecord = {
        id: Math.random().toString(36).substr(2, 9),
        employeeId: checkInRequest.employeeId,
        date: checkInRequest.date,
        status: 'present',
        checkInTime: checkInRequest.requestedCheckInTime
      };
  
      // Add the new attendance record to the database
      await fetch(`http://localhost:3000/attendance`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAttendanceRecord)
      });
  
      // Update the status of the check-in request to approved
      checkInRequest.status = 'approved';
      await fetch(`http://localhost:3000/checkInRequests/${requestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(checkInRequest)
      });
  
      console.log('Check-in time updated successfully');
    }
  }
  
  
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const todayDate = getTodayDate();

  const fetchAdminAttendance = async () => {
    try {
      const response = await fetch('http://localhost:3001/adminAttendance');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      const todayAdminAttendance = data.find(record => record.date === todayDate);
      setAdminAttendance(todayAdminAttendance);
      if (todayAdminAttendance) {
        setAdminCheckInTime(todayAdminAttendance.checkInTime);
        setAdminCheckOutTime(todayAdminAttendance.checkOutTime);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch('http://localhost:3001/attendance');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setAttendance(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:3001/users');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchLeaveRequests = async () => {
      try {
        const response = await fetch('http://localhost:3001/leaves');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setLeaveRequests(data);
      } catch (error) {
        setError(error.message);
      }
    };
    const fetchCheckInRequests = async () => {
      try {
        const response = await fetch('http://localhost:3001/checkInRequests');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCheckInRequests(data);
      } catch (error) {
        setError(error.message);
      }
    };
  
    fetchCheckInRequests();  
    fetchAttendance();
    fetchEmployees();
    fetchLeaveRequests();
    fetchAdminAttendance();
  }, []);
  const handleApproveRequest = async (requestId) => {
    try {
      // Fetch the check-in request
      const request = checkInRequests.find(request => request.id === requestId);
      
      // Fetch all attendance records to find if there is already a record for this employee and date
      const attendanceResponse = await fetch('http://localhost:3001/attendance');
      if (!attendanceResponse.ok) throw new Error('Failed to fetch attendance records');
      const attendanceData = await attendanceResponse.json();
      
      const existingRecord = attendanceData.find(record => 
        record.employeeId === request.employeeId && record.date === request.date
      );
  
      if (existingRecord) {
        // Update the existing attendance record with the new check-in time
        existingRecord.checkInTime = request.requestedCheckInTime;
        
        await fetch(`http://localhost:3001/attendance/${existingRecord.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(existingRecord)
        });
      } else {
        // Create a new attendance record if no existing record is found
        const newRecord = {
          employeeId: request.employeeId,
          date: request.date,
          status: 'present',
          checkInTime: request.requestedCheckInTime
        };
  
        await fetch('http://localhost:3001/attendance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newRecord)
        });
      }
  
      // Delete the check-in request after approval
      await fetch(`http://localhost:3001/checkInRequests/${requestId}`, {
        method: 'DELETE'
      });
  
      // Remove the approved request from the state
      setCheckInRequests(checkInRequests.filter(request => request.id !== requestId));
      alert('Check-in request approved');
    } catch (error) {
      setError(error.message);
    }
  };
  
  const handleRejectRequest = async (requestId) => {
    try {
      await fetch(`http://localhost:3001/checkInRequests/${requestId}`, {
        method: 'DELETE'
      });
  
      setCheckInRequests(checkInRequests.filter(request => request.id !== requestId));
      alert('Check-in request rejected');
    } catch (error) {
      setError(error.message);
    }
  };
  
  const todaysAttendance = attendance.filter(record => record.date === todayDate);
  const presentEmployees = todaysAttendance.filter(record => record.status === 'present');

  // Find employees who are on leave today
  const employeesOnLeave = leaveRequests
    .filter(request => request.status === 'approved' && request.startDate <= todayDate && request.endDate >= todayDate)
    .map(request => request.employeeId);

  // Find employees who are absent
  const absentEmployees = employees.filter(emp =>
    !todaysAttendance.some(record => record.employeeId === emp.id) &&
    !employeesOnLeave.includes(emp.id)
  );

  const pendingLeaves = leaveRequests.filter(request => request.status === 'pending');

  // Handle check-in for admin
  const handleCheckIn = async () => {
    const checkInTime = new Date().toISOString();
    try {
      const response = await fetch('http://localhost:3001/adminAttendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adminId: "1", date: todayDate, checkInTime }),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      setAdminCheckInTime(checkInTime);
      fetchAdminAttendance(); // Refresh admin attendance
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle check-out for admin
  const handleCheckOut = async () => {
    const checkOutTime = new Date().toISOString();
    try {
      const response = await fetch(`http://localhost:3001/adminAttendance/${adminAttendance.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ checkOutTime }),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      setAdminCheckOutTime(checkOutTime);
      fetchAdminAttendance(); // Refresh admin attendance
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="admin-dashboard">
      <nav className="admin-nav">
        <div className="logo">Company Logo</div>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/manage-leaves">Manage Leaves</Link></li>
          <li><Link to="/admin/employees">Employees</Link></li>
          <li><button onClick={onLogout}>Logout</button></li>
        </ul>
      </nav>
      <h2>Admin Dashboard</h2>
      <div className="sections-container">
        <div className="section">
          <h3>Today's Present Employees - {presentEmployees.length}</h3>
          <ul>
            {presentEmployees.map((record, index) => (
              <li key={index}>
                {employees.find(emp => emp.id == record.employeeId)?.username || 'Unknown'} - {record.checkInTime} to {record.checkOutTime}
              </li>
            ))}
          </ul>
          <Link to="/view-all-attendance">
            <button className="view-all-attendance-button">View All Attendance</button>
          </Link>
        </div>
        <div className="section">
          <h3>Today's Absent Employees - {absentEmployees.length}</h3>
          <ul>
            {absentEmployees.map((emp, index) => (
              <li key={index}>
                {emp.username}
              </li>
            ))}
          </ul>
        </div>
      </div>


      <main>
  <h3>Check-In Requests</h3>
  <ul className="check-in-requests">
    {checkInRequests.map(request => (
      <li key={request.id}>
        <p>Employee ID: {request.employeeId}</p>
        <p>Date: {request.date}</p>
        <p>Requested Check-In Time: {request.requestedCheckInTime}</p>
        <button onClick={() => handleApproveRequest(request.id)}>Approve</button>
        <button onClick={() => handleRejectRequest(request.id)}>Reject</button>
      </li>
    ))}
  </ul>
</main>
      <div className="leave-and-attendance-container">
        <div className="section leave-section">
          <h3>Pending Leave Requests</h3>
          <ul>
            {pendingLeaves.map((leave, index) => (
              <li key={index}>
                {leave.reason} ({leave.startDate} to {leave.endDate})
              </li>
            ))}
          </ul>
          <Link to="/admin/manage-leaves">
            <button className="manage-leave-button">View All Leaves</button>
          </Link>
        </div>
        <div className="section admin-attendance">
          <h3>Admin Check-In/Check-Out</h3>
          {adminCheckInTime ? (
            <div>
              <p>Checked in at: {new Date(adminCheckInTime).toLocaleTimeString()}</p>
              {adminCheckOutTime ? (
                <p>Checked out at: {new Date(adminCheckOutTime).toLocaleTimeString()}</p>
              ) : (
                <button onClick={handleCheckOut} className="check-out-button">Check Out</button>
              )}
            </div>
          ) : (
            <button onClick={handleCheckIn} className="check-in-button">Check In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

// import React, { useState, useEffect } from 'react';

// const AdminDashboard = () => {
//   const [checkInRequests, setCheckInRequests] = useState([]);

//   useEffect(() => {
//     // Fetch check-in requests from local storage on component mount
//     const storedRequests = JSON.parse(localStorage.getItem('checkInRequests')) || [];
//     setCheckInRequests(storedRequests);
//   }, []);

//   const handleApproveRequest = (request) => {
//     // Update the request status in local storage
//     const updatedRequests = checkInRequests.map(req =>
//       req.employeeId === request.employeeId && req.date === request.date
//         ? { ...req, status: 'approved' }
//         : req
//     );
//     localStorage.setItem('checkInRequests', JSON.stringify(updatedRequests));
//     setCheckInRequests(updatedRequests);
//   };

//   const handleRejectRequest = (request) => {
//     // Update the request status in local storage
//     const updatedRequests = checkInRequests.map(req =>
//       req.employeeId === request.employeeId && req.date === request.date
//         ? { ...req, status: 'rejected' }
//         : req
//     );
//     localStorage.setItem('checkInRequests', JSON.stringify(updatedRequests));
//     setCheckInRequests(updatedRequests);
//   };

//   // Render check-in requests
//   const renderCheckInRequests = () => {
//     return checkInRequests.map((request, index) => (
//       <div key={index}>
//         <p>{request.employeeId} requested {request.requestedTime} on {request.date}</p>
//         {request.status !== 'approved' && (
//           <>
//             <button onClick={() => handleApproveRequest(request)}>Approve</button>
//             <button onClick={() => handleRejectRequest(request)}>Reject</button>
//           </>
//         )}
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <h2>Check-in Requests</h2>
//       {checkInRequests.length > 0 ? (
//         renderCheckInRequests()
//       ) : (
//         <p>No pending check-in requests.</p>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;



// import React, { useEffect, useState } from 'react';

// const AdminDashboard = () => {
//   const [checkInRequests, setCheckInRequests] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCheckInRequests = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/checkin-requests');
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setCheckInRequests(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

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

//     fetchCheckInRequests();
//     fetchAttendance();
//   }, []);

//   const handleApproveRequest = async (requestId, employeeId, requestedCheckInTime, date) => {
//     try {
//       // Find the attendance record for the given employee and date
//       const attendanceRecord = attendance.find(record => record.employeeId === employeeId && record.date === date);
      
//       if (attendanceRecord) {
//         // Update the attendance record with the corrected check-in time
//         const updateResponse = await fetch(`http://localhost:3001/attendance/${attendanceRecord.id}`, {
//           method: 'PATCH',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             checkInTime: requestedCheckInTime
//           })
//         });
//         if (!updateResponse.ok) throw new Error('Failed to update check-in time');

//         // Update the local state to reflect the change
//         setAttendance(attendance.map(record => 
//           record.id === attendanceRecord.id ? { ...record, checkInTime: requestedCheckInTime } : record
//         ));

//         alert(`Check-in time updated to ${requestedCheckInTime}`);
//       }

//       // Delete the check-in request after approval
//       const deleteResponse = await fetch(`http://localhost:3001/checkin-requests/${requestId}`, {
//         method: 'DELETE'
//       });
//       if (!deleteResponse.ok) throw new Error('Failed to delete check-in request');

//       // Remove the approved request from the local state
//       setCheckInRequests(checkInRequests.filter(request => request.id !== requestId));
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       <h3>Check-In Correction Requests</h3>
//       {checkInRequests.length === 0 ? (
//         <p>No check-in correction requests.</p>
//       ) : (
//         <ul>
//           {checkInRequests.map(request => (
//             <li key={request.id}>
//               <p>Employee ID: {request.employeeId}</p>
//               <p>Date: {request.date}</p>
//               <p>Requested Check-In Time: {request.requestedCheckInTime}</p>
//               <button onClick={() => handleApproveRequest(request.id, request.employeeId, request.requestedCheckInTime, request.date)}>Approve</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;

