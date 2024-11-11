"use client";
import { ITooltip } from "@/utils/ITooltip";
import { useEffect, useRef, useState } from "react";

export default function Tooltip({ children, text }: ITooltip) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [horizontalPosition, setHorizontalPosition] = useState<
    "left" | "right"
  >("right");
  const [verticalPosition, setVerticalPosition] = useState<"top" | "bottom">(
    "top"
  );
  const [isHovered, setIsHovered] = useState(false);
  const [animation, setAnimation] = useState("tooltip-grow");

  useEffect(() => {
    const handlePosition = () => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        const quarterVerticalScreen = window.innerHeight / 4;
        const threeQuartersHorizontalScreen = (window.innerWidth * 3) / 4;

        setVerticalPosition(
          rect.top < quarterVerticalScreen ? "bottom" : "top"
        );
        setHorizontalPosition(
          rect.left < threeQuartersHorizontalScreen ? "right" : "left"
        );
      }
    };

    // Calcular posición inicial
    handlePosition();

    // Recalcular si se cambia el tamaño de la ventana o al hacer scroll
    window.addEventListener("resize", handlePosition);
    window.addEventListener("scroll", handlePosition);
    return () => {
      window.removeEventListener("resize", handlePosition);
      window.removeEventListener("scroll", handlePosition);
    };
  }, []);

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
      ref={triggerRef}
      className="group relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && (
        <p
          className={`z-20 absolute dark:text-foreground text-background-accent text-sm rounded-full bg-primary px-2 py-1 w-fit whitespace-nowrap
            ${horizontalPosition === "right" ? "left-full" : "right-full"} 
            ${verticalPosition === "top" ? "bottom-full" : "top-full"} 
            ${animation}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
