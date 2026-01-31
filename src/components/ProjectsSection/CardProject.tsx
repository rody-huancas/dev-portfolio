"use client";

import Image from "next/image";
import useThemeStore from "@/store/useThemeStore";
import { cn } from "@/utils/cn.utils";
import { techConfig } from "@/config/tech.config";
import type { IProject } from "@/types/projects.types";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const CardProject = ({ project }: { project: IProject }) => {
  const theme = useThemeStore((state) => state.theme);
  const { imageUrl, title, description, technologies, githubUrl, liveUrl, type } = project;

  const getTypeBadgeClasses = (type: "FrontEnd" | "BackEnd" | "FullStack") => {
    const baseClasses = "absolute top-5 right-5 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm z-10 border";
    
    const typeClasses = {
      FrontEnd : "bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-blue-500/20",
      BackEnd  : "bg-green-500/10 border-green-500/30 text-green-400 shadow-green-500/20",
      FullStack: "bg-purple-500/10 border-purple-500/30 text-purple-400 shadow-purple-500/20",
    };

    return cn(baseClasses, typeClasses[type]);
  };

  return (
    <article className="group relative flex flex-col lg:flex-row items-stretch bg-foreground dark:bg-white/5 border border-background/10 dark:border-foreground/10 rounded-2xl overflow-hidden hover:bg-button/15 dark:hover:bg-white/10 transition-all duration-500">
      <div className="absolute left-0 top-0 w-1 h-0 bg-status transition-all duration-700 ease-in-out group-hover:h-full z-20" />

      {type && (
        <span className={getTypeBadgeClasses(type)}>
          {type}
        </span>
      )}

      <div className="w-full lg:w-[45%] min-h-60 lg:min-h-full overflow-hidden relative">
        <Image
          src={imageUrl}
          alt={`Captura de pantalla del proyecto ${title}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 45vw"
          priority={project.id <= 2}
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="flex-1 p-8 lg:p-12 flex flex-col gap-7">
        <h3 className="text-4xl font-bold text-status leading-tight">
          {title}
        </h3>

        <p className="text-background/60 dark:text-foreground text-lg leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => {
            const config = techConfig[tech];
            if (!config) return null;

            const Icon        = config.icon;
            const activeColor = theme === "dark" ? config.color : (config.lightColor || config.color);
            const activeBg    = theme === "dark" ? `${activeColor}15` : `${activeColor}10`;

            return (
              <div
                key={tech}
                style={{ 
                  backgroundColor: activeBg, 
                  borderColor: `${activeColor}30` 
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-bold tracking-wide transition-all duration-300"
              >
                {Icon && <Icon style={{ color: activeColor }} size={18} />}
                <span style={{ color: activeColor }}>{tech}</span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-6 mt-auto pt-4 border-t border-background/10 dark:border-foreground/10">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-background/60 dark:text-foreground hover:text-background/80 dark:hover:text-foreground transition-colors group/link"
            >
              <FiGithub size={20} className="group-hover/link:text-status transition-colors" />
              <span>Código Fuente</span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-background/60 dark:text-foreground hover:text-background/80 dark:hover:text-foreground transition-colors group/link"
            >
              <FiExternalLink
                size={20}
                className="group-hover/link:text-status transition-colors"
              />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default CardProject;
