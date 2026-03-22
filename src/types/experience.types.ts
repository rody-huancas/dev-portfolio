export interface IExperienceRole {
  position    : string;
  period      : string;
  description : string[];
  technologies: string[];
}

export interface IExperience {
  id            : string;
  company       : string;
  websiteUrl    : string;
  certificateUrl: string;
  roles         : IExperienceRole[];
}
