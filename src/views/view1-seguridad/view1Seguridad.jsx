import React from "react";
import EspacioEstacionamiento from "../../components/estacionamiento/EspacioEstacionamiento";
import "./view1Seguridad.css";
import NavbarSeguridad from "../../components/navbar-seguridad/navbarSeguridad";

export const View1Seguridad = () => {
  const espacios = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <div className="estacionamiento-page">
      <NavbarSeguridad />
      <div className="estacionamiento-content">
        <h1 className="titulo-estacionamiento">ESTADO ACTUAL DEL ESTACIONAMIENTO</h1>
        <div className="estacionamiento-grid">
          {espacios.map((numero) => (
            <EspacioEstacionamiento key={numero} numero={numero} />
          ))}
        </div>
      </div>
    </div>
  );
};
