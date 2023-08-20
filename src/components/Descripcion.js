import { Component } from "react";

const styles = {
    fontWeight: 'bold',
}

class Descripcion extends Component {
    render() {
        const { children, importante } = this.props
        if (importante === false) {
            return(
                <p>{ children }</p>
            )
        }
        else {
            return(
                <p style={styles}>{ children }</p>
            )
        }
        
    }
}

export default Descripcion