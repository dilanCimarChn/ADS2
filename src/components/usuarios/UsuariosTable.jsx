// src/components/usuarios/UsuariosTable.jsx
import React from 'react';
import './UsuarioTable.css';

const UsuariosTable = () => {
  const usuarios = [
    { nombre: 'Hector Hugo', apellidoP: 'Corona', apellidoM: 'Garcia', activo: true },
    { nombre: 'Fernanda', apellidoP: 'Hernandez', apellidoM: 'Vargas', activo: true },
    { nombre: 'Francisco', apellidoP: 'Coronado', apellidoM: 'Espitia', activo: false },
    { nombre: 'Alberto', apellidoP: 'Morales', apellidoM: 'Perez', activo: true },
    { nombre: 'Mauricio', apellidoP: 'Perez', apellidoM: 'Correa', activo: false },
    { nombre: 'Fernando', apellidoP: 'Bautista', apellidoM: 'Reyes', activo: true },
    { nombre: 'Juan', apellidoP: 'Mendez', apellidoM: 'Cordova', activo: false },
  ];

  return (
    <div className="usuarios-table">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido paterno</th>
            <th>Apellido materno</th>
            <th>Activo</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellidoP}</td>
              <td>{usuario.apellidoM}</td>
              <td className={usuario.activo ? 'activo' : 'inactivo'}>
                {usuario.activo ? 'Activo' : 'Inactivo'}
              </td>
              <td><button className="modificar">Modificar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuariosTable;
