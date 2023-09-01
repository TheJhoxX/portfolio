import {Image} from "@nextui-org/react";

export default function redSocial({enlace, img}) {
    return (
        <a className="drop-shadow-glow flex flex-column items-center justify-center" href={enlace} target="_blank">
            <Image 
            isZoomed
            src={img}
            className='w-12 h-12'
            alt="linkedin"
            />
        </a>
    )
}