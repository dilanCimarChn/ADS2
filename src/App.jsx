// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tuser from './views/tipos-usuario/tipos-usuario';
import Login from './views/Login/Login';
import Estacionamiento from './views/Estacionamiento/Estacionamiento';
import AsignaciondeEst from './views/AsignaciondeEst/AsignaciondeEst';
import Usuarios from './views/usuarios/Usuarios';



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



        {/* Asegúrate de agregar aquí cualquier otra ruta que necesites */}
      </Routes>
    </Router>
  );
}

export default App;