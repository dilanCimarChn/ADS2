// src/components/estacionamiento/EspacioEstacionamiento.jsx
import React, { useState } from 'react';
import './EspacioEstacionamiento.css';

const EspacioEstacionamiento = ({ numero }) => {
  const [estado, setEstado] = useState('disponible');

  const toggleEstado = () => {
    setEstado(prevEstado => prevEstado === 'disponible' ? 'ocupado' : 'disponible');
  };

  return (
    <div 
      className={`espacio ${estado}`}
      data-numero={numero}
      onClick={toggleEstado}
    >
      {numero}
    </div>
  );
};

export default EspacioEstacionamiento;
