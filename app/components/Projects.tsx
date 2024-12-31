"use client";

import ScrollIndicator from "./ScrollIndicator";
import { Section } from "@/utils/Section";
import { projectList } from "@/utils/ProjectList";
import { useState } from "react";
import {
  Project,
  techStack,
  AnimationDirection,
} from "@/app/components/Project";

export default function Projects() {
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
          onProjectSelect={handleProjectChange}
        />
      </div>
    </div>
  );
}
