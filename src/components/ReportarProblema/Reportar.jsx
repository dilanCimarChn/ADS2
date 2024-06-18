// src/components/ReportarProblema/ReportarContent.jsx
import React from 'react';
import './Reportar.css';

const Reportar = () => (
  <div className="reportar-content">
    <form className="reportar-form">
      <div className="form-group">
        <label htmlFor="titulo">Título del Problema</label>
        <input type="text" id="titulo" placeholder="Ingrese el título del problema" />
      </div>
      <div className="form-group">
        <label htmlFor="descripcion">Describa el Problema Aquí</label>
        <textarea id="descripcion" placeholder="Describa el problema aquí"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="area">Área</label>
        <input type="text" id="area" placeholder="Ingrese el área relacionada" />
      </div>
      <div className="form-group">
        <label htmlFor="tipo">Tipo de Problema</label>
        <input type="text" id="tipo" placeholder="Ingrese el tipo de problema" />
      </div>
      <div className="form-group">
        <label htmlFor="etiqueta">Etiqueta Personalizada</label>
        <input type="text" id="etiqueta" placeholder="Ingrese una etiqueta personalizada" />
      </div>
      <button type="submit" className="reportar-button">Enviar Reporte</button>
    </form>
  </div>
);

export default Reportar;
