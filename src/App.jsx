import {Routes, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero.';
import Astros from './components/astros/Astros';
import About from './components/About/About';
import './App.css';
import ApodPage from "./components/Apod/Apod";
import ApodNav from "./components/Apod/Apod";


function App() {

  //Cremaos una constante para reutilizarla en un futuro
  const links = 
  [{
    id:1,
    text:"Home",
    link: "/",
  },
  {
    id:2,
    text:"Apod",
    link: "/Apod",
  },
  {
    id:3,
    text:"Astros",
    link: "/astros",
  },
  {
    id:4,
    text:"About Me",
    link: "/About",
  },
];
  
//Lo que está dentro de rutas se va a mostrar sólo en el link, lo que está afuera de Routes se va a mostrar siempre, para el ejercicio de la tarjeta personal, es necesario colocarlo dentro.
//Rutas está al mismo nivel de Navbar, pero dentro de ella.
  return(
    <> 
    <Navbar header="Space-App 2" links={links} />
    <Routes>
        <Route element = {<Hero/>} path = "/"/>
      <Route element = {<Astros />} path = "/astros"/>
      <Route element = {<About />} path = "/About"/>
      <Route element = {<ApodNav />} path = "/Apod"/>
    </Routes>
    </>);
}
export default App;




//Comentario para la imagen principal de Vite

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */
