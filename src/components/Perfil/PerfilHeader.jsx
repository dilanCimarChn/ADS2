// src/components/Perfil/PerfilHeader.jsx
import React from 'react';
import './PerfilHeader.css';

const PerfilHeader = () => (
  <div className="perfil-header">
    <h2>PERFIL DEL USUARIO</h2>
    <button className="logout-button">Cerrar Sesión</button>
  </div>
);

export default PerfilHeader;
