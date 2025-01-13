"use client";
import SocialAndOccupation from "./components/SocialAndOccupation";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Section } from "@/utils/Section";
import ObservableElement from "./components/ObservableElement";

export default function Home() {
  const [section, setSection] = useState(Section.Home);

  return (
    <div
      className={`h-screen bg-pattern overflow-y-auto snap-y scroll-smooth font-sf`}
    >
      <ObservableElement
        animation=""
        onIntersect={() => setSection(Section.Home)}
      >
        <SocialAndOccupation />
      </ObservableElement>
      <ObservableElement
        animation=""
        onIntersect={() => setSection(Section.Projects)}
      >
        <Projects />
      </ObservableElement>
      <ObservableElement
        animation=""
        onIntersect={() => setSection(Section.AboutMe)}
      >
        <AboutMe />
      </ObservableElement>
      <NavBar activeSection={section} />
    </div>
  );
}
