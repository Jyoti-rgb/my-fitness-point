import React from 'react';
import { Link } from 'react-router-dom';

function WorkoutOverview() {
  const workoutDays = [
    {
      day: 1,
      title: "Chest and Triceps",
      color: "#FF6B6B",
      quote: "Your chest will never grow if you're afraid to get on the bench."
    },
    {
      day: 2,
      title: "Back and Biceps",
      color: "#FFD166",
      quote: "The only bad workout is the one that didn't happen."
    },
    {
      day: 3,
      title: "Legs",
      color: "#06D6A0",
      quote: "Leg day: Because who doesn't love waddling around like a penguin afterward?"
    },
    {
      day: 4,
      title: "Shoulders",
      color: "#118AB2",
      quote: "Shoulder day: The day you realize lifting your arms is a struggle."
    },
    {
      day: 5,
      title: "Cardio",
      color: "#073B4C",
      quote: "Cardio is like a shower for your heart."
    },
    {
      day: 6,
      title: "Core",
      color: "#F4A261",
      quote: "Strong core, strong body."
    }
  ];

  return (
    <div className="WorkoutOverview">
      <h1>Seven-Day Workout Plan</h1>
      <div className="workout-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', justifyContent: 'center' }}>
        {workoutDays.map((day, index) => (
          <div key={index} className="workout-card" style={{ backgroundColor: day.color, padding: '20px', borderRadius: '10px', textAlign: 'center', transition: 'box-shadow 0.3s ease' }}>
            <Link to={`/seven-day-workout/day/${day.day}`} style={{ textDecoration: 'none', color: '#fff' }}>
              <h2>Day {day.day}</h2>
              <p>{day.title}</p>
              <p style={{ fontStyle: 'italic', marginTop: '10px' }}>{day.quote}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutOverview;
