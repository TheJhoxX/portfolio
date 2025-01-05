import { IconType } from "./IconType";

export interface IIconParamters {
  iconType: IconType;
  link?: string;
  width?: string;
  height?: string;
  inversedColor?: boolean;
  onClick?: () => void;
  cursorPointer?: boolean;
  className?: string;
}
