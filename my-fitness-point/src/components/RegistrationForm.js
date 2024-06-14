import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirm: ''
  });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...formData };
    setUsers([...users, newUser]);
    setFormData({
      email: '',
      username: '',
      password: '',
      confirm: ''
    });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>

      <div style={containerStyle}>
        <form onSubmit={handleSubmit}>
          <h4 className="text-warning text-center pt-5">Registration Page</h4>

          <label style={labelStyle}>
            <input
              type="text"
              style={inputStyle}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="EMAIL"
            />
            <div style={lineBoxStyle}>
              <div style={lineStyle}></div>
            </div>
          </label>

          <label style={labelStyle}>
            <input
              type="text"
              style={inputStyle}
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="USERNAME"
            />
            <div style={lineBoxStyle}>
              <div style={lineStyle}></div>
            </div>
          </label>

          <label style={labelStyle}>
            <input
              type="password"
              style={inputStyle}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="PASSWORD"
            />
            <div style={lineBoxStyle}>
              <div style={lineStyle}></div>
            </div>
          </label>

          <label style={labelStyle}>
            <input
              type="password"
              style={inputStyle}
              name="confirm"
              value={formData.confirm}
              onChange={handleChange}
              placeholder="CONFIRM PASSWORD"
            />
            <div style={lineBoxStyle}>
              <div style={lineStyle}></div>
            </div>
          </label>

          <button style={buttonStyle} type="submit">Register</button>
          <p>Already have an account? <Link to="/loginForm">Login here</Link></p>      </form>
      </div>
    </div>
  );
};

const containerStyle = {
  width: '50%',
  margin: '-15px auto',
  background: '#efefef',
  padding: '80px 120px', // Adjusted padding
  textAlign: 'center',
  boxShadow: '2px 2px 3px rgba(0,0,0,0.1)',
};

const labelStyle = {
  display: 'block',
  position: 'relative',
  margin: '40px 0px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  background: 'transparent',
  border: 'none',
  outline: 'none',
};

const lineBoxStyle = {
  position: 'relative',
  width: '100%',
  height: '2px',
  background: '#BCBCBC',
};

const lineStyle = {
  position: 'absolute',
  width: '0%',
  height: '2px',
  top: '0px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: '#8BC34A',
  transition: 'ease .6s',
};

const buttonStyle = {
  display: 'inline-block',
  padding: '12px 24px',
  background: 'rgb(220,220,220)',
  fontWeight: 'bold',
  color: 'rgb(120,120,120)',
  border: 'none',
  outline: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
  transition: 'ease .3s',
};

export default RegistrationForm;
