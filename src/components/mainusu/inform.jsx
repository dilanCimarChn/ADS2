// src/components/Parking/ParkingContent.jsx
import React from 'react';
import './inform.css';

const Inform = () => (
  <div className="parking-content">
    <div className="description">
      Aquí va la descripción del vehículo 123ASD
    </div>
    <div className="parking-details">
      <div className="detail">
        <label>Lugar de Estacionamiento</label>
        <input type="text" value="26" disabled />
      </div>
      <div className="detail">
        <label>Entrada</label>
        <input type="text" value="11 may. 2024, 19:52" disabled />
      </div>
      <div className="detail">
        <label>Transcurrido</label>
        <input type="text" value="0 minuto(s)" disabled />
      </div>
      <img src="./auto.png" alt="Vehicle" className="vehicle-image" />
      <p>123ADS</p>
    </div>
  </div>
);

export default Inform;
