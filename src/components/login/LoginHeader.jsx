// src/components/login/LoginHeader.jsx
import React from 'react';
import './LoginForm.css'; // Reutiliza estilos en LoginForm.css

const LoginHeader = () => {
  return (
    <header className="login-header">
      
      <h2>INICIAR SESIÓN</h2>
      <img src="perfilimg.png" alt="Logo" className="logo" />
    </header>
  );
};

export default LoginHeader;
