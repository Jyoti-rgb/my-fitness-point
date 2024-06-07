import React from 'react';

function Home() {
  // Array containing image paths
  const imagePaths = [...Array(12).keys()].map(index => `/assets/gym/pic${index + 1}.jpg`);

  const keyframes = `@keyframes colorChange {
    0% { color: red; }
    25% { color: blue; }
    50% { color: green; }
    75% { color: orange; }
    100% { color: purple; }
  }`;

  const daysExercises = [
    "Chest Day",
    "Leg Day",
    "Back Day",
    "Shoulder Day",
    "Arm Day",
    "Cardio Day",
    "Rest Day"
  ];

  return (
    <div className="Home" style={{ textAlign: 'center', fontFamily: '' }}>
      <style>{keyframes}</style>
      {/* <h1 style={{ animation: 'colorChange 5s infinite', marginBottom: '20px' }}>Welcome to My Fitness Point</h1>
      <p style={{ animation: 'colorChange 5s infinite' }}>Join us and start your fitness journey today!</p> */}

      {/* Showcase Images */}
      <div className="image-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', justifyContent: 'center' }}>
        {/* Map over imagePaths array to render each image */}
        {imagePaths.map((imagePath, index) => (
          <div key={index} style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', animation: 'cardAnimation 2s infinite' }}>
            {/* Image */}
            <img src={process.env.PUBLIC_URL + imagePath} alt={`Fitness ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {/* Text Overlay */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <h3 style={{ margin: '0', fontSize: '1.5rem' }}>{daysExercises[index]}</h3>
              <p style={{ margin: '0', fontSize: '1rem' }}>Short description or info about {daysExercises[index]}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Home;
