import { IconType } from "./IconType";

export interface IIconParamters {
  iconType: IconType;
  link?: string;
  width?: number;
  height?: number;
  inversedColor?: boolean;
  onClick?: () => void;
  cursorPointer?: boolean;
}
