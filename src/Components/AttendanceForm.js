// AttendanceForm.js

import React, { useState } from 'react';
import axios from 'axios'; // For making HTTP requests

const AttendanceForm = () => {
  const [userId, setUserId] = useState(''); // State to hold user ID (assuming you manage user authentication and have access to this)
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Example: Sending attendance data to JSON Server
      const response = await axios.post('http://localhost:3000/attendance', {
        userId,
        date,
        status,
      });

      console.log('Attendance marked successfully:', response.data);
      // Optionally, you can handle success feedback to the user
    } catch (error) {
      console.error('Error marking attendance:', error);
      // Handle error feedback to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </label>
      <br />
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <br />
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AttendanceForm;
