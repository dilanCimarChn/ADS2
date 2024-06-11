// src/components/usuarios/UsuariosTable.jsx
import React from 'react';
import './tablausuario.css'; 

const Tablausuario = () => {
  const usuarios = [
    { nombre: 'Hector Hugo', apellidoP: 'Corona', apellidoM: 'Garcia', activo: true, placas: 'ABC123' },
    { nombre: 'Fernanda', apellidoP: 'Hernandez', apellidoM: 'Vargas', activo: true, placas: 'DEF456' },
    { nombre: 'Francisco', apellidoP: 'Coronado', apellidoM: 'Espitia', activo: false, placas: 'GHI789' },
    { nombre: 'Alberto', apellidoP: 'Morales', apellidoM: 'Perez', activo: true, placas: 'JKL012' },
    { nombre: 'Mauricio', apellidoP: 'Perez', apellidoM: 'Correa', activo: false, placas: 'MNO345' },
    { nombre: 'Fernando', apellidoP: 'Bautista', apellidoM: 'Reyes', activo: true, placas: 'PQR678' },
    { nombre: 'Juan', apellidoP: 'Mendez', apellidoM: 'Cordova', activo: false, placas: 'STU901' },
  ];

  return (
    <div className="usuarios-table">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido paterno</th>
            <th>Apellido materno</th>
            <th>Placas</th> {/* Agregamos una columna para las placas */}
            <th>Aceptar</th>
            <th>Rechazar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellidoP}</td>
              <td>{usuario.apellidoM}</td>
              <td>{usuario.placas}</td> {/* Mostramos las placas en una nueva columna */}
              <td><button className="aceptar">Aceptar</button></td>
              <td><button className="rechazar">Rechazar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablausuario;
