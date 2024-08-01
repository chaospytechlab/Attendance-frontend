// // import React from 'react';
// // import '../Css/Modal.css';
// // import jsPDF from 'jspdf';

// // const PresentStatusModal = ({ show, handleClose, data, title }) => {
// //   if (!show) {
// //     return null;
// //   }

// //   const downloadPDF = () => {
// //     const doc = new jsPDF();
// //     let tableContent = '';

// //     data.forEach((employee, index) => {
// //       tableContent += `${index + 1}. ${employee.id} - ${employee.name} - ${employee.designation} - ${employee.status}\n`;
// //     });

// //     doc.text(tableContent, 10, 10);
// //     doc.save(`${title}.pdf`);
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal-container">
// //         <div className="modal-header">
// //           <h2>{title}</h2>
// //           <button onClick={handleClose} className="close-button">&times;</button>
// //         </div>
// //         <div className="modal-body">
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Employee ID</th>
// //                 <th>Employee Name</th>
// //                 <th>Designation</th>
// //                 <th>Status</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {data.map((employee) => (
// //                 <tr key={employee.id}>
// //                   <td>{employee.id}</td>
// //                   <td>{employee.name}</td>
// //                   <td>{employee.designation}</td>
// //                   <td>{employee.status}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //         <div className="modal-footer">
// //           <button onClick={handleClose}>Close</button>
// //           <button onClick={downloadPDF}>Download PDF</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PresentStatusModal;




// // import React from 'react';
// // import jsPDF from 'jspdf';
// // import 'jspdf-autotable';
// // import '../Css/Modal.css';
// // import profile from '../Image/jk.png';

// // const PresentStatusModal = ({ show, handleClose, data }) => {
// //   const handleDownloadPDF = () => {
// //     const doc = new jsPDF();
// //     doc.text('Today Present', 20, 10);
// //     const tableColumn = ["Employee name", "Designation", "Check-in time", "Check-out time"];
// //     const tableRows = [];

// //     data.forEach(item => {
// //       const itemData = [
// //         item.username,
// //         item.role,
// //         item.checkInTime || 'N/A',
// //         item.checkOutTime || 'N/A',
// //       ];
// //       tableRows.push(itemData);
// //     });

// //     doc.autoTable({
// //       head: [tableColumn],
// //       body: tableRows,
// //       startY: 20,
// //     });

// //     doc.save('TodayPresentDetails.pdf');
// //   };

// //   return (
// //     <>
// //       <div className={`present-model-modal-overlay ${show ? 'show' : ''}`} onClick={handleClose}></div>
// //       <div className={`present-model-modal-content ${show ? 'show' : ''}`}>
// //         <div className="present-model-modal-header">
// //           <h2>This is Third Model For Today Lable</h2>
// //           <input type="text" placeholder="Search employee.." />
// //         <button onClick={handleDownloadPDF} className="download-btn">Download PDF</button>
// //         </div>
// //         <table>
// //           <thead>
// //             <tr>
// //               <th></th>
// //               <th>Employee name</th>
// //               <th>Designation</th>
// //               <th>Check-in time</th>
// //               <th>Check-out time</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {data.map((item, index) => (
// //               <tr key={index}>
// //                 <td>
// //                   <img src={profile} alt="Profile" />
// //                 </td>
// //                 <td className="present-model--name">
// //                   {item.username}
// //                 </td>
// //                 <td>{item.role}</td>
// //                 <td>{item.checkInTime || 'N/A'}</td>
// //                 <td>{item.checkOutTime || 'N/A'}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </>
// //   );
// // };

// // export default PresentStatusModal;
// import React from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import '../Css/Modal.css';
// import profile from '../Image/jk.png';

// const PresentStatusModal = ({ show, handleClose, data, title }) => {
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
//           <h2>{title}</h2>
//           <input type="text" placeholder="Search employee.." />
//           <button onClick={handleDownloadPDF} className="download-btn">Download PDF</button>
//         </div>
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
//                 <td className="present-model--name">
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

// export default PresentStatusModal;








import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../Css/Modal.css';
import profile from '../Image/jk.png';

const PresentStatusModal = ({ show, handleClose, data, title }) => {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(title, 20, 10);
    const tableColumn = ["Employee name", "Designation", "Check-in time", "Check-out time"];
    const tableRows = [];

    data.forEach(item => {
      const itemData = [
        item.username,
        item.role,
        item.checkInTime || 'N/A',
        item.checkOutTime || 'N/A',
      ];
      tableRows.push(itemData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save('TodayPresentDetails.pdf');
  };

  return (
    <>
      <div className={`present-model-modal-overlay ${show ? 'show' : ''}`} onClick={handleClose}></div>
      <div className={`present-model-modal-content ${show ? 'show' : ''}`}>
        <div className="present-model-modal-header">
          <h2>{title}</h2>
          <input type="text" placeholder="Search employee.." />
          <button onClick={handleDownloadPDF} className="download-btn">Download PDF</button>
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
                <td className="present-model--name">
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

export default PresentStatusModal;












// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import '../Css/Modal.css';
// // import jsPDF from 'jspdf';

// // const PresentStatusModal = ({ show, handleClose, title }) => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     if (show) {
// //       // Fetching data from JSON Server
// //       const fetchData = async () => {
// //         try {
// //           const usersResponse = await axios.get('http://localhost:3001/users');
// //           const attendanceResponse = await axios.get('http://localhost:3001/attendance');
          
// //           const users = usersResponse.data;
// //           const attendance = attendanceResponse.data;

// //           // Combine user and attendance data
// //           const combinedData = attendance.map(record => {
// //             const user = users.find(user => user.id === record.employeeId);
// //             return {
// //               ...user,
// //               status: record.status,
// //               date: record.date,
// //               checkInTime: record.checkInTime,
// //               checkOutTime: record.checkOutTime
// //             };
// //           });

// //           setData(combinedData);
// //         } catch (error) {
// //           console.error("Error fetching data:", error);
// //         }
// //       };

// //       fetchData();
// //     }
// //   }, [show]);

// //   const downloadPDF = () => {
// //     const doc = new jsPDF();
// //     let tableContent = '';

// //     data.forEach((employee, index) => {
// //       tableContent += `${index + 1}. ${employee.id} - ${employee.username} - ${employee.role} - ${employee.status}\n`;
// //     });

// //     doc.text(tableContent, 10, 10);
// //     doc.save(`${title}.pdf`);
// //   };

// //   if (!show) {
// //     return null;
// //   }

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal-container">
// //         <div className="modal-header">
// //           <h2>{title}</h2>
// //           <button onClick={handleClose} className="close-button">&times;</button>
// //         </div>
// //         <div className="modal-body">
// //           <table>
// //             <thead>
// //               <tr>
// //               <th>Employee ID</th>
// //               <th>Employee Name</th>
// //               <th>Designation</th>
// //               <th>Status</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {data.map((employee) => (
// //                 <tr key={employee.id}>
// //                   <td>{employee.id}</td>
// //                   <td>{employee.username}</td>
// //                   <td>{employee.role}</td>
// //                   <td>{employee.status}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //         <div className="modal-footer">
// //           <button onClick={handleClose}>Close</button>
// //           <button onClick={downloadPDF}>Download PDF</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PresentStatusModal;
