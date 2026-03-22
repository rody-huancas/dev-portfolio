export interface IProject {
  id          : string;
  title       : string;
  description : string;
  technologies: string[];
  githubUrl   : string;
  liveUrl     : string;
  imageUrl    : string;
  type       ?: "FrontEnd" | "BackEnd" | "FullStack";
}
