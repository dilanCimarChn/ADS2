import React from 'react';
import './inf-repot.css';
import InformeReport from '../../components/inf-reportes/inf-rep';
import UsuariosSidebar from '../../components/usuarios/UsuarioSidebar';

const InfRepot = () => {
  return (
    <div className="inf-repot-container">
      <UsuariosSidebar />
      <InformeReport />
    </div>
  );
};

export default InfRepot;
