import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [buttonColor, setButtonColor] = useState('rgb(220,220,220)');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    changeButtonColor();
  };

  const changeButtonColor = () => {
    const rgbValues = buttonColor.match(/\d+/g).map(Number);
    const newColor = `rgb(${rgbValues[0] - 10}, ${rgbValues[1] - 10}, ${rgbValues[2] - 10})`;
    setButtonColor(newColor);
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <h4 className="text-warning text-center pt-5">Contact Us</h4>
        
        <label style={labelStyle}>
          <input 
            type="text" 
            style={inputStyle} 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="NAME"
          />
          <div style={lineBoxStyle}>
            <div style={lineStyle}></div>
          </div>
        </label>
        
        <label style={labelStyle}>
          <input 
            type="email" 
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
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            placeholder="SUBJECT"
          />
          <div style={lineBoxStyle}>
            <div style={lineStyle}></div>
          </div>
        </label>
        
        <label style={labelStyle}>
          <textarea 
            style={textareaStyle} 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="MESSAGE"
          />
          <div style={lineBoxStyle}>
            <div style={lineStyle}></div>
          </div>
        </label>
        
        <button style={{ ...buttonStyle, background: buttonColor }} type="submit">Send Message</button>
        <p>Need more help? <Link to="/faq">Visit our FAQ</Link></p>
      </form>
    </div>
  );
};

const containerStyle = {
  width: '30%',
  margin: '60px auto',
  background: '#efefef',
  padding: '60px 120px 80px 120px',
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

const textareaStyle = {
  width: '100%',
  padding: '10px',
  height: '100px',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  resize: 'none',
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
  fontWeight: 'bold',
  color: 'rgb(120,120,120)',
  border: 'none',
  outline: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
  transition: 'ease .3s',
};

export default ContactUs;
