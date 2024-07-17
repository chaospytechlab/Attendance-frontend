import React, { useEffect, useState } from 'react';
import { getAttendance } from '../../services/api';

const RecentActivity = () => {
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAttendance();
      setRecentActivities(data.slice(-5).reverse());
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Recent Activity</h2>
      <ul>
        {recentActivities.map(activity => (
          <li key={activity.id}>
            {activity.date}: {activity.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
