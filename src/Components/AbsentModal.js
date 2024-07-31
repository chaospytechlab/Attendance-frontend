// // AbsentModal.js
// import React from 'react';
// import '../Css/Modal.css';


// const data = [
//     {
//       id: '15f9',
//       employeeId: '1ba6',
//       username: 'John Doe',
//       role: 'Software Engineer',
//       startDate: '2024-07-01',
//       endDate: '2024-07-04',
//       reason: 'Medical Leave',
//     },
//     {
//       id: '02ca',
//       employeeId: 'ec3c',
//       username: 'Jane Smith',
//       role: 'Product Manager',
//       startDate: '2024-07-02',
//       endDate: '2024-07-05',
//       reason: 'Personal Leave',
//     },
//   ];


// const AbsentModal = ({ show, handleClose, data }) => {
//   return (
//     <>
//       <div className={`modal-overlay ${show ? 'show' : ''}`} onClick={handleClose}></div>
//       <div className={`modal-content ${show ? 'show' : ''}`}>
//         <div className="modal-header">
//           <h2>Absent</h2>
//           <input type="text" placeholder="Search employee.." />
//         </div>
//         <table>
//           <thead>
//             <tr>
//               <th>Employee name</th>
//               <th>Designation</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>Reason</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.username}</td>
//                 <td>{item.role}</td>
//                 <td>{item.startDate}</td>
//                 <td>{item.endDate}</td>
//                 <td>{item.reason}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default AbsentModal;

import React from 'react';
import '../Css/Modal.css';
import profile from '../Image/jk.png';

const AbsentModal = ({ show, handleClose, data }) => {
  console.log(data); // Add this line to check the data
  
  return (
    <>
      <div className={`present-model-modal-overlay ${show ? 'show' : ''}`} onClick={handleClose}></div>
      <div className={`present-model-modal-content ${show ? 'show' : ''}`}>
        <div className="present-model-modal-header">
          <h2>Absent</h2>
          <input type="text" placeholder="Search employee.." />
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
            <img src={profile} alt="Profile"  />
                </td>
                <td>{item.username}</td>
                <td>{item.role} </td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>{item.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AbsentModal;
