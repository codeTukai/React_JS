import React from "react";

import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [ch, setCh] = useState(false);
  const [password, setPassword] = useState("");
  
  //useRef hook

  const passwordRef = useRef(null)

//password Generator

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVLWYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (ch) str += "!@#$%^&*()|}{:><?~!";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      console.log(ch);
      
      pass += str.charAt(char);
      console.log(pass);
      
    }
    setPassword(pass);
  }, [length, number, ch, setPassword]);

  //copy

  const copyClipboard = useCallback(()=>{ 
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 200);
    window.navigator.clipboard.writeText(password) //window is used for react
  }
  , [password])

//useEffect

  useEffect(()=>{
    passwordGenerator()
  }, [length, number, ch, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-700">
        <h1 className="text-white text-center my-4 text-xl sm:text-2xl md:text-3xl">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 text-lg"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrinks-0 ">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
            
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={()=>{setNumber((prev)=>!prev)}}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <input 
            type="checkbox"
            defaultChecked={ch}
            id="characterInput"
            onChange={()=>{setCh((prev)=>!prev)}}
            />
             <label htmlFor="Characters">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
