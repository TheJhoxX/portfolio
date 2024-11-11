"use client";
import { IScrollIndicator } from "@/utils/IScrollIndicator";
import { useState } from "react";

interface ScrollPartProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

function ScrollPart({ name, isSelected, onClick }: ScrollPartProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-flex items-center cursor-pointer transition-all duration-300"
    >
      <div
        className={`flex items-center text-xs justify-center rounded-full transition-all duration-300 
          ${
            isSelected
              ? "bg-primary text-white px-4 py-1"
              : isHovered
              ? "bg-foreground text-background px-4 py-1"
              : "bg-foreground w-3 h-3"
          }
        `}
      >
        {(isSelected || isHovered) && (
          <span className="whitespace-nowrap transition-opacity duration-300 opacity-100">
            {name}
          </span>
        )}
      </div>
    </div>
  );
}

export default function ScrollIndicator({ names }: IScrollIndicator) {
  const [selectedProject, setSelectedProject] = useState<number | null>(0);

  return (
    <div className="w-full h-fit p-2 flex items-center justify-center gap-4">
      {names.map((name, index) => (
        <ScrollPart
          onClick={() => setSelectedProject(index)}
          isSelected={index === selectedProject}
          key={index}
          name={name}
        />
      ))}
    </div>
  );
}
