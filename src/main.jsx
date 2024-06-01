import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contador from './components/Contador.jsx'
import Carrito from './components/Carrito.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Carrito></Carrito>
    <Contador></Contador>
  </React.StrictMode>,
)
