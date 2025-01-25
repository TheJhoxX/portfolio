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

const calculateMarkerStyle = (
  navRef: React.RefObject<HTMLDivElement>,
  activeSection: Section
) => {
  if (navRef.current) {
    const activeLink = navRef.current.querySelector(
      `a[data-section="${activeSection}"]`
    ) as HTMLElement;

    if (activeLink) {
      const { offsetLeft, offsetWidth, offsetHeight } = activeLink;
      return {
        left: offsetLeft,
        width: offsetWidth,
        height: offsetHeight,
      };
    }
  }
  return { left: 0, width: 0, height: 0 };
};

export default function NavBar({ activeSection }: NavBarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const expandNavRef = useRef<HTMLDivElement | null>(null);

  const { language, setLanguage } = useGlobalContext();
  const labels = getLabels(language);

  const [markerStyle, setMarkerStyle] = useState({
    left: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setMarkerStyle(calculateMarkerStyle(navRef, activeSection));

    const handleResize = () => {
      setMarkerStyle(calculateMarkerStyle(navRef, activeSection));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSection, language]);

  return (
    <div
      className={`absolute bottom-4 flex items-center transform justify-center z-50 ${
        !isCollapsed ? " translate-x-1/2 right-1/2" : "right-4"
      } `}
    >
      {!isCollapsed ? (
        <div
          ref={navRef}
          className={`bottom-4 relative animate-navbar-in flex items-center gap-2 rounded-full text-sm text-nowrap shadow-md transition-all duration-300 shadow-foreground backdrop-blur-lg py-2 px-4`}
        >
          <div className="flex items-center justify-between gap-2">
            <div
              className="absolute bg-foreground rounded-full transition-all duration-300"
              style={{ ...markerStyle }}
            ></div>

            {/* Sections */}
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
            <div className="cursor-pointer flex items-center justify-center">
              <Tooltip text={labels.navbar.expandNavbar}>
                <Icon
                  iconType={IconType.Close}
                  className="transition-all duration-300"
                  onClick={() => {
                    navRef.current?.classList.remove("animate-navbar-in");
                    navRef.current?.classList.add("animate-navbar-out");
                    setTimeout(() => {
                      setIsCollapsed(true);
                    }, 300);
                  }}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="animate-navbar-in relative cursor-pointer"
          ref={expandNavRef}
        >
          <Tooltip text={labels.navbar.expandNavbar}>
            <Icon
              iconType={IconType.Menu}
              onClick={() => {
                expandNavRef.current?.classList.add("animate-navbar-out");
                expandNavRef.current?.classList.remove("animate-navbar-in");
                setTimeout(() => {
                  setIsCollapsed(false);
                }, 300);
              }}
            />
          </Tooltip>
        </div>
      )}
    </div>
  );
}
