import { Component } from "react";
import './RedesSociales'
import './RedSocial.css'

class RedesSocial extends Component {
    render(){
        const { red } = this.props
        return(
            <div className="redSocial">
                <a className="enlace-red-social" href={red.enlace} target="_blank">
                    <img className='logo' alt={red.nombre} src={red.img}/>
                </a>
                <h2 className="nombre-red-social">{red.nombre}</h2>
            </div>
        )
    }
}

export default RedesSocial