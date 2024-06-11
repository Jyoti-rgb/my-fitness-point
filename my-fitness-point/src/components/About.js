import React from 'react';
import './About.css'
function About() {
  return (
    <div>
      <section className="fullscreen" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)', padding: '50px 0', textAlign: 'center', color: '#fff' }}>
        <h1 className="text-design1">About Us</h1>
        <p className="text-design1">Welcome to our gym! We are dedicated to providing you with the best fitness experience possible. Our mission is to help you achieve your fitness goals and lead a healthier lifestyle.</p>
      </section>

      <section className="fullscreen" style={{ background: 'linear-gradient(to right, #fecea8, #f38181)', padding: '50px 0', textAlign: 'center', color: '#fff' }}>
        <div className="container">
          <h2 className="text-design2">Our Mission</h2>
          <p className="text-design2">At our gym, we are committed to helping our members achieve their fitness goals through personalized training programs, expert guidance, and a motivating environment.</p>
        </div>
      </section>

      <section className="fullscreen" style={{ background: 'linear-gradient(to right, #fceabb, #f8b500)', padding: '50px 0', textAlign: 'center', color: '#fff' }}>
        <div className="container">
          <h2 className="text-design3">Our Team</h2>
          <p className="text-design3">We have a team of experienced and certified fitness trainers who are passionate about helping you succeed. From personalized workout plans to nutritional advice, our trainers are here to support you every step of the way.</p>
        </div>
      </section>

      <section className="fullscreen" style={{ background: 'linear-gradient(to right, #cfd9df, #e2ebf0)', padding: '50px 0', textAlign: 'center', color: '#333' }}>
        <div className="container">
          <h2 className="text-design4">Facilities</h2>
          <p className="text-design4">Our gym is fully equipped with state-of-the-art cardio and strength training equipment. Whether you're looking to build muscle, improve endurance, or lose weight, we have everything you need to reach your fitness goals.</p>
        </div>
      </section>

      <section className="fullscreen" style={{ background: 'linear-gradient(to right, #fdcbf1, #fdcbf1)', padding: '50px 0', textAlign: 'left', color: '#333' }}>
        <div className="container">
          <h2 className="text-design5">Why Choose Us?</h2>
          <ul className="text-design5">
            <li>Personalized training programs tailored to your fitness level and goals.</li>
            <li>Expert guidance from certified fitness trainers.</li>
            <li>A motivating and supportive environment to keep you on track.</li>
            <li>Flexible membership options to fit your schedule and budget.</li>
            <li>Ongoing support and encouragement to help you stay motivated and achieve long-term success.</li>
          </ul>
        </div>
      </section>

      <section className="fullscreen" style={{ background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)', padding: '50px 0', textAlign: 'center', color: '#333' }}>
        <div className="container">
          <h2 className="text-design6">Contact Us</h2>
          <p className="text-design6">If you have any questions or would like to learn more about our gym, feel free to contact us at:</p>
          <ul className="text-design6">
            <li>Phone: 123-456-7890</li>
            <li>Email: info@gym.com</li>
            <li>Address: 123 Fitness Avenue, City, State, ZIP</li>
          </ul>
        </div>
      </section>

    </div>
  );
}

export default About;
