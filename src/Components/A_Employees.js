// // Employees.js
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../Css/A_Employees.css';
// const Employees = () => {
//   const [employees, setEmployees] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
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

//     fetchEmployees();
//   }, []);

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="employees-page">
//       <nav className="employees-nav">
//         <div className="logo">Company Logo</div>
//         <ul>
//           <li><Link to="/admin/dashboard">Dashboard</Link></li>
//           <li><Link to="/admin/manage-leaves">Manage Leaves</Link></li>
//           <li><Link to="/admin/employees">Employees</Link></li>
//         </ul>
//       </nav>
//       <h2>Employees</h2>
//       <div className="employees-list">
//         {employees.map((employee, index) => (
//           <div key={index} className="employee-card">
//             <h3>{employee.username || 'Unknown'}</h3>
//             <p>Email: {employee.email}</p>
//             <p>Role: {employee.role || 'Unknown'}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Employees;

import React from 'react';
import '../Css/A_Employees.css';
import A_Navbar from './A_Navbar'; // Import the Navbar component
import profile from '../Image/jk.png'; // Replace with actual profile images

const employees = [
  { name: 'Abay Varma', id: '010110102', designation: 'Software Engineer' },
  { name: 'Amanda Kherr', id: '010110102', designation: 'Manager' },
  { name: 'Arman Ali', id: '010110102', designation: 'Developer' },
  { name: 'Ajay Shih', id: '010110102', designation: 'Designer' },
  { name: 'Beak youn woo', id: '010110102', designation: 'Designer' },
];

const A_Employee = () => {
  return (
    <div className="A_Employee-container">
      <A_Navbar /> {/* Include the navbar */}
      <div className="A_Employee-content">
        <div className="A_Employee-header">
          <img src="/path/to/logo.png" alt="Logo" className="A_Employee-logo" />
          <input
            type="text"
            placeholder="Search employee...."
            className="A_Employee-search"
          />
        </div>
        <table className="A_Employee-table">
          <thead>
            <tr>
              <th>Employee name</th>
              <th>Employee Id</th>
              <th>Designation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td className="A_Employee-profile">
                  <img src={profile} alt={employee.name} />
                  {employee.name}
                </td>
                <td>{employee.id}</td>
                <td>{employee.designation}</td>
                <td>
                  <button className="A_Employee-action">🗑</button>
                  <button className="A_Employee-action">➡️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default A_Employee;
