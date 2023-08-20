import { Component } from "react";
import RedesSociales from "../RedSocial/RedesSociales";
import Descripcion from '../Descripcion'
import MiSlider from '../MiCarrusel/MiCarrusel'
import './Contenido.css'
import MiCarrusel from "../MiCarrusel/MiCarrusel";


const informacionPersonal = (
    'Soy un estudiante de Ingeniería Informática en la rama de Ingeniería' +  
    ' del Software en la Universidad de Valladolid. Fundamentalmente estoy' +
    ' interesado en el desarrollo web fullstack y quiero aprender sobre el' +
    ' desarrollo de aplicaciones móviles, tanto para Android como para iOS.' +
    ' Ya sea mediante formación universitaria o auto-formación he utilizado' +
    ' tecnologías como: HTML, CSS, JS, React, Git, MariaDB, Java, C, Python.'
)

const explicacionContacto = (
        'Para contactarme o ver mis proyectos, en la sección de Redes Sociales ' +
        'se puede hacer click en cualquiera de los iconos para poder acceder ' + 
        'directamente a mi Linkedin, Github o enviarme un correo electrónico'
)



class ContenidoSeccion extends Component {
    render(){
        const { nombre } = this.props
        if (nombre === 'Redes sociales'){
            return (<RedesSociales />)
        }
        else if (nombre === 'Informacion personal'){
            return (
                    <div>
                        <Descripcion importante={false}>
                            {informacionPersonal}
                        </Descripcion>
                        <Descripcion importante={true}>
                            {explicacionContacto}
                        </Descripcion>
                    </div>
                    )
        }
        else if (nombre === 'Proyectos'){
            return(
                <MiCarrusel />         
            )
        }
        else if (nombre === 'Formacion'){
            return (
                <div>
                    <Descripcion importante={false}>
                        Actualmente me encuentro cursando el Grado de Ingeniería Informática en el tercer/cuarto curso y cuento con un certificado en el curso:
                    </Descripcion>
                    <Descripcion importante={true}>
                        Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero
                    </Descripcion>
                    <Descripcion importante={false}>
                        Impartido en Udemy en el que se aprendía sobre las tecnologías que se mencionan en el título del curso además de algunas otras como 
                        React o MongoDB. Pretendo seguir formándome y obtener otros certificados sobre desarrollo fullstack y comenzar a aprender sobre desarrollo de 
                        aplicaciones móviles
                    </Descripcion>
                </div>
            )
        }
        else {
            return null
        }
    }
}

export default ContenidoSeccion