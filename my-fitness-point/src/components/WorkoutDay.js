import React from 'react';
import { useParams } from 'react-router-dom';

const workouts = {
  1: {
    title: "Day 1: Chest and Triceps",
    warmup: [
      { name: "Jumping Jacks", video: "https://media.istockphoto.com/id/1163739768/video/indian-man-doing-jumping-jack-exercise-at-home.mp4?s=mp4-640x640-is&k=20&c=8x8vVUKDrZedZciKo_oAnmnzYEgwtl2gmXTI7wZnD1c=" },
      { name: "Arm Circles", video: "https://media.istockphoto.com/id/1163739768/video/indian-man-doing-jumping-jack-exercise-at-home.mp4?s=mp4-640x640-is&k=20&c=8x8vVUKDrZedZciKo_oAnmnzYEgwtl2gmXTI7wZnD1c=" }
    ],
    main: [
      { name: "Bench Press", video: "https://videos.pexels.com/video-files/6892975/6892975-sd_640_360_25fps.mp4" },
      { name: "Incline Press", video: "https://videos.pexels.com/video-files/6892972/6892972-hd_1280_720_25fps.mp4" },
      { name: "Tricep Dips", video: "https://www.example.com/tricep-dips-video.mp4" }
    ],
    cooldown: [
      { name: "Stretching", video: "https://www.example.com/stretching-video.mp4" },
      { name: "Foam Rolling", video: "https://www.example.com/foam-rolling-video.mp4" }
    ]
  },
  2: {
    title: "Day 2: Back and Biceps",
    warmup: [
      { name: "Jogging", video: "https://www.example.com/jogging-video.mp4" },
      { name: "Dynamic Stretches", video: "https://www.example.com/dynamic-stretches-video.mp4" }
    ],
    main: [
      { name: "Pull-Ups", video: "https://www.example.com/pull-ups-video.mp4" },
      { name: "Barbell Rows", video: "https://www.example.com/barbell-rows-video.mp4" },
      { name: "Bicep Curls", video: "https://www.example.com/bicep-curls-video.mp4" }
    ],
    cooldown: [
      { name: "Stretching", video: "https://www.example.com/stretching-video.mp4" },
      { name: "Foam Rolling", video: "https://www.example.com/foam-rolling-video.mp4" }
    ]
  },
  3: {
    title: "Day 3: Legs",
    warmup: [
      { name: "Skipping Rope", video: "https://www.example.com/skipping-rope-video.mp4" },
      { name: "Leg Swings", video: "https://www.example.com/leg-swings-video.mp4" }
    ],
    main: [
      { name: "Squats", video: "https://www.example.com/squats-video.mp4" },
      { name: "Lunges", video: "https://www.example.com/lunges-video.mp4" },
      { name: "Leg Press", video: "https://www.example.com/leg-press-video.mp4" }
    ],
    cooldown: [
      { name: "Stretching", video: "https://www.example.com/stretching-video.mp4" },
      { name: "Foam Rolling", video: "https://www.example.com/foam-rolling-video.mp4" }
    ]
  },
  4: {
    title: "Day 4: Shoulders",
    warmup: [
      { name: "Shoulder Circles", video: "https://www.example.com/shoulder-circles-video.mp4" },
      { name: "Arm Swings", video: "https://www.example.com/arm-swings-video.mp4" }
    ],
    main: [
      { name: "Shoulder Press", video: "https://www.example.com/shoulder-press-video.mp4" },
      { name: "Lateral Raises", video: "https://www.example.com/lateral-raises-video.mp4" },
      { name: "Front Raises", video: "https://www.example.com/front-raises-video.mp4" }
    ],
    cooldown: [
      { name: "Stretching", video: "https://www.example.com/stretching-video.mp4" },
      { name: "Foam Rolling", video: "https://www.example.com/foam-rolling-video.mp4" }
    ]
  },
  5: {
    title: "Day 5: Cardio",
    warmup: [
      { name: "Brisk Walking", video: "https://www.example.com/brisk-walking-video.mp4" },
      { name: "Jumping Jacks", video: "https://www.example.com/jumping-jacks-video.mp4" }
    ],
    main: [
      { name: "Running", video: "https://www.example.com/running-video.mp4" },
      { name: "Cycling", video: "https://www.example.com/cycling-video.mp4" },
      { name: "Jump Rope", video: "https://www.example.com/jump-rope-video.mp4" }
    ],
    cooldown: [
      { name: "Stretching", video: "https://www.example.com/stretching-video.mp4" },
      { name: "Foam Rolling", video: "https://www.example.com/foam-rolling-video.mp4" }
    ]
  },
  6: {
    title: "Day 6: Core",
    warmup: [
      { name: "Plank", video: "https://www.example.com/plank-video.mp4" },
      { name: "Mountain Climbers", video: "https://www.example.com/mountain-climbers-video.mp4" }
    ],
    main: [
      { name: "Russian Twists", video: "https://www.example.com/russian-twists-video.mp4" },
      { name: "Leg Raises", video: "https://www.example.com/leg-raises-video.mp4" },
      { name: "Crunches", video: "https://www.example.com/crunches-video.mp4" }
    ],
    cooldown: [
      { name: "Stretching", video: "https://www.example.com/stretching-video.mp4" },
      { name: "Foam Rolling", video: "https://www.example.com/foam-rolling-video.mp4" }
    ]
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

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <div style={{ backgroundColor: 'blue', minHeight: '93vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div style={{ width: '100%' }}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>{workout.title}</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {workout.warmup && (
            <section style={{ gridColumn: '1 / -1', marginBottom: '20px' }}>
              <h2 style={{ color: 'white' }}>Warm-Up</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {workout.warmup.map((exercise, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <video width="100%" controls>
                      <source src={exercise.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p style={{ color: 'white' }}>{exercise.name}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {workout.main && (
            <section style={{ gridColumn: '1 / -1', marginBottom: '20px' }}>
              <h2 style={{ color: 'white' }}>Main Workout</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {workout.main.map((exercise, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <video width="100%" controls>
                      <source src={exercise.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p style={{ color: 'white' }}>{exercise.name}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {workout.cooldown && (
            <section style={{ gridColumn: '1 / -1', marginBottom: '20px' }}>
              <h2 style={{ color: 'white' }}>Cool-Down</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {workout.cooldown.map((exercise, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <video width="100%" controls>
                      <source src={exercise.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p style={{ color: 'white' }}>{exercise.name}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkoutDay;
