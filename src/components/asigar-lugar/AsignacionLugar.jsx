// src/components/usuarios/AsignacionLugar.jsx
import React from 'react';
import './AsignacionLugar.css'; 

const AsignacionLugar = () => {
  const usuarios = [
    { nombre: 'Hector Hugo', apellidoP: 'Corona', apellidoM: 'Garcia', lugar: 'E1' },
    { nombre: 'Fernanda', apellidoP: 'Hernandez', apellidoM: 'Vargas', lugar: 'E2' },
    { nombre: 'Francisco', apellidoP: 'Coronado', apellidoM: 'Espitia', lugar: 'E3' },
    { nombre: 'Alberto', apellidoP: 'Morales', apellidoM: 'Perez', lugar: 'E4' },
    { nombre: 'Mauricio', apellidoP: 'Perez', apellidoM: 'Correa', lugar: 'E5' },
    { nombre: 'Fernando', apellidoP: 'Bautista', apellidoM: 'Reyes', lugar: 'E6' },
    { nombre: 'Juan', apellidoP: 'Mendez', apellidoM: 'Cordova', lugar: 'E7' },
  ];

  return (
    <div className="asignacion-lugar">
      <h2>Asignar:</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido paterno</th>
            <th>Apellido materno</th>
            <th>Lugar de estacionamiento</th> {/* Cambiamos el encabezado */}
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellidoP}</td>
              <td>{usuario.apellidoM}</td>
              <td>{usuario.lugar}</td> {/* Mostramos el lugar de estacionamiento asignado */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AsignacionLugar;
