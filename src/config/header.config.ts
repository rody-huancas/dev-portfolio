import { FiEdit } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbBriefcase2, TbGridDots } from "react-icons/tb";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import type { MenuItem, SocialItem } from "@/types/header.types";

export const menuItems: MenuItem[] = [
  {
    id   : "hero",
    icon : TbGridDots,
    label: "Inicio",
    path : "/"
  },
  { 
    id   : "projects",
    icon : TbBriefcase2,
    label: "Proyectos",
    path : "/projects"
  },
  {
    id   : "about",
    icon : FiEdit,
    label: "Sobre Mí",
    path : "/#about" },
  {
    id   : "contact",
    icon : MdOutlineMarkEmailUnread,
    label: "Contacto",
    path : "/#contact",
  },
];

export const socialItems: SocialItem[] = [
  {
    id   : "github",
    icon : FaGithub,
    label: "GitHub",
    link : "https://github.com/rody-huancas",
  },
  {
    id   : "linkedin",
    icon : FaLinkedinIn,
    label: "LinkedIn",
    link : "https://www.linkedin.com/in/rody-huancas/",
  },
];
