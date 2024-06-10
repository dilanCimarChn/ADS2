// src/components/usuarios/UsuariosButton.jsx
import React from 'react';
import './UsuarioButton.css';

const UsuariosButton = ({ label, onClick }) => (
  <button className="usuarios-button" onClick={onClick}>
    {label}
  </button>
);

export default UsuariosButton;
