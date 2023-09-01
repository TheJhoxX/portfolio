import Proyecto from '../components/Proyecto'
import listaProyectos from '../../data/proyectos.json'

export default function proyectos() {
    return (
        <div className='flex flex-col justify-center items-center w-full gap-8 mt-8'>
            {listaProyectos.proyectos.map(x => {
            return (<Proyecto 
            img={x.img} 
            enlace={x.enlace}
            nombre={x.nombre}
            descripcion={x.descripcion} 
            tecnologias={x.tecnologias}
            key={x.nombre}
            />) }
          )}
        </div>
    )
}