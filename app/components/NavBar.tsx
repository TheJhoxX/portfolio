"use client";
import { useState } from "react";
import { Section } from "@/utils/Section";
import Tooltip from "./Tooltip";
import Icon from "./Icon";
import { IconType } from "@/utils/IconType";

export default function NavBar() {
  const [actualSection, setActualSection] = useState<Section>(Section.Home);

  const changeSection: (newActualSection: Section) => void = (
    newActualSection: Section
  ) => {
    setActualSection(newActualSection);
  };

  return (
    <div className="fixed bottom-4 text-sm text-nowrap flex items-center justify-center gap-6 left-1/2 transform -translate-x-1/2 z-40 bg-transparent backdrop-blur-lg py-2 px-4 rounded-full shadow-md shadow-foreground">
      <a
        href={`#${Section.Home.toString()}`}
        onClick={() => {
          changeSection(Section.Home);
        }}
      >
        Home
      </a>
      <a
        href={`#${Section.Projects.toString()}`}
        onClick={() => {
          changeSection(Section.Projects);
        }}
      >
        Projects
      </a>
      <a
        href={`#${Section.AboutMe.toString()}`}
        onClick={() => {
          changeSection(Section.AboutMe);
        }}
      >
        About me
      </a>
      <div className="flex items-center justify-center gap-2">
        <Tooltip text={IconType.GermanFlag.toString()}>
          <Icon iconType={IconType.GermanFlag} />
        </Tooltip>
        <Tooltip text={IconType.SpanishFlag.toString()}>
          <Icon iconType={IconType.SpanishFlag} />
        </Tooltip>
        <Tooltip text={IconType.UKFlag.toString()}>
          <Icon iconType={IconType.UKFlag} />
        </Tooltip>
      </div>
    </div>
  );
}
