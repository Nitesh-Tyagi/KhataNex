import React, { useState } from 'react';
import './style.css';
import pig from './pig.svg';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const [name, setName] = useState('');
  const [phoneno, setPhoneNo] = useState('');
  const [error, setError] = useState('');
  let navigate = useNavigate()

  const handleSubmit = () => {
    if (name === '') {
      window.alert('Fill a Name');
    } else if (phoneno === '') {
      window.alert('Fill a Phone Number');
    } else {
      onLogin({ name, phoneno });
      navigate('/dashboard');
    }
  };

  return (
    <div>
      <div id="pic-container">
        <div id="pig-container">
          <img src={pig} alt="pig" id="pig" />
        </div>
      </div>

      <div id="login-container">
        <form id="login-form">
          <span>Welcome to KhataNex</span>
          <input
            type="text"
            id="name"
            className="field"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            id="phone"
            className="field"
            placeholder="Phone Number"
            value={phoneno}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <input
            type="button"
            id="submit"
            className="field"
            value="Log In"
            onClick={handleSubmit}
          />
          <div style={{ display: 'inline-block', marginTop: '5px' }}>
            <span>New Member?</span>
            <span style={{ color: '#F38183' }}>Register Now</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
