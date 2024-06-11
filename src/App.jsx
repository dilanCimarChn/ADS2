import { useState } from "react";
import { Tuser } from "./views/tipos-usuario/tipos-usuario";
import Usuarios from "./views/usuarios/Usuarios";
import Login from "./views/Login/Login";
import AsignaciondeEst from "./views/AsignaciondeEst/AsignaciondeEst";
import Estacionamiento from "./views/Estacionamiento/Estacionamiento";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Tuser></Tuser>
        
        

      </div>
    </>
  );
}

export default App;
