"use client";

import { ITooltip } from "@/utils/ITooltip";
import { useState, useRef, useEffect, useCallback } from "react";

export default function Tooltip({ children, text }: ITooltip) {
  const [isHovered, setIsHovered] = useState(false);
  const [animation, setAnimation] = useState("tooltip-grow");
  const tooltipRef = useRef<HTMLParagraphElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({
    left: "100%",
    top: "auto",
    bottom: "100%",
    transform: "translateX(0.5rem) translateY(-0.5rem)",
  });

  // Cálculo de posición del tooltip
  const calculatePosition = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const updatedStyle: React.CSSProperties = { ...tooltipStyle };

    // Check horizontal overflow
    if (containerRect.right + 200 > viewportWidth) {
      updatedStyle.left = "auto";
      updatedStyle.right = "100%";
      updatedStyle.transform = "translateX(-0.5rem)";
    } else {
      updatedStyle.left = "100%";
      updatedStyle.right = "auto";
      updatedStyle.transform = "translateX(0.5rem)";
    }

    // Check vertical overflow
    if (containerRect.top - 50 < 0) {
      updatedStyle.top = "100%";
      updatedStyle.bottom = "auto";
      updatedStyle.transform += " translateY(0.5rem)";
    } else {
      updatedStyle.top = "auto";
      updatedStyle.bottom = "100%";
      updatedStyle.transform += " translateY(-0.5rem)";
    }

    setTooltipStyle(updatedStyle);
  }, [tooltipStyle]);

  // Handle limit cases
  const handleLimitCases = useCallback(() => {
    const tooltip = tooltipRef.current;
    const container = containerRef.current;
    if (!tooltip || !container) return;

    const tooltipRect = tooltip.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Hide in case its out of the container
    if (
      tooltipRect.right < containerRect.left ||
      tooltipRect.left > containerRect.right ||
      tooltipRect.bottom < containerRect.top ||
      tooltipRect.top > containerRect.bottom
    ) {
      setIsHovered(false);
    }
  }, []);

  const handleMouseEnter = () => {
    calculatePosition();
    setIsHovered(true);
    setAnimation("tooltip-grow");
  };

  const handleMouseLeave = () => {
    setAnimation("tooltip-shrink");
    setTimeout(() => setIsHovered(false), 300); // Shrink animation duration
  };

  useEffect(() => {
    if (isHovered) {
      calculatePosition();
    }

    window.addEventListener("scroll", handleLimitCases);
    return () => {
      window.removeEventListener("scroll", handleLimitCases);
    };
  }, [isHovered, handleLimitCases]);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && (
        <p
          ref={tooltipRef}
          style={tooltipStyle}
          className={`absolute z-20 text-background dark:text-foreground text-sm rounded-full bg-primary px-2 py-1 w-fit whitespace-nowrap ${animation}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
