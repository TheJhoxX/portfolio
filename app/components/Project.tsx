"use client";

import { useState } from "react";
import ObservableElement from "./ObservableElement";
import { IconType } from "@/utils/IconType";
import Tooltip from "./Tooltip";
import Icon from "./Icon";
import { IProject } from "@/utils/IProject";
import { useGlobalContext } from "@/context/GlobalProvider";

export enum AnimationDirection {
  LEFT = "animate-project-fade-in-left",
  RIGHT = "animate-project-fade-in-right",
  NONE = "animate-project-fade-in-z",
}

export const techStack = (technologies: IconType[], label: string) => {
  return (
    <ObservableElement
      key={`tech-bar-${label}`}
      animation="animate-tech-bottom"
      className="flex w-full items-center justify-center"
    >
      <div className="bg-foreground px-2 py-1 rounded-full gap-2 flex items-center justify-center">
        {technologies.map((tech, index) => (
          <ObservableElement
            className="h-full px-1 py-1 flex items-center justify-center"
            animationDelay={index * 100 + 400}
            key={`project-${label}-${tech.toString()}`}
            animation="animate-tech-bottom"
          >
            <Tooltip text={tech.toString()}>
              <Icon inversedColor iconType={tech} />
            </Tooltip>
          </ObservableElement>
        ))}
      </div>
    </ObservableElement>
  );
};

export const projectTitle = (
  title: string,
  animationDirection: AnimationDirection
) => {
  return (
    <ObservableElement
      key={title}
      animation={animationDirection.toString()}
      className="absolute z-20 bottom-0 w-full rounded-b-xl bg-gradient-to-t from-black/60 via-black/30 to-transparent text-background-accent dark:text-foreground p-4"
    >
      <p className="font-bold text-5xl">{title}</p>
    </ObservableElement>
  );
};

export function Project({
  project,
  animationDirection,
}: {
  project: IProject;
  animationDirection: AnimationDirection;
}) {
  const { language } = useGlobalContext();
  const [showingDescription, setShowingDescription] = useState(false);
  const [iconAnimation, setIconAnimation] =
    useState<string>("animate-scale-in");

  const [descriptionAnimation, setDescriptionAnimation] =
    useState<string>("animate-scale-in");

  const handleIconClick = () => {
    setIconAnimation("animate-scale-out");
    setDescriptionAnimation("animate-desc-out");
    setTimeout(() => {
      setShowingDescription(!showingDescription);
      setIconAnimation("animate-scale-in");
      setDescriptionAnimation("animate-desc-in");
    }, 200);
  };

  return (
    <div className="flex rounded-xl bg-background-accent flex-col w-full lg:w-3/4 max-h-full justify-start items-center p-2">
      <div className="relative w-full h-half-screen md:h-three-quarter-screen rounded-xl flex justify-center items-center p-2">
        <ObservableElement
          key={`img-${project.label}`}
          animation={animationDirection.toString()}
          className="w-full h-full flex items-center justify-center"
        >
          <img
            src={project.image}
            alt={project.label}
            className="max-w-full max-h-full w-full object-contain rounded-xl"
          />
        </ObservableElement>

        <div className="absolute top-2 right-2 z-50 flex items-center justify-center pointer-events-auto">
          <div
            className={`flex cursor-pointer items-center justify-center ${iconAnimation}`}
          >
            <Icon
              iconType={showingDescription ? IconType.Close : IconType.Info}
              cursorPointer
              onClick={handleIconClick}
            />
          </div>
        </div>

        {showingDescription && (
          <div
            className={`absolute bg-black bg-opacity-40 inset-0 z-20 flex items-center justify-center p-2 rounded-xl backdrop-blur-xl pointer-events-auto ${descriptionAnimation}`}
          >
            <p className="w-3/4 max-h-full text-background dark:text-foreground overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 text-pretty">
              {project.description[language]}
            </p>
          </div>
        )}

        {!showingDescription &&
          projectTitle(project.title[language], animationDirection)}
      </div>
    </div>
  );
}
