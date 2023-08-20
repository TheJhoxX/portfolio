import { Component } from "react";
import Descripcion from '../Descripcion'
import './Proyecto.css'

class Proyecto extends Component {
    render(){
        const { img, enlace, nombre, descripcion } = this.props 
        if (img){
            return(
                <div className="elemento-carrusel">
                    <img alt={nombre} className="imagen-carrusel" src={img}/>
                    <div className="texto-carrusel">
                        <h2>{nombre}</h2>
                        <Descripcion importante={false}>{descripcion}</Descripcion>
                        <a className="enlace-proyecto" href={enlace} target="_blank">Acceso al proyecto </a>
                    </div>
                </div>
                )
        }
        else {
            return(
                //No hay imagen del proyecto
                <div className="elemento-carrusel">
                    <div className="texto-carrusel">
                        <h2>{nombre}</h2>
                        <Descripcion importante={false}>{descripcion}</Descripcion>
                        <a className="enlace-proyecto" href={enlace} target="_blank">Acceso al proyecto </a>
                    </div>
                </div>
            )
        }
    }
}
export default Proyecto