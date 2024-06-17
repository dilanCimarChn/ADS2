import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SidebarUsu.css';

const SidebarUsu = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="logoemi.png" alt="Logo" className="logo" />
      </div>
      <button className="sidebar-button" onClick={() => navigate('/inicio')}>Inicio</button>
      <button className="sidebar-button" onClick={() => navigate('/solicitudes')}>Perfil</button>
      <button className="sidebar-button" onClick={() => navigate('/registros')}>Reportar Problemas</button>
      <button className="sidebar-button" onClick={() => navigate('/reportes')}>Acerca de</button>
    </div>
  );
};

export default SidebarUsu;
