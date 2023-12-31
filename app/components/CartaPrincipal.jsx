import React from "react";
import {Card, Image, CardBody} from "@nextui-org/react";
import TextoCartas from "./TextoCartas"

export default function cartaPrincipal() {
    return (
        <Card
        radius="lg"
        className="drop-shadow-glow border-none w-9/12 max-w-xxl h-60 max-h-full"
        >
            <CardBody className="flex flex-row justify-around items-center gap-8 w-full max-h-full dark:bg-gradient-to-tr from-purple-950 to-transparent">
                <div className="flex w-2/5 h-full items-center justify-center">
                    <Image alt="" className="max-h-52 hidden md:block lg:block" src="foto-personal.JPG" />
                    <Image alt="" className="max-h-52 md:hidden lg:hidden" src="foto-personal-small.JPG"/>
                </div>
                <TextoCartas
                    titulo="Víctor Jorge Sibaja" 
                    contenido="Soy un estudiante de la Universidad de Valladolid del grado de Ingeniería 
                    Informática. Concretamente pertenezco a la rama de Ingeniería del Software."
                >
                </TextoCartas>
            </CardBody>
        </Card>
    )
}

