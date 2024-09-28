import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <div>
        <h1>Mindelo Blue</h1>
        <Routes>
          {/* Add a default route that redirects based on authentication */}
          <Route path="/" element={isAuthenticated ? <p>Welcome! You are logged in.</p> : <Navigate to="/user_login" />} />

          {/* Signup and Login routes */}
          <Route path="/user_signup" element={<SignUp />} />
          <Route path="/user_login" element={<LogIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
