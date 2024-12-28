"use client";

import { Section } from "@/utils/Section";
import Tooltip from "./Tooltip";
import Icon from "./Icon";
import { IconType } from "@/utils/IconType";
import labels from "@/data/labels.json";
import { useEffect, useRef, useState } from "react";

const { en } = labels;

interface NavBarProps {
  activeSection: Section;
}

export default function NavBar({ activeSection }: NavBarProps) {
  const [markerStyle, setMarkerStyle] = useState({
    left: 0,
    width: 0,
    height: 0,
  });
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (navRef.current) {
      // Encuentra el enlace activo
      const activeLink = navRef.current.querySelector(
        `a[data-section="${activeSection}"]`
      ) as HTMLElement;

      if (activeLink) {
        const { offsetLeft, offsetWidth, offsetHeight } = activeLink;
        // Actualiza el estilo del marcador
        setMarkerStyle({
          left: offsetLeft,
          width: offsetWidth,
          height: offsetHeight,
        });
      }
    }
  }, [activeSection]);

  return (
    <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 flex items-end justify-center z-50">
      <div
        ref={navRef}
        className="relative flex items-center gap-4 rounded-full text-sm text-nowrap shadow-md shadow-foreground backdrop-blur-lg py-2 bg-transparent px-4"
      >
        <div
          className="absolute bg-foreground rounded-full transition-all duration-300"
          style={{ ...markerStyle, position: "absolute" }}
        ></div>

        <a
          href={`#${Section.Home.toString()}`}
          data-section={Section.Home}
          className={`relative rounded-full px-2 py-1 transition-all duration-300 ${
            activeSection == Section.Home
              ? "text-background"
              : "text-foreground"
          }`}
        >
          Home
        </a>
        <a
          href={`#${Section.Projects.toString()}`}
          data-section={Section.Projects}
          className={`relative rounded-full px-2 py-1 transition-all duration-300 ${
            activeSection == Section.Projects
              ? "text-background"
              : "text-foreground"
          }`}
        >
          Projects
        </a>
        <a
          href={`#${Section.AboutMe.toString()}`}
          data-section={Section.AboutMe}
          className={`relative rounded-full px-2 py-1 transition-all duration-300 ${
            activeSection == Section.AboutMe
              ? "text-background"
              : "text-foreground"
          }`}
        >
          About Me
        </a>
        <div className="flex items-center justify-center gap-2">
          <Tooltip text={en.navbar.germanTooltip}>
            <Icon width={28} height={28} iconType={IconType.GermanFlag} />
          </Tooltip>
          <Tooltip text={en.navbar.spanishTooltip}>
            <Icon width={28} height={28} iconType={IconType.SpanishFlag} />
          </Tooltip>
          <Tooltip text={en.navbar.englishTooltip}>
            <Icon width={28} height={28} iconType={IconType.UKFlag} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
