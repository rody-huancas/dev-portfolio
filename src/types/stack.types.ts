import type { IconType } from "react-icons";

export type TechGroupId = "frontend" | "backend" | "mobileData";

export interface ITech {
  name        : string;
  icon        : IconType;
  color       : string;
  lightColor ?: string;
  iconScale  ?: number;
}

export interface ITechGroup {
  id          : TechGroupId;
  technologies: ITech[];
}
