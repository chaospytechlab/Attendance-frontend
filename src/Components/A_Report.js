// import React, { useState } from 'react';
// import '../Css/A_Report.css';
// import A_Navbar from './A_Navbar'; // Import the Navbar component
// import profile from '../Image/jk.png';

// // Sample data for employees (Replace with your JSON data)
// const employees = [
//   { id: 1, name: 'Ajay Shih', imgSrc: profile, leaves: 0 },
//   { id: 2, name: 'Beak youn woo', imgSrc: profile, leaves: 1 },
//   { id: 3, name: 'Amanda Kherr', imgSrc: profile, leaves: 2 },
//   { id: 4, name: 'Amandaaa Kherr', imgSrc: profile, leaves: 5 },
// ];

// const A_Report = () => {
//   const [reportType, setReportType] = useState('Weekly');

//   return (
//     <div className="A_Report-container">
//       <A_Navbar /> {/* Include the navbar */}
//       <div className="A_Report-content">
//         <div className="A_Report-header">
//         <div className="A_Report-header-info">
//           <h1>Report</h1>
//           <p>Select weekly, monthly, or yearly report which you want to see</p>
//           </div>
//           <select
//             value={reportType}
//             onChange={(e) => setReportType(e.target.value)}
//           >
//             <option value="Weekly">Weekly</option>
//             <option value="Monthly">Monthly</option>
//             <option value="Yearly">Yearly</option>
//           </select>
//         </div>
        
//         <div className="A_Report-section">
//         <div className="A_Report-section-info">
//           <h2>Highest Present Employee</h2>
//           <p className="A_Report-employee-count">3 employee</p>
//           </div>
//           <div className="A_Report-employee-list">
//             {employees.slice(0, 3).map((employee) => (
//               <div key={employee.id} className="A_Report-employee-card">
//                 <img src={employee.imgSrc} alt={employee.name} />
//                 <div className="A_Report-employee-info">
//                   <h3>{employee.name}</h3>
//                   <p>010110{employee.id.toString().padStart(2, '0')}</p>
//                   <p>{employee.leaves} Leave{employee.leaves !== 1 ? 's' : ''}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="A_Report-section">
//         <div className="A_Report-section-info">
//           <h2>Lowest Present Employee</h2>
//           <p className="A_Report-employee-count">2 employee</p>
//           </div>
//           <div className="A_Report-employee-list">
//             {employees.slice(-1).map((employee) => (
//               <div key={employee.id} className="A_Report-employee-card">
//                 <img src={employee.imgSrc} alt={employee.name} />
//                 <div className="A_Report-employee-info">
//                   <h3>{employee.name}</h3>
//                   <p>010110{employee.id.toString().padStart(2, '0')}</p>
//                   <p>{employee.leaves} Leave{employee.leaves !== 1 ? 's' : ''}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default A_Report;
import React, { useState } from 'react';
import '../Css/A_Report.css';
import A_Navbar from './A_Navbar'; // Import the Navbar component
import profile from '../Image/jk.png';

// Sample data for employees (Replace with your JSON data)
const employees = [
  { id: 1, name: 'Ajay Shih', imgSrc: profile, leaves: 0 },
  { id: 2, name: 'Beak youn woo', imgSrc: profile, leaves: 1 },
  { id: 3, name: 'Amanda Kherr', imgSrc: profile, leaves: 2 },
  { id: 4, name: 'Amandaaa Kherr', imgSrc: profile, leaves: 5 },
];

const A_Report = () => {
  const [reportType, setReportType] = useState('Weekly');

  return (
    <div className="A_Report-container">
      <A_Navbar /> {/* Include the navbar */}
      <div className="A_Report-content">
        <div className="A_Report-header">
          <div className="A_Report-header-info">
            <h1>Report</h1>
            <p>Select weekly, monthly, or yearly report which you want to see</p>
          </div>
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        
        <div className="A_Report-section">
          <div className="A_Report-section-info">
            <h2>Highest Present Employee</h2>
            <p className="A_Report-employee-count">3 employees</p>
          </div>
          <table className="A_Report-table">
            {/* <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Employee ID</th>
                <th>Leaves</th>
              </tr>
            </thead> */}
            <tbody>
              {employees.slice(0, 3).map((employee) => (
                <tr key={employee.id} className="A_Report-employee-card">
                  <td><img src={employee.imgSrc} alt={employee.name} /></td>
                  <td>{employee.name}</td>
                  <td>010110{employee.id.toString().padStart(2, '0')}</td>
                  <td>{employee.leaves} Leave{employee.leaves !== 1 ? 's' : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="A_Report-section">
          <div className="A_Report-section-info">
            <h2>Lowest Present Employee</h2>
            <p className="A_Report-employee-count">1 employee</p>
          </div>
          <table className="A_Report-table">
            {/* <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Employee ID</th>
                <th>Leaves</th>
              </tr>
            </thead> */}
            <tbody>
              {employees.slice(-1).map((employee) => (
                <tr key={employee.id} className="A_Report-employee-card">
                  <td><img src={employee.imgSrc} alt={employee.name} /></td>
                  <td>{employee.name}</td>
                  <td>010110{employee.id.toString().padStart(2, '0')}</td>
                  <td>{employee.leaves} Leave{employee.leaves !== 1 ? 's' : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default A_Report;
