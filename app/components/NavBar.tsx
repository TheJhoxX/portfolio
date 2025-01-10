"use client";

import { Section } from "@/utils/Section";
import Tooltip from "./Tooltip";
import Icon from "./Icon";
import { IconType } from "@/utils/IconType";
import { useGlobalContext } from "@/context/GlobalProvider";
import { getLabels } from "@/utils/Localization";
import { useEffect, useRef, useState } from "react";
import { Language } from "@/utils/Language";

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

  const { language, setLanguage } = useGlobalContext();
  const labels = getLabels(language);

  const updateMarkerStyle = () => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(
        `a[data-section="${activeSection}"]`
      ) as HTMLElement;

      if (activeLink) {
        const { offsetLeft, offsetWidth, offsetHeight } = activeLink;
        setMarkerStyle({
          left: offsetLeft,
          width: offsetWidth,
          height: offsetHeight,
        });
      }
    }
  };

  useEffect(() => {
    updateMarkerStyle();
  }, [activeSection, language]);

  const isSelected = (lang: Language) => lang === language;

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
            activeSection === Section.Home
              ? "text-background"
              : "text-foreground"
          }`}
        >
          {labels.navbar.home}
        </a>
        <a
          href={`#${Section.Projects.toString()}`}
          data-section={Section.Projects}
          className={`relative rounded-full px-2 py-1 transition-all duration-300 ${
            activeSection === Section.Projects
              ? "text-background"
              : "text-foreground"
          }`}
        >
          {labels.navbar.projects}
        </a>
        <a
          href={`#${Section.AboutMe.toString()}`}
          data-section={Section.AboutMe}
          className={`relative rounded-full px-2 py-1 transition-all duration-300 ${
            activeSection === Section.AboutMe
              ? "text-background"
              : "text-foreground"
          }`}
        >
          {labels.navbar.aboutMe}
        </a>
        <div className="flex items-center justify-center gap-2">
          <Tooltip text={labels.navbar.germanTooltip}>
            <Icon
              className={`
                ${
                  isSelected(Language.German)
                    ? "cursor-pointer shadow-md rounded-full shadow-primary"
                    : ""
                } cursor-pointer`}
              width="2rem"
              height="2rem"
              iconType={IconType.GermanFlag}
              onClick={() => setLanguage(Language.German)}
            />
          </Tooltip>
          <Tooltip text={labels.navbar.spanishTooltip}>
            <Icon
              className={`
                ${
                  isSelected(Language.Spanish)
                    ? "cursor-pointer shadow-md rounded-full shadow-primary"
                    : ""
                } cursor-pointer`}
              width="2rem"
              height="2rem"
              iconType={IconType.SpanishFlag}
              onClick={() => setLanguage(Language.Spanish)}
            />
          </Tooltip>
          <Tooltip text={labels.navbar.englishTooltip}>
            <Icon
              className={`
                ${
                  isSelected(Language.English)
                    ? "cursor-pointer shadow-md rounded-full shadow-primary"
                    : ""
                } cursor-pointer`}
              width="2rem"
              height="2rem"
              iconType={IconType.UKFlag}
              onClick={() => setLanguage(Language.English)}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
