import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5100/login', {
        user: {
          email,
          password,
        },
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token); // Save the token to localStorage
      // Handle success (e.g., redirect, show a dashboard, etc.)
    } catch (error) {
      console.error('Login error:', error.response.data);
      setErrorMessage(error.response.data.status.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>

      {/* Add link to Sign Up page */}
      <p>
        Not a member? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LogIn;
