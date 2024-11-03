import React from 'react';
import './registerStyles.css'; // Separate CSS for Register page

const RegistrationPage = () => {
  return (
    <div className="auth-container register-bg">
      <div className="auth-content">
        <h2>Register</h2>
        <form className="auth-form">
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default RegistrationPage;
