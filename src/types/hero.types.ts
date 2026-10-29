import type { IconType } from "react-icons";

export type HeroLinkId = "email" | "github" | "linkedin" | "resume";

export interface IHeroLink {
  id         : HeroLinkId;
  icon       : IconType;
  href      ?: string;
  isExternal : boolean;
}

export interface IHeroLinkCopy {
  ariaLabel: string;
  title    : string;
  label    : string;
  url     ?: string;
}
