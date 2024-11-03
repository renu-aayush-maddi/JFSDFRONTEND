import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import HomePage from './components/HomePage';
import Culture from './components/Culture';
import Heritage from './components/Heritage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Culture" element={<Culture />} />
        <Route path="/Heritage" element={<Heritage />} />
      </Routes>
    </Router>
  );
};

export default App;
