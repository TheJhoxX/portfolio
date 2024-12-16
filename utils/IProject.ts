import { IconType } from "./IconType";

export interface IProject {
  label: string;
  title: MultilingualText;
  description: MultilingualText;
  technologies: IconType[];
  image: string;
  link?: string;
  repository?: string;
}

export interface MultilingualText {
  en: string;
  es: string;
  de: string;
}
