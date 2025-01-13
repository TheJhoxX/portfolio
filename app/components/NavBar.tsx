"use client";

import { useState, useEffect, useRef } from "react";
import { Section } from "@/utils/Section";
import Tooltip from "./Tooltip";
import Icon from "./Icon";
import { IconType } from "@/utils/IconType";
import { useGlobalContext } from "@/context/GlobalProvider";
import { getLabels } from "@/utils/Localization";
import { Language } from "@/utils/Language";

interface NavBarProps {
  activeSection: Section;
}

export default function NavBar({ activeSection }: NavBarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const { language, setLanguage } = useGlobalContext();
  const labels = getLabels(language);

  // Estilo dinámico para el marcador
  const [markerStyle, setMarkerStyle] = useState({
    left: 0,
    width: 0,
    height: 0,
  });

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

    const handleResize = () => {
      updateMarkerStyle();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSection, language]);

  return (
    <div
      className={`absolute bottom-4 transition-all duration-300 ease-in-out ${
        isCollapsed ? "right-4 translate-x-0" : "right-1/2 translate-x-1/2"
      }`}
    >
      <div
        ref={navRef}
        className={`relative flex items-center gap-2 rounded-full text-sm text-nowrap transition-all  duration-300 ${
          !isCollapsed
            ? "shadow-md shadow-foreground backdrop-blur-lg py-2 px-4 bg-transparent"
            : ""
        }`}
      >
        {!isCollapsed && (
          <div className="flex items-center justify-between gap-2">
            {/* Marker */}
            <div
              className="absolute bg-foreground rounded-full transition-all duration-300"
              style={{ ...markerStyle }}
            ></div>

            {/* Links */}
            <a
              href={`#${Section.Home.toString()}`}
              data-section={Section.Home}
              className={`relative rounded-full px-2 py-1 ${
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
              className={`relative rounded-full px-2 py-1 ${
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
              className={`relative rounded-full px-2 py-1 ${
                activeSection === Section.AboutMe
                  ? "text-background"
                  : "text-foreground"
              }`}
            >
              {labels.navbar.aboutMe}
            </a>

            {/* Language Selection */}
            <div className="flex items-center justify-center gap-2">
              <Tooltip text={labels.navbar.germanTooltip}>
                <Icon
                  className={`cursor-pointer rounded-full transition-all duration-300 ${
                    language === Language.German
                      ? "shadow-lg shadow-primary"
                      : ""
                  }`}
                  iconType={IconType.GermanFlag}
                  onClick={() => setLanguage(Language.German)}
                />
              </Tooltip>
              <Tooltip text={labels.navbar.spanishTooltip}>
                <Icon
                  className={`cursor-pointer rounded-full transition-all duration-300 ${
                    language === Language.Spanish
                      ? "shadow-lg shadow-primary"
                      : ""
                  }`}
                  iconType={IconType.SpanishFlag}
                  onClick={() => setLanguage(Language.Spanish)}
                />
              </Tooltip>
              <Tooltip text={labels.navbar.englishTooltip}>
                <Icon
                  className={`cursor-pointer rounded-full transition-all duration-300 ${
                    language === Language.English
                      ? "shadow-lg shadow-primary"
                      : ""
                  }`}
                  iconType={IconType.UKFlag}
                  onClick={() => setLanguage(Language.English)}
                />
              </Tooltip>
            </div>
          </div>
        )}
        {/* Expand and collapse Button */}
        <div className="cursor-pointer flex items-center justify-center">
          <Tooltip
            text={
              isCollapsed
                ? labels.navbar.expandNavbar
                : labels.navbar.collapseNavbar
            }
          >
            <Icon
              iconType={isCollapsed ? IconType.Menu : IconType.Close}
              onClick={() => {
                setIsCollapsed(!isCollapsed);
              }}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
