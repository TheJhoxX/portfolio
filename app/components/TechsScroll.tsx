import { IconType } from "@/utils/IconType";
import Icon from "./Icon";

export default function TechsScroll() {
  const icons = [
    IconType.C,
    IconType.DotNet,
    IconType.CSS,
    IconType.HTML,
    IconType.NextJS,
    IconType.TailwindCSS,
    IconType.Java,
    IconType.SQLDeveloper,
    IconType.NodeJS,
    IconType.TypeScript,
    IconType.JavaScript,
  ];

  return (
    <div className="-z-10 w-11/12 absolute top-1/2 -translate-y-1/2 inline-flex flex-nowrap overflow-hidden mask-horizontal-gradient">
      {[...Array(2)].map((_, listIndex) => (
        <ul
          key={`list-${listIndex}`}
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          {icons.map((icon, index) => (
            <li
              key={`icon-${listIndex}-${index}`}
              className="flex flex-col items-center justify-center"
            >
              <Icon
                iconType={icon}
                width="7rem"
                height="7rem"
                className="grayscale opacity-40"
              />
              <p className="grayscale opacity-40">{icon.toString()}</p>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
