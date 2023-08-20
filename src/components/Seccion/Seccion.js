import { Component } from "react";
import TituloSeccion from '../TituloSeccion/TituloSeccion'
import ContenidoSeccion from "../ContenidoSeccion/ContenidoSeccion";
import './Seccion.css'


class Seccion extends Component {
    render() {
        const { nombre, temaOscuro } = this.props
        var opcion = '';
        if (temaOscuro){ 
            opcion = '-dark'
        }
        else {
            opcion = ''
        }
        return( 
            <div className={'seccion-portfolio' + opcion}>
                <TituloSeccion 
                nombre={nombre} />
                <ContenidoSeccion 
                nombre={nombre} />    
            </div>
        )
    }
}

export default Seccion