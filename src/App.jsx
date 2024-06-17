// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tuser from './views/tipos-usuario/tipos-usuario';
import Login from './views/Login/Login';
import Estacionamiento from './views/Estacionamiento/Estacionamiento';
import AsignaciondeEst from './views/AsignaciondeEst/AsignaciondeEst';
import Usuarios from './views/usuarios/Usuarios';
import VistasRegisActividad from './views/regis-actividad/vistas-regis-actividad';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tuser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/estacionamiento" element={<Estacionamiento />} />
        <Route path="/solicitudes" element={<AsignaciondeEst />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/inicio" element={<Estacionamiento />} />
        <Route path="/registros" element={<VistasRegisActividad />} />
        {/* Añade aquí cualquier otra ruta necesaria */}
      </Routes>
    </Router>
  );
}

export default App;
