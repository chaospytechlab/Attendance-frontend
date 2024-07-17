// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../Css/Attendance.css';

// const AttendanceDetail = ({ user }) => {
//   const [attendance, setAttendance] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAttendance = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/attendance?employeeId=${user.id}`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setAttendance(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchAttendance();
//   }, [user.id]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="attendance-detail">
//       <nav className="navbar">
//         <div className="logo">Company Logo</div>
//         <ul className="nav-links">
//           <li><Link to="/dashboard">Dashboard</Link></li>
//           <li><Link to="/leavemanagement">Leave Management</Link></li>
//           <li><Link to="/profile">Profile</Link></li>
//         </ul>
//       </nav>
//       <header>
//         <h2>My Attendance Details</h2>
//       </header>
//       <main>
//         <table>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {attendance.map((record) => (
//               <tr key={record.date}>
//                 <td>{record.date}</td>
//                 <td>{record.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// };

// export default AttendanceDetail;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../Css/Attendance.css';

const AttendanceDetail = ({ user }) => {
  const [attendance, setAttendance] = useState([]);
  const [error, setError] = useState(null);
  const [filteredAttendance, setFilteredAttendance] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('');

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch(`http://localhost:3001/attendance?employeeId=${user.id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setAttendance(data);
        setFilteredAttendance(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAttendance();
  }, [user.id]);

  const handleMonthChange = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);

    const filtered = attendance.filter(record => {
      const attendanceDate = new Date(record.date);
      return attendanceDate.getMonth() === parseInt(month);
    });
    setFilteredAttendance(filtered);
    setIsModalOpen(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="attendance-detail">
      <nav className="navbar">
        <div className="logo">Company Logo</div>
        <ul className="nav-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/leavemanagement">Leave Management</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <header>
        <h2>My Attendance Details</h2>
        <button className="filter-btn" onClick={() => setIsModalOpen(true)}>Filter Attendance</button>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAttendance.map((record) => (
              <tr key={record.date}>
                <td>{record.date}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Filter Attendance"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Filter Attendance</h2>
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

export default AttendanceDetail;
