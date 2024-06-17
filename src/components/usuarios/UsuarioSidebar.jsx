import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UsuariosSidebar.css'; // Archivo de estilos CSS

const UsuariosSidebar = () => {
  const navigate = useNavigate(); // Hook para la navegación

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="logoemi.png" alt="Logo" className="logo" />
      </div>
      <button className="sidebar-button" onClick={() => navigate('/inicio')}>Inicio</button>
      <button className="sidebar-button" onClick={() => navigate('/solicitudes')}>Solicitudes/Asignar</button>
      <button className="sidebar-button" onClick={() => navigate('/usuarios')}>Usuarios</button>
      <button className="sidebar-button" onClick={() => navigate('/registros')}>Registros de Actividad</button>
      <button className="sidebar-button" onClick={() => navigate('/reportes')}>Informes y Reportes</button>
    </div>
  );
};

export default UsuariosSidebar;
