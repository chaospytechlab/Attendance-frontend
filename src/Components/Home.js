// Home.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
      // If not authenticated, redirect to the login page
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h1>This is the Home Page</h1>
      <p>Welcome to the home page of our application.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
