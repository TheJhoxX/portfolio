import { Component } from "react";
import './Switch.css'

class Switch extends Component {
    render(){
        const { cambiarTema, temaOscuro } = this.props
        const opcion = temaOscuro ? '-dark' : '';
        
        console.log(opcion)
        return (
            <div className={'contenedor-switch' + opcion}>
                <button onClick={cambiarTema} className={'switch' + opcion}> </button>
            </div>
        )
    }
}

export default Switch