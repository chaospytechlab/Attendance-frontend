import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Landing from './Components/Landing';
import Home from './Components/Home';
import ForgetPassword from './Components/ForgetPassword';
import VerifyEmail from './Components/VerifyEmail';
import ResetPassword from './Components/ResetPassword';
import Attendance from './Components/Attendance';
import LeaveManagement from './Components/LeaveManagement';
import Profile from './Components/Profile';
import AdminDashboard from './Components/AdminDashboard';
import ApproveRejectLeave from './Components/ApproveRejectLeave';
import EmployeeDashboard from './Components/EmployeeDashboard';
import LeaveDetails from './Components/LeaveDetails';
import ViewAllAttendance from './Components/ViewAllAttendance';
import Employees from './Components/Employees';
import ViewAllLeaves from './Components/ViewAllLeaves';
import Progress from './Components/Progress';
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedUser = sessionStorage.getItem('user');
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
    setLoading(false); // Finished loading user state
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <Router>
      <div>
        {!user ? (
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/verifyemail/:email" element={<VerifyEmail />} />
            <Route path="/resetpassword/:email/:otp" element={<ResetPassword />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/dashboard"
              element={user.role === 'admin' ? <AdminDashboard onLogout={handleLogout} /> : <EmployeeDashboard user={user} onLogout={handleLogout} />}
            />
            <Route path="/myattendance" element={<Attendance user={user} />} />
            <Route path="/leavemanagement" element={<LeaveManagement user={user} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/leavedetails" element={<LeaveDetails user={user} />} />
            <Route path="/progress" element={<Progress user={user} />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />

            {/* Admin specific routes */}
            <Route path="/view-all-attendance" element={<ViewAllAttendance />} />
            <Route path="/admin/manage-leaves" element={<ApproveRejectLeave />} />
            <Route path="/admin/employees" element={<Employees />} />
            <Route path="/admin/view-all-leaves" element={<ViewAllLeaves />} /> 
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
