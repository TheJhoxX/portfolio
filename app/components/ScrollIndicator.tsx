"use client";

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

interface ScrollIndicatorProps {
  names: string[];
  selectedProject: number;
  onProjectSelect: (index: number) => void;
}

export default function ScrollIndicator({
  names,
  selectedProject,
  onProjectSelect,
}: ScrollIndicatorProps) {
  return (
    <div className="w-full h-fit p-2 flex items-center justify-center gap-4">
      {names.map((name, index) => (
        <ScrollPart
          key={index}
          name={name}
          isSelected={index === selectedProject}
          onClick={() => onProjectSelect(index)}
        />
      ))}
    </div>
  );
}
