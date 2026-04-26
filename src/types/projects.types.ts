import type { LocalizedText } from "@/types/i18n.types";

export type LinkType = "website" | "repo" | "npm" | "demo";

export interface ProjectLink {
  type: LinkType;
  url: string;
}

export interface IProject {
  id          : string;
  title       : string;
  description : LocalizedText;
  technologies: string[];
  githubUrl   : string;
  liveUrl     : string;
  imageUrl    : string;
  type       ?: "FrontEnd" | "BackEnd" | "FullStack" | "Library";
  links      ?: ProjectLink[];
}
