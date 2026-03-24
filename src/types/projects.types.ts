import type { LocalizedText } from "@/types/i18n.types";

export interface IProject {
  id          : string;
  title       : string;
  description : LocalizedText;
  technologies: string[];
  githubUrl   : string;
  liveUrl     : string;
  imageUrl    : string;
  type       ?: "FrontEnd" | "BackEnd" | "FullStack";
}
