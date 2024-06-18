// src/views/Perfil.jsx
import React from 'react';
import PerfilHeader from '../../components/Perfil/PerfilHeader';
import './Perfil.css';
import SidebarUsu from '../../components/mainusu/SidebarUsu';
import Perfiles from '../../components/Perfil/Perfiles';

const Perfil = () => (
  <div className="perfil-page">
    <SidebarUsu></SidebarUsu>
    <div className="main-content">
      <PerfilHeader></PerfilHeader>
      <Perfiles></Perfiles>
    </div>
  </div>
);

export default Perfil;
