import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Arrow from '../Icon/p_arrow.svg';
import '../Css/Progress.css'; // Assuming you will create a separate CSS file for Progress styling

const Progress = ({ user }) => {
  const [data, setData] = useState(null);
  const [feedback, setFeedback] = useState('');
  const chartRef = useRef(null); // Ref to store the chart instance

  useEffect(() => {
    // Fetch the JSON data from the API
    fetch('http://localhost:3001/2023')
      .then(response => response.json())
      .then(data => setData(data));

    // Set feedback after a few seconds
    setTimeout(() => {
      setFeedback(Math.random() > 0.5 ? 'Good Progress!' : 'Bad Progress');
    }, 3000);
  }, []);

  useEffect(() => {
    if (data) {
      // Destroy the existing chart instance if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const ctx = document.getElementById('progressChart').getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(data),
          datasets: [
            {
              label: 'Present Days',
              data: Object.values(data).map(month => month.present),
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
            {
              label: 'Absent Days',
              data: Object.values(data).map(month => month.absent),
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
            }
          ]
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false // Hide vertical grid lines
              }
            },
            y: {
              grid: {
                display: true // Show horizontal grid lines
              },
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [data]);

  return (
    <div>
      <div className="progress-header">
        <img src={Arrow} alt="Back Arrow" className="back-arrow" />
        <div className="progress-title-container">
          <h2>Monthly Report</h2>
          <p className="progress-subheader">Yearly Present Progress Report on Last 5 years</p>
        </div>
      </div>
      <div className="progress-container">
        <canvas id="progressChart"  width="600" height="250"></canvas>
        {/* {feedback && <div className="feedback-popup">{feedback}</div>} */}
      </div>
    </div>
  );
};

export default Progress;
