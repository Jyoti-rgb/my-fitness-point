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
    },
    { day: 7, title: 'Cardio Blast', quote: 'Push yourself because no one else is going to do it for you.', color: '#fca3b7' },
    { day: 8, title: 'Strength Training', quote: 'The only bad workout is the one that didn’t happen.', color: '#a6c1ee' },
    { day: 9, title: 'Flexibility Focus', quote: 'Strive for progress, not perfection.', color: '#fbc2eb' },
    { day: 13, title: 'Rest Day', quote: 'Rest and recover, your body will thank you.', color: '#BFBFBF' },

  ];

  return (
    <div className="WorkoutOverview" style={{ background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)' }}>
      <h1 style={{ textAlign: 'center', color: '#fff' }}>Seven-Day Workout Plan</h1>
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
