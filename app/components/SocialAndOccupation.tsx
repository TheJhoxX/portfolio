import GlassContainer from "./GlassContainer";
import Icon from "./Icon";
import { IconType } from "@/utils/IconType";
import Tooltip from "@/app/components/Tooltip";

export default function SocialAndOccupation() {
  const actualWorkAndSocial: React.ReactElement = (
    <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-start h-full gap-2">
      {/* Actual work */}
      <GlassContainer>
        <div className="w-full text-center font-light flex items-center justify-between px-2 gap-2">
          <p>Software Developer at GMV</p>
          <p>Software Engineering Student</p>
        </div>
      </GlassContainer>
      {/* Contact */}
    </div>
  );

  const nameTitle: React.ReactElement = (
    <p className="w-full text-8xl md:text-9xl font-bold text-center">
      Víctor Jorge Sibaja
    </p>
  );

  return (
    <div className="w-full snap-center h-screen flex flex-col md:flex-row items-center justify-center bg-pattern">
      {/* Name and occupation container */}
      <div
        className={`flex flex-col h-fit items-center justify-center md:justify-between gap-8 w-9/12 md:w-3/5`}
      >
        {nameTitle}
        <div className="flex items-center justify-center w-9/12 md:w-1/5 gap-4">
          <Tooltip text="My LinkedIn">
            <Icon
              link="https://www.linkedin.com/in/v%C3%ADctor-jorge-sibaja-156899196/"
              iconType={IconType.Linkedin}
            />
          </Tooltip>
          <Tooltip text="My Github">
            <Icon
              link="https://github.com/TheJhoxX"
              iconType={IconType.Github}
            />
          </Tooltip>
          <Tooltip text="Mail me">
            <Icon
              link="mailto:victorjorgesibaja@gmail.com"
              iconType={IconType.Web}
            />
          </Tooltip>
        </div>
        {actualWorkAndSocial}
      </div>
    </div>
  );
}
