// src/views/usuarios/Usuarios.jsx
import React from 'react';
import UsuariosSidebar from '../../components/usuarios/UsuarioSidebar';
import './AsignaciondeEst.css';
import AsignacionLugar from '../../components/asigar-lugar/AsignacionLugar';
import Tablausuario from '../../components/tabla-usuario/tablausuario';

const AsignaciondeEst = () => (
  <div className="usuarios-page">
    <UsuariosSidebar />
    <div className='solicitud'>
    <Tablausuario></Tablausuario>
    </div>
    <div className="usuarios-content">
      <AsignacionLugar></AsignacionLugar>
    </div>
  </div>
);

export default AsignaciondeEst;
