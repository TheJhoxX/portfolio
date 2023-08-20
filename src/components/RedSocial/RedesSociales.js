import { Component } from "react";
import RedSocial from './RedSocial'
import listaRedesSociales from '../../data/redesSociales.json'
import './RedSocial.css'


const redesSociales = listaRedesSociales.redesSociales

class RedesSociales extends Component {
    render(){
        return (
            <div>
                {redesSociales.map(x => 
                    <RedSocial key={x.nombre} red={x}/>     
                )}
            </div>
        )
    }
}

export default RedesSociales