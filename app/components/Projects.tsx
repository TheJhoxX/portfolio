import ProgressBar from "./ProgressBar";

const image: React.ReactElement = (
  <div className="flex h-full max-h-full w-full items-center justify-center rounded-xl ">
    <img
      src="/imagen-sugus.png"
      className="h-full w-auto rounded-xl md:h-full md:w-auto"
      alt="Project image"
    />
  </div>
);

const projectTitle: React.ReactElement = (
  <p className="font-geistMono text-pretty text-center w-full font-semibold text-4xl md:text-5xl overflow-ellipsis line-clamp-3 md:line-clamp-4">
    SUGUSUVa WebSite2
  </p>
);

//TODO  ver que hago con el overflow horizontal porque teóricamente es lo que falta
const projectDescription: React.ReactElement = (
  <div className="w-full h-full max-h-full overflow-y-auto p-4 md:col-span-2">
    <p className="w-full max-h-full h-full break-words text-pretty text-justify">
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
      que Esto sería un sería un texto de ejemplo, to sería un texto de ejemplo,
      donde hay un overflow cuando parece que Esto sería un texto de ejemplo,
      donde hay un overflow cuando parece que que Esto sería un texto de
      ejemplo, donde hay un overflow cuando parece que de ejemplo, donde hay un
      overflow cuando par ece que Esto sería un sería un texto de ejemplo, donde
      un overflow cuando parece que de ejemplo, donde hay un overflow cuando
      parece que Esto sería un sería un texto de ejeun ove
    </p>
  </div>
);

export default function Projects() {
  return (
    <div className="w-full h-screen max-h-screen flex flex-col items-center justify-start">
      <div className="w-11/12 p-4 md:p-8 grid grid-cols-1 grid-rows-[1fr_1fr_2fr_0.5fr] h-full place-items-center gap-8 md:w-4/5 md:grid md:grid-cols-2 md:grid-rows-[1fr_2fr_0.5fr]">
        {image}
        {projectTitle}
        {projectDescription}
        <div className="w-full flex items-center md:col-span-2">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}
