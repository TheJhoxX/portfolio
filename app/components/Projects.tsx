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

const projectTitle = (title: string) => {
  return (
    <ObservableElement
      key={title}
      animation="animate-project-title-bottom"
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
      animation="animate-tech-right"
      className="absolute w-full z-10 h-full flex items-start md:items-center justify-center md:justify-end "
    >
      <div className="bg-foreground rounded-full gap-2 flex md:flex-col items-center justify-center">
        {technologies.map((tech, index) => (
          <ObservableElement
            className="h-full p-2 flex items-center justify-center"
            animationDelay={index * 100 + 200}
            key={`project-${label}-${tech.toString()}`}
            animation="animate-tech-right"
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

export function Project({ project }: { project: IProject }) {
  return (
    <div className="flex rounded-xl bg-background-accent flex-col w-full lg:w-3/4 max-h-full justify-start items-center p-2">
      <div className="relative w-full h-half-screen md:h-three-quarter-screen rounded-xl flex justify-center items-center p-2">
        <img
          src={project.image}
          alt={project.label}
          className="max-w-full max-h-full object-contain rounded-xl"
        />
        {projectTitle(project.title.es)}
        {techStack(project.technologies, project.label)}
      </div>

      {/* Tecnologías */}
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [previousSelectedProject, setPreviousSelectedProject] = useState(0);

  const project = projectList[selectedProject];
  const previousProject = projectList[previousSelectedProject];

  return (
    <div
      id={Section.Projects.toString()}
      className="w-full snap-center h-screen max-h-screen flex flex-col items-center justify-center p-4"
    >
      <Project project={project} />
      {/* ScrollIndicator dinámico */}
      <div className="w-full flex items-center md:col-span-2">
        <ScrollIndicator
          names={projectList.map((project) => project.label)}
          selectedProject={selectedProject}
          onProjectSelect={setSelectedProject}
        />
      </div>
    </div>
  );
}
