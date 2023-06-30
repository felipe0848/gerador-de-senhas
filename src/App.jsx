import { useState } from 'react'
import './App.css'

function App() {
  const {password, setPassword} = useState()
  return (
    <>
      <h1>Gerador de Senhas</h1>
      <div className='buttons'>
      <button
        onClick={()=>setPassword(Math.floor(Math.random()))}
      >
        Gerar
      </button>
      <button>Copiar</button>
      </div>
      <div className='password'>
        <p>{password}</p>
      </div>
    </>
  )
}

export default App
