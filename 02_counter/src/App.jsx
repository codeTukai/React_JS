import { useState } from "react";
import "./App.css";



function App() {

  // let counter = 0;
  let [counter, setCounter] = useState(15);
  // let [remove, setRemove] = useState(0);
 
 
  const addValue =()=>{

//  React State is Asynchronous + Batching
// React batches state updates.
// All these lines use the same old counter value.
    setCounter(prev=>prev + 1)
    setCounter(prev=>prev + 1)
    setCounter(prev=>prev + 1)
    setCounter(prev=>prev + 1)
   
    // if (counter < 20) {
    // } else {
    //   alert("maximum")
    // }
   

    
  }

  const removeValue =()=>{
    if (counter != 0 ) {
       setCounter(counter - 1)
    } else {
      alert("Minimum");
      
    }
   
  }

  return (
    <>
      <div>
        <h1>Chai aur code</h1>
        <h2>Counter value: {counter}</h2>
       
        <button onClick={addValue}>Add Value</button>
        <br/> 
        <br/> 
        <button onClick={removeValue}>Remove Value </button>
      </div>
    </>
  );
}

export default App;
