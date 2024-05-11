import React from 'react'
import { BrowserRouter }  from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Implementación de react DOM que va a ser mi nodo para la renderización
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Browser nos sirve para que las rutas se reconozcan bien y sea compatible con nuestro navegador*/}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);
