import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing components for each section
import Home from './components/Home';
import WorkoutOverview from './components/WorkoutOverview';
import WorkoutDay from './components/WorkoutDay';
import About from './components/About';
import Contact from './components/Contact';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

// Main App component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seven-day-workout" element={<WorkoutOverview />} />
          <Route path="/seven-day-workout/day/:day" element={<WorkoutDay />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
          <Route path="/loginForm" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

// Header component with inline styles and hover effect
function Header() {
  return (
    <>
      <header style={{ background: '#ffffff', borderBottom: '2px solid #dee2e6', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="/sun.png" alt="logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
        <h1 style={{ fontFamily: 'Georgia, serif', marginRight: '950px', alignItems: 'center', fontSize: '24px', fontWeight: 'bold', color: '#495057' }}>MyFitnessPoint</h1>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ margin: '0 15px' }}>
              <Link to="/" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
                Home
                <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
              </Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/seven-day-workout" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
                Seven-Day Workout
                <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
              </Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/about" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
                About
                <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
              </Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/contact" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
                Contact
                <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
              </Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/registrationForm" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
                Registration
                <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
              </Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/loginForm" style={{ textDecoration: 'none', color: '#495057', position: 'relative', transition: 'color 0.3s' }}>
                LoginForm
                <span className="hover-line" style={{ position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', backgroundColor: '#495057', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <style>
        {`
          header ul li a:hover {
            color: #f38181; 
          }

          header ul li a:hover .hover-line {
            transform: scaleX(1); 
          }
        `}
      </style>
    </>
  );
}

export default App;
