"use client";
import { ITooltip } from "@/utils/ITooltip";
import { useState } from "react";

export default function Tooltip({ children, text }: ITooltip) {
  const [isHovered, setIsHovered] = useState(false);
  const [animation, setAnimation] = useState("tooltip-grow");

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimation("tooltip-grow");
  };

  const handleMouseLeave = () => {
    setAnimation("tooltip-shrink");
    setTimeout(() => setIsHovered(false), 100);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && (
        <p
          className={`absolute z-20 text-background dark:text-foreground text-sm rounded-full bg-primary px-2 py-1 w-fit whitespace-nowrap
            left-full bottom-full translate-x-2 -translate-y-2
            ${animation}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
