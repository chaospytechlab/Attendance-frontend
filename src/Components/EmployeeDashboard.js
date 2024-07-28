// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Link, useNavigate } from 'react-router-dom';
// import '../Css/EmployeeDashboard.css';

// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// // Register the components for Chart.js
// ChartJS.register(
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   Title,
//   Tooltip,
//   Legend
// );

// const EmployeeDashboard = ({ user, onLogout }) => {
//   const [attendance, setAttendance] = useState([]);
// const [leaves, setLeaves] = useState([]);
//   const [error, setError] = useState(null);
//   const [isCheckedIn, setIsCheckedIn] = useState(false);
//   const [hasCheckedOutToday, setHasCheckedOutToday] = useState(false);
//   const [checkInTime, setCheckInTime] = useState(null);
//   const [checkOutTime, setCheckOutTime] = useState(null);
//   const [requestedCheckInTime, setRequestedCheckInTime] = useState('');
//   const [checkInRequestSent, setCheckInRequestSent] = useState(false);
//   const [message, setMessage] = useState('');

//   const navigate = useNavigate();

//   const sendCheckInRequest = async () => {
//     const today = new Date().toISOString().split('T')[0];

//     try {
//       // Fetch all check-in requests for the employee
//       const response = await fetch(`http://localhost:3001/checkInRequests?employeeId=${user.id}&date=${today}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const checkInRequests = await response.json();

//       // Check if there is already a request for today
//       if (checkInRequests.length > 0) {
//         setMessage('You have already sent a check-in request today.');
//         return;
//       }

//       // Create a new check-in request
//       const newRequest = {
//         employeeId: user.id,
//         date: today,
//         requestedCheckInTime,
//         status: 'pending'
//       };

//       // Send the new check-in request to the server
//       const postResponse = await fetch('http://localhost:3001/checkInRequests', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newRequest)
//       });

//       if (!postResponse.ok) {
//         throw new Error(`HTTP error! status: ${postResponse.status}`);
//       }

//       setMessage('Check-in request sent successfully');
//       setRequestedCheckInTime('');
//       setCheckInRequestSent(true);
//       localStorage.setItem(`checkInRequestSent_${user.id}_${today}`, true); // Save state in local storage
//     } catch (error) {
//       console.error('Error sending check-in request:', error);
//       setMessage('An error occurred while sending the check-in request.');
//     }
//   };

//   useEffect(() => {
//     const fetchAttendance = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/attendance?employeeId=${user.id}`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setAttendance(data);

//         const today = new Date().toISOString().split('T')[0];
//         const todayAttendance = data.find(record => record.date === today);

//         if (todayAttendance) {
//           setIsCheckedIn(!!todayAttendance.checkInTime && !todayAttendance.checkOutTime);
//           setHasCheckedOutToday(!!todayAttendance.checkOutTime);
//           if (todayAttendance.checkInTime) setCheckInTime(todayAttendance.checkInTime);
//           if (todayAttendance.checkOutTime) setCheckOutTime(todayAttendance.checkOutTime);
//         } else {
//           setIsCheckedIn(false);
//           setHasCheckedOutToday(false);
//         }

//         // Retrieve the check-in request state from local storage
//         const checkInRequestSent = localStorage.getItem(`checkInRequestSent_${user.id}_${today}`);
//         setCheckInRequestSent(!!checkInRequestSent);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     const fetchLeaves = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/leaves?employeeId=${user.id}`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setLeaves(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchAttendance();
//     fetchLeaves();
// }, [user.id]);

// const handleCheckIn = async () => {
//   const currentTime = new Date().toLocaleTimeString();
//   const currentDate = new Date().toISOString().split('T')[0];
//   try {
//     const response = await fetch('http://localhost:3001/attendance', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         employeeId: user.id,
//         date: currentDate,
//         status: 'present',
//         checkInTime: currentTime
//       })
//     });
//     if (!response.ok) throw new Error('Failed to check in');
//     const newRecord = await response.json();
//     setAttendance([...attendance, newRecord]);
//     setIsCheckedIn(true);
//     setCheckInTime(currentTime);
//     alert(`Checked in at ${currentTime}`);
//   } catch (error) {
//     setError(error.message);
//   }
// };

// const handleCheckOut = async () => {
//   const currentTime = new Date().toLocaleTimeString();
//   const currentDate = new Date().toISOString().split('T')[0];
//   const todayRecord = attendance.find(record => record.date === currentDate && record.employeeId === user.id);
//   if (todayRecord) {
//     try {
//       const response = await fetch(`http://localhost:3001/attendance/${todayRecord.id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           checkOutTime: currentTime
//         })
//       });
//       if (!response.ok) throw new Error('Failed to check out');
//       setAttendance(attendance.map(record =>
//         record.id === todayRecord.id ? { ...record, checkOutTime: currentTime } : record
//       ));
//       setIsCheckedIn(false);
//       setHasCheckedOutToday(true);
//       setCheckOutTime(currentTime);
//       alert(`Checked out at ${currentTime}`);
//     } catch (error) {
//       setError(error.message);
//     }
//   } else {
//     alert('No check-in record found for today.');
//   }
// };

//   const handleRequestLeave = () => {
//     navigate('/leavemanagement');
//   };

//   const handleAttendanceClick = () => {
//     navigate('/myattendance');
//   };

//   const handleLeaveClick = () => {
//     navigate('/leavedetails');
//   };

//   const handleLogout = () => {
//     sessionStorage.removeItem('user');
//     navigate('/login');
//   };

//   const calculateAttendanceRate = () => {
//     const totalDays = attendance.length;
//     const presentDays = attendance.filter(record => record.status === 'present').length;
//     return totalDays === 0 ? 'N/A' : `${((presentDays / totalDays) * 100).toFixed(2)}%`;
//   };

// const pendingLeaves = leaves.filter(leave => leave.status === 'pending').length;
// const approvedLeaves = leaves.filter(leave => leave.status === 'approved').length;
// const rejectedLeaves = leaves.filter(leave => leave.status === 'rejected').length;
// const leaveData = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
//   datasets: [
//     {
//       label: 'Number of Leaves',
//       data: Array(12).fill(0).map((_, monthIndex) => {
//         const monthName = ('0' + (monthIndex + 1)).slice(-2); // Formatting month to 'MM' format
//         return leaves.filter(leave => leave.startDate.includes(`-${monthName}-`)).length;
//       }),
//       fill: false,
//       backgroundColor: 'blue',
//       borderColor: '#2596BE',
//     },
//   ],
// };

// const options = {
//   maintainAspectRatio: false,
//   scales: {
//     y: {
//       beginAtZero: true,
//       ticks: {
//         stepSize: 5,
//         precision: 0,
//       },
//       grid: {
//         color: '#e0e0e0',
//         lineWidth: 0.5,
//       },
//     },
//     x: {
//       grid: {
//         display: false,
//       },
//     },
//   },
// };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="employee-dashboard">
//       <nav className="navbar">
//         <div className="logo">Company Logo</div>
//         <ul className="nav-links">
//           <li><Link to="/myattendance">My Attendance</Link></li>
//           <li><Link to="/leavedetails">Leave Details</Link></li>
//           <li><Link to="/leavemanagement">Leave Management</Link></li>
//           <li><Link to="/profile">Profile</></li>
//           <li><button onClick={onLogout}>Logout</button></li>
//         </ul>
//       </nav>
//       <header>
//         <h2>Employee Dashboard</h2>
//       </header>
//       <main>
//         <div className="card profile-card">
//           <div className="profile-pic"></div>
//           <div className="profile-info">
//             <h3>{user.username}</h3>
//             <p>{user.role}</p>
//             <p>{user.email}</p>
//           </div>
//         </div>
//         <div className="card attendance-card" onClick={handleAttendanceClick}>
//           <div className="attendance-pic">{calculateAttendanceRate()}</div>
//           <div className="attendance-info">
//             <h3>Attendance Rate</h3>
//           </div>
//         </div>
//         <div className="card leave-card" onClick={handleLeaveClick}>
//           <div className="leave-pic">{leaves.length}</div>
//           <div className="leave-info">
//             <h3>Leaves Taken</h3>
//           </div>
//         </div>
//       </main>
//       <div className="action-buttons">
//         <button className="btn request-leave-btn" onClick={handleRequestLeave}>Leave Request</button>

//         <div>
//           <h2>Check In</h2>
//           <input
//             type="time"
//             value={requestedCheckInTime}
//             onChange={(e) => setRequestedCheckInTime(e.target.value)}
//           />
//           <button onClick={sendCheckInRequest}>Send Check-In Request</button>
//           {message && <p>{message}</p>}
//         </div>

//   <div className="right-btn">
//     <button 
//       className={`btn check-in-btn ${isCheckedIn || hasCheckedOutToday || checkInRequestSent ? 'disabled' : ''}`} 
//       onClick={handleCheckIn} 
//       disabled={isCheckedIn || hasCheckedOutToday || checkInRequestSent}
//     >
//       Check In
//     </button>
//     <button 
//       className={`btn check-out-btn ${!isCheckedIn || hasCheckedOutToday ? 'disabled' : ''}`} 
//       onClick={handleCheckOut} 
//       disabled={!isCheckedIn || hasCheckedOutToday}
//     >
//       Check Out
//     </button>
//   </div>
// </div>

//       <div className="leave-summary">
//         <div className="summary-item">
//           <h4>Pending Leaves</h4>
//           <p>{pendingLeaves}</p>
//         </div>
//         <div className="summary-item">
//           <h4>Approved Leaves</h4>
//           <p>{approvedLeaves}</p>
//         </div>
//         <div className="summary-item">
//           <h4>Rejected Leaves</h4>
//           <p>{rejectedLeaves}</p>
//         </div>
//       </div>  

//   <section className="leave-chart">
//     <h3>Leave Management</h3>
//     <div className="chart-container">
//       <Line data={leaveData} options={options} />
//     </div>
//   </section>
// </div>
//   );
// };

// export default EmployeeDashboard;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import '../Css/EmployeeDashboard.css';
import Navbar from './Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import LeaveDetailsModal from './LeaveDetailsModal';
import PresentDetailsModal from './PresentDetailsModal'; // Import new modal component
import LeaveRequestModal from './LeaveRequestModal'; // Import LeaveRequestModal

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import profile from '../Image/jk.png';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

Modal.setAppElement('#root');

const EmployeeDashboard = ({ user }) => {
  const navigate = useNavigate();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [presentPercentage, setPresentPercentage] = useState(50);
  const [leavePercentage, setLeavePercentage] = useState(30);
  const [leaves, setLeaves] = useState([]);
  const [present, setPresent] = useState([]);
  const [filteredLeaves, setFilteredLeaves] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(''); // Track selected status
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [isPresentModalOpen, setIsPresentModalOpen] = useState(false); // New state for present modal
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(user.id);
  const [error, setError] = useState(null);

  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [hasCheckedOutToday, setHasCheckedOutToday] = useState(false);
  const [checkInRequestSent, setCheckInRequestSent] = useState(false);
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');


  //-----
  const [isLeaveRequestModalOpen, setIsLeaveRequestModalOpen] = useState(false); // New state for LeaveRequestModal


  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await fetch(`http://localhost:3001/leaves?employeeId=${user.id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setLeaves(data);
        setFilteredLeaves(data); // Set filtered leaves initially to all leaves
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchPresent = async () => {
      try {
        const response = await fetch(`http://localhost:3001/attendance?employeeId=${user.id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPresent(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchLeaves();
    fetchPresent();
  }, [user.id]);

  // Navigate to ProfilePage
  const goToProfile = () => {
    navigate('/profile');
  };

  const openCalendar = () => setIsCalendarOpen(true);
  const closeCalendar = () => setIsCalendarOpen(false);

  const onDateChange = (date) => {
    setSelectedDate(date);
    closeCalendar();
  };

  const openLeaveModal = () => setIsLeaveModalOpen(true);
  const closeLeaveModal = () => setIsLeaveModalOpen(false);

  const openLeaveRequestModal = () => setIsLeaveRequestModalOpen(true); // Open LeaveRequestModal
  const closeLeaveRequestModal = () => setIsLeaveRequestModalOpen(false); // Close LeaveRequestModal

  const openPresentModal = () => {
    console.log('Present Modal Opened');
    setIsPresentModalOpen(true);
  };

  const closePresentModal = () => {
    console.log('Present Modal Closed');
    setIsPresentModalOpen(false);
  };

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
  const presentDetails = present; // Present details

  const leaveData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Number of Leaves',
        data: Array(12).fill(0).map((_, monthIndex) => {
          const monthName = ('0' + (monthIndex + 1)).slice(-2);
          return leaves.filter(leave => leave.startDate.includes(`-${monthName}-`)).length;
        }),
        fill: false,
        backgroundColor: 'blue',
        borderColor: '#2596BE',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          precision: 0,
        },
        grid: {
          color: '#e0e0e0',
          lineWidth: 0.5,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const handleCheckIn = async () => {
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toISOString().split('T')[0];
    try {
      const response = await fetch('http://localhost:3001/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          employeeId: user.id,
          date: currentDate,
          status: 'present',
          checkInTime: currentTime
        })
      });
      if (!response.ok) throw new Error('Failed to check in');
      const newRecord = await response.json();
      setPresent([...present, newRecord]);
      setIsCheckedIn(true);
      setCheckInTime(currentTime);
      setCheckInRequestSent(true);
      alert(`Checked in at ${currentTime}`);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCheckOut = async () => {
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toISOString().split('T')[0];
    const todayRecord = present.find(record => record.date === currentDate && record.employeeId === user.id);
    if (todayRecord) {
      try {
        const response = await fetch(`http://localhost:3001/attendance/${todayRecord.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            checkOutTime: currentTime
          })
        });
        if (!response.ok) throw new Error('Failed to check out');
        setPresent(present.map(record =>
          record.id === todayRecord.id ? { ...record, checkOutTime: currentTime } : record
        ));
        setIsCheckedIn(false);
        setHasCheckedOutToday(true);
        setCheckOutTime(currentTime);
        alert(`Checked out at ${currentTime}`);
      } catch (error) {
        setError(error.message);
      }
    } else {
      alert('No check-in record found for today.');
    }
  };

  return (
    <div className="dashboard">
      <Navbar />
      <div className="container">
        <div className="header">
          <h1>Attendance</h1>
          <div className="date-display" onClick={openCalendar}>
            <i className="fa fa-calendar"></i>
            <span className="date-text">
              {selectedDate.toLocaleDateString('default', { month: 'short', year: 'numeric' })}
            </span>
          </div>
        </div>
        <div className="profile-section" >
          <div className="profile" onClick={goToProfile}>
            <img src={profile} alt="Amanda Kherr" className="profile-pic" />
            <div className="profile-info">
              <h2>Amanda Kherr</h2>
              <p>Developer (Social Media)</p>
              <p>Amanda.Kherr@gmail.com</p>
              {/* <h2>{user.username}</h2>
              <p>{user.role}</p>
              <p>{user.email}</p> */}
            </div>
          </div>
          <div className="stats">
            <div className="stat" onClick={openPresentModal}>
              <CircularProgressbar
                value={presentPercentage}
                text={`${presentPercentage}%`}
                styles={buildStyles({
                  pathColor: `#007bff`,
                  textColor: '#007bff',
                  trailColor: '#d6d6d6',
                })}
              />
              <div className="stat-text">
                <p>Present</p>
              </div>
            </div>
            <div className="stat" style={{ width: '180px' }} onClick={openLeaveModal}>
              <CircularProgressbar
                value={leavePercentage}
                text={`${leavePercentage}%`}
                styles={buildStyles({
                  pathColor: `#007bff`,
                  textColor: '#007bff',
                  trailColor: '#d6d6d6',
                })}
              />
              <div className="stat-text">
                <p>Leave</p>
              </div>
            </div>
          </div>
        </div>
        <div className="leave-checkin-section">
          <div className="leave-request">
            <h3  onClick={openLeaveRequestModal}> Leave Request</h3>
            <p  onClick={openLeaveRequestModal}>Send Leave request</p>
          </div>
          <div className="buttons">
            <button
              className={`btn check-in-btn ${isCheckedIn || hasCheckedOutToday || checkInRequestSent ? 'disabled' : ''}`}
              onClick={handleCheckIn}
              disabled={isCheckedIn || hasCheckedOutToday || checkInRequestSent}
            >
              Check In
            </button>
            <button
              className={`btn check-out-btn ${!isCheckedIn || hasCheckedOutToday ? 'disabled' : ''}`}
              onClick={handleCheckOut}
              disabled={!isCheckedIn || hasCheckedOutToday}
            >
              Check Out
            </button>
          </div>
        </div>
        <div className="leave-stats-section">
          <div className="leave-stat" onClick={showPendingLeaves}>
            <h4>Pending Leave</h4>
            <p>{leaves.filter(leave => leave.status === 'pending').length}</p>
          </div>
          <div className="leave-stat" onClick={showApprovedLeaves}>
            <h4>Approved Leave</h4>
            <p>{leaves.filter(leave => leave.status === 'approved').length}</p>
          </div>
          <div className="leave-stat" onClick={showRejectedLeaves}>
            <h4>Rejected Leave</h4>
            <p>{leaves.filter(leave => leave.status === 'rejected').length}</p>
          </div>
        </div>
        <div className="leave-chart-sec">
          <h3>Leave Statistics</h3>
          <h4>Total number of leaves per month</h4>
        </div>
        <div className="leave-chart">
          <div className="chart-container">
            <Line data={leaveData} options={options} />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isCalendarOpen}
        onRequestClose={closeCalendar}
        contentLabel="Select Date"
        className="calendar-modal"
        overlayClassName="calendar-modal-overlay"
      >
        <Calendar onChange={onDateChange} value={selectedDate} />
        <button onClick={closeCalendar} className="close-button">Close</button>
      </Modal>
      <LeaveDetailsModal
        isOpen={isLeaveModalOpen}
        onRequestClose={closeLeaveModal}
        leaveDetails={leaveDetails}
      />
      <PresentDetailsModal
        isOpen={isPresentModalOpen}
        onRequestClose={closePresentModal}
        presentDetails={presentDetails}
      />
      <LeaveRequestModal
        isOpen={isLeaveRequestModalOpen}
        onRequestClose={closeLeaveRequestModal}
      /> {/* Add LeaveRequestModal */}

    </div>
  );
};

export default EmployeeDashboard;
