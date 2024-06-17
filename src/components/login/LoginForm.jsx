// LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const credencialesAdmin = {
  usuario: 'admin',
  contraseña: 'admin123'
};

const credencialesCarlos = {
  usuario: 'carlos',
  contraseña: 'carlos123'
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      (email === credencialesAdmin.usuario && password === credencialesAdmin.contraseña) ||
      (email === credencialesCarlos.usuario && password === credencialesCarlos.contraseña)
    ) {
      if (email === 'carlos') {
        navigate('/inicio-usuario'); // Redirige a la vista de MainUsu para el usuario Carlos
      } else {
        navigate('/estacionamiento'); // Redirige a la vista de Estacionamiento para el admin
      }
    } else {
      setError('Credencial incorrecta'); // Muestra mensaje de error
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesión</button>
        {error && <div className="login-error">{error}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
