import GlassContainer from "./GlassContainer";
import Icon from "./Icon";
import { IconType } from "@/utils/IconType";

export default function SocialAndOccupation() {
  const actualWorkAndSocial: React.ReactElement = (
    <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-start h-full gap-2">
      {/* Actual work */}
      <GlassContainer>
        <div className="w-full text-center font-geistMono flex items-center justify-between px-2 gap-2">
          <p>Software Developer at GMV</p>
          <p>Software Engineering Student</p>
        </div>
      </GlassContainer>
      {/* Contact */}
    </div>
  );

  const nameTitle: React.ReactElement = (
    <p className="w-full text-7xl md:text-9xl font-semibold text-center font-geistMono">
      Víctor Jorge Sibaja
    </p>
  );

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center bg-pattern">
      {/* Name and occupation container */}
      <div
        className={`flex flex-col h-fit items-center justify-center md:justify-between gap-8 w-9/12 md:w-3/5`}
      >
        {nameTitle}
        <div className="flex items-center justify-center w-9/12 md:w-1/5 gap-1">
          <Icon iconType={IconType.Linkedin} />
          <Icon iconType={IconType.Github} />
          <Icon iconType={IconType.Mail} />
        </div>
        {actualWorkAndSocial}
      </div>
    </div>
  );
}
