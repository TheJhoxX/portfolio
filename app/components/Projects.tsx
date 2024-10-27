import ProgressBar from "./ProgressBar";

const image: React.ReactElement = (
  <div className="flex h-44 w-full items-center justify-center rounded-xl ">
    <img
      src="/imagen-sugus.png"
      className="h-full rounded-xl md:w-full md:h-auto"
      alt="Project image"
    />
  </div>
);

const projectTitle: React.ReactElement = (
  <p className="font-geistMono text-pretty text-center w-full font-semibold text-4xl overflow-ellipsis line-clamp-3 md:line-clamp-4">
    SUGUSUVa WebSite
  </p>
);

//TODO  ver que hago con el overflow horizontal porque teóricamente es lo que falta
const projectDescription: React.ReactElement = (
  <div className="w-full h-96 overflow-y-auto p-4 md:col-span-2">
    <p className="w-full max-h-full h-full break-words text-pretty">
      Esto sería un texto de ejemplo, donde hay un overflow cuando parece que
      Esto sería un texto de ejemplo, donde hay un overflow cuando parece que
      que Esto sería un texto de ejemplo, donde hay un overflow cuando parece
      que de ejemplo, donde hay un overflow cuando par ece que Esto sería un
      sería un texto de ejemplo, donde hay un ove Esto sería un texto de
      ejemplo, donde hay un overflow cuando parece que Esto sería un texto de
      ejemplo, donde hay un overflow cuando parece que que Esto sería un texto
      de ejemplo, donde hay un overflow cuando parece que de ejemplo, donde hay
      un overflow cuando parece que Esto sería un sería un texto de ejemplo,
      donde hay un ove Esto sería un texto de ejemplo, donde hay un overflow
      cuando parece que Esto sería un texto de ejemplo, donde hay un overflow
      cuando parece que que Esto sería un texto de ejemplo, donde hay un
      overflow cuando parece que de ejemplo, donde hay un overflow cuando parece
      que Esto sería un sería un texto de ejemplo, donde hay un ove
    </p>
  </div>
);

const sectionTitle: React.ReactElement = (
  <p className=" md:w-4/5 h-fit text-5xl md:text-7xl font-geistMono font-bold bg-text-foreground-gradient bg-clip-text w-full p-4 text-transparent">
    Projects
  </p>
);

export default function Projects() {
  return (
    <div className="w-full h-screen max-h-screen flex flex-col items-center justify-start">
      {sectionTitle}
      <ProgressBar />
      <div className="w-9/12 flex flex-col items-center justify-start gap-8 md:w-4/5 p-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6 md:p-8">
        {image}
        {projectTitle}
        {projectDescription}
      </div>
    </div>
  );
}
