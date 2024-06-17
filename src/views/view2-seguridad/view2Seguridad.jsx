// src/views/usuarios/Usuarios.jsx
import React from "react";
import UsuariosHeader from "../../components/usuarios/UsuariosHeader";
import "./view2Seguridad.css";
import NavbarSeguridad from "../../components/navbar-seguridad/navbarSeguridad";
import TablaUsuarios from "../../components/tabla-usuarios-seguridad/tablaUsuarios";

const View2Seguridad = () => (
  <div className="usuarios-page">
    <NavbarSeguridad />
    <div className="usuarios-content">
      <UsuariosHeader />
      <TablaUsuarios />
    </div>
  </div>
);

export default View2Seguridad;
