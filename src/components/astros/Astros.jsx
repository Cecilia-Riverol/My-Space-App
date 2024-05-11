import { useState, useEffect } from "react";
import { Typography } from "@mui/material/";
import CircularProgress from '@mui/material/CircularProgress';
import "./Astros.css";

//Vamos a obtener todo por medio de props
function Astro(props) {
    /*
    Esta constante se utilizo anteriormente para revisar que la tarjeta estuviese reflejando bien la información, no es necesario mantenerla en el nuevo código
    const astro = {
        name: "name lastname",
        craft: "ISS",
    };*/

    return (
    <div className="card">
        <h2> {props.astro.name}</h2>
        <p> {props.astro.craft}</p>
    </div>);
    
}

//Trabaja con un dato externo llamado URL. Declaramos dos constantes, astros que es dônde v amos a guardar la información, y setAstros que es mi función. Sacamos la información de userState()

//Tenemos un declaración asincrónica que va a recibir los datos de la declaración promesa fetchURL de JavaScript. la const data va a recibir la información de respuesta y la va a parciar a json para que se pueda leer.

//los [] fuera de fectData nos sirven para limitar la respuesta de la API y obtener solo una cantidad limitada.

function Astros(){

    const [astros, setAstros] = useState();
    const URL = "http://api.open-notify.org/astros.json";

    useEffect(() => {
        async function fetchData () {
        const response = await fetch (URL);
        const data = await response.json();
        setAstros(data.people);
        console.log(astros);
    }
    fetchData();
    }, []);
    console.log(astros);

    return(<>
        <Typography variant="h2" className="Astros">ASTROS</Typography>
        <div className="card-container">
            {astros ? (
                astros.map((astro, index) => 
            <Astro astro={astro} key = {index}/>)) : (
                <CircularProgress/>
            )}
        </div>
        </>
        );
    }

    //Cada componente que regreses de map debe ser identificado de nivel individual. Como Astro no tiene ID key = {index}/ es nuestra solución.
    
    export default Astros;
