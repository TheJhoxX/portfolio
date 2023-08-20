import { Component } from "react";
import './Navbar.css'

class Navbar extends Component {
    render(){
        const { secciones, temaOscuro } = this.props
        const opcion = temaOscuro ? '-dark' : '';

        return(
            <div className={'navbar' + opcion}>
                {secciones.map(x => 
                    <a key={x} href={'#' + x} className={'elemento-navbar'+opcion}>
                        {x}
                    </a>
                    
                )}
            </div>
            
        )
    }
}

export default Navbar