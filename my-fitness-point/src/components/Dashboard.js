// Dashboard.js
import React from 'react';

const Dashboard = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false); // Set isLoggedIn to false on logout
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <p>Welcome to the Dashboard!</p>
    </div>
  );
};

export default Dashboard;
