import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function Book(){
  return <h1>
    Is this books thats i want
  </h1>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <Book />
    
  </StrictMode>,
)
