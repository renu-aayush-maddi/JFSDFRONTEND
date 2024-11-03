import React from 'react';
import './loginStyles.css'; // Separate CSS for Login page

import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="auth-container login-bg">
      <div className="auth-content">
        <h2>Login</h2>
        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <Link to="/home">
          <  button type="submit">Login</button>
          </Link>
        </form>
        <p>Don't have an account? <a href="/register">Register here</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
