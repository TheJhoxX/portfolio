'use client'
import {Image, Card, CardHeader, CardBody} from "@nextui-org/react";
import TextoCartas from './TextoCartas'
import RedSocial from './RedSocial'

export default function proyecto({img, enlace, nombre, descripcion, tecnologias}) {
  return (
    <div className='ease-in duration-300 flex w-11/12 justify-center items-center '>
        <Card isBlurred  className="bg-transparent drop-shadow-glow border py-4 flex w-full h-96 hover-gradient transform hover:scale-105 transition-transform ease-in-out duration-300 ">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{nombre}</h4>
            <small className="text-default-500">{tecnologias}</small>
            <div className='flex items-center gap-4'>
              <p>Enlace al proyecto: </p>
              <RedSocial enlace={enlace} img="github-logo.svg"/>
            </div>
          </CardHeader>
          <CardBody className="flex h-80 gap-4 flex-row justify-around items-center max-h-full py-2">
            <div className="flex w-2/5 h-full items-center justify-center">
              <Image alt="" src={img} className='max-h-56 rounded-lg'/>
            </div>
            <TextoCartas 
              contenido={descripcion}
              />
          </CardBody>
        </Card>      
    </div>
  );
}

