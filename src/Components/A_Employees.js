// // // // Employees.js
// // // import React, { useEffect, useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import '../Css/A_Employees.css';
// // // const Employees = () => {
// // //   const [employees, setEmployees] = useState([]);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
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

// // //     fetchEmployees();
// // //   }, []);

// // //   if (error) {
// // //     return <div className="error">Error: {error}</div>;
// // //   }

// // //   return (
// // //     <div className="employees-page">
// // //       <nav className="employees-nav">
// // //         <div className="logo">Company Logo</div>
// // //         <ul>
// // //           <li><Link to="/admin/dashboard">Dashboard</Link></li>
// // //           <li><Link to="/admin/manage-leaves">Manage Leaves</Link></li>
// // //           <li><Link to="/admin/employees">Employees</Link></li>
// // //         </ul>
// // //       </nav>
// // //       <h2>Employees</h2>
// // //       <div className="employees-list">
// // //         {employees.map((employee, index) => (
// // //           <div key={index} className="employee-card">
// // //             <h3>{employee.username || 'Unknown'}</h3>
// // //             <p>Email: {employee.email}</p>
// // //             <p>Role: {employee.role || 'Unknown'}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Employees;

// // import React from 'react';
// // import '../Css/A_Employees.css';
// // import A_Navbar from './A_Navbar'; // Import the Navbar component
// // import profile from '../Image/jk.png'; // Replace with actual profile images

// // const employees = [
// //   { name: 'Abay Varma', id: '010110102', designation: 'Software Engineer' },
// //   { name: 'Amanda Kherr', id: '010110102', designation: 'Manager' },
// //   { name: 'Arman Ali', id: '010110102', designation: 'Developer' },
// //   { name: 'Ajay Shih', id: '010110102', designation: 'Designer' },
// //   { name: 'Beak youn woo', id: '010110102', designation: 'Designer' },
// // ];

// // const A_Employee = () => {
// //   return (
// //     <div className="A_Employee-container">
// //       <A_Navbar /> {/* Include the navbar */}
// //       <div className="A_Employee-content">
// //         <div className="A_Employee-header">
// //           <img src="/path/to/logo.png" alt="Logo" className="A_Employee-logo" />
// //           <input
// //             type="text"
// //             placeholder="Search employee...."
// //             className="A_Employee-search"
// //           />
// //         </div>
// //         <table className="A_Employee-table">
// //           <thead>
// //             <tr>
// //               <th>Employee name</th>
// //               <th>Employee Id</th>
// //               <th>Designation</th>
// //               <th>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {employees.map((employee, index) => (
// //               <tr key={index}>
// //                 <td className="A_Employee-profile">
// //                   <img src={profile} alt={employee.name} />
// //                   {employee.name}
// //                 </td>
// //                 <td>{employee.id}</td>
// //                 <td>{employee.designation}</td>
// //                 <td>
// //                   <button className="A_Employee-action">🗑</button>
// //                   <button className="A_Employee-action">➡️</button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default A_Employee;

// import React, { useState } from 'react';
// import '../Css/A_Employees.css';
// import A_Navbar from './A_Navbar';
// import profile from '../Image/jk.png';
// import Delete from '../Icon/delete.svg';
// import Action_Arrow from '../Icon/open_arrow.svg';
// import Search from '../Icon/search.svg';
// const employees = [
//   { name: 'Abay Varma', id: '010110102', designation: 'Software Engineer' },
//   { name: 'Amanda Kherr', id: '010110102', designation: 'Manager' },
//   { name: 'Arman Ali', id: '010110102', designation: 'Developer' },
//   { name: 'Ajay Shih', id: '010110102', designation: 'Designer' },
//   { name: 'Beak youn woo', id: '010110102', designation: 'Designer' },
// ];

// const A_Employee = () => {
//   const [search, setSearch] = useState('');

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const filteredEmployees = employees.filter(employee =>
//     employee.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const groupedEmployees = filteredEmployees.reduce((acc, employee) => {
//     const firstLetter = employee.name[0].toUpperCase();
//     if (!acc[firstLetter]) {
//       acc[firstLetter] = [];
//     }
//     acc[firstLetter].push(employee);
//     return acc;
//   }, {});

//   return (
//     <div className="A_Employee-container">
//       <A_Navbar />
//       <div className="A_Employee-content">
//         <div className="A_Employee-header">
//           <div className="A_Employee-search-container">
//             <input
//               type="text"
//               placeholder="Search employee...."
//               className="A_Employee-search"
//               value={search}
//               onChange={handleSearchChange}
//             />
//             <img src={Search} alt="search-Icon" className="A_Employee-search-icon" />
//           </div>
//           <div className="A_Employee-user-dropdown">
//             <select>
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>
//         </div>
//         {Object.keys(groupedEmployees).sort().map(letter => (
//           <div key={letter} className="A_Employee-group">
//             <h2>{letter}</h2>
//             <table className="A_Employee-table">
//               <thead>
//                 <tr>
//                   <th></th>
//                   <th>Employee name</th>
//                   <th>Employee Id</th>
//                   <th>Designation</th>
//                   <th></th>
//                   <th></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {groupedEmployees[letter].map((employee, index) => (
//                   <tr key={index}>
//                     <td className="A_Employee-profile">
//                     <img src={profile} alt={employee.name} />
//                     </td>
//                     <td className="A_Employee-width">
//                       {employee.name}
//                     </td>
//                     <td className="A_Employee-width">
//                       {employee.id}
//                       </td>
//                     <td className="A_Employee-width">
//                       {employee.designation}
//                       </td>
//                     <td>
//                     <img src={Delete} alt="Delete-Icon" className="A_Employee-delete-icon" />
//                     </td>
//                     <td>
//                     <img src={Action_Arrow} alt="Arrow-Icon" className="A_Employee-Arrow-icon" />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default A_Employee;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation

import '../Css/A_Employees.css';
import A_Navbar from './A_Navbar';
import profile from '../Image/jk.png';
import Delete from '../Icon/delete.svg';
import Action_Arrow from '../Icon/open_arrow.svg';
import Search from '../Icon/search.svg';
import PlusIcon from '../Icon/plus.svg'; // Add this line to import the plus icon

const employees = [
  { name: 'Abay Varma', id: '010110102', designation: 'Software Engineer' },
  { name: 'Amanda Kherr', id: '010110102', designation: 'Manager' },
  { name: 'Arman Ali', id: '010110102', designation: 'Developer' },
  { name: 'Ajay Shih', id: '010110102', designation: 'Designer' },
  { name: 'Beak youn woo', id: '010110102', designation: 'Designer' },
];

const initialAdmins = [
  { name: 'John Doe', id: '123456', designation: 'Lead Admin' },
  { name: 'Jane Smith', id: '654321', designation: 'Senior Admin' },
];

const A_Employee = () => {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false); // Add state to control modal visibility
  // const [admins, setAdmins] = useState([]);
  const [admins, setAdmins] = useState(initialAdmins);

  const navigate = useNavigate(); // Initialize useHistory for navigation
  const [userType, setUserType] = useState('user');
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  const groupedEmployees = filteredEmployees.reduce((acc, employee) => {
    const firstLetter = employee.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(employee);
    return acc;
  }, {});


  const groupedAdmins = admins.reduce((acc, admin) => {
    const firstLetter = admin.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(admin);
    return acc;
  }, {});

  const renderTableHeader = () => (
    <thead>
      <tr>
        <th></th>
        <th>Employee name</th>
        <th>Employee Id</th>
        <th>Designation</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
  );
  //Navigate to Employee Profile Page 
  const navigateToEmployeeProfile = () => {
    navigate('/admin/employeeProfile'); // Navigate to the report page
  };

  const handleAddAdmin = (employee) => {
    setAdmins([...admins, employee]);
    setShowModal(false);
  };

  const handleDeleteAdmin = (adminId) => {
    setAdmins(admins.filter(admin => admin.id !== adminId));
  };
  return (
    <div className="A_Employee-container">
      <A_Navbar />
      <div className="A_Employee-content">
        <div className="A_Employee-header">
          <div className="A_Employee-search-container">
            <input
              type="text"
              placeholder="Search employee...."
              className="A_Employee-search"
              value={search}
              onChange={handleSearchChange}
            />
            <img src={Search} alt="search-Icon" className="A_Employee-search-icon" />
          </div>
          <div className="A_Employee-user-dropdown">
          <select value={userType} onChange={handleUserTypeChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        {userType === 'user' ? (
          <table className="A_Employee-table">
            {renderTableHeader()}
            {Object.keys(groupedEmployees).sort().map(letter => (
              <tbody key={letter} className="A_Employee-group">
                <tr>
                  <td colSpan="6" className="A_Employee-group-header" style={{color:'#000',padding:'20px 40px',fontSize:'25px'}}>{letter}</td>
                </tr>
                {groupedEmployees[letter].map((employee, index) => (
                  <tr key={index}>
                    <td className="A_Employee-profile">
                      <img src={profile} alt={employee.name} />
                    </td>
                    <td className="A_Employee-width">{employee.name}</td>
                    <td className="A_Employee-width">{employee.id}</td>
                    <td className="A_Employee-width">{employee.designation}</td>
                    <td>
                      <img src={Delete} alt="Delete-Icon" className="A_Employee-delete-icon" />
                    </td>
                    <td>
                      <img src={Action_Arrow} alt="Arrow-Icon" onClick={navigateToEmployeeProfile} className="A_Employee-Arrow-icon" />
                    </td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        ) : (
          <div className="A_Admin-info">
            <h2>Admin Information</h2>
            <table className="A_Employee-table">
              {renderTableHeader()}
              {Object.keys(groupedAdmins).sort().map(letter => (
                <tbody key={letter} className="A_Employee-group">
                  <tr>
                    <td colSpan="6" className="A_Employee-group-header" style={{color:'#000',padding:'20px 40px',fontSize:'25px'}}>{letter}</td>
                  </tr>
                  {groupedAdmins[letter].map((admin, index) => (
                    <tr key={index}>
                      <td className="A_Employee-profile">
                        <img src={profile} alt={admin.name} />
                      </td>
                      <td className="A_Employee-width">{admin.name}</td>
                      <td className="A_Employee-width">{admin.id}</td>
                      <td className="A_Employee-width">{admin.designation}</td>
                      <td>
                        <img src={Delete} alt="Delete-Icon" className="A_Employee-delete-icon" onClick={() => handleDeleteAdmin(admin.id)} />
                      </td>
                      <td>
                        <img src={Action_Arrow} alt="Arrow-Icon" className="A_Employee-Arrow-icon" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
            <button className="A_Employee-add-admin" onClick={() => setShowModal(true)}>
          <img src={PlusIcon} alt="Add Admin" />
        </button>

      {showModal && (
        <div className="A_Employee-modal">
          <div className="A_Employee-modal-content">
            <h2>Select Employee to Add as Admin</h2>
            <button className="A_Employee-modal-close" onClick={() => setShowModal(false)}>X</button>
            <table className="A_Employee-table">
              {renderTableHeader()}
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index} onClick={() => handleAddAdmin(employee)}>
                    <td className="A_Employee-profile-model">
                      <img src={profile} alt={employee.name} />
                    </td>
                    <td className="A_Employee-width">{employee.name}</td>
                    <td className="A_Employee-width">{employee.id}</td>
                    <td className="A_Employee-width">{employee.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

          </div>
        )}
        
      </div>
    </div>
  );
};

export default A_Employee;
