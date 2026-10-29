import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import type { IHeroLink } from "@/types/hero.types";

export const heroLinks: IHeroLink[] = [
  {
    id        : "email",
    icon      : FiMail,
    href      : "mailto:rodyhuancas.04@gmail.com",
    isExternal: false,
  },
  {
    id        : "github",
    icon      : FaGithub,
    href      : "https://github.com/rody-huancas",
    isExternal: true,
  },
  {
    id        : "linkedin",
    icon      : FaLinkedinIn,
    href      : "https://linkedin.com/in/rody-huancas",
    isExternal: true,
  },
  {
    id        : "resume",
    icon      : FiArrowUpRight,
    isExternal: true,
  },
];

export const heroTimeline = {
  nameFirstDelay : 0.1,
  nameLastDelay  : 0.45,
  letterStagger  : 0.09,
  letterDuration : 1.1,
  brushDelay     : 1.15,
  brushDuration  : 0.5,
  tagTextDelay   : 1.55,
  introDelay     : 1.8,
  linksDelay     : 1.95,
  linksStagger   : 0.08,
  revealDuration : 0.5,
};
