'use client'
import React from "react";
import CartaPrincipal from './components/CartaPrincipal'
import RedSocial from './components/RedSocial'
import listaRedes from '../data/redesSociales.json'
import AcordeonInformacion from './components/AcordeonInformacion'

export default function App() {
  const redesSociales = listaRedes.redesSociales
  return (
    <div className="flex flex-col items-center justify-around w-full mt-8 gap-20">
        <CartaPrincipal/>
        <AcordeonInformacion />
        <div className="flex e flex-row items-center justify-center">
          {redesSociales.map(x => 
            <RedSocial key={x.nombre} enlace={x.enlace} img={x.img}/>     
          )}
        </div>
    </div>
  );
}
