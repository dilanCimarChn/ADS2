import React from "react";
import NavbarSeguridad from "../../components/navbar-seguridad/navbarSeguridad";
import "./view3Seguridad.css";
import DatosInvitado from "../../components/datos-invitado/datosInvitado";
import { BotonEnviar } from "../../components/boton-enviar/botonEnviar";

export const View3Seguridad = () => {
  return (
    <div className="invitado-page">
      <NavbarSeguridad />
      <h1 className="titulo-page">AGREGAR INVITADO</h1>
      <div className="contenedor-datos">
        <DatosInvitado dato={"Nombre(s):"} />
        <DatosInvitado dato={"Apellido(s):"} />
        <DatosInvitado dato={"Carnet de Identidad:"} />
        <DatosInvitado dato={"Placa:"} />
        <DatosInvitado dato={"Modelo Automovil:"} />
        <DatosInvitado dato={"Motivo de Visita:"} />
        <DatosInvitado dato={"Puesto de Estacionamiento:"} />
        <DatosInvitado dato={"Hora de Entrada:"} />
      </div>
      <div className="cont-boton">
        <BotonEnviar nombre={"Enviar"} />
      </div>
    </div>
  );
};
