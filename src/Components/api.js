import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

// Example API functions
export const getUsers = () => api.get('/users');
export const addUser = (user) => api.post('/users', user);
export const getUser = (id) => api.get(`/users/${id}`);
export const updateUser = (id, user) => api.put(`/users/${id}`, user);

export const getAttendance = () => api.get('/attendance');
export const addAttendance = (attendance) => api.post('/attendance', attendance);
export const getAttendanceById = (id) => api.get(`/attendance/${id}`);

export const getLeaves = () => api.get('/leaves');
export const addLeave = (leave) => api.post('/leaves', leave);
export const getLeaveById = (id) => api.get(`/leaves/${id}`);
export const updateLeave = (id, leave) => api.put(`/leaves/${id}`, leave);

export const getEvents = () => api.get('/events');

// Function to fetch leave requests
export const getLeaveRequests = () => api.get('/leave-requests');

export default api;
