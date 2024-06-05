import React from 'react';
import { useParams } from 'react-router-dom';

const workouts = {
  1: {
    title: "Day 1: Chest and Triceps",
    warmup: ["Jumping Jacks", "Arm Circles"],
    main: ["Bench Press", "Incline Dumbbell Press", "Tricep Dips"],
    cooldown: ["Stretching", "Foam Rolling"]
  },
  2: {
    title: "Day 2: Back and Biceps",
    warmup: ["Jogging", "Dynamic Stretches"],
    main: ["Pull-Ups", "Barbell Rows", "Bicep Curls"],
    cooldown: ["Stretching", "Foam Rolling"]
  },
  3: {
    title: "Day 3: Legs",
    warmup: ["Skipping Rope", "Leg Swings"],
    main: ["Squats", "Lunges", "Leg Press"],
    cooldown: ["Stretching", "Foam Rolling"]
  },
  4: {
    title: "Day 4: Shoulders",
    warmup: ["Shoulder Circles", "Arm Swings"],
    main: ["Shoulder Press", "Lateral Raises", "Front Raises"],
    cooldown: ["Stretching", "Foam Rolling"]
  },
  5: {
    title: "Day 5: Cardio",
    warmup: ["Brisk Walking", "Jumping Jacks"],
    main: ["Running", "Cycling", "Jump Rope"],
    cooldown: ["Stretching", "Foam Rolling"]
  },
  6: {
    title: "Day 6: Core",
    warmup: ["Plank", "Mountain Climbers"],
    main: ["Russian Twists", "Leg Raises", "Crunches"],
    cooldown: ["Stretching", "Foam Rolling"]
  },
  7: {
    title: "Day 7: Rest",
    restDay: true
  },
  // Add more days if needed
};


function WorkoutDay() {
  const { day } = useParams();
  const workout = workouts[day];

  return (
    <div style={{ padding: '20px' }}>
      <h1>{workout.title}</h1>
      <section style={{ marginBottom: '20px' }}>
        <h2>Warm-Up</h2>
        <ul>
          {workout.warmup.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2>Main Workout</h2>
        <ul>
          {workout.main.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2>Cool-Down</h2>
        <ul>
          {workout.cooldown.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default WorkoutDay;
