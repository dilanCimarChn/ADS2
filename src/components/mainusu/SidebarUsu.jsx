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
      <button className="sidebar-button" onClick={() => navigate('/inicio-usuario')}>Inicio</button>
      <button className="sidebar-button" onClick={() => navigate('/perfil')}>Perfil</button>
      <button className="sidebar-button" onClick={() => navigate('/reportar-problema')}>Reportar Problemas</button>
      <button className="sidebar-button" onClick={() => navigate('/acerca-de')}>Acerca de</button>
    </div>
  );
};

export default SidebarUsu;
