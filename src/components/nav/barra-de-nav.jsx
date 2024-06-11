import React, { useState } from 'react';
import './barra-de-nav.css'; 

const Barranav = () => {
  const [showCatalogo, setShowCatalogo] = useState(false);
  const [showConsulta, setShowConsulta] = useState(false);
  const [showOperativo, setShowOperativo] = useState(false);

  const toggleCatalogo = () => {
    setShowCatalogo(!showCatalogo);
  };

  const toggleConsulta = () => {
    setShowConsulta(!showConsulta);
  };

  const toggleOperativo = () => {
    setShowOperativo(!showOperativo);
  };

  return (
    <div className="barranav">
      <div className="user-profile">
        <img src="ruta-a-la-imagen-del-usuario" alt="Foto de perfil" className="user-image" />
        <div className="user-details">
          <div className="user-name">Manuel</div>
          <div className="user-role">Gerente de Operaciones</div>
        </div>
      </div>            
      <div className="menu-item">REGISTRO</div>
      <div className={`menu-item has-submenu ${showCatalogo ? 'active' : ''}`} onClick={toggleCatalogo}>
        Vehiculos registrados 
        <div className={`submenu ${showCatalogo ? 'show' : ''}`}>
          <div className="submenu-item" >Propietarios</div>
          <div className="submenu-item">Conceptos</div>
          <div className="submenu-item">Usuarios</div>
        </div>
      </div>
      <div className={`menu-item has-submenu ${showConsulta ? 'active' : ''}`} onClick={toggleConsulta}>
        Consulta
        <div className={`submenu ${showConsulta ? 'show' : ''}`}>
          <div className="submenu-item">Abonos</div>
          <div className="submenu-item">Cargos</div>
          <div className="submenu-item">Tablas de amortización</div>
        </div>
      </div>
      <div className={`menu-item has-submenu ${showOperativo ? 'active' : ''}`} onClick={toggleOperativo}>
        Operativo
        <div className={`submenu ${showOperativo ? 'show' : ''}`}>
          <div className="submenu-item">Registro de cargas</div>
          <div className="submenu-item">Abonos</div>
        </div>
      </div>
    </div>
  );
};

export default Barranav;
