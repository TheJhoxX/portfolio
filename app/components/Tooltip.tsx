"use client";
import { ITooltip } from "@/utils/ITooltip";
import { useEffect, useRef, useState } from "react";

export default function Tooltip({ children, text }: ITooltip) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<"left" | "right">("right");
  const [isHovered, setIsHovered] = useState(false); // Controla si está en hover
  const [animation, setAnimation] = useState("tooltip-grow"); // Controla la animación actual

  useEffect(() => {
    const handlePosition = () => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        const quarterScreen = window.innerWidth / 4;
        setPosition(rect.left < quarterScreen * 3 ? "right" : "left");
      }
    };

    // Calcular posición inicial
    handlePosition();

    // Recalcular si se cambia el tamaño de la ventana
    window.addEventListener("resize", handlePosition);
    return () => window.removeEventListener("resize", handlePosition);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimation("tooltip-grow");
  };

  const handleMouseLeave = () => {
    setAnimation("tooltip-shrink");
    setTimeout(() => setIsHovered(false), 100); // Oculta después de la animación de salida (0.1s)
  };

  return (
    <div
      ref={triggerRef}
      className="group relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>{children}</div>
      {isHovered && (
        <p
          className={`z-20 absolute font-bold dark:text-foreground text-background-accent text-sm rounded-full bg-primary px-2 py-1 shadow-foreground shadow-lg w-fit whitespace-nowrap
            ${position === "right" ? "left-full" : "right-full"} -top-6
            ${animation}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
