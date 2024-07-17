// // ViewAllAttendance.js

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';  

// import '../Css/ViewAllAttendance.css'; // Import the CSS file
// import Navbar from '../Components/Navbar.js'; // Import the Navbar component

// const ViewAllAttendance = () => {
//   const [attendance, setAttendance] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [filter, setFilter] = useState({ name: '', id: '', month: '', date: '' });
//   const [error, setError] = useState(null);

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

//     fetchAttendance();
//     fetchEmployees();
//   }, []);

//   const getTodayDate = () => {
//     const today = new Date();
//     return today.toISOString().split('T')[0];
//   };

//   const todayDate = getTodayDate();
//   const todaysAttendance = attendance.filter(record => record.date === (filter.date || todayDate));

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilter(prevState => ({ ...prevState, [name]: value }));
//   };

//   const filteredAttendance = todaysAttendance.filter(record => {
//     const employee = employees.find(emp => emp.id == record.employeeId);
//     if (!employee) return false;

//     const matchesName = filter.name ? employee.username.toLowerCase().includes(filter.name.toLowerCase()) : true;
//     const matchesId = filter.id ? employee.id.toString() === filter.id : true;
//     const matchesMonth = filter.month ? record.date.startsWith(filter.month) : true;

//     return matchesName && matchesId && matchesMonth;
//   });

//   const monthOptions = [
//     { value: '', label: 'Select Month' },
//     { value: '2024-01', label: 'January 2024' },
//     { value: '2024-02', label: 'February 2024' },
//     { value: '2024-03', label: 'March 2024' },
//     { value: '2024-04', label: 'April 2024' },
//     { value: '2024-05', label: 'May 2024' },
//     { value: '2024-06', label: 'June 2024' },
//     { value: '2024-07', label: 'July 2024' },
//     { value: '2024-08', label: 'August 2024' },
//     { value: '2024-09', label: 'September 2024' },
//     { value: '2024-10', label: 'October 2024' },
//     { value: '2024-11', label: 'November 2024' },
//     { value: '2024-12', label: 'December 2024' },
//   ];

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div>
//       <nav className="admin-nav">
//         <div className="logo">Company Logo</div>
//         <ul>
//           <li><Link to="/admin/dashboard">Dashboard</Link></li>
//           <li><Link to="/admin/manage-leaves">Manage Leaves</Link></li>
//           <li><Link to="/admin/employees">Employees</Link></li>
//         </ul>
//       </nav>
//       <div className="view-all-attendance">
//         <h2>All Attendance</h2>
//         <div className="filter-container">
//           <input
//             type="text"
//             name="name"
//             placeholder="Filter by Name"
//             value={filter.name}
//             onChange={handleFilterChange}
//           />
//           <input
//             type="text"
//             name="id"
//             placeholder="Filter by ID"
//             value={filter.id}
//             onChange={handleFilterChange}
//           />
//           <select
//             name="month"
//             value={filter.month}
//             onChange={handleFilterChange}
//           >
//             {monthOptions.map((option) => ( 
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//           <input
//             type="date"
//             name="date"
//             placeholder="Filter by Date"
//             value={filter.date}
//             onChange={handleFilterChange}
//           />
//         </div>
//         <ul>
//           {filteredAttendance.map((record, index) => (
//             <li key={index} className="attendance-record">
//               {employees.find(emp => emp.id == record.employeeId)?.username || 'Unknown'} - {record.date} - {record.status}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ViewAllAttendance;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  
import '../Css/ViewAllAttendance.css'; // Import the CSS file
import Navbar from '../Components/Navbar.js'; // Import the Navbar component

const ViewAllAttendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState({ query: '', month: '', date: '' });
  const [error, setError] = useState(null);

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

    fetchAttendance();
    fetchEmployees();
  }, []);

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const todayDate = getTodayDate();
  const todaysAttendance = attendance.filter(record => record.date === (filter.date || todayDate));

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prevState => ({ ...prevState, [name]: value }));
  };

  const filteredAttendance = todaysAttendance.filter(record => {
    const employee = employees.find(emp => emp.id == record.employeeId);
    if (!employee) return false;

    const query = filter.query.toLowerCase();
    const matchesQuery = filter.query ? (employee.username.toLowerCase().includes(query) || employee.id.toString().includes(query)) : true;
    const matchesMonth = filter.month ? record.date.startsWith(filter.month) : true;

    return matchesQuery && matchesMonth;
  });

  const monthOptions = [
    { value: '', label: 'Select Month' },
    { value: '2024-01', label: 'January 2024' },
    { value: '2024-02', label: 'February 2024' },
    { value: '2024-03', label: 'March 2024' },
    { value: '2024-04', label: 'April 2024' },
    { value: '2024-05', label: 'May 2024' },
    { value: '2024-06', label: 'June 2024' },
    { value: '2024-07', label: 'July 2024' },
    { value: '2024-08', label: 'August 2024' },
    { value: '2024-09', label: 'September 2024' },
    { value: '2024-10', label: 'October 2024' },
    { value: '2024-11', label: 'November 2024' },
    { value: '2024-12', label: 'December 2024' },
  ];

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div>
      <nav className="admin-nav">
        <div className="logo">Company Logo</div>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/manage-leaves">Manage Leaves</Link></li>
          <li><Link to="/admin/employees">Employees</Link></li>
        </ul>
      </nav>
      <div className="view-all-attendance">
        <h2>All Attendance</h2>
        <div className="filter-container">
          <input
            type="text"
            name="query"
            placeholder="Filter by Name or ID"
            value={filter.query}
            onChange={handleFilterChange}
          />
          <select
            name="month"
            value={filter.month}
            onChange={handleFilterChange}
          >
            {monthOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <input
            type="date"
            name="date"
            placeholder="Filter by Date"
            value={filter.date}
            onChange={handleFilterChange}
          />
        </div>
        <ul>
          {filteredAttendance.map((record, index) => (
            <li key={index} className="attendance-record">
              {employees.find(emp => emp.id == record.employeeId)?.username || 'Unknown'} - {record.date} - {record.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewAllAttendance;
