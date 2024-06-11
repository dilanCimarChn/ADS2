import { useState } from "react";
import { Tuser } from "./views/tipos-usuario/tipos-usuario";
import Usuarios from "./views/usuarios/Usuarios";
import Login from "./views/Login/Login";
import AsignacionLugar from "./components/asigar-lugar/AsignacionLugar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Tuser/>

      </div>
    </>
  );
}

export default App;
