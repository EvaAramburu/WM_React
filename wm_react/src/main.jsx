import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import Vision from './components/vision'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar items={["Contacto", "Servicios", "Info"]}/>
    <Vision /> 
  </React.StrictMode>,
)
