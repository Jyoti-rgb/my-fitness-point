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
function Header() {
  return (
    <>
      <header style={{ background: '#ffffff', borderBottom: '2px solid #dee2e6', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="/sun.png" alt="logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
        <h1 style={{ fontFamily: 'Georgia, serif', marginRight: '950px',alignItems: 'center', fontSize: '24px', fontWeight: 'bold', color: '#495057' }}>MyFitnessPoint</h1>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ margin: '0 15px' }}><Link to="/" style={{ textDecoration: 'none', color: '#495057' }}>Home</Link></li>
            <li style={{ margin: '0 15px' }}><Link to="/seven-day-workout" style={{ textDecoration: 'none', color: '#495057' }}>Seven-Day Workout</Link></li>
            <li style={{ margin: '0 15px' }}><Link to="/about" style={{ textDecoration: 'none', color: '#495057' }}>About</Link></li>
            <li style={{ margin: '0 15px' }}><Link to="/contact" style={{ textDecoration: 'none', color: '#495057' }}>Contact</Link></li>
            <li style={{ margin: '0 15px' }}><Link to="/registrationForm" style={{ textDecoration: 'none', color: '#495057' }}>Registration</Link></li>
            <li style={{ margin: '0 15px' }}><Link to="/loginForm" style={{ textDecoration: 'none', color: '#495057' }}>LoginForm</Link></li>
          </ul>
        </nav>
      </header>
      <style>
        {`
          /* Add underline on hover */
          header ul li a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </>
  );
}


export default App;
