import { FiExternalLink, FiFileText } from "react-icons/fi";
import { IExperience } from ".";

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
          {experience.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-[11px] uppercase tracking-wider text-white/80 bg-button/30 px-3 py-1 rounded-md border border-button/50"
            >
              {tech}
            </span>
          ))}
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

          <a
            href={experience.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
          >
            <FiFileText className="text-status" size={16} />
            <span>Constancia</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default CardExperience;
