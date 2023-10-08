import { Accordion, AccordionItem } from "@nextui-org/react";

export default function acordeonInfo() {
  return (
    <div className="w-4/5 font-bold drop-shadow-glow">
      <Accordion variant="shadow" selectionMode="multiple">
        <AccordionItem key="1" aria-label="INTERESES" title="INTERESES">
          <p className="font-normal text-foreground">
            Fundamentalmente estoy interesado en el desarrollo web fullstack y
            me gustaría también aprender sobre el desarrollo de aplicaciones
            para dispositivos móviles, tanto para Android como para iOS
          </p>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="TECNOLOGÍAS CONOCIDAS"
          title="TECNOLOGÍAS CONOCIDAS"
        >
          <p className="font-normal text-foreground">
            Algunas de las tecnologías con las que he trabajado tanto en mi
            formación académica como autodidacta son: MariaDB, Git, Java, C,
            Python, JavaScript, React, Next.js, Node.js, TailwindCSS...
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
