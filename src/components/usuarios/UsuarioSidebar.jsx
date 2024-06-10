// src/components/usuarios/UsuariosSidebar.jsx
import React from "react";
import "./UsuariosSidebar.css";

const UsuariosSidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
      <img src="logoemi.png" alt="Logo" className="logo" />
      </div>
      <button className="sidebar-button" onClick={() => window.location.href = "/inicio"}>Inicio</button>
      <button className="sidebar-button" onClick={() => window.location.href = "/solicitudes"}>Solicitudes/Asignar</button>
      <button className="sidebar-button" onClick={() => window.location.href = "/usuarios"}>Usuarios</button>
      <button className="sidebar-button" onClick={() => window.location.href = "/registros"}>Registros de Actividad</button>
      <button className="sidebar-button" onClick={() => window.location.href = "/reportes"}>Informes y Reportes</button>
    </div>
  );
};

export default UsuariosSidebar;
