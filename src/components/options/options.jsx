import React from "react";
import "./options.css";

export const Options = ({ name, onClick }) => {
  return <button className="opcion" onClick={onClick}>{name}</button>;
};
