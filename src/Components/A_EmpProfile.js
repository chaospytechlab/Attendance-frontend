import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation

import '../Css/A_EmpProfile.css';
import Profile from '../Image/jk.png';
import Arrow from  '../Icon/leftarrow.svg';

const A_EmpProfile = () => {
  const navigate = useNavigate(); 

 //Navigate to Employee  Page 
 const navigateToEmploy = () => {
    navigate('/admin/employees');
  };
    return (
        <div className="emp-profile-container">
            <div className="emp-profile-header">
                <div className="back-button">
                <img src={Arrow} alt="Employee" onClick={navigateToEmploy} />
                </div>
            </div>
            <div className="emp-profile-content">
                <div className="emp-profile-header">
                    <div className="emp-profile-img">
                        <img src={Profile} alt="Employee" />
                    </div>
                    <div className="emp-profile-details">
                        <h2>Abay Varma</h2>
                        <p className="emp-email">Abayvarma@gmail.com</p>
                        <div className="emp-info">
                            <p><strong>Joining Date:</strong> 24-09-2007</p>
                            <p><strong>No. Present Day:</strong> 230</p>
                            <p><strong>No. Leave:</strong> 23</p>
                            <p><strong>Approve Leave:</strong> 05</p>
                            <p><strong>Reject Leave:</strong> 01</p>
                            <p><strong>Pending Request:</strong> 01</p>
                        </div>
                    </div>
                </div>
                <div className="emp-additional-info">
                    <div className="left-info">
                        <div>
                            <h3>Job Details:</h3>
                            <p><strong>Software Engineer</strong></p>
                            <p>Emp Id: <span className="light-text">010110102</span></p>
                        </div>
                        <div>
                            <h3>Department:</h3>
                            <p><strong>IT Department</strong></p>
                            <p>Dept. Id <span className="light-text">25</span></p>
                        </div>
                    </div>
                    <div className="right-info">
                        <div>
                            <h3>Contact:</h3>
                            <p>Contact no 9874563748</p>
                            <p>Address: Shakti society street no 7, Jamnagar</p>
                        </div>
                        <div>
                            <h3>Office:</h3>
                            <p>Address: Ramkrishna Society Asapura, complex block no 5, Rajkot</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default A_EmpProfile;
