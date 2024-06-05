import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Importing components for each section
import Home from './components/Home';
import WorkoutOverview from './components/WorkoutOverview';
import WorkoutDay from './components/WorkoutDay';
import Classes from './components/Classes';
import Schedule from './components/Schedule';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

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
          <Route path="/classes" element={<Classes />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Header component with navigation
// function Header() {
//   return (
//     <header className="App-header">
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/seven-day-workout">Seven-Day Workout</Link></li>
//           <li><Link to="/classes">Classes</Link></li>
//           <li><Link to="/schedule">Schedule</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//           <li><Link to="/blog">Blog</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
function Header() {
  return (
    <>
      {/* Header with Gradient Background and Animated Hover */}
      <header className="App-header" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontFamily: 'cursive', margin: '0 10px', fontSize: '24px', fontWeight: 'bold', color: '#333', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>MyFitnessPoint</h1>
        <div>
          <h1 style={{ animation: 'colorChange 5s infinite', marginBottom: '20px', textAlign: 'center', margin: 0 }}>Welcome to My Fitness Point</h1>
          <p style={{ animation: 'colorChange 5s infinite', textAlign: 'center', margin: 0 }}>Join us and start your fitness journey today!</p>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/seven-day-workout">Seven-Day Workout</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default App;
