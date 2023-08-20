import { Component } from "react";
import Seccion from '../Seccion/Seccion'
import Switch from '../Switch/Switch'
import './Contenido.css'
import Descripcion from "../Descripcion";


class Contenido extends Component {
    render(){
        const { secciones, cambiarTema, temaOscuro} = this.props
        const opcion = temaOscuro ? '-dark' : '';
        return (
            <div className='contenido'>
                {secciones.map(x => 
                    <Seccion 
                    temaOscuro={temaOscuro}
                    key={x} 
                    nombre={x}/>    
                )}
                <Descripcion importante={true}>Cambiar tema:</Descripcion>
                <Switch 
                temaOscuro={temaOscuro}
                cambiarTema={cambiarTema}/>
            </div>
        )
    }
}

export default Contenido