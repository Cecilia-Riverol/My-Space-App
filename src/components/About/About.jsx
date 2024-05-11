import "./About.css";
import Avatar from "../../../public/IMG/Avatar-Sandy.jpg"


//Vamos a obtener todo por medio de props

  
function About() {

    const about = {
        hello: "¡Hola, soy Sandy!",
        intro: "Especialista en Negocios Internacionales y Aspirante a Developer | UNAM | Líder en Implementación de Proyectos desde Procurement hasta Ejecución en Sitio.",
    };

    return (
    <div className="card">
        <img src={Avatar} id="Avatar"></img>
        <h2> {about.hello}</h2>
        <p> {about.intro}</p>
    </div>);
    
}
console.log (About);

export default About;