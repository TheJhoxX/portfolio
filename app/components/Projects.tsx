"use client";

import Icon from "./Icon";
import ScrollIndicator from "./ScrollIndicator";
import Tooltip from "./Tooltip";
import { Section } from "@/utils/Section";
import { projectList } from "@/utils/ProjectList";
import { useState } from "react";
import { IProject } from "@/utils/IProject";
import labels from "@/data/labels.json";
import { IconType } from "@/utils/IconType";
import ObservableElement from "./ObservableElement";

const { en, es, de } = labels;

export enum AnimationDirection {
  LEFT = "animate-project-fade-in-left",
  RIGHT = "animate-project-fade-in-right",
  NONE = "animate-project-fade-in-z",
}

const calculateAnimationDirection = (
  currentIndex: number,
  previousIndex: number,
  totalProjects: number
): AnimationDirection => {
  if (currentIndex === previousIndex) return AnimationDirection.NONE;

  // Caso en el que pasamos del último al primero
  if (currentIndex === 0 && previousIndex === totalProjects - 1) {
    return AnimationDirection.RIGHT;
  }

  return currentIndex > previousIndex
    ? AnimationDirection.RIGHT
    : AnimationDirection.LEFT;
};

const projectTitle = (
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

const techStack = (technologies: IconType[], label: string) => {
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

export function Project({
  project,
  animationDirection,
}: {
  project: IProject;
  animationDirection: AnimationDirection;
}) {
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
            className="max-w-full max-h-full object-contain rounded-xl"
          />
        </ObservableElement>
        {projectTitle(project.title.es, animationDirection)}
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [animationDirection, setAnimationDirection] =
    useState<AnimationDirection>(AnimationDirection.NONE);

  const handleProjectChange = (newProjectIndex: number) => {
    const direction = calculateAnimationDirection(
      newProjectIndex,
      selectedProject,
      projectList.length
    );
    setAnimationDirection(direction);
    setSelectedProject(newProjectIndex);
  };

  const project = projectList[selectedProject];

  return (
    <div
      id={Section.Projects.toString()}
      className="w-full snap-center h-screen max-h-screen flex flex-col items-center justify-center gap-4 p-4"
    >
      {techStack(project.technologies, project.label)}

      <Project project={project} animationDirection={animationDirection} />
      {/* ScrollIndicator dinámico */}
      <div className="w-full flex items-center md:col-span-2">
        <ScrollIndicator
          names={projectList.map((project) => project.label)}
          selectedProject={selectedProject}
          onProjectSelect={handleProjectChange} // Usamos el setter personalizado
        />
      </div>
    </div>
  );
}
