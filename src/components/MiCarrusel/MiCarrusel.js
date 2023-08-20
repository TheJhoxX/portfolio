import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Proyecto from "../Proyecto/Proyecto";
import listadoDeProyectos from "../../data/proyectos.json"

const proyectos = listadoDeProyectos.proyectos

class MiCarrusel extends Component {
    render(){
        return (
            <div>
                <Carousel showThumbs={false} showArrows={true} axis="vertical" autoPlay={true} dynamicHeight={true} interval={5000} infiniteLoop={true}>
                    {proyectos.map(x =>
                        <Proyecto key={x.nombre} img={x.img} enlace={x.enlace} nombre={x.nombre} descripcion={x.descripcion} />
                    )}
                </Carousel>
            </div>
        )
    }
}

export default MiCarrusel