import GlassContainer from "./GlassContainer";
import Icon from "./Icon";
import { IconType } from "@/utils/IconType";
import Tooltip from "@/app/components/Tooltip";
import { Section } from "@/utils/Section";
import ObservableElement from "./ObservableElement";
import { getLabels } from "@/utils/Localization";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function Hero() {
  const { language } = useGlobalContext();
  const labels = getLabels(language);

  const actualWorkAndSocial: React.ReactElement = (
    <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-start h-full gap-2">
      {/* Actual work */}
      <ObservableElement animation="animate-occupation">
        <GlassContainer>
          <div className="w-full rounded-xl text-center font-light flex items-center justify-between px-2 gap-2">
            <h2>{labels.utils.job}</h2>
            <h2>{labels.utils.studies}</h2>
          </div>
        </GlassContainer>
      </ObservableElement>
    </div>
  );

  const nameTitle: React.ReactElement = (
    <ObservableElement animation="animate-fade-in">
      <h1 className={`w-full text-8xl md:text-9xl font-bold text-center`}>
        {labels.utils.name}
      </h1>
    </ObservableElement>
  );

  return (
    <div
      id={Section.Home.toString()}
      className="w-full snap-center h-screen flex flex-col md:flex-row items-center justify-center"
    >
      {/* Name and occupation container */}
      <div
        className={`flex flex-col h-fit items-center justify-center md:justify-between gap-8 w-9/12 md:w-3/5`}
      >
        {nameTitle}
        <div className="flex items-center justify-center w-9/12 md:w-1/5 gap-4">
          <Tooltip text="My LinkedIn">
            <ObservableElement animation="animate-fade-in">
              <Icon
                link="https://www.linkedin.com/in/v%C3%ADctor-jorge-sibaja-156899196/"
                iconType={IconType.Linkedin}
              />
            </ObservableElement>
          </Tooltip>
          <Tooltip text="My Github">
            <ObservableElement animation="animate-fade-in">
              <Icon
                link="https://github.com/TheJhoxX"
                iconType={IconType.Github}
              />
            </ObservableElement>
          </Tooltip>
          <Tooltip text="Mail me">
            <ObservableElement animation="animate-fade-in">
              <Icon
                link="mailto:victorjorgesibaja@gmail.com"
                iconType={IconType.Mail}
              />
            </ObservableElement>
          </Tooltip>
        </div>
        {actualWorkAndSocial}
      </div>
    </div>
  );
}
