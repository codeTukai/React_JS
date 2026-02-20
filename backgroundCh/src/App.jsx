import { useState } from 'react'

function App() {
  const [color, setColor] = useState(true)

  

  return (
   <>
   <div className='w-full h-screen duration-200'style={{background: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ' >
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 pb-2 rounded-3xl'>
        <button
         onClick={()=>setColor("red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "red"}}>Red</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 pb-2 rounded-3xl'>
        <button 
        onClick={()=>setColor("green")}
        className='outline-none  pb-2 px-4 py-2 rounded-full text-white shadow-lg' style={{background: "green"}}>Green</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 pb-2 rounded-3xl'>
        <button
        onClick={()=>setColor("yellow")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "yellow"}}>Yellow</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 pb-2 rounded-3xl'>
        <button
        onClick={()=>setColor("black")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "black"}}>Black</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 pb-2 rounded-3xl'>
        <button
        onClick={()=>setColor("purple")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "purple"}}>Purple</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 pb-2 rounded-3xl'>
        <button 
        onClick={()=>setColor("grey")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "grey"}}>Grey</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 pb-2 rounded-3xl'>
        <button 
        onClick={()=>setColor("orange")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "orange"}}>Orange</button>
      </div>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 pb-2 rounded-3xl'>
        <button
        onClick={()=>setColor("pink")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background: "pink"}}>Pink</button>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
