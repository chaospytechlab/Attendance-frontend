import React from 'react';
import '../Css/A_EmpProfile.css';
import profile from '../Image/jk.png';

const A_EmpProfile = () => {
    return (
        <div className="emp-profile-container">
            <div className="back-button">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
            <div className="emp-profile-content">
                <div className="emp-profile-img">
                    <img src={profile} alt="Employee" />
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
                    <div className="emp-additional-info">
                        <div>
                            <h3>Job Details:</h3>
                            <p><strong>Software Engineer</strong></p>
                            <p>Emp Id: <span className="light-text">010110102</span></p>
                        </div>
                        <div>
                            <h3>Contact:</h3>
                            <p>Contact no 9874563748</p>
                            <p>Address: Shakti society street no 7, Jamnagar</p>
                        </div>
                        <div>
                            <h3>Department:</h3>
                            <p><strong>IT Department</strong></p>
                            <p>Dept. Id <span className="light-text">25</span></p>
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
