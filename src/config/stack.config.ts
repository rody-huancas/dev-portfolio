import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMaterialdesign,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiGraphql,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiMysql,
  SiAstro,
} from "react-icons/si";
import IconReactNative from "@/components/icons/IconReactNative";

export const TECH_STACK = [
  // Languages
  { name: "JavaScript"  , icon: SiJavascript , color: "#F7DF1E", lightColor: "#F7DF1E" },
  { name: "TypeScript"  , icon: SiTypescript , color: "#3178C6", lightColor: "#3178C6" },
  { name: "PHP"         , icon: SiPhp        , color: "#777BB4", lightColor: "#777BB4" },
  { name: "C#"          , icon: TbBrandCSharp, color: "#239120", lightColor: "#239120" },

  // Frontend
  { name: "React.js"    , icon: SiReact         , color: "#61DAFB", lightColor: "#61DAFB" },
  { name: "React Native", icon: IconReactNative , color: "#61DAFB", lightColor: "#61DAFB" },
  { name: "Next.js"     , icon: SiNextdotjs     , color: "#ffffff", lightColor: "#000000" },
  { name: "Astro"       , icon: SiAstro         , color: "#ffffff", lightColor: "#FF5D01" },
  { name: "Tailwind"    , icon: SiTailwindcss   , color: "#06B6D4", lightColor: "#06B6D4" },
  { name: "Material UI" , icon: SiMaterialdesign, color: "#0081CB", lightColor: "#0081CB" },

  // Backend
  { name: "Node.js" , icon: SiNodedotjs , color: "#339933", lightColor: "#339933" },
  { name: "Express" , icon: SiExpress   , color: "#ffffff", lightColor: "#000000" },
  { name: "NestJS"  , icon: SiNestjs    , color: "#E0234E", lightColor: "#E0234E" },
  { name: "Laravel" , icon: SiLaravel   , color: "#FF2D20", lightColor: "#FF2D20" },
  { name: "GraphQL" , icon: SiGraphql   , color: "#E10098", lightColor: "#E10098" },
  { name: ".NET"    , icon: SiDotnet    , color: "#512BD4", lightColor: "#512BD4" },

  // Database
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", lightColor: "#4169E1" },
  { name: "MySQL"     , icon: SiMysql     , color: "#4479A1", lightColor: "#4479A1" },
  { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927", lightColor: "#CC2927" },
  { name: "MongoDB"   , icon: SiMongodb   , color: "#47A248", lightColor: "#47A248" },

  // DevOps
  { name: "Docker", icon: SiDocker, color: "#2496ED", lightColor: "#2496ED" },
];
