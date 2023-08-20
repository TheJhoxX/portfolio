import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Contenido from './components/Contenido/Contenido'
import seccionesWeb from './data/secciones.json'

const secciones = seccionesWeb.secciones

class App extends Component {
  state = {
    temaOscuro: false,
  }

  cambiarTema = () => {
    this.setState({ temaOscuro: !this.state.temaOscuro });
  }

  //componentDidUpdate() {
    //document.documentElement.style.backgroundColor = this.state.temaOscuro ? '#3b3b3b3b' : '#3b3b3b';
 // }

  render (){
    const { temaOscuro } = this.state
    const opcion = temaOscuro ? '-dark' : '';
    document.documentElement.style.backgroundColor = this.state.temaOscuro ? '#3b3b3b' : '#fff';

    return (
      <div className={'App'+opcion}>
        <Navbar 
        temaOscuro={this.state.temaOscuro}
        secciones={secciones}/>
        <Contenido
        temaOscuro={this.state.temaOscuro}
        cambiarTema={this.cambiarTema} 
        secciones={secciones}/>
      </div>
    );
  }
}

export default App;
