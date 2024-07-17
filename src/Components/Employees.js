// Employees.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Employees.css';
const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    fetchEmployees();
  }, []);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="employees-page">
      <nav className="employees-nav">
        <div className="logo">Company Logo</div>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/manage-leaves">Manage Leaves</Link></li>
          <li><Link to="/admin/employees">Employees</Link></li>
        </ul>
      </nav>
      <h2>Employees</h2>
      <div className="employees-list">
        {employees.map((employee, index) => (
          <div key={index} className="employee-card">
            <h3>{employee.username || 'Unknown'}</h3>
            <p>Email: {employee.email}</p>
            <p>Role: {employee.role || 'Unknown'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
