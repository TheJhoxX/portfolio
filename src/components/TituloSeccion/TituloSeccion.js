import { Component } from "react";

class TituloSeccion extends Component {
    render(){
        const { nombre } = this.props
        return(
            <h1 id={nombre}>{ nombre }</h1>
        )
    }
}

export default TituloSeccion