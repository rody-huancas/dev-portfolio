import IconGsap from "@/components/icons/IconGsap";
import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp, TbBrandFramerMotion } from "react-icons/tb";
import { 
  SiReact, SiTailwindcss, SiNextdotjs, SiNestjs, 
  SiNodedotjs, SiTypescript, SiPostgresql, SiDocker, 
  SiMysql, SiExpo, SiJavascript, SiTypeorm, 
  SiVite, SiDotnet, SiGit, SiPhp
} from "react-icons/si";
import IconReactNative from "@/components/icons/IconReactNative";


export const techConfig: Record<string, { color: string; icon: IconType; bg: string }> = {
  "React"         : { color: "#61DAFB", icon: SiReact            , bg: "rgba(97, 218, 251, 0.15)"   },
  "React.js"      : { color: "#61DAFB", icon: SiReact            , bg: "rgba(97, 218, 251, 0.15)"   },
  "React Native"  : { color: "#61DAFB", icon: IconReactNative    , bg: "rgba(97, 218, 251, 0.15)"   },
  "TypeScript"    : { color: "#3178C6", icon: SiTypescript       , bg: "rgba(49, 120, 198, 0.15)"   },
  "JavaScript"    : { color: "#F7DF1E", icon: SiJavascript       , bg: "rgba(247, 223, 30, 0.15)"   },
  "Next.js"       : { color: "#E0E0E0", icon: SiNextdotjs        , bg: "rgba(255, 255, 255, 0.08)"  },
  "Tailwind CSS"  : { color: "#06B6D4", icon: SiTailwindcss      , bg: "rgba(6, 182, 212, 0.15)"    },
  "Node.js"       : { color: "#68A063", icon: SiNodedotjs        , bg: "rgba(104, 160, 99, 0.15)"   },
  "NestJS"        : { color: "#E0234E", icon: SiNestjs           , bg: "rgba(224, 35, 78, 0.08)"    },
  "PostgreSQL"    : { color: "#E0E0E0", icon: SiPostgresql       , bg: "rgba(65, 105, 225, 0.3)"    },
  "MySQL"         : { color: "#E0E0E0", icon: SiMysql            , bg: "rgba(68, 121, 161, 0.4)"    },
  "SQL Server"    : { color: "#E0E0E0", icon: DiMsqlServer       , bg: "rgba(204, 41, 39, 0.4)"     },
  "C#"            : { color: "#E0E0E0", icon: TbBrandCSharp      , bg: "rgba(104, 33, 122, 0.4)"    },
  ".Net"          : { color: "#E0E0E0", icon: SiDotnet           , bg: "rgba(155, 126, 222, 0.5)"   },
  "PHP"           : { color: "#8993BE", icon: SiPhp              , bg: "rgba(137, 147, 190, 0.15)"  },
  "Git"           : { color: "#F05032", icon: SiGit              , bg: "rgba(240, 80, 50, 0.15)"    },
  "Docker"        : { color: "#2496ED", icon: SiDocker           , bg: "rgba(36, 150, 237, 0.15)"   },
  "Expo"          : { color: "#E0E0E0", icon: SiExpo             , bg: "rgba(255, 255, 255, 0.08)"  },
  "Vite"          : { color: "#646CFF", icon: SiVite             , bg: "rgba(100, 108, 255, 0.15)"  },
  "TypeORM"       : { color: "#FF6619", icon: SiTypeorm          , bg: "rgba(255, 102, 25, 0.07)"   },
  "Framer Motion" : { color: "#FEF62A", icon: TbBrandFramerMotion, bg: "rgba(254, 246, 42, 0.15)"   },
  "GSAP"          : { color: "#88CE02", icon: IconGsap           , bg: "rgba(136, 206, 2, 0.15)"    },
};
