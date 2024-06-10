import { useState } from "react";
import "./App.css";
import { Tuser } from "./views/tipos-usuario/tipos-usuario";


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
