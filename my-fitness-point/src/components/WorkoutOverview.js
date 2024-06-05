import React from 'react';
import { Link } from 'react-router-dom';

function WorkoutOverview() {
  return (
    <div className="WorkoutOverview">
      <h1>Seven-Day Workout Plan</h1>
      <ul>
        <li><Link to="/seven-day-workout/day/1">Day 1: Chest and Triceps</Link></li>
        <li><Link to="/seven-day-workout/day/2">Day 2: Back and Biceps</Link></li>
        <li><Link to="/seven-day-workout/day/3">Day 3: Legs</Link></li>
        <li><Link to="/seven-day-workout/day/4">Day 4: Shoulders</Link></li>
        <li><Link to="/seven-day-workout/day/5">Day 5: Cardio</Link></li>
        <li><Link to="/seven-day-workout/day/6">Day 6: Core</Link></li>
        <li><Link to="/seven-day-workout/day/7">Day 7: Rest</Link></li>
      </ul>
    </div>
  );
}

export default WorkoutOverview;
