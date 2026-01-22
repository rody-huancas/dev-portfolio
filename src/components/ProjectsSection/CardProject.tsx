import { techConfig } from "@/config/tech.config";
import type { IProject } from "@/types/projects.types";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const CardProject = ({ project }: { project: IProject }) => {
  return (
    <article className="group relative flex flex-col lg:flex-row items-stretch bg-button/10 border border-white/5 rounded-2xl overflow-hidden hover:bg-button/15 transition-all duration-500">
      <div className="absolute left-0 top-0 w-1 h-0 bg-status transition-all duration-700 ease-in-out group-hover:h-full z-20" />

      <div className="w-full lg:w-[45%] min-h-60 lg:min-h-full overflow-hidden relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="flex-1 p-8 lg:p-12 flex flex-col gap-7">
        <h3 className="text-4xl font-bold text-status leading-tight">
          {project.title}
        </h3>

        <p className="text-text-muted text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => {
            const config = techConfig[tech] || { color: "#eee", icon: null, bg: "rgba(255,255,255,0.05)" };
            const Icon   = config.icon;

            return (
              <div
                key={tech}
                style={{ backgroundColor: config.bg, borderColor: `${config.color}30` }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-bold tracking-wide transition-all"
              >
                {Icon && <Icon style={{ color: config.color }} />}
                <span style={{ color: config.color }}>{tech}</span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-6 mt-auto pt-4 border-t border-white/5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors group/link"
          >
            <FiGithub size={20} className="group-hover/link:text-status" />
            <span>Código Fuente</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors group/link"
          >
            <FiExternalLink
              size={20}
              className="group-hover/link:text-status"
            />
            <span>Demo en vivo</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default CardProject;
