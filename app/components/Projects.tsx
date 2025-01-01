"use client";

import ScrollIndicator from "./ScrollIndicator";
import { Section } from "@/utils/Section";
import { getProjects } from "@/utils/Localization";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useState } from "react";
import { Project, techStack, AnimationDirection } from "./Project";

export default function Projects() {
  const { language } = useGlobalContext();
  const projects = getProjects(language);

  const [selectedProject, setSelectedProject] = useState(0);
  const [animationDirection, setAnimationDirection] =
    useState<AnimationDirection>(AnimationDirection.NONE);

  const handleProjectChange = (newProjectIndex: number) => {
    const direction =
      newProjectIndex > selectedProject
        ? AnimationDirection.RIGHT
        : AnimationDirection.LEFT;
    setAnimationDirection(direction);
    setSelectedProject(newProjectIndex);
  };

  const project = projects[selectedProject];

  return (
    <div
      id={Section.Projects.toString()}
      className="w-full snap-center h-screen max-h-screen flex flex-col items-center justify-center gap-4 p-4"
    >
      {techStack(project.technologies, project.label)}

      <Project project={project} animationDirection={animationDirection} />
      <div className="w-full flex items-center md:col-span-2">
        <ScrollIndicator
          names={projects.map((project) => project.label)}
          selectedProject={selectedProject}
          onProjectSelect={handleProjectChange}
        />
      </div>
    </div>
  );
}
