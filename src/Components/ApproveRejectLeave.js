// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../Css/ApproveRejectLeave.css'; // Import the CSS file

// const ApproveRejectLeave = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchLeaveRequests = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/leaves');
//         const text = await response.text(); // Read the response as text
//         try {
//           const data = JSON.parse(text); // Try parsing it as JSON
//           setLeaveRequests(data);
//         } catch (error) {
//           console.error('Failed to parse response as JSON:', text);
//           throw new Error('Invalid JSON response');
//         }
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/users');
//         const text = await response.text();
//         try {
//           const data = JSON.parse(text);
//           setEmployees(data);
//         } catch (error) {
//           console.error('Failed to parse response as JSON:', text);
//           throw new Error('Invalid JSON response');
//         }
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchLeaveRequests();
//     fetchEmployees();
//   }, []);

//   const handleApprove = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:3001/leaves/${id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ status: 'approved' })
//       });
//       if (!response.ok) throw new Error('Network response was not ok');
//       setLeaveRequests(leaveRequests.map(l => l.id === id ? { ...l, status: 'approved' } : l));
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:3001/leaves/${id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ status: 'rejected' })
//       });
//       if (!response.ok) throw new Error('Network response was not ok');
//       setLeaveRequests(leaveRequests.map(l => l.id === id ? { ...l, status: 'rejected' } : l));
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const getEmployeeName = (employeeId) => {
//     const employee = employees.find(emp => String(emp.id) === String(employeeId));
//     return employee ? employee.username || 'Unknown' : 'Unknown';
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container">
//       <nav className="admin-nav">
//         <div className="logo">Company Logo</div>
//         <ul>
//           <li><Link to="/admin/dashboard">Dashboard</Link></li>
//           <li><Link to="/admin/manage-leaves">Manage Leaves</Link></li>
//           <li><Link to="/admin/employees">Employees</Link></li>
//         </ul>
//       </nav>  
//       <h2 className="heading">Approve/Reject Leave Requests</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Employee Name</th>
//             <th>Reason</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaveRequests.map((leave) => (
//             <tr key={leave.id}>
//               <td>{getEmployeeName(leave.employeeId)}</td>
//               <td>{leave.reason}</td>
//               <td>{leave.startDate}</td>
//               <td>{leave.endDate}</td>
//               <td>{leave.status}</td>
//               <td>
//                 {leave.status === 'pending' && (
//                   <div className="buttonGroup">
//                     <button onClick={() => handleApprove(leave.id)} className="approveButton">Approve</button>
//                     <button onClick={() => handleReject(leave.id)} className="rejectButton">Reject</button>
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ApproveRejectLeave;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/ApproveRejectLeave.css'; 
const ApproveRejectLeave = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await fetch('http://localhost:3001/leaves');
        const text = await response.text(); // Read the response as text
        try {
          const data = JSON.parse(text); // Try parsing it as JSON
          setLeaveRequests(data.filter(leave => leave.status === 'pending')); // Only set pending leaves
        } catch (error) {
          console.error('Failed to parse response as JSON:', text);
          throw new Error('Invalid JSON response');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:3001/users');
        const text = await response.text();
        try {
          const data = JSON.parse(text);
          setEmployees(data);
        } catch (error) {
          console.error('Failed to parse response as JSON:', text);
          throw new Error('Invalid JSON response');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchLeaveRequests();
    fetchEmployees();
  }, []);

  const handleApprove = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/leaves/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'approved' })
      });
      if (!response.ok) throw new Error('Network response was not ok');
      setLeaveRequests(leaveRequests.filter(l => l.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/leaves/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'rejected' })
      });
      if (!response.ok) throw new Error('Network response was not ok');
      setLeaveRequests(leaveRequests.filter(l => l.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const getEmployeeName = (employeeId) => {
    const employee = employees.find(emp => String(emp.id) === String(employeeId));
    return employee ? employee.username || 'Unknown' : 'Unknown';
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <nav className="admin-nav">
        <div className="logo">Company Logo</div>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/manage-leaves">Manage Leaves</Link></li>
          <li><Link to="/admin/employees">Employees</Link></li>
        </ul>
      </nav>  
      <div className="header">
        <h2 className="heading">Approve/Reject Leave Requests</h2>
        <Link to="/admin/view-all-leaves">
          <button className="view-all-leaves-button">View All Leaves</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Reason</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((leave) => (
            <tr key={leave.id}>
              <td>{getEmployeeName(leave.employeeId)}</td>
              <td>{leave.reason}</td>
              <td>{leave.startDate}</td>
              <td>{leave.endDate}</td>
              <td>{leave.status}</td>
              <td>
                {leave.status === 'pending' && (
                  <div className="buttonGroup">
                    <button onClick={() => handleApprove(leave.id)} className="approveButton">Approve</button>
                    <button onClick={() => handleReject(leave.id)} className="rejectButton">Reject</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveRejectLeave;
