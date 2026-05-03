import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  let counter = 5
  const addValue = (e) => {
    
  }
  return (
    <>
    <div>
      <h1>chai aur code</h1>
      <h2>chai aur counter:{counter} </h2>

      <button onClick={addValue}>Add value: {counter} </button>
      <br></br>
      <br />
      <button>Remove value</button>
    </div>
    </>
  )
}

export default App
