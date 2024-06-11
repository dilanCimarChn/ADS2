// src/views/estacionamiento/Estacionamiento.jsx
import React from 'react';
import EspacioEstacionamiento from '../../components/estacionamiento/EspacioEstacionamiento';
import UsuariosSidebar from '../../components/usuarios/UsuarioSidebar';
import './Estacionamiento.css';

const Estacionamiento = () => {
  const espacios = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <div className="estacionamiento-page">
      <UsuariosSidebar />
      <div className="estacionamiento-content">
        <h1>ESTADO ACTUAL DEL ESTACIONAMIENTO</h1>
        <div className="estacionamiento-grid">
          {espacios.map(numero => (
            <EspacioEstacionamiento key={numero} numero={numero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Estacionamiento;
