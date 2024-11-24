import { IconType } from "@/utils/IconType";
import Icon from "./Icon";
import ScrollIndicator from "./ScrollIndicator";
import Tooltip from "./Tooltip";
import { Section } from "@/utils/Section";

const image: React.ReactElement = (
  <div className="w-full rounded-xl h-full max-h-full flex items-center justify-center">
    <img
      src="/imagen-sugus.png"
      className="w-full h-auto  rounded-xl md:w-full md:h-auto"
      alt="Project image"
    />
  </div>
);

const directWebAccess: React.ReactElement = (
  <div className="w-full md:col-span-2 flex items-center justify-center gap-4">
    <Tooltip text={IconType.Web.toString()}>
      <Icon iconType={IconType.Web} link="https://sugusuva.es" />
    </Tooltip>
  </div>
);

const titleAndTech: React.ReactElement = (
  <div className="w-full flex flex-col items-center justify-between gap-8">
    <p className="text-pretty text-center w-full  font-semibold text-4xl md:text-5xl overflow-ellipsis line-clamp-3 md:line-clamp-4">
      SUGUSUVa WebSite
    </p>
    <div className="w-full flex items-center justify-center gap-4">
      <Tooltip text={IconType.NextJS.toString()}>
        <Icon iconType={IconType.NextJS} />
      </Tooltip>
      <Tooltip text={IconType.TypeScript.toString()}>
        <Icon iconType={IconType.TypeScript} />
      </Tooltip>
      <Tooltip text={IconType.TailwindCSS.toString()}>
        <Icon iconType={IconType.TailwindCSS} />
      </Tooltip>
    </div>
  </div>
);

const ProjectDescription: React.FC = () => {
  return (
    <div className="w-full h-full max-h-full overflow-y-auto p-4 md:col-span-2 rounded-xl">
      <p className="w-full max-h-full h-full break-words text-pretty bg-scroll-gradient bg-clip-text">
        Web para la asociación de la Universidad de Valladolid: SUGUS (Somos Un
        Grupo Universitario de ciberSeguridad). En la versión para dispositivos
        móviles se decidió no emplear 3d para no saturar la interfaz y tener una
        mejor experiencia de usuario.
      </p>
    </div>
  );
};

export default function Projects() {
  return (
    <div
      id={Section.Projects.toString()}
      className="w-full snap-center h-screen max-h-screen flex flex-col items-center justify-start md:justify-center"
    >
      <div className="w-11/12 lg:w-9/12 p-4 md:p-8 grid grid-cols-1 grid-rows-[1fr_1fr_1fr_0.5fr_0.5fr] h-full place-items-center gap-8 md:w-4/5 md:grid md:grid-cols-2 md:grid-rows-[2fr_1fr_0.5fr_0.5fr]">
        {image}
        {titleAndTech}
        <ProjectDescription />
        {directWebAccess}
        <div className="w-full flex items-center md:col-span-2">
          <ScrollIndicator
            names={["SUGUSUVa", "Todo-app", "Nested", "Caralibro", "UVash"]}
          />
        </div>
      </div>
    </div>
  );
}
