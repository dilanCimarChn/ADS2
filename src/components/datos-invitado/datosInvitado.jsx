import React from "react";
import './datosInvitado.css'

function DatosInvitado({ dato, datoEntrada }) {
  return (
    <div className="contenedor-dato">
      <label className="tipo-dato">{dato}</label>
      <input className="dato-entrada" type="text" placeholder={datoEntrada} />
    </div>
  );
}

export default DatosInvitado;
