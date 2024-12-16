"use client";

import Icon from "./Icon";
import ScrollIndicator from "./ScrollIndicator";
import Tooltip from "./Tooltip";
import { Section } from "@/utils/Section";
import { projectList } from "@/utils/projectList";
import { useState } from "react";
import { IProject } from "@/utils/IProject";
import labels from "@/data/labels.json";
import { IconType } from "@/utils/IconType";

const { en, es, de } = labels;

const projectTitle = (title: string) => {
  return (
    <div className="relative w-full h-full hover:backdrop-blur-0 transition-all duration-300 flex items-end p-2">
      <p className="font-bold text-shadow text-background dark:text-foreground text-5xl text-pretty">
        {title}
      </p>
    </div>
  );
};

const projectDescription = (description: string) => {
  return (
    <div className="w-full h-44 overflow-y-auto p-2">
      <p className="text-pretty">{description}</p>
    </div>
  );
};

const techStack = (technologies: IconType[]) => {
  return (
    <div className="w-full bg-background-accent rounded-xl flex items-center p-2 gap-3">
      {technologies.map((tech, index) => (
        <Tooltip key={index} text={tech.toString()}>
          <Icon iconType={tech} />
        </Tooltip>
      ))}
    </div>
  );
};

export function Project({ project }: { project: IProject }) {
  return (
    <div className="flex rounded-xl flex-col w-full lg:w-3/4 max-h-full justify-start items-center p-2">
      {/* Contenedor con relación 16:9 */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden flex justify-center bg-background-accent items-center p-2">
        <img
          src={project.image}
          alt={project.label}
          className="max-w-full max-h-full object-contain rounded-xl"
        />
        {/* Título sobre la imagen */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent text-background-accent dark:text-foreground p-4">
          <p className="font-bold text-5xl">{project.title.es}</p>
        </div>
      </div>

      {projectDescription(project.description.es)}

      {/* Tecnologías */}
      {techStack(project.technologies)}
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  const project = projectList[selectedProject];

  return (
    <div
      id={Section.Projects.toString()}
      className="w-full snap-center h-screen max-h-screen flex flex-col items-center justify-center md:justify-center p-4"
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
