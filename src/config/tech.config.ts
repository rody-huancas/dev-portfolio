import type { IconType } from "react-icons";
import IconMUI from "@/components/icons/IconMUI";
import IconGsap from "@/components/icons/IconGsap";
import IconAstro from "@/components/icons/IconAstro";
import IconCSharp from "@/components/icons/IconCSharp";
import IconNextAuth from "@/components/icons/IconNextAuth";
import IconZustand from "@/components/icons/IconZustand";
import IconReactNative from "@/components/icons/IconReactNative";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { RiLineChartLine } from "react-icons/ri";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiGraphql,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTypeorm,
  SiPrisma,
  SiDocker,
  SiGit,
  SiExpo,
  SiJest,
  SiStorybook,
  SiSupabase,
  SiReacthookform,
} from "react-icons/si";

export const techConfig: Record<string, { color: string; lightColor?: string; icon: IconType; bg: string }> = {

  // Lenguajes
  "JavaScript" : { color: "#F7DF1E", lightColor: "#EAB308", icon: SiJavascript , bg: "rgba(247, 223, 30, 0.1)"   },
  "TypeScript" : { color: "#3178C6",                        icon: SiTypescript , bg: "rgba(49, 120, 198, 0.15)"  },
  "PHP"        : { color: "#777BB4",                        icon: SiPhp        , bg: "rgba(119, 123, 180, 0.15)" },
  "C#"         : { color: "#ffffff", lightColor: "#BE72D8", icon: IconCSharp   , bg: "rgba(57, 0, 145, 0.7)"     },

  // Frontend
  "React"         : { color: "#61DAFB", lightColor: "#087EA4", icon: SiReact             , bg: "rgba(97, 218, 251, 0.15)"  },
  "React.js"      : { color: "#61DAFB", lightColor: "#087EA4", icon: SiReact             , bg: "rgba(97, 218, 251, 0.15)"  },
  "React Native"  : { color: "#61DAFB", lightColor: "#0A69DA", icon: IconReactNative     , bg: "rgba(97, 218, 251, 0.15)"  },
  "Next.js"       : { color: "#ffffff", lightColor: "#000000", icon: SiNextdotjs         , bg: "rgba(255, 255, 255, 0.1)"  },
  "Astro"         : { color: "#ffffff", lightColor: "#FF5D01", icon: IconAstro           , bg: "rgba(255, 93, 1, 0.1)"     },
  "Tailwind CSS"  : { color: "#06B6D4",                        icon: SiTailwindcss       , bg: "rgba(6, 182, 212, 0.15)"   },
  "Material UI"   : { color: "#0081CB",                        icon: IconMUI             , bg: "rgba(0, 129, 203, 0.15)"   },
  "Framer Motion" : { color: "#FEF62A", lightColor: "#d4cd00", icon: TbBrandFramerMotion , bg: "rgba(254, 246, 42, 0.1)"   },
  "GSAP"          : { color: "#88CE02",                        icon: IconGsap            , bg: "rgba(136, 206, 2, 0.15)"   },
  "Vite"          : { color: "#646CFF",                        icon: SiVite              , bg: "rgba(100, 108, 255, 0.15)" },

  // Backend
  "Node.js" : { color: "#339933",                        icon: SiNodedotjs, bg: "rgba(51, 153, 51, 0.15)"   },
  "Express" : { color: "#ffffff", lightColor: "#000000", icon: SiExpress  , bg: "rgba(255, 255, 255, 0.1)"  },
  "NestJS"  : { color: "#E0234E",                        icon: SiNestjs   , bg: "rgba(224, 35, 78, 0.1)"    },
  "Laravel" : { color: "#FF2D20",                        icon: SiLaravel  , bg: "rgba(255, 45, 32, 0.1)"    },
  "GraphQL" : { color: "#E10098",                        icon: SiGraphql  , bg: "rgba(225, 0, 152, 0.1)"    },
  ".Net"    : { color: "#ffffff", lightColor: "#5632D5", icon: SiDotnet   , bg: "rgba(81, 43, 212, 0.7)"    },

  // Base de datos
  "PostgreSQL" : { color: "#4169E1",                        icon: SiPostgresql, bg: "rgba(65, 105, 225, 0.15)"  },
  "MySQL"      : { color: "#4479A1",                        icon: SiMysql     , bg: "rgba(68, 121, 161, 0.15)"  },
  "SQL Server" : { color: "#CC2927",                        icon: DiMsqlServer, bg: "rgba(204, 41, 39, 0.15)"   },
  "MongoDB"    : { color: "#47A248",                        icon: SiMongodb   , bg: "rgba(71, 162, 72, 0.15)"   },
  "TypeORM"    : { color: "#FF6619",                        icon: SiTypeorm   , bg: "rgba(255, 102, 25, 0.1)"   },
  "Prisma ORM" : { color: "#5A67D8", lightColor: "#2D3748", icon: SiPrisma    , bg: "rgba(90, 103, 216, 0.15)"  },

  // DevOps / Herramientas
  "Docker" : { color: "#2496ED",                        icon: SiDocker, bg: "rgba(36, 150, 237, 0.15)" },
  "Git"    : { color: "#F05032",                        icon: SiGit   , bg: "rgba(240, 80, 50, 0.15)"  },
  "Expo"   : { color: "#ffffff", lightColor: "#000000", icon: SiExpo  , bg: "rgba(255, 255, 255, 0.1)" },

  // Testing
  "Jest"      : { color: "#C21325", icon: SiJest,      bg: "rgba(194, 19, 37, 0.1)"   },
  "Storybook" : { color: "#FF4785", icon: SiStorybook, bg: "rgba(255, 71, 133, 0.12)" },

  // Librerias - Utilidades
  "NextAuth"           : { color: "#ffffff", lightColor: "#8C27D9", icon: IconNextAuth   , bg: "rgba(140, 39, 217, 0.15)"  },
  "Auth.js"            : { color: "#ffffff", lightColor: "#000000", icon: SiNextdotjs    , bg: "rgba(255, 255, 255, 0.1)"  },
  "Supabase"           : { color: "#3ECF8E",                        icon: SiSupabase     , bg: "rgba(62, 207, 142, 0.15)"  },
  "Zustand"            : { color: "#ffffff", lightColor: "#43392F", icon: IconZustand    , bg: "rgba(67, 57, 47, 0.15)"    },
  "React Hook Form"    : { color: "#EC5990",                        icon: SiReacthookform, bg: "rgba(236, 89, 144, 0.15)"  },
  "Recharts"           : { color: "#22B5BF",                        icon: RiLineChartLine, bg: "rgba(34, 181, 191, 0.15)"  },
  "React Big Calendar" : { color: "#3178C6",                        icon: FaCalendarAlt  , bg: "rgba(49, 120, 198, 0.15)"  },
};
