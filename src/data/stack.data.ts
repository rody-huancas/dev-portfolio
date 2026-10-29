import { DiMsqlServer } from "react-icons/di";
import {
  SiAstro,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { ITechGroup } from "@/types/stack.types";

export const stackData: ITechGroup[] = [
  {
    id          : "frontend",
    technologies: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", lightColor: "#000000" },
      { name: "Astro", icon: SiAstro, color: "#BC52EE" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    id          : "backend",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF", lightColor: "#000000" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: ".NET", icon: SiDotnet, color: "#8B6CF0" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    id          : "mobileData",
    technologies: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#6A8EF0" },
      { name: "MySQL", icon: SiMysql, color: "#5D9BD0" },
      { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927", iconScale: 1.7 },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
];
