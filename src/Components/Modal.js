// present-model-

import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../Css/Modal.css';
import profile from '../Image/jk.png';

const Modal = ({ show, handleClose, data }) => {
  
  return (
    <>
      <div className={`present-model-modal-overlay ${show ? 'show' : ''}`} onClick={handleClose}></div>
      <div className={`present-model-modal-content ${show ? 'show' : ''}`}>
        <div className="present-model-modal-header">
          <h2>Today Present</h2>
          <input type="text" placeholder="Search employee.." />
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Employee name</th>
              <th>Designation</th>
              <th>Check-in time</th>
              <th>Check-out time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={profile} alt="Profile" />
                </td>
                <td className="present-model-employee-name">
                  {item.username}
                </td>
                <td>{item.role}</td>
                <td>{item.checkInTime || 'N/A'}</td>
                <td>{item.checkOutTime || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Modal;
// // present-model-

// import React from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import '../Css/Modal.css';
// import profile from '../Image/jk.png';

// const Modal = ({ show, handleClose, data }) => {
//   const handleDownloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text('Today Present', 20, 10);
//     const tableColumn = ["Employee name", "Designation", "Check-in time", "Check-out time"];
//     const tableRows = [];

//     data.forEach(item => {
//       const itemData = [
//         item.username,
//         item.role,
//         item.checkInTime || 'N/A',
//         item.checkOutTime || 'N/A',
//       ];
//       tableRows.push(itemData);
//     });

//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 20,
//     });

//     doc.save('TodayPresentDetails.pdf');
//   };

//   return (
//     <>
//       <div className={`present-model-modal-overlay ${show ? 'show' : ''}`} onClick={handleClose}></div>
//       <div className={`present-model-modal-content ${show ? 'show' : ''}`}>
//         <div className="present-model-modal-header">
//           <h2>Today Present</h2>
//           <input type="text" placeholder="Search employee.." />
//         </div>
//         <button onClick={handleDownloadPDF} className="download-btn">Download PDF</button>
//         <table>
//           <thead>
//             <tr>
//               <th></th>
//               <th>Employee name</th>
//               <th>Designation</th>
//               <th>Check-in time</th>
//               <th>Check-out time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <td>
//                   <img src={profile} alt="Profile" />
//                 </td>
//                 <td className="present-model-employee-name">
//                   {item.username}
//                 </td>
//                 <td>{item.role}</td>
//                 <td>{item.checkInTime || 'N/A'}</td>
//                 <td>{item.checkOutTime || 'N/A'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Modal;
