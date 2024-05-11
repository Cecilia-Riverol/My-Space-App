import "./Navbar.css";
import {Link} from "react-router-dom"; //Importamos
import RocketIcon from '@mui/icons-material/Rocket';

function Navbar(props){
    

        //Links nos muestra el array pero props nos muestra el objeto de dentro
  const links = props.links;
    return(
        <nav className="navbar">
            <div>
                {/*Comento comentario*/}
                <RocketIcon/>
                <h2 style={{ color:"#A87676"}}>Logo</h2>
                <h2 style={{ color:"#CA8787"}}>{props.header}</h2>
            </div>
            <div>
                {/*Por cada link que encontremos vamos a renderizar un elemento, además cada dato en una colección debe tener un id, el cual se lo dimos en App.jsx*/}
                {
                links.map((link) =>(
                    <Link className="LinkMenu" to={link.link} key={link.id}>
                        {link.text}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;


/*

Si ya sabes exactamente lo que vas a recibir, puedes omitir props para poner lo que necesitas en específico. Yo prefiero dejarlo en props para no tener que indexar nada más.

function Navbar({Links,header}){
    
    return(
        <nav className="navbar">
            <div>
                <h2 style={{ color:"#A87676"}}>Logo</h2>
                <h2 style={{ color:"#CA8787"}}>{header}</h2>
            </div>
            <div>
                {
                links.map((link) =>(
                    <button key={link.id}>
                    <a href="{link.link}">{link.text}</a>
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
*/ 


//Función para los estilos dentro de la función de Navbar
/*const iconStyles = {
        padding: "5px",
        color: "#E1ACAC",
    };*/