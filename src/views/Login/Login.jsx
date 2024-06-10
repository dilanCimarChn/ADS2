// src/views/login/Login.jsx
import React from 'react';
import LoginHeader from '../../components/login/LoginHeader';
import LoginForm from '../../components/login/LoginForm';
import LoginImage from '../../components/login/LoginImage';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <LoginImage />
      <div className="right-side">
        <div className="login-container">
          <LoginHeader />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
