import { useState } from 'react'
import './App.css'
import Login from './views/Login/Login'
import Usuarios from './views/usuarios/Usuarios'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       <Usuarios></Usuarios>
      </div>
    
  )
}

export default App
