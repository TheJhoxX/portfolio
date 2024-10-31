"use client";
import ProgressBar from "./ProgressBar";

const image: React.ReactElement = (
  <img
    src="/imagen-sugus.png"
    className="h-full w-auto rounded-xl md:w-full md:h-auto"
    alt="Project image"
  />
);

const projectTitle: React.ReactElement = (
  <p className=" text-pretty text-center w-full font-semibold text-4xl md:text-5xl overflow-ellipsis line-clamp-3 md:line-clamp-4">
    SUGUSUVa WebSite
  </p>
);

const ProjectDescription: React.FC = () => {
  return (
    <div className="w-full h-full max-h-full overflow-y-auto p-4 md:col-span-2 rounded-xl">
      <p className="w-full max-h-full h-full break-words text-pretty text-justify bg-scroll-gradient bg-clip-text">
        Esto sería un texto de ejemplo, donde hay un overflow cuando parece que
        Esto sería un texto de ejemplo, donde hay un overflow cuando parece que
        que Esto sería un texto de ejemplo, donde hay un overflow cuando parece
        que de ejemplo, donde hay un overflow cuando par ece que Esto sería un
        sería un texto de ejemplo, donde hay un ove Esto sería un texto de
        ejemplo, donde hay un overflow cuando parece que Esto sería un texto de
        ejemplo, donde hay un overflow cuando parece que que Esto sería un texto
        de ejemplo, donde hay un overflow cuando parece que de ejemplo, donde
        hay un overflow cuando parece que Esto sería un sería un texto de
        ejemplo, donde hay un ove Esto sería un texto de ejemplo, donde hay un
        overflow cuando parece que Esto sería un texto de ejemplo, donde hay un
        overflow cuando parece que que Esto sería un texto de ejemplo, donde hay
        rflow cuando parece que Esto sería un sería un texto de ejemplo, to
        sería un texto de ejemplo, donde hay un overflow cuando parece que Esto
        sería un texto de ejemplo, donde hay un overflow cuando parece que que
        Esto sería un texto de ejemplo, donde hay un overflow cuando parece que
        de ejemplo, donde hay un overflow cuando par ece que Esto sería un sería
        un texto de ejemplo, donde un overflow cuando parece que de ejemplo,
        donde hay un
      </p>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="w-full h-screen max-h-screen flex flex-col items-center justify-start md:justify-center">
      <div className="w-11/12 p-4 md:p-8 grid grid-cols-1 grid-rows-[1fr_1fr_2fr_0.5fr] h-full place-items-center gap-8 md:w-4/5 md:grid md:grid-cols-2 md:grid-rows-[1fr_2fr_0.5fr]">
        {image}
        {projectTitle}
        <ProjectDescription />
        <div className="w-full flex items-center md:col-span-2">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}
