import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbarSeguridad.css';

const NavbarSeguridad = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="logoemi.png" alt="Logo" className="logo" />
      </div>
      <h2 className='titulo-navbar'>
        UALP-Playon de Irpavi
      </h2>
      <button className="sidebar-button" onClick={() => navigate('/seguridadinicio')}>Inicio</button>
      <button className="sidebar-button" onClick={() => navigate('/usuarios')}>Usuarios</button>
      <button className="sidebar-button" onClick={() => navigate('/registros')}>Registros de Actividad</button>
    </div>
  );
};

export default NavbarSeguridad;
