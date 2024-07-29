

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Line } from 'react-chartjs-2';
// import '../Css/EmployeeDashboard.css';
// import Navbar from './Navbar';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import Modal from 'react-modal';
// import LeaveDetailsModal from './LeaveDetailsModal';
// import PresentDetailsModal from './PresentDetailsModal'; // Import new modal component
// import LeaveRequestModal from './LeaveRequestModal'; // Import LeaveRequestModal

// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import profile from '../Image/jk.png';
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

// ChartJS.register(
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   Title,
//   Tooltip,
//   Legend
// );

// Modal.setAppElement('#root');

// const EmployeeDashboard = ({ user }) => {
//   const navigate = useNavigate();
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [presentPercentage, setPresentPercentage] = useState(50);
//   const [leavePercentage, setLeavePercentage] = useState(30);
//   const [leaves, setLeaves] = useState([]);
//   const [present, setPresent] = useState([]);
//   const [filteredLeaves, setFilteredLeaves] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState(''); // Track selected status
//   const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
//   const [isPresentModalOpen, setIsPresentModalOpen] = useState(false); // New state for present modal
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(user.id);
//   const [error, setError] = useState(null);

//   const [isCheckedIn, setIsCheckedIn] = useState(false);
//   const [hasCheckedOutToday, setHasCheckedOutToday] = useState(false);
//   const [checkInRequestSent, setCheckInRequestSent] = useState(false);
//   const [checkInTime, setCheckInTime] = useState('');
//   const [checkOutTime, setCheckOutTime] = useState('');

//   //calanderconst [isCalendarOpen, setIsCalendarOpen] = useState(false);
// const [today, setToday] = useState(new Date());

// const [holidays, setHolidays] = useState([]);


//   //-----
//   const [isLeaveRequestModalOpen, setIsLeaveRequestModalOpen] = useState(false); // New state for LeaveRequestModal


//   useEffect(() => {
//     const fetchLeaves = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/leaves?employeeId=${user.id}`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setLeaves(data);
//         setFilteredLeaves(data); // Set filtered leaves initially to all leaves
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     const fetchPresent = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/attendance?employeeId=${user.id}`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setPresent(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     const fetchHolidays = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/holidays`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setHolidays(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };
  
//     fetchHolidays();
//     fetchLeaves();
//     fetchPresent();
//   }, [user.id]);

//   // Navigate to ProfilePage
//   const goToProfile = () => {
//     navigate('/profile');
//   };

//   const openCalendar = () => setIsCalendarOpen(true);
//   const closeCalendar = () => setIsCalendarOpen(false);

  // const handleTodayClick = () => {
  //   setSelectedDate(today);
  //   openCalendar();
  // };
  // const onDateChange = (date) => {
  //   setSelectedDate(date);
  //   closeCalendar();
  // };
//   // const onDateChange = (date) => {
//   //   setSelectedDate(date);
//   //   closeCalendar();
//   // };

//   const openLeaveModal = () => setIsLeaveModalOpen(true);
//   const closeLeaveModal = () => setIsLeaveModalOpen(false);

//   const openLeaveRequestModal = () => setIsLeaveRequestModalOpen(true); // Open LeaveRequestModal
//   const closeLeaveRequestModal = () => setIsLeaveRequestModalOpen(false); // Close LeaveRequestModal

//   const openPresentModal = () => {
//     console.log('Present Modal Opened');
//     setIsPresentModalOpen(true);
//   };

//   const closePresentModal = () => {
//     console.log('Present Modal Closed');
//     setIsPresentModalOpen(false);
//   };

//   // Filter functions
//   const showPendingLeaves = () => {
//     setSelectedStatus('pending');
//     setFilteredLeaves(leaves.filter(leave => leave.status === 'pending'));
//     openLeaveModal();
//   };

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

//   const leaveDetails = filteredLeaves;
//   const presentDetails = present; // Present details

//   const leaveData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: 'Number of Leaves',
//         data: Array(12).fill(0).map((_, monthIndex) => {
//           const monthName = ('0' + (monthIndex + 1)).slice(-2);
//           return leaves.filter(leave => leave.startDate.includes(`-${monthName}-`)).length;
//         }),
//         fill: false,
//         backgroundColor: 'blue',
//         borderColor: '#2596BE',
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           stepSize: 5,
//           precision: 0,
//         },
//         grid: {
//           color: '#e0e0e0',
//           lineWidth: 0.5,
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//   };

//   const handleCheckIn = async () => {
//     const currentTime = new Date().toLocaleTimeString();
//     const currentDate = new Date().toISOString().split('T')[0];
//     try {
//       const response = await fetch('http://localhost:3001/attendance', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           employeeId: user.id,
//           date: currentDate,
//           status: 'present',
//           checkInTime: currentTime
//         })
//       });
//       if (!response.ok) throw new Error('Failed to check in');
//       const newRecord = await response.json();
//       setPresent([...present, newRecord]);
//       setIsCheckedIn(true);
//       setCheckInTime(currentTime);
//       setCheckInRequestSent(true);
//       alert(`Checked in at ${currentTime}`);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleCheckOut = async () => {
//     const currentTime = new Date().toLocaleTimeString();
//     const currentDate = new Date().toISOString().split('T')[0];
//     const todayRecord = present.find(record => record.date === currentDate && record.employeeId === user.id);
//     if (todayRecord) {
//       try {
//         const response = await fetch(`http://localhost:3001/attendance/${todayRecord.id}`, {
//           method: 'PATCH',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             checkOutTime: currentTime
//           })
//         });
//         if (!response.ok) throw new Error('Failed to check out');
//         setPresent(present.map(record =>
//           record.id === todayRecord.id ? { ...record, checkOutTime: currentTime } : record
//         ));
//         setIsCheckedIn(false);
//         setHasCheckedOutToday(true);
//         setCheckOutTime(currentTime);
//         alert(`Checked out at ${currentTime}`);
//       } catch (error) {
//         setError(error.message);
//       }
//     } else {
//       alert('No check-in record found for today.');
//     }
//   };
//   const tileContent = ({ date, view }) => {
//   if (view === 'month') {
//     const dateStr = date.toISOString().split('T')[0];
//     const holiday = holidays.find(h => h.date === dateStr);

//     return (
//       <>
//         {holiday && <div style={{ position: 'relative' }}>
//           <span className="holiday-indicator"></span>
//         </div>}
//       </>
//     );
//   }
//   return null;
// };

  
//   return (
//     <div className="dashboard">
//       <Navbar />
//       <div className="container">
//         <div className="header">
//           <h1>Attendance</h1>
//           {/* <div className="date-display" onClick={openCalendar}>
//             <i className="fa fa-calendar"></i>
//             <span className="date-text">
//               {selectedDate.toLocaleDateString('default', { month: 'short', year: 'numeric' })}
//             </span>
//           </div> */}
//         <div className="today-section">
//         <h3>Today's Date: {today.toDateString()}</h3>
//         <button onClick={handleTodayClick} className="btn">View Calendar</button>
//       </div>
//       {isCalendarOpen && (
//         <div className="calendar-section">
//           <h3>Calendar</h3>
//           <Calendar
//             onChange={onDateChange}
//             value={selectedDate}
//             tileContent={tileContent}
//           />
//         </div>
//       )}
//         </div>
//         <div className="profile-section" >
//           <div className="profile" onClick={goToProfile}>
//             <img src={profile} alt="Amanda Kherr" className="profile-pic" />
//             <div className="profile-info">
//               <h2>Amanda Kherr</h2>
//               <p>Developer (Social Media)</p>
//               <p>Amanda.Kherr@gmail.com</p>
//               {/* <h2>{user.username}</h2>
//               <p>{user.role}</p>
//               <p>{user.email}</p> */}
//             </div>
//           </div>
//           <div className="stats">
//             <div className="stat" onClick={openPresentModal}>
//               <CircularProgressbar
//                 value={presentPercentage}
//                 text={`${presentPercentage}%`}
//                 styles={buildStyles({
//                   pathColor: `#007bff`,
//                   textColor: '#007bff',
//                   trailColor: '#d6d6d6',
//                 })}
//               />
//               <div className="stat-text">
//                 <p>Present</p>
//               </div>
//             </div>
//             <div className="stat" style={{ width: '180px' }} onClick={openLeaveModal}>
//               <CircularProgressbar
//                 value={leavePercentage}
//                 text={`${leavePercentage}%`}
//                 styles={buildStyles({
//                   pathColor: `#007bff`,
//                   textColor: '#007bff',
//                   trailColor: '#d6d6d6',
//                 })}
//               />
//               <div className="stat-text">
//                 <p>Leave</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="leave-checkin-section">
//           <div className="leave-request">
//             <h3  onClick={openLeaveRequestModal}> Leave Request</h3>
//             <p  onClick={openLeaveRequestModal}>Send Leave request</p>
//           </div>
//           <div className="buttons">
//             <button
//               className={`btn check-in-btn ${isCheckedIn || hasCheckedOutToday || checkInRequestSent ? 'disabled' : ''}`}
//               onClick={handleCheckIn}
//               disabled={isCheckedIn || hasCheckedOutToday || checkInRequestSent}
//             >
//               Check In
//             </button>
//             <button
//               className={`btn check-out-btn ${!isCheckedIn || hasCheckedOutToday ? 'disabled' : ''}`}
//               onClick={handleCheckOut}
//               disabled={!isCheckedIn || hasCheckedOutToday}
//             >
//               Check Out
//             </button>
//           </div>
//         </div>
//         <div className="leave-stats-section">
//           <div className="leave-stat" onClick={showPendingLeaves}>
//             <h4>Pending Leave</h4>
//             <p>{leaves.filter(leave => leave.status === 'pending').length}</p>
//           </div>
//           <div className="leave-stat" onClick={showApprovedLeaves}>
//             <h4>Approved Leave</h4>
//             <p>{leaves.filter(leave => leave.status === 'approved').length}</p>
//           </div>
//           <div className="leave-stat" onClick={showRejectedLeaves}>
//             <h4>Rejected Leave</h4>
//             <p>{leaves.filter(leave => leave.status === 'rejected').length}</p>
//           </div>
//         </div>
//         <div className="leave-chart-sec">
//           <h3>Leave Statistics</h3>
//           <h4>Total number of leaves per month</h4>
//         </div>
//         <div className="leave-chart">
//           <div className="chart-container">
//             <Line data={leaveData} options={options} />
//           </div>
//         </div>
//       </div>
//       {/* <Modal
//         isOpen={isCalendarOpen}
//         onRequestClose={closeCalendar}
//         contentLabel="Select Date"
//         className="calendar-modal"
//         overlayClassName="calendar-modal-overlay"
//       >
//         <Calendar onChange={onDateChange} value={selectedDate} />
//         <button onClick={closeCalendar} className="close-button">Close</button>
//       </Modal> */}
      
//       <LeaveDetailsModal
//         isOpen={isLeaveModalOpen}
//         onRequestClose={closeLeaveModal}
//         leaveDetails={leaveDetails}
//       />
//       <PresentDetailsModal
//         isOpen={isPresentModalOpen}
//         onRequestClose={closePresentModal}
//         presentDetails={presentDetails}
//       />
//       <LeaveRequestModal
//         isOpen={isLeaveRequestModalOpen}
//         onRequestClose={closeLeaveRequestModal}
//       /> {/* Add LeaveRequestModal */}

//     </div>
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
import LeaveRequestModal from './LeaveRequestModal'; // Import LeaveRequestModal

import PresentDetailsModal from './PresentDetailsModal'; // Import new modal component
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
const [holidays, setHolidays] = useState([]);
const [isLeaveRequestModalOpen, setIsLeaveRequestModalOpen] = useState(false); // New state for LeaveRequestModal
  useEffect(() => {
    setToday(new Date());

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

const fetchHolidays = async () => {
  try {
    const response = await fetch(`http://localhost:3001/holidays`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    setHolidays(data);
  } catch (error) {
    setError(error.message);
  }
};

fetchHolidays();
    fetchLeaves();
    fetchPresent();
  }, [user.id]);

  useEffect(() => {
    // Retrieve check-in and check-out states from local storage
    const storedAttendanceState = localStorage.getItem('attendanceState');
    if (storedAttendanceState) {
      const { isCheckedIn, hasCheckedOutToday, checkInTime, checkOutTime, currentDate } = JSON.parse(storedAttendanceState);
      const todayDate = new Date().toISOString().split('T')[0];
      if (currentDate === todayDate) {
        setIsCheckedIn(isCheckedIn);
        setHasCheckedOutToday(hasCheckedOutToday);
        setCheckInTime(checkInTime);
        setCheckOutTime(checkOutTime);
        setCheckInRequestSent(true);
      }
    }
  }, []);

   // Navigate to ProfilePage
   const goToProfile = () => {
    navigate('/profile');
  };
const [today, setToday] = useState(new Date());

  const openCalendar = () => setIsCalendarOpen(true);
  const closeCalendar = () => setIsCalendarOpen(false);

  
  const openLeaveRequestModal = () => setIsLeaveRequestModalOpen(true); // Open LeaveRequestModal
  const closeLeaveRequestModal = () => setIsLeaveRequestModalOpen(false); // Close LeaveRequestModal

 
  const handleTodayClick = () => {
    setSelectedDate(today);
    openCalendar();
  };
  
  const onDateChange = (date) => {
    setSelectedDate(date);
    closeCalendar();
  };
  const openLeaveModal = () => setIsLeaveModalOpen(true);
  const closeLeaveModal = () => setIsLeaveModalOpen(false);
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
      // Store check-in state in local storage
      localStorage.setItem('attendanceState', JSON.stringify({
        isCheckedIn: true,
        hasCheckedOutToday: false,
        checkInTime: currentTime,
        checkOutTime: null,
        currentDate
      }));
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
        // Update local storage with check-out state
        localStorage.setItem('attendanceState', JSON.stringify({
          isCheckedIn: false,
          hasCheckedOutToday: true,
          checkInTime,
          checkOutTime: currentTime,
          currentDate
        }));
        alert(`Checked out at ${currentTime}`);
      } catch (error) {
        setError(error.message);
      }
    } else {
      alert('No check-in record found for today.');
    }
  };


const tileContent = ({ date, view }) => {
  if (view === 'month') {
    const holiday = holidays.find(
      (holiday) => new Date(holiday.date).toDateString() === date.toDateString()
    );

    if (holiday) {
      return (
        <div className="holiday">
          <div className="holiday-tooltip">{holiday.name}</div>
        </div>
      );
    }
  }
  return null;
};
  
  
  return (
    <div className="dashboard">
      <Navbar />
      <div className="container">
        <div className="header">
          <h1>Attendance</h1>
          <button className="Date-btn" onClick={handleTodayClick}>
  {today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
</button>

        </div>
        <div className="profile-section" >
          <div className="profile"  onClick={goToProfile}>
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
            <div className="stat"   onClick={openPresentModal}>
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
            <div className="stat" style={{width:'180px'}}  onClick={openLeaveModal}>
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
        {/* <Calendar onChange={onDateChange} value={selectedDate} /> */}
        <Calendar
onChange={onDateChange}
value={selectedDate}
tileContent={tileContent}
/>
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



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import { Line } from 'react-chartjs-2';
// import '../Css/EmployeeDashboard.css';
// import Navbar from './Navbar';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import Modal from 'react-modal';
// import LeaveDetailsModal from './LeaveDetailsModal';
// import PresentDetailsModal from './PresentDetailsModal'; // Import new modal component
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import profile from '../Image/jk.png';
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
// ChartJS.register(
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   Title,
//   Tooltip,
//   Legend
// );
// Modal.setAppElement('#root');

// const EmployeeDashboard = ({ user }) => {
//   const navigate = useNavigate(); 
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [presentPercentage, setPresentPercentage] = useState(50);
//   const [leavePercentage, setLeavePercentage] = useState(30);
//   const [leaves, setLeaves] = useState([]);
//   const [present, setPresent] = useState([]);
//   const [filteredLeaves, setFilteredLeaves] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState(''); // Track selected status
//   const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
//   const [isPresentModalOpen, setIsPresentModalOpen] = useState(false); // New state for present modal
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(user.id);
//   const [error, setError] = useState(null);
//   const [isCheckedIn, setIsCheckedIn] = useState(false);
//   const [hasCheckedOutToday, setHasCheckedOutToday] = useState(false);
//   const [checkInRequestSent, setCheckInRequestSent] = useState(false);
//   const [checkInTime, setCheckInTime] = useState('');
//   const [checkOutTime, setCheckOutTime] = useState('');
//   const [holidays, setHolidays] = useState([]);
//   const [today, setToday] = useState(new Date());

//   useEffect(() => {
//     const fetchLeaves = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/leaves?employeeId=${user.id}`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setLeaves(data);
//         setFilteredLeaves(data); // Set filtered leaves initially to all leaves
//       } catch (error) {
//         setError(error.message);
//       }
//     };
//     const fetchPresent = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/attendance?employeeId=${user.id}`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setPresent(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     const fetchHolidays = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/holidays`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setHolidays(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchHolidays();
//     fetchLeaves();
//     fetchPresent();
//   }, [user.id]);

//   const goToProfile = () => {
//     navigate('/profile');
//   };

//   const openCalendar = () => setIsCalendarOpen(true);
//   const closeCalendar = () => setIsCalendarOpen(false);

//   const handleTodayClick = () => {
//     setSelectedDate(today);
//     openCalendar();
//   };

//   const onDateChange = (date) => {
//     setSelectedDate(date);
//     closeCalendar();
//   };

//   const openLeaveModal = () => setIsLeaveModalOpen(true);
//   const closeLeaveModal = () => setIsLeaveModalOpen(false);
//   const openPresentModal = () => {
//     console.log('Present Modal Opened');
//     setIsPresentModalOpen(true);
//   };
  
//   const closePresentModal = () => {
//     console.log('Present Modal Closed');
//     setIsPresentModalOpen(false);
//   };

//   // Filter functions
//   const showPendingLeaves = () => {
//     setSelectedStatus('pending');
//     setFilteredLeaves(leaves.filter(leave => leave.status === 'pending'));
//     openLeaveModal();
//   };

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

//   const leaveDetails = filteredLeaves; 
//   const presentDetails = present; // Present details

//   const leaveData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: 'Number of Leaves',
//         data: Array(12).fill(0).map((_, monthIndex) => {
//           const monthName = ('0' + (monthIndex + 1)).slice(-2);
//           return leaves.filter(leave => leave.startDate.includes(`-${monthName}-`)).length;
//         }),
//         fill: false,
//         backgroundColor: 'blue',
//         borderColor: '#2596BE',
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           stepSize: 5,
//           precision: 0,
//         },
//         grid: {
//           color: '#e0e0e0',
//           lineWidth: 0.5,
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//   };

//   const handleCheckIn = async () => {
//     const currentTime = new Date().toLocaleTimeString();
//     const currentDate = new Date().toISOString().split('T')[0];
//     try {
//       const response = await fetch('http://localhost:3001/attendance', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           employeeId: user.id,
//           date: currentDate,
//           status: 'present',
//           checkInTime: currentTime
//         })
//       });
//       if (!response.ok) throw new Error('Failed to check in');
//       const newRecord = await response.json();
//       setPresent([...present, newRecord]);
//       setIsCheckedIn(true);
//       setCheckInTime(currentTime);
//       setCheckInRequestSent(true);
//       alert(`Checked in at ${currentTime}`);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleCheckOut = async () => {
//     const currentTime = new Date().toLocaleTimeString();
//     const currentDate = new Date().toISOString().split('T')[0];
//     try {
//       const response = await fetch(`http://localhost:3001/attendance/${user.id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           checkOutTime: currentTime
//         })
//       });
//       if (!response.ok) throw new Error('Failed to check out');
//       const updatedRecord = await response.json();
//       setPresent(present.map(record => (record.id === updatedRecord.id ? updatedRecord : record)));
//       setHasCheckedOutToday(true);
//       setCheckOutTime(currentTime);
//       alert(`Checked out at ${currentTime}`);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const tileContent = ({ date, view }) => {
//     if (view === 'month') {
//       const holiday = holidays.find(
//         (holiday) => new Date(holiday.date).toDateString() === date.toDateString()
//       );

//       if (holiday) {
//         return (
//           <div className="holiday">
//             <div className="holiday-tooltip">{holiday.name}</div>
//           </div>
//         );
//       }
//     }
//     return null;
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="dashboard-container">
//         <div className="welcome-section">
//           <h2>Welcome to your dashboard, {user.name}!</h2>
//           <img src={profile} alt="Profile" className="profile-picture" onClick={goToProfile} />
//         </div>

//         <div className="chart-section">
//           <h3>Monthly Leaves</h3>
//           <div className="chart-container">
//             <Line data={leaveData} options={options} />
//           </div>
//         </div>

//         <div className="summary-section">
//           <div className="summary-item">
//             <h3>Present</h3>
//             <div className="summary-chart">
//               <CircularProgressbar
//                 value={presentPercentage}
//                 text={`${presentPercentage}%`}
//                 styles={buildStyles({
//                   pathColor: 'green',
//                   textColor: 'green',
//                 })}
//               />
//             </div>
//             <button onClick={openPresentModal}>View Present</button>
//           </div>
//           <div className="summary-item">
//             <h3>Leaves</h3>
//             <div className="summary-chart">
//               <CircularProgressbar
//                 value={leavePercentage}
//                 text={`${leavePercentage}%`}
//                 styles={buildStyles({
//                   pathColor: 'red',
//                   textColor: 'red',
//                 })}
//               />
//             </div>
//             <button onClick={showPendingLeaves}>Pending Leaves</button>
//             <button onClick={showApprovedLeaves}>Approved Leaves</button>
//             <button onClick={showRejectedLeaves}>Rejected Leaves</button>
//           </div>
//         </div>

//         <div className="attendance-section">
//           <h3>Attendance</h3>
//           <button onClick={handleTodayClick}>Select Date</button>
//           <Calendar
//             onChange={onDateChange}
//             value={selectedDate}
//             tileContent={tileContent}
//           />
//           <div className="attendance-actions">
//             <button onClick={handleCheckIn} disabled={isCheckedIn || hasCheckedOutToday}>
//               Check In
//             </button>
//             <button onClick={handleCheckOut} disabled={!isCheckedIn || hasCheckedOutToday}>
//               Check Out
//             </button>
//           </div>
//         </div>
//       </div>
//       <LeaveDetailsModal
//         isOpen={isLeaveModalOpen}
//         onRequestClose={closeLeaveModal}
//         leaveDetails={leaveDetails}
//         status={selectedStatus}
//       />
//       <PresentDetailsModal
//         isOpen={isPresentModalOpen}
//         onRequestClose={closePresentModal}
//         presentDetails={presentDetails}
//       />
//     </div>
//   );
// };

// export default EmployeeDashboard;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import { Line } from 'react-chartjs-2';
// import '../Css/EmployeeDashboard.css';
// import Navbar from './Navbar';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import Modal from 'react-modal';
// import LeaveDetailsModal from './LeaveDetailsModal';
// import PresentDetailsModal from './PresentDetailsModal'; 
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import profile from '../Image/jk.png';
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

// ChartJS.register(
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   Title,
//   Tooltip,
//   Legend
// );

// Modal.setAppElement('#root');

// const EmployeeDashboard = ({ user }) => {
//   const navigate = useNavigate(); 
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [presentPercentage, setPresentPercentage] = useState(50);
//   const [leavePercentage, setLeavePercentage] = useState(30);
//   const [leaves, setLeaves] = useState([]);
//   const [present, setPresent] = useState([]);
//   const [holidays, setHolidays] = useState([]);
//   const [filteredLeaves, setFilteredLeaves] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState('');
//   const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
//   const [isPresentModalOpen, setIsPresentModalOpen] = useState(false);
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(user.id);
//   const [error, setError] = useState(null);
//   const [isCheckedIn, setIsCheckedIn] = useState(false);
//   const [hasCheckedOutToday, setHasCheckedOutToday] = useState(false);
//   const [checkInRequestSent, setCheckInRequestSent] = useState(false);
//   const [checkInTime, setCheckInTime] = useState('');
//   const [checkOutTime, setCheckOutTime] = useState('');

//   useEffect(() => {
//     const fetchLeaves = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/leaves?employeeId=${user.id}`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setLeaves(data);
//         setFilteredLeaves(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     const fetchPresent = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/attendance?employeeId=${user.id}`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setPresent(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     const fetchHolidays = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/holidays`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setHolidays(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchLeaves();
//     fetchPresent();
//     fetchHolidays();
//   }, [user.id]);

//   const goToProfile = () => {
//     navigate('/profile');
//   };

//   const openCalendar = () => setIsCalendarOpen(true);
//   const closeCalendar = () => setIsCalendarOpen(false);

//   const onDateChange = (date) => {
//     setSelectedDate(date);
//     closeCalendar();
//   };

//   const openLeaveModal = () => setIsLeaveModalOpen(true);
//   const closeLeaveModal = () => setIsLeaveModalOpen(false);

//   const openPresentModal = () => {
//     console.log('Present Modal Opened');
//     setIsPresentModalOpen(true);
//   };
  
//   const closePresentModal = () => {
//     console.log('Present Modal Closed');
//     setIsPresentModalOpen(false);
//   };

//   const showPendingLeaves = () => {
//     setSelectedStatus('pending');
//     setFilteredLeaves(leaves.filter(leave => leave.status === 'pending'));
//     openLeaveModal();
//   };
  
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

//   const leaveDetails = filteredLeaves; 
//   const presentDetails = present;

//   const leaveData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: 'Number of Leaves',
//         data: Array(12).fill(0).map((_, monthIndex) => {
//           const monthName = ('0' + (monthIndex + 1)).slice(-2);
//           return leaves.filter(leave => leave.startDate.includes(`-${monthName}-`)).length;
//         }),
//         fill: false,
//         backgroundColor: 'blue',
//         borderColor: '#2596BE',
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           stepSize: 5,
//           precision: 0,
//         },
//         grid: {
//           color: '#e0e0e0',
//           lineWidth: 0.5,
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//   };

//   const handleCheckIn = async () => {
//     const currentTime = new Date().toLocaleTimeString();
//     const currentDate = new Date().toISOString().split('T')[0];
//     try {
//       const response = await fetch('http://localhost:3001/attendance', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           employeeId: user.id,
//           date: currentDate,
//           status: 'present',
//           checkInTime: currentTime
//         })
//       });
//       if (!response.ok) throw new Error('Failed to check in');
//       const newRecord = await response.json();
//       setPresent([...present, newRecord]);
//       setIsCheckedIn(true);
//       setCheckInTime(currentTime);
//       setCheckInRequestSent(true);
//       alert(`Checked in at ${currentTime}`);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleCheckOut = async () => {
//     const currentTime = new Date().toLocaleTimeString();
//     const currentDate = new Date().toISOString().split('T')[0];
//     const todayRecord = present.find(record => record.date === currentDate && record.employeeId === user.id);
//     if (todayRecord) {
//       try {
//         const response = await fetch(`http://localhost:3001/attendance/${todayRecord.id}`, {
//           method: 'PATCH',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             checkOutTime: currentTime
//           })
//         });
//         if (!response.ok) throw new Error('Failed to check out');
//         setPresent(present.map(record =>
//           record.id === todayRecord.id ? { ...record, checkOutTime: currentTime } : record
//         ));
//         setIsCheckedIn(false);
//         setHasCheckedOutToday(true);
//         setCheckOutTime(currentTime);
//         alert(`Checked out at ${currentTime}`);
//       } catch (error) {
//         setError(error.message);
//       }
//     } else {
//       alert('No check-in record found for today.');
//     }
//   };

//   const tileContent = ({ date, view }) => {
//     if (view === 'month') {
//       const holiday = holidays.find(
//         (holiday) => new Date(holiday.date).toDateString() === date.toDateString()
//       );
  
//       if (holiday) {
//         return (
//           <div className="holiday">
//             <div className="holiday-tooltip">{holiday.name}</div>
//           </div>
//         );
//       }
//     }
//     return null;
//   };
  

//   return (
//     <div>
//       <Navbar user={user} /> 
//       <div className="dashboard">
//         <h1>Employee Dashboard</h1>
//         <div className="profile-summary">
//           <img src={profile} alt="Profile" className="profile-pic" onClick={goToProfile} />
//           <div className="profile-info">
//             <h2>{user.name}</h2>
//             <p>{user.email}</p>
//           </div>
//         </div>
//         <div className="calendar-container">
//           <button className="open-calendar-button" onClick={openCalendar}>Open Calendar</button>
//           <Modal
//             isOpen={isCalendarOpen}
//             onRequestClose={closeCalendar}
//             contentLabel="Calendar Modal"
//             className="calendar-modal"
//             overlayClassName="calendar-modal-overlay"
//           >
//             <button onClick={closeCalendar} className="close-calendar-button">&times;</button>
//             <Calendar
//               onChange={onDateChange}
//               value={selectedDate}
//               tileContent={tileContent}
//             />
//           </Modal>
//         </div>
//         <div className="attendance-info">
//           <h2>Attendance</h2>
//           <div className="circular-progress-container">
//             <div className="circular-progress">
//               <CircularProgressbar
//                 value={presentPercentage}
//                 text={`${presentPercentage}%`}
//                 styles={buildStyles({
//                   pathColor: '#4caf50',
//                   textColor: '#4caf50',
//                 })}
//               />
//               <p>Present</p>
//             </div>
//             <div className="circular-progress">
//               <CircularProgressbar
//                 value={leavePercentage}
//                 text={`${leavePercentage}%`}
//                 styles={buildStyles({
//                   pathColor: '#ff9800',
//                   textColor: '#ff9800',
//                 })}
//               />
//               <p>On Leave</p>
//             </div>
//           </div>
//         </div>
//         <div className="leave-info">
//           <h2>Leave Information</h2>
//           <Line data={leaveData} options={options} />
//           <button className="show-leaves-button" onClick={showPendingLeaves}>Pending Leaves</button>
//           <button className="show-leaves-button" onClick={showApprovedLeaves}>Approved Leaves</button>
//           <button className="show-leaves-button" onClick={showRejectedLeaves}>Rejected Leaves</button>
//         </div>
//         <div className="check-in-out-container">
//           {isCheckedIn ? (
//             <button className="check-out-button" onClick={handleCheckOut} disabled={hasCheckedOutToday}>
//               Check Out
//             </button>
//           ) : (
//             <button className="check-in-button" onClick={handleCheckIn} disabled={checkInRequestSent}>
//               Check In
//             </button>
//           )}
//         </div>
//       </div>
//       <Modal
//         isOpen={isLeaveModalOpen}
//         onRequestClose={closeLeaveModal}
//         contentLabel="Leave Details Modal"
//         className="leave-details-modal"
//         overlayClassName="leave-details-modal-overlay"
//       >
//         <LeaveDetailsModal leaves={leaveDetails} status={selectedStatus} onClose={closeLeaveModal} />
//       </Modal>
//       <Modal
//         isOpen={isPresentModalOpen}
//         onRequestClose={closePresentModal}
//         contentLabel="Present Details Modal"
//         className="present-details-modal"
//         overlayClassName="present-details-modal-overlay"
//       >
//         <PresentDetailsModal presentDetails={presentDetails} onClose={closePresentModal} />
//       </Modal>
//     </div>
//   );
// };

// export default EmployeeDashboard;
