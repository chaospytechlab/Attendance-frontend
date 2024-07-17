import React, { useEffect, useState } from 'react';
import { getAttendance } from '../../../services/api';

const Overview = () => {
  const [attendanceStats, setAttendanceStats] = useState({ present: 0, absent: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAttendance();
      const present = data.filter(record => record.status === 'present').length;
      const absent = data.filter(record => record.status === 'absent').length;
      setAttendanceStats({ present, absent });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Overview</h2>
      <p>Total Present: {attendanceStats.present}</p>
      <p>Total Absent: {attendanceStats.absent}</p>
    </div>
  );
};

export default Overview;
