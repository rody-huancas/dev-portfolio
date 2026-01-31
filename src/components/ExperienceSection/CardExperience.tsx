"use client";

import { motion } from "framer-motion";
import { techConfig } from "@/config/tech.config";
import { IExperience } from "@/types/experience.types";
import { FiExternalLink, FiFileText } from "react-icons/fi";

interface ExperienceProps {
  experience: IExperience;
}

const CardExperience = ({ experience }: ExperienceProps) => {
  return (
    <article className="group relative pl-10 pb-12 last:pb-0">
      <motion.div
        initial={{
          backgroundColor: "#1e1e1e",
          borderColor    : "rgba(255,255,255,0.1)",
          scale          : 1,
        }}
        whileInView={{
          backgroundColor: "#22C55E",
          borderColor    : "#22C55E",
          scale          : 1,
        }}
        viewport={{ once: false, margin: "0% 0px -50% 0px" }}
        transition={{ duration: 0.3 }}
        className="absolute -left-1.75 top-0 w-4 h-4 rounded-full border-2 bg-background z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
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
            <h3 className="text-2xl font-bold text-white group-hover:text-status transition-colors">
              {experience.position}
            </h3>
            <p className="text-lg text-hero-muted font-medium">
              {experience.company}
            </p>
          </div>
          <span className="inline-block text-xs font-semibold text-text-muted bg-button/50 px-4 py-1.5 rounded-full border border-button">
            {experience.period}
          </span>
        </div>

        <p className="text-text-muted leading-relaxed text-base max-w-3xl">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, techIndex) => {
            const config = techConfig[tech];
            const Icon   = config?.icon;

            return (
              <span
                key={techIndex}
                className="flex items-center gap-1.5 text-[11px] font-medium tracking-wider px-3 py-1.5 rounded-lg border"
                style={{
                  backgroundColor: config?.bg    || "rgba(255,255,255,0.02)",
                  color          : config?.color || "#ffffff",
                  borderColor    : config ? `${config.color}20` : "rgba(255,255,255,0.1)",
                }}
              >
                {Icon && <Icon size={14} style={{ color: config.color }} />}
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
            className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
          >
            <FiExternalLink className="text-status" size={16} />
            <span>Sitio web</span>
          </a>
          {experience.certificateUrl && (
            <a
              href={experience.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
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
