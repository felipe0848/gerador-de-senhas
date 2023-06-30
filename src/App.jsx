import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState()
  const [buttonCopyText,setButtonCopyText] = useState("Copiar")

  function passwordGen() {
    setButtonCopyText("Copiar")

    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let newPassword = ""

    for (let i = 0; i <= passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      newPassword += chars.substring(randomNumber, randomNumber +1);
     }

    setPassword(newPassword)

  }

  function copyText(){
    navigator.clipboard.writeText(password)
    setButtonCopyText("Copiado!")
  }

  return (
    <>
      <h1>Gerador de Senhas</h1>
      <div className='buttons'>
      <button
        onClick={()=>passwordGen()}
      >
        Gerar
      </button>
      <button
        onClick={()=>copyText()}  
      >
        {buttonCopyText}
      </button>
      </div>
      <div className='password'>
        <p>{password}</p>
      </div>
    </>
  )
}

export default App
