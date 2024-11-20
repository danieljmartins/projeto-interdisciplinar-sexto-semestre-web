import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import App from './App';
import Signup from './Signup';
import PasswordRecover from './PasswordRecover';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <App /> : <Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="passwordrecover" element={<PasswordRecover />} />
      </Routes>
    </Router>
  );
}

root.render(<Main />);

reportWebVitals();
