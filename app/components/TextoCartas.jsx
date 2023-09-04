import { ScrollShadow } from "@nextui-org/react";
import TituloCarta from "./TituloCarta"

export default function textoCartas ({titulo,contenido}) {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-2/5 max-h-full">
                <TituloCarta>{titulo}</TituloCarta>
                <ScrollShadow size={40} className="w-full h-full">
                    <p className="text-justify">
                        {contenido}
                    </p>
                </ScrollShadow>
            </div>
        </>
        
    )
}