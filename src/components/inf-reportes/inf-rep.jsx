import React from 'react';
import './inf-rep.css';

const InformeReport = () => {
  // Datos de ejemplo para tus informes
  const informes = [
    { id: 1, nombre: 'Informe de Ventas', motivo: 'Análisis de las ventas mensuales', detalle: '/detalle-ventas' },
    { id: 2, nombre: 'Balance General', motivo: 'Estado financiero global', detalle: '/detalle-balance' },
    { id: 3, nombre: 'Informe de Ventas', motivo: 'Análisis de las ventas mensuales', detalle: '/detalle-ventas' },
    { id: 4, nombre: 'Balance General', motivo: 'Estado financiero global', detalle: '/detalle-balance' },
    { id: 5, nombre: 'Informe de Ventas', motivo: 'Análisis de las ventas mensuales', detalle: '/detalle-ventas' },
    { id: 6, nombre: 'Balance General', motivo: 'Estado financiero global', detalle: '/detalle-balance' },
    { id: 7, nombre: 'Informe de Ventas', motivo: 'Análisis de las ventas mensuales', detalle: '/detalle-ventas' },
    { id: 8, nombre: 'Balance General', motivo: 'Estado financiero global', detalle: '/detalle-balance' },
    // Puedes agregar más informes aquí según sea necesario
  ];

  return (
    <div className="informe-report-wrapper">
      <div className="informe-title-container">
        <h4 className="informe-title">INFORMES:</h4>
      </div>
      <div className="informe-list">
        {informes.map((informe, index) => (
          <div key={informe.id} className="informe-item">
            <h3><a href={informe.detalle} className="informe-link">{informe.nombre}</a></h3>
            <p>{informe.motivo}</p>
            <p>Enviado por: Usuario123</p> {/* Cambia "Usuario123" por el nombre real */}
          </div>
        ))}
      </div>
      <h4 className="reportes-title">REPORTES:</h4>
      {/* Agrega aquí la lista de reportes si es necesario */}
    </div>
  );
};

export default InformeReport;
