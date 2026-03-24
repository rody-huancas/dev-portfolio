import type { LocalizedText } from "@/types/i18n.types";

export interface IExperienceRole {
  position    : LocalizedText;
  period      : LocalizedText;
  description : LocalizedText[];
  technologies: string[];
}

export interface IExperience {
  id            : string;
  company       : string;
  websiteUrl    : string;
  certificateUrl: string;
  roles         : IExperienceRole[];
}
