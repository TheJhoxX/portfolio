"use client";

import { useState } from "react";
import ObservableElement from "./ObservableElement";
import { IconType } from "@/utils/IconType";
import Tooltip from "./Tooltip";
import Icon from "./Icon";
import { IProject } from "@/utils/IProject";
import { useGlobalContext } from "@/context/GlobalProvider";
import ScrollShadow from "./ScrollShadow";
import { getLabels } from "@/utils/Localization";

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
      <div className="bg-foreground p-2 rounded-full gap-2 flex items-center justify-center">
        {technologies.map((tech, index) => (
          <ObservableElement
            className="h-full p-1 flex items-center justify-center"
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
      <h1 className="font-bold md:text-5xl text-3xl">{title}</h1>
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
  const labels = getLabels(language);
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
          className="w-full h-full flex items-center justify-center rounded-xl p-2 "
        >
          <img
            src={project.image}
            alt={project.label}
            className="max-h-full object-contain rounded-xl "
          />
        </ObservableElement>

        <div className="absolute top-2 right-2 z-50 flex items-center justify-center gap-2 pointer-events-auto">
          {project.link && !showingDescription && (
            <Tooltip text={labels.utils.goToWebsite}>
              <Icon link={project.link} iconType={IconType.Web} />
            </Tooltip>
          )}
          {project.repository && !showingDescription && (
            <Tooltip text={labels.utils.goToRepository}>
              <Icon link={project.repository} iconType={IconType.Github} />
            </Tooltip>
          )}
          <div
            className={`flex items-center cursor-pointer rounded-full justify-center `}
          >
            <Tooltip text={labels.utils.showProjectDescription}>
              <Icon
                className={` ${iconAnimation}`}
                iconType={showingDescription ? IconType.Close : IconType.Info}
                onClick={handleIconClick}
                iconColor={showingDescription ? undefined : "primary"}
              />
            </Tooltip>
          </div>
        </div>

        {showingDescription && (
          <ScrollShadow
            className={`absolute bg-black bg-opacity-60 p-2 inset-0 z-20 flex items-center justify-center  rounded-xl backdrop-blur-xl pointer-events-auto ${descriptionAnimation}`}
          >
            <p
              key={`desc-${project.label}`}
              className={`w-3/4 max-h-full rounded-xl text-background dark:text-foreground text-pretty ${animationDirection.toString()}`}
            >
              {project.description[language]}
            </p>
          </ScrollShadow>
        )}

        {!showingDescription &&
          projectTitle(project.title[language], animationDirection)}
      </div>
    </div>
  );
}
