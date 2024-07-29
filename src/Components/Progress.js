// // // import React, { useEffect, useState, useRef } from 'react';
// // // import Chart from 'chart.js/auto';
// // // import Arrow from '../Icon/p_arrow.svg';
// // // import '../Css/Progress.css'; // Assuming you will create a separate CSS file for Progress styling

// // // const Progress = ({ user }) => {
// // //   const [data, setData] = useState(null);
// // //   const [feedback, setFeedback] = useState('');
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const chartRef = useRef(null);

// // //   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// // //   useEffect(() => {
// // //     fetch('http://localhost:3001/2023')
// // //       .then(response => response.json())
// // //       .then(data => setData(data));

// // //     setTimeout(() => {
// // //       setFeedback(Math.random() > 0.5 ? 'Good Progress!' : 'Bad Progress');
// // //     }, 3000);
// // //   }, []);

// // //   useEffect(() => {
// // //     if (data) {
// // //       if (chartRef.current) {
// // //         chartRef.current.destroy();
// // //       }

// // //       const ctx = document.getElementById('progressChart').getContext('2d');
// // //       chartRef.current = new Chart(ctx, {
// // //         type: 'bar',
// // //         data: {
// // //           labels: months.slice(currentIndex, currentIndex + 6),
// // //           datasets: [
// // //             {
// // //               label: 'Present Days',
// // //               data: months.slice(currentIndex, currentIndex + 6).map(month => data[month].present),
// // //               backgroundColor: 'rgba(54, 162, 235, 0.6)',
// // //               barThickness: 30, // Customize the width of the Present Days bars
// // //             },
// // //             {
// // //               label: 'Absent Days',
// // //               data: months.slice(currentIndex, currentIndex + 6).map(month => data[month].absent),
// // //               backgroundColor: 'rgba(255, 99, 132, 0.6)',
// // //               barThickness: 20, // Customize the width of the Absent Days bars
// // //             }
// // //           ]
// // //         },
// // //         options: {
// // //           scales: {
// // //             x: {
// // //               grid: {
// // //                 display: false
// // //               }
// // //             },
// // //             y: {
// // //               grid: {
// // //                 display: true
// // //               },
// // //               beginAtZero: true
// // //             }
// // //           }
// // //         }
// // //       });
// // //     }
// // //   }, [data, currentIndex]);

// // //   const handleNext = () => {
// // //     setCurrentIndex((prevIndex) => (prevIndex + 6) % 12);
// // //   };

// // //   return (
// // //     <div>
// // //       <div className="progress-header">
// // //         <img src={Arrow} alt="Back Arrow" className="back-arrow" />
// // //         <div className="progress-title-container">
// // //           <h2>Monthly Report</h2>
// // //           <p className="progress-subheader">Yearly Present Progress Report on Last 5 years</p>
// // //         </div>
// // //       </div>
// // //       <div className="progress-container">
// // //         <canvas id="progressChart" width="600" height="200"></canvas>
// // //         <div className="next-container">
// // //         <button className="next-button" onClick={handleNext}>Next</button>
// // //       </div>
// // //       </div>
     
// // //     </div>
// // //   );
// // // };

// // // export default Progress;


// // import React, { useEffect, useState, useRef } from 'react';
// // import Chart from 'chart.js/auto';
// // import Arrow from '../Icon/p_arrow.svg';
// // import '../Css/Progress.css'; // Assuming you will create a separate CSS file for Progress styling
// // // import goodImage from '/mnt/data/good.png'; // Use the correct path to your image file

// // const Progress = ({ user }) => {
// //   const [data, setData] = useState(null);
// //   const [feedback, setFeedback] = useState('');
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const chartRef = useRef(null);

// //   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// //   useEffect(() => {
// //     fetch('http://localhost:3001/2023')
// //       .then(response => response.json())
// //       .then(data => setData(data));
// //   }, []);

// //   useEffect(() => {
// //     if (data) {
// //       // Calculate total present and absent days for feedback
// //       const totalPresentDays = Object.values(data).reduce((sum, month) => sum + month.present, 0);
// //       const totalAbsentDays = Object.values(data).reduce((sum, month) => sum + month.absent, 0);

// //       if (totalPresentDays > totalAbsentDays) {
// //         setFeedback('Good Progress!');
// //       } else {
// //         setFeedback('Bad Progress');
// //       }

// //       if (chartRef.current) {
// //         chartRef.current.destroy();
// //       }

// //       const ctx = document.getElementById('progressChart').getContext('2d');
// //       chartRef.current = new Chart(ctx, {
// //         type: 'bar',
// //         data: {
// //           labels: months.slice(currentIndex, currentIndex + 6),
// //           datasets: [
// //             {
// //               label: 'Present Days',
// //               data: months.slice(currentIndex, currentIndex + 6).map(month => data[month].present),
// //               backgroundColor: 'rgba(54, 162, 235, 0.6)',
// //               barThickness: 30, // Customize the width of the Present Days bars
// //             },
// //             {
// //               label: 'Absent Days',
// //               data: months.slice(currentIndex, currentIndex + 6).map(month => data[month].absent),
// //               backgroundColor: 'rgba(255, 99, 132, 0.6)',
// //               barThickness: 20, // Customize the width of the Absent Days bars
// //             }
// //           ]
// //         },
// //         options: {
// //           scales: {
// //             x: {
// //               grid: {
// //                 display: false
// //               }
// //             },
// //             y: {
// //               grid: {
// //                 display: true
// //               },
// //               beginAtZero: true
// //             }
// //           }
// //         }
// //       });
// //     }
// //   }, [data, currentIndex]);

// //   const handleNext = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 6) % 12);
// //   };

// //   return (
// //     <div>
// //       <div className="progress-header">
// //         <img src={Arrow} alt="Back Arrow" className="back-arrow" />
// //         <div className="progress-title-container">
// //           <h2>Monthly Report</h2>
// //           <p className="progress-subheader">Yearly Present Progress Report on Last 5 years</p>
// //         </div>
// //       </div>
// //       <div className="progress-container">
// //         <canvas id="progressChart" width="600" height="200"></canvas>
// //         <div className="next-container">
// //           <button className="next-button" onClick={handleNext}>Next</button>
// //         </div>
// //       </div>

// //       {feedback && (
// //         <div className="popup">
// //           <div className="popup-content">
// //             <img src={Arrow} alt="Feedback" />
// //             <p>{feedback}</p>
// //             <button onClick={() => setFeedback('')}>Continue</button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Progress;

// import React, { useEffect, useState, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import Arrow from '../Icon/p_arrow.svg';
// // import goodImage from '/mnt/data/good.png';
// import '../Css/Progress.css'; // Assuming you will create a separate CSS file for Progress styling

// const Progress = ({ user }) => {
//   const [data, setData] = useState(null);
//   const [feedback, setFeedback] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const chartRef = useRef(null);

//   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//   useEffect(() => {
//     fetch('http://localhost:3001/2023')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []);

//   useEffect(() => {
//     if (data) {
//       // Calculate total present and absent days for feedback
//       const totalPresentDays = Object.values(data).reduce((sum, month) => sum + month.present, 0);
//       const totalAbsentDays = Object.values(data).reduce((sum, month) => sum + month.absent, 0);

//       if (totalPresentDays > totalAbsentDays) {
//         setFeedback('Good Progress!');
//       } else {
//         setFeedback('Bad Progress');
//       }

//       if (chartRef.current) {
//         chartRef.current.destroy();
//       }

//       const ctx = document.getElementById('progressChart').getContext('2d');
//       chartRef.current = new Chart(ctx, {
//         type: 'bar',
//         data: {
//           labels: months.slice(currentIndex, currentIndex + 6),
//           datasets: [
//             {
//               label: 'Present Days',
//               data: months.slice(currentIndex, currentIndex + 6).map(month => data[month].present),
//               backgroundColor: 'rgba(54, 162, 235, 0.6)',
//               barThickness: 30, // Customize the width of the Present Days bars
//             },
//             {
//               label: 'Absent Days',
//               data: months.slice(currentIndex, currentIndex + 6).map(month => data[month].absent),
//               backgroundColor: 'rgba(255, 99, 132, 0.6)',
//               barThickness: 30, // Customize the width of the Absent Days bars
//             }
//           ]
//         },
//         options: {
//           scales: {
//             x: {
//               grid: {
//                 display: false
//               }
//             },
//             y: {
//               grid: {
//                 display: true
//               },
//               beginAtZero: true
//             }
//           }
//         }
//       });
//     }
//   }, [data, currentIndex]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 6) % 12);
//   };

//   return (
//     <div>
//       <div className="progress-header">
//         <img src={Arrow} alt="Back Arrow" className="back-arrow" />
//         <div className="progress-title-container">
//           <h2>Monthly Report</h2>
//           <p className="progress-subheader">Monthly shortest report on present absent</p>
//         </div>
//       </div>
//       <div className="progress-container">
//         <canvas id="progressChart" width="600" height="200"></canvas>
//         <div className="next-container">
//           <button className="next-button" onClick={handleNext}>Next</button>
//         </div>
//       </div>

//       {feedback && (
//         <div className="popup">
//           <div className="popup-content">
//             <img src={Arrow} alt="Feedback" />
//             <p>{feedback}</p>
//             <button onClick={() => setFeedback('')}>Continue</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Progress;
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Chart from 'chart.js/auto';
import Arrow from '../Icon/p_arrow.svg';
import Right from '../Icon/right.svg'
// import goodImage from '/mnt/data/good.png';
import '../Css/Progress.css'; // Assuming you will create a separate CSS file for Progress styling

const Progress = ({ user }) => {
  const navigate = useNavigate(); 
  const [data, setData] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const chartRef = useRef(null);

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    fetch('http://localhost:3001/2023')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    if (data) {
      // Calculate total present and absent days for feedback
      const totalPresentDays = Object.values(data).reduce((sum, month) => sum + month.present, 0);
      const totalAbsentDays = Object.values(data).reduce((sum, month) => sum + month.absent, 0);

      if (totalPresentDays > totalAbsentDays) {
        setFeedback('Good Progress!');
      } else {
        setFeedback('Bad Progress');
      }

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const ctx = document.getElementById('progressChart').getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: months.slice(currentIndex, currentIndex + 6),
          datasets: [
            {
              label: 'Present Days',
              data: months.slice(currentIndex, currentIndex + 6).map(month => data[month].present),
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              barThickness: 30, // Customize the width of the Present Days bars
            },
            {
              label: 'Absent Days',
              data: months.slice(currentIndex, currentIndex + 6).map(month => data[month].absent),
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
              barThickness: 30, // Customize the width of the Absent Days bars
            }
          ]
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              grid: {
                display: true
              },
              beginAtZero: true
            }
          }
        }
      });

      // Set a timeout to show the popup after 3 seconds
      const timeoutId = setTimeout(() => {
        setShowPopup(true);
      }, 3000);

      // Clean up the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [data, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 6) % 12);
  };

     // Navigate to ProfilePage
     const goToProfile = () => {
      navigate('/profile');
    };

  return (
    <div>
      <div className="progress-header">
        <img src={Arrow}  onClick={goToProfile} alt="Back Arrow" className="back-arrow" />
        <div className="progress-title-container">
          <h2>Monthly Report</h2>
          <p className="progress-subheader">Monthly shortest report on present absent</p>
        </div>
      </div>
      <div className="progress-container">
        <canvas id="progressChart" width="600" height="200"></canvas>
        <div className="next-container">
          <button className="next-button" onClick={handleNext}>Next</button>
        </div>
      </div>

      {showPopup && feedback && (
        <div className="popup">
          <div className="popup-content">
            <img src={Right} alt="Feedback" />
            <p>{feedback}</p>
            <button onClick={() => setShowPopup(false)}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Progress;
