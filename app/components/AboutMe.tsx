"use client";

import { Section } from "@/utils/Section";
import { getAboutMeDescriptions } from "@/utils/Localization";
import { useGlobalContext } from "@/context/GlobalProvider";
import TechsScroll from "./TechsScroll";
import ScrollShadow from "./ScrollShadow";

export default function AboutMe() {
  const { language } = useGlobalContext();

  const aboutMe = getAboutMeDescriptions(language);

  const personalPhoto: React.ReactElement = (
    <img
      src="/orla-1x1.webp"
      className="md:h-full w-4/5 md:w-2/5 object-cover rounded-xl bg-background-accent z-40"
      alt="Personal photo"
    />
  );

  const introductionAboutMe: React.ReactElement = (
    <p className="text-pretty w-full rounded-xl">{aboutMe.interests}</p>
  );

  const projectsKindDescription: React.ReactElement = (
    <p className="text-pretty w-full rounded-xl">{aboutMe.projectsKind}</p>
  );

  const actualInterest: React.ReactElement = (
    <p className="text-pretty w-full rounded-xl">{aboutMe.interests}</p>
  );

  return (
    <div
      id={Section.AboutMe.toString()}
      className=" relative w-full snap-center h-screen max-h-screen flex flex-col items-center justify-center"
    >
      <TechsScroll />

      <div className="w-11/12 lg:w-9/12 h-full md:h-half-screen p-4 rounded-xl gap-4 flex flex-col md:flex-row items-center justify-center">
        {personalPhoto}
        <ScrollShadow className="max-h-full w-full overflow-y-auto p-4 gap-2 rounded-xl flex flex-col items-center justify-start md:justify-start">
          {introductionAboutMe}
          {projectsKindDescription}
          {actualInterest}
        </ScrollShadow>
      </div>
    </div>
  );
}
