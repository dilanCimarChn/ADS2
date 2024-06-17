import React from 'react';
import UsuariosSidebar from '../../components/usuarios/UsuarioSidebar';
import RegisActividad from '../../components/regis-actividad/regis-actividad';
import "./registro-acti-vista.css"

const VistasRegisActividad = () => {
  return (
    <div className="flex h-screen"> 
      <UsuariosSidebar className="sidebar" />
      <div className="flex-1 p-4 mt-4"> 
        <RegisActividad /> 
      </div>
    </div>
  );
};

export default VistasRegisActividad;

