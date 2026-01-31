"use client";

import { motion } from "framer-motion";
import useThemeStore from "@/store/useThemeStore";
import { techConfig } from "@/config/tech.config";
import { IExperience } from "@/types/experience.types";
import { FiExternalLink, FiFileText } from "react-icons/fi";

interface ExperienceProps {
  experience: IExperience;
}

const CardExperience = ({ experience }: ExperienceProps) => {
  const theme = useThemeStore((state) => state.theme); // Obtenemos el tema

  return (
    <article className="group relative pl-10 pb-12 last:pb-0">
      <motion.div
        initial={{
          backgroundColor: "#707070",
          borderColor: "rgba(77, 77, 77, 0.1)",
        }}
        whileInView={{
          backgroundColor: "#22C55E",
          borderColor: "#22C55E",
        }}
        viewport={{ once: false, margin: "0% 0px -50% 0px" }}
        className="absolute -left-1.75 top-0 w-4 h-4 rounded-full border-2 bg-background dark:bg-foreground z-20 shadow-md"
      />

      <motion.div
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "0% 0px -50% 0px" }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h3 className="text-2xl font-bold text-background/80 dark:text-foreground group-hover:text-status transition-colors">
              {experience.position}
            </h3>
            <p className="text-lg text-background/60 dark:text-foreground font-medium">
              {experience.company}
            </p>
          </div>
          <span className="inline-block text-[10px] md:text-[10px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full border 
            bg-indigo-50 text-blue-500 border-blue-200 
            dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30 
            transition-colors duration-300">
            {experience.period}
          </span>
        </div>

        <p className="text-background/60 dark:text-foreground leading-relaxed text-base max-w-3xl">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => {
            const config = techConfig[tech];
            if (!config) return null;

            const Icon = config.icon;
            const activeColor = theme === "dark" ? config.color : (config.lightColor || config.color);
            const activeBg    = theme === "dark" ? `${activeColor}15` : `${activeColor}10`;

            return (
              <span
                key={techIndex}
                className="flex items-center gap-1.5 text-[11px] font-medium tracking-wider px-3 py-1.5 rounded-lg border transition-all duration-300"
                style={{
                  backgroundColor: activeBg,
                  color: activeColor,
                  borderColor: `${activeColor}30`,
                }}
              >
                {Icon && <Icon size={14} style={{ color: activeColor }} />}
                {tech}
              </span>
            );
          })}
        </div>

        <div className="flex items-center gap-6 pt-2">
          <a
            href={experience.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-background/60 dark:text-foreground hover:text-status transition-colors"
          >
            <FiExternalLink className="text-status" size={16} />
            <span>Sitio web</span>
          </a>
          {experience.certificateUrl && (
            <a
              href={experience.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-background/60 dark:text-foreground hover:text-status transition-colors"
            >
              <FiFileText className="text-status" size={16} />
              <span>Constancia</span>
            </a>
          )}
        </div>
      </motion.div>
    </article>
  );
};

export default CardExperience;
