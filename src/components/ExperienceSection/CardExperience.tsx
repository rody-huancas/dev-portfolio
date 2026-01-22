import { techConfig } from "@/config/tech.config";
import { IExperience } from "@/types/experience.types";
import { FiExternalLink, FiFileText } from "react-icons/fi";

interface Experience {
  experience: IExperience;
}

const CardExperience = ({ experience }: Experience) => {
  return (
    <article className="group relative pl-8 pb-12 last:pb-0 border-l-2 border-button transition-colors duration-500">
      <div className="absolute -left-0.5 top-0 w-0.5 h-0 bg-status transition-all duration-700 ease-in-out group-hover:h-full" />

      <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-button border-2 border-background group-hover:bg-status group-hover:scale-125 transition-all duration-300 z-10" />

      <div className="space-y-4 transform group-hover:translate-x-2 transition-transform duration-300">
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
                  borderColor    : config ? `${config.color}20` : "rgba(255,255,255,0.1)"
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

          {
            experience.certificateUrl && (
              <a
                href={experience.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
              >
                <FiFileText className="text-status" size={16} />
                <span>Constancia</span>
              </a>
            )
          }
        </div>
      </div>
    </article>
  );
};

export default CardExperience;
