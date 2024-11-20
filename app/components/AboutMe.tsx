export default function AboutMe() {
  const personalPhoto: React.ReactElement = (
    <img
      src="/orla-1x1.webp"
      className="w-full bg-red-500 lg:max-h-96 lg:w-auto h-auto rounded-xl "
      alt="Project image"
    />
  );

  const aboutMeTitle: React.ReactElement = (
    <p className="text-pretty text-center font-semibold text-5xl md:text-6xl">
      About me
    </p>
  );

  const introductionAboutMe: React.ReactElement = (
    <p className="text-pretty w-full text-justify md:max-h-96 rounded-xl">
      I am a passionate frontend developer, always eager to learn about the
      latest technologies.
    </p>
  );

  const projectsKindDescription: React.ReactElement = (
    <p className="text-pretty w-full text-justify rounded-xl">
      Over the past few years, I have worked on a variety of academic, personal,
      and professional projects. These have ranged from high-level development
      using modern frameworks like Next.js to low-level programming with C and
      C++. This diverse experience has not only broadened my knowledge but also
      helped me discover which technologies and fields I enjoy the most.
    </p>
  );

  const actualInterest: React.ReactElement = (
    <p className="text-pretty w-full text-justify rounded-xl">
      Currently, I am particularly focused on web development, especially
      frontend, using technologies like Next.js, TailwindCSS, and Flutter. I am
      also open to learning more about mobile development to further expand my
      skill set. Currently, I am particularly focused on web development,
      especially frontend, using technologies like Next.js, TailwindCSS, and
      Flutter. I am also open to learning more about mobile development to
      further expand my skill set.
    </p>
  );

  const techList: string[] = [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "SQL",
    "Node.js",
    "Java",
    ".NET",
    "C",
  ];
  const techStack: React.ReactElement = (
    <div className="flex md:col-span-2 w-full h-full items-center justify-center flex-wrap">
      {techList.map((tech, index) => (
        <p
          className="bg-foreground text-background rounded-full text-sm m-2 px-4 py-1"
          key={index}
        >
          {tech}
        </p>
      ))}
    </div>
  );

  return (
    <div className="w-full snap-center h-screen max-h-screen flex flex-col items-center justify-start md:justify-center bg-pattern ">
      <div className="w-11/12 lg:w-9/12 bg-background max-h-full p-4 grid place-items-center grid-cols-1 grid-rows-[1fr_2fr_1fr] md:grid-cols-2 md:grid-rows-[1fr_0.5fr]  gap-6">
        {personalPhoto}
        <div className="max-h-full w-full overflow-y-auto p-4 gap-2 rounded-xl flex flex-col items-center justify-start md:justify-center">
          {introductionAboutMe}
          {projectsKindDescription}
          {actualInterest}
        </div>
        {techStack}
      </div>
    </div>
  );
}
