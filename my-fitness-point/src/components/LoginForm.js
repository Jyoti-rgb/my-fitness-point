import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    // Simple form validation
    if (!email || !password) {
      setErrorMessage('Please fill in both fields.');
      return;
    }

    // Mock login function
    const mockLogin = (email, password) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'user@example.com' && password === 'password') {
            resolve('Login successful!');
          } else {
            reject('Invalid email or password.');
          }
        }, 1000);
      });
    };

    try {
      const response = await mockLogin(email, password);
      alert(response);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>

      <div style={containerStyle}>
        <form onSubmit={handleLogin}>
          <h4 className="text-warning text-center pt-5">Login Page</h4>

          <label style={labelStyle}>
            <input
              type="email"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL"
            />
            <div style={lineBoxStyle}>
              <div style={lineStyle}></div>
            </div>
          </label>

          <label style={labelStyle}>
            <input
              type="password"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
            />
            <div style={lineBoxStyle}>
              <div style={lineStyle}></div>
            </div>
          </label>

          <button style={buttonStyle} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

const containerStyle = {
  width: '50%',
  margin: '5px auto',
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

export default LoginForm;
