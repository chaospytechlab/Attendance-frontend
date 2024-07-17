// Statistics.js
import React from 'react';

const Statistics = ({ data }) => {
  return (
    <div className="statistics">
      <div className="stat-item">
        <h3>Total Days Present</h3>
        <p>{data.totalDaysPresent}</p>
      </div>
      <div className="stat-item">
        <h3>Total Days Absent</h3>
        <p>{data.totalDaysAbsent}</p>
      </div>
      <div className="stat-item">
        <h3>Leave Balance</h3>
        <p>{data.leaveBalance} days</p>
      </div>
    </div>
  );
};

export default Statistics;
