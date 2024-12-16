import { Section } from "@/utils/Section";
import Icon from "./Icon";
import { IconType } from "@/utils/IconType";

export default function AboutMe() {
  const personalPhoto: React.ReactElement = (
    <img
      src="/orla-1x1.webp"
      className="w-auto sm:max-h-72 md:max-h-96 rounded-xl "
      alt="Project image"
    />
  );

  const introductionAboutMe: React.ReactElement = (
    <p className="text-pretty w-full rounded-xl">
      I am a passionate frontend developer, always eager to learn about the
      latest technologies.
    </p>
  );

  const projectsKindDescription: React.ReactElement = (
    <p className="text-pretty w-full rounded-xl">
      Over the past few years, I have worked on a variety of academic, personal,
      and professional projects. These have ranged from high-level development
      using modern frameworks like Next.js to low-level programming with C and
      C++. This diverse experience has not only broadened my knowledge but also
      helped me discover which technologies and fields I enjoy the most.
    </p>
  );

  const actualInterest: React.ReactElement = (
    <p className="text-pretty w-full rounded-xl">
      Currently, I am particularly focused on web development, especially
      frontend, using technologies like Next.js, TailwindCSS, and Flutter. I am
      also open to learning more about mobile development to further expand my
      skill set. Currently, I am particularly focused on web development,
      especially frontend, using technologies like Next.js, TailwindCSS, and
      Flutter. I am also open to learning more about mobile development to
      further expand my skill set.
    </p>
  );

  const techList: IconType[] = [
    IconType.NextJS,
    IconType.TypeScript,
    IconType.TailwindCSS,
    IconType.SQLDeveloper,
    IconType.NodeJS,
    IconType.Java,
    IconType.DotNet,
    IconType.C,
  ];
  const techStack: React.ReactElement = (
    <div className="grid grid-cols-2 md:grid-rows-1 md:grid-cols- md:col-span-2 h-fit items-center justify-center gap-2 flex-wrap">
      {techList.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col bg-foreground items-center justify-center rounded-xl p-4"
        >
          <Icon width={16} height={16} iconType={tech} inversedColor />
          <p className=" text-background  text-sm">{tech}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div
      id={Section.AboutMe.toString()}
      className="w-full bg-pattern snap-center h-screen max-h-screen flex flex-col items-center justify-start md:justify-center"
    >
      <div className="w-11/12 lg:w-9/12 max-h-full p-4 grid place-items-center grid-cols-1 grid-rows-[1fr_2fr_1fr] md:grid-cols-2 md:grid-rows-[1fr_0.5fr] rounded-xl gap-4">
        {personalPhoto}
        <div className="max-h-full md:max-h-96 w-full backdrop-blur-sm overflow-y-auto p-4 gap-2 rounded-xl flex flex-col items-center justify-start md:justify-start">
          {introductionAboutMe}
          {projectsKindDescription}
          {actualInterest}
        </div>
        {techStack}
      </div>
    </div>
  );
}
