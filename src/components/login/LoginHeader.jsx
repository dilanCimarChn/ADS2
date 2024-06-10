// src/components/login/LoginHeader.jsx
import React from 'react';
import './LoginForm.css'; // Reutiliza estilos en LoginForm.css

const LoginHeader = () => {
  return (
    <header className="login-header">
      <h1>INICIO DE SESION</h1>
      <img src="/assets/images/logo-image.png" alt="Logo" className="logo" />
    </header>
  );
};

export default LoginHeader;
