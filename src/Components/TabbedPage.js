import React, { useState } from 'react';
import EmployeeDashboard from './EmployeeDashboard'; // Your user dashboard component
import AdminDashboard from './AdminDashboard'; // Your admin dashboard component

const TabbedPage = () => {
  const [activeTab, setActiveTab] = useState('user'); // 'user' or 'admin'

  // Example user object
  const user = {
    id: '123',
    name: 'John Doe',
    role: 'employee',
    email: 'john.doe@example.com',
  };

  // Example admin object
  const admin = {
    id: 'admin123',
    name: 'Admin User',
    role: 'admin',
    email: 'admin@example.com',
  };

  return (
    <div className="tabbed-page">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'user' ? 'active' : ''}`}
          onClick={() => setActiveTab('user')}
        >
          User Tab
        </button>
        <button
          className={`tab-button ${activeTab === 'admin' ? 'active' : ''}`}
          onClick={() => setActiveTab('admin')}
        >
          Admin Tab
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'user' && (
          <EmployeeDashboard user={user} />
        )}
        {activeTab === 'admin' && (
          <AdminDashboard admin={admin} />
        )}
      </div>
    </div>
  );
};

export default TabbedPage;
