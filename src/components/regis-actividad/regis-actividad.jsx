import React from 'react';
import './regis-actividad.css'; // Importa el archivo CSS

const RegisActividad = () => {
  // Datos de ejemplo (puedes reemplazarlos con datos reales)
  const registros = [
    {
      user: 'John Doe',
      action: 'Se ha solicitado la transferencia de la propiedad del sitio Transfer Tutorial',
      time: '11 feb 2022, 14:43',
      status: 'check-circle',
    },
    // Agregar más registros aquí según sea necesario
  ];

  return (
    <>
      <div>
        <h2 className="title">REGISTROS DE ACTIVIDAD:</h2>
      </div>
      <div className="w-full max-w-5xl mx-auto p-4 regis-actividad">
        <div className="bg-gray-200 rounded-lg shadow">
          <table>
            <thead>
              <tr>
                <th>USUARIO</th>
                <th>ACCIÓN</th>
                <th>HORA</th>
                <th>ESTADO</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((log, index) => (
                <tr key={index}>
                  <td>{log.user}</td>
                  <td>{log.action}</td>
                  <td>{log.time}</td>
                  <td>
                    {log.status === 'check-circle' ? (
                      <CircleCheckIcon className="text-green-500" />
                    ) : (
                      <CircleIcon className="text-yellow-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export default RegisActividad;
