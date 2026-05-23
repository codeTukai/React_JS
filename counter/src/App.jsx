import {React, useState } from 'react'
import './App.css'

function App() {
let [counter, setCounter] = useState(0)

  
 
  const addValue = () => {
    setCounter(counter + 1)
    console.log(counter);
    
  }

  const removeValue = ()=>{
   setCounter(counter - 1)
    
    console.log(counter);
    
  }
  return (
    <>
    <div>
      <h1>chai aur code</h1>
      <h2>chai aur counter:{counter} </h2>

      <button onClick={addValue}>Add value: {counter} </button>
      <br></br>
      <br />
      <button onClick={removeValue}>Remove value: {counter}</button>
    </div>
    </>
  )
}

export default App
