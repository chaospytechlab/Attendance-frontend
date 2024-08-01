import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import '../Css/A_History.css';
import A_Navbar from './A_Navbar'; // Import the Navbar component
import profile from '../Image/jk.png';
//icons/ svg
import Search from '../Icon/search.svg';
import rightArrow from '../Icon/right_arrow.svg'
import leftArrow from '../Icon/left_Arrow.svg'

const A_History = () => {
  const navigate = useNavigate(); // Initialize useHistory for navigation


  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  // Sample data for employees and attendance (Replace with your JSON data)
  const employees = [
    { id: 1, name: 'Ajay Shih', designation: 'Software Engineer', imgSrc: profile },
    { id: 2, name: 'Ajk Shih', designation: 'Manager', imgSrc: profile },
    { id: 3, name: 'Alexandar Kherr', designation: 'Developer', imgSrc: profile },
    { id: 4, name: 'Amanda Kherr', designation: 'Designer', imgSrc: profile },
    { id: 5, name: 'Ajay Shih', designation: 'Software Engineer', imgSrc: profile },
    { id: 6, name: 'Ajk Shih', designation: 'Manager', imgSrc: profile },
    { id: 7, name: 'Alexandar Kherr', designation: 'Developer', imgSrc: profile },
    { id: 8, name: 'Amanda Kherr', designation: 'Designer', imgSrc: profile },
  ];

  // Sample attendance data
  const allAttendance = [
    { date: '23-04-2024', status: 'Present', checkInTime: '5:00 PM', checkOutTime: '6:00 AM' },
    { date: '23-04-2024', status: 'Present', checkInTime: '5:00 PM', checkOutTime: '6:00 AM' },
    { date: '24-04-2024', status: 'Leave', checkInTime: 'Leave', checkOutTime: 'Leave' },
    { date: '24-04-2024', status: 'Leave', checkInTime: 'Leave', checkOutTime: 'Leave' },
    { date: '26-04-2024', status: 'Leave', checkInTime: 'Leave', checkOutTime: 'Leave' },
    { date: '25-04-2024', status: 'Present', checkInTime: '6:00 PM', checkOutTime: '6:00 AM' },
    { date: '27-04-2024', status: 'Present', checkInTime: '5:00 PM', checkOutTime: '6:00 AM' },
    { date: '27-04-2024', status: 'Present', checkInTime: '5:00 PM', checkOutTime: '6:00 AM' },
    { date: '27-04-2024', status: 'Present', checkInTime: '5:00 PM', checkOutTime: '6:00 AM' },
    { date: '27-04-2024', status: 'Present', checkInTime: '5:00 PM', checkOutTime: '6:00 AM' },
    { date: '27-04-2024', status: 'Present', checkInTime: '5:00 PM', checkOutTime: '6:00 AM' },
  
  ];

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
    // Fetch and set attendance records for the selected employee
    setAttendanceRecords(allAttendance); // Replace with actual data fetch based on employee
  };
//Employee Scroll Container 
  const cardsContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollLeft = () => {
    cardsContainerRef.current.scrollBy({ left: -600, behavior: 'smooth' });
  };

  const scrollRight = () => {
    cardsContainerRef.current.scrollBy({ left: 600, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = cardsContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
  };
  //pagination

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

   // Calculate the index of the last record on the current page
   const lastRecordIndex = currentPage * recordsPerPage;
   // Calculate the index of the first record on the current page
   const firstRecordIndex = lastRecordIndex - recordsPerPage;
   // Get the records to be displayed on the current page
   const currentRecords = attendanceRecords.slice(firstRecordIndex, lastRecordIndex);
 
   // Calculate the total number of pages
   const totalPages = Math.ceil(attendanceRecords.length / recordsPerPage);
 
   //Navigate to Report Page 
   const navigateToReport = () => {
    navigate('/admin/report'); // Navigate to the report page
  };

  return (
    <div className="A_History-a-history">
      <A_Navbar /> {/* Include the navbar */}
      <div className="A_History-header">
        <div className="A_History-search-bar">
          <input type="text" placeholder="Search employee..." />
          <span className="A_History-search-icon">
            <img src={Search} alt="Search" />
          </span>
        </div>
        <div className="A_History-report-section">
          <button onClick={navigateToReport}>Report</button>
        </div>
      </div>
      <h2>Attendance Month-August</h2>

      <div className="A_History-employee-cards-container">
      {showLeftArrow && <div className="A_History-arrow-icon left" onClick={scrollLeft}>
      <img src={leftArrow} alt="Righ Arrow" />  
      </div>}
      <div className="A_History-employee-cards" ref={cardsContainerRef} onScroll={handleScroll}>
        {employees.map((employee) => (
          <div
            key={employee.id}
            className={`A_History-employee-card ${selectedEmployee?.id === employee.id ? 'selected' : ''}`}
            onClick={() => handleEmployeeSelect(employee)}
          >
            <img src={employee.imgSrc} alt={employee.name} />
            <h3>{employee.name}</h3>
            <p>{employee.designation}</p>
            <button className="A_History-employee-cards-btn">View</button>
          </div>
        ))}
      </div>
      {showRightArrow && <div className="A_History-arrow-icon right" onClick={scrollRight}>
      <img src={rightArrow} alt="Righ Arrow" />
        
        </div>}
    </div>
    <div className="A_History-attendance-history">
      <div className="A_History-header-2">
      <div className="A_History-header-title">
        <h3>Attendance History</h3>
        {selectedEmployee && <span>{selectedEmployee.name}</span>}
        </div>
        <span className="A_History-leave-count">05 Leave</span>
      </div>
      {selectedEmployee && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>Check-in Time</th>
              <th>Check-out Time</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.date}</td>
                <td>{record.status}</td>
                <td>{record.checkInTime}</td>
                <td>{record.checkOutTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="A_History-pagination">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number + 1)}
            className={currentPage === number + 1 ? 'active' : ''}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default A_History;
