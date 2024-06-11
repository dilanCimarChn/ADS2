import React from "react";
import "./tipo-usuario.css";
import { Options } from "../../components/options/options";
import { useNavigate } from "react-router-dom";

export const Tuser = () => {
  const navigate = useNavigate();

  const handleOptionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div className="rectangle">
        <div className="LogoIcono2">
          <img src="/public/img-view1/emi_logo.png" alt="emi_logo" />
        </div>
      </div>
      <h2 className="tittle">SELECCIONE UN TIPO DE USUARIO</h2>
      <div className="Opciones">
        <Options name="ADMINISTRADOR" onClick={() => handleOptionClick('/login')} />
        <Options name="USUARIO" onClick={() => handleOptionClick('/login')} />
        <Options name="SEGURIDAD" onClick={() => handleOptionClick('/login')} />
        <Options name="INVITADO" onClick={() => handleOptionClick('/login')} />
      </div>
    </div>
  );
};

export default Tuser;