import { 
  SiReact, SiTailwindcss, SiNextdotjs, SiNestjs, 
  SiNodedotjs, SiTypescript, SiPostgresql, SiDocker, 
  SiFramer, SiMysql, SiExpo, SiJavascript, 
  SiPrisma, SiRedux, SiMongodb, SiFirebase,
  SiVite
} from "react-icons/si";

export const techConfig: Record<string, { color: string; icon: any; bg: string }> = {
  "React"        : { color: "#61DAFB", icon: SiReact        , bg: "rgba(97, 218, 251, 0.05)"  },
  "React Native" : { color: "#61DAFB", icon: SiReact        , bg: "rgba(97, 218, 251, 0.05)"  },
  "Tailwind CSS" : { color: "#06B6D4", icon: SiTailwindcss  , bg: "rgba(6, 182, 212, 0.05)"   },
  "Next.js"      : { color: "#FFFFFF", icon: SiNextdotjs    , bg: "rgba(0, 0, 0, 1)"          },
  "NestJS"       : { color: "#E0234E", icon: SiNestjs       , bg: "rgba(224, 35, 78, 0.05)"   },
  "Node.js"      : { color: "#339933", icon: SiNodedotjs    , bg: "rgba(51, 153, 51, 0.05)"   },
  "TypeScript"   : { color: "#3178C6", icon: SiTypescript   , bg: "rgba(49, 120, 198, 0.05)"  },
  "JavaScript"   : { color: "#F7DF1E", icon: SiJavascript   , bg: "rgba(247, 223, 30, 0.05)"  },
  "PostgreSQL"   : { color: "#4169E1", icon: SiPostgresql   , bg: "rgba(65, 105, 225, 0.05)"  },
  "MySQL"        : { color: "#4479A1", icon: SiMysql        , bg: "rgba(68, 121, 161, 0.05)"  },
  "MongoDB"      : { color: "#47A248", icon: SiMongodb      , bg: "rgba(71, 162, 72, 0.05)"   },
  "Docker"       : { color: "#2496ED", icon: SiDocker       , bg: "rgba(36, 150, 237, 0.05)"  },
  "Framer Motion": { color: "#0055FF", icon: SiFramer       , bg: "rgba(0, 85, 255, 0.05)"    },
  "Expo"         : { color: "#FFFFFF", icon: SiExpo         , bg: "rgba(255, 255, 255, 0.05)" },
  "Prisma"       : { color: "#2D3748", icon: SiPrisma       , bg: "rgba(45, 55, 72, 0.05)"    },
  "Redux"        : { color: "#764ABC", icon: SiRedux        , bg: "rgba(118, 74, 188, 0.05)"  },
  "Firebase"     : { color: "#FFCA28", icon: SiFirebase     , bg: "rgba(255, 202, 40, 0.05)"  },
  "Vite"         : { color: "#646CFF", icon: SiVite         , bg: "rgba(100, 108, 255, 0.05)" }
};
