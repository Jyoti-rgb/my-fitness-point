import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import WorkoutOverview from './components/WorkoutOverview';
import WorkoutDay from './components/WorkoutDay';
import About from './components/About';
import Contact from './components/Contact';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import GymMemberProfile from './components/GymMemberProfile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seven-day-workout" element={<WorkoutOverview />} />
          <Route path="/seven-day-workout/day/:day" element={<WorkoutDay />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
          <Route path="/loginForm" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/gymMemberProfile" element={isLoggedIn ?
            (<GymMemberProfile isLoggedIn={isLoggedIn} onLogout={handleLogout} />) : (<Navigate to="/loginForm" />)} />
        </Routes>
      </div>
    </Router>
  );
}

function Header({ isLoggedIn, onLogout }) {
  return (
    <header style={{
      background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
      borderBottom: '2px solid #dee2e6',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <img src="/sun.png" alt="logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
      <h1 style={{ fontFamily: 'Georgia, serif', marginRight: '950px', alignItems: 'center', fontSize: '24px', fontWeight: 'bold', color: '#495057' }}>MyFitnessPoint</h1>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ margin: '0 5px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
              Home
              <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
            </Link>
          </li>
          <li style={{ margin: '0 5px' }}>
            <Link to="/seven-day-workout" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
              Seven-Day Workout
              <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
            </Link>
          </li>
          <li style={{ margin: '0 5px' }}>
            <Link to="/about" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
              About
              <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
            </Link>
          </li>
          <li style={{ margin: '0 5px' }}>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
              Contact
              <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
            </Link>
          </li>
          {/* <li style={{ margin: '0 5px' }}>
            <Link to="/registrationForm" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
            RegistrationForm
              <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
            </Link>
          </li> */}
          {isLoggedIn ? (
            <>
              <li style={{ margin: '0 5px' }}>
                <Link to="/gymMemberProfile" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
                  GymMemberProfile
                  <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
                </Link>
              </li>
              <li style={{ margin: '0 5px' }}>
                <button onClick={onLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
                  Logout
                  <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
                </button>
              </li>
            </>
          ) : (
            <li style={{ margin: '0 5px' }}>
              <Link to="/loginForm" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
                LoginForm
                <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default App;
