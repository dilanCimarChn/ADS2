// src/components/Perfil/PerfilContent.jsx
import React from 'react';
import './Perfiles.css';

const Perfiles = () => (
  <div className="perfil-content">
    <div className="personal-data-container">
      <img src="flaquito.png" alt="User" className="user-image" />
      <div className="user-details">
        <h2>Dilan Cimar Choque Nina</h2>
        <p>Jefe de Finanzas </p>
        <p>Número de Teléfono: 76358726</p>
        <p>Correo Electrónico: Dcimarc@gest.emi.edu.bo</p>
        <p>Horario de Estacionamiento : </p>
        <p>Lunes - Viernes 08:00-15:00 </p>
      </div>
    </div>
    <div className="car-data-container">
      <img src="auto.png" alt="Car" className="car-image" />
      <div className="car-details">
        <h2>Automovil:</h2>
        <p>Toyota, Hilux</p>
        <p>Año: 2024</p>
        <p>Placa: ABC-123</p>
        
      </div>
    </div>
  </div>
);

export default Perfiles;
