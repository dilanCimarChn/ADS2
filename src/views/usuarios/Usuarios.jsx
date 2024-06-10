// src/views/usuarios/Usuarios.jsx
import React from 'react';
import UsuariosHeader from '../../components/usuarios/UsuariosHeader';
import UsuariosTable from '../../components/usuarios/UsuariosTable';
import UsuariosSidebar from '../../components/usuarios/UsuarioSidebar';
import './Usuario.css';

const Usuarios = () => (
  <div className="usuarios-page">
    <UsuariosSidebar />
    <div className="usuarios-content">
      <UsuariosHeader />
      <UsuariosTable />
    </div>
  </div>
);

export default Usuarios;
