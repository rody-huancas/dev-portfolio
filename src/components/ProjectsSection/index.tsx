import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiFramer,
  SiMysql,
  SiExpo,
} from "react-icons/si";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

const techConfig: Record<string, { color: string; icon: any; bg: string }> = {
  React: { color: "#61DAFB", icon: SiReact, bg: "rgba(97, 218, 251, 0.1)" },
  "React Native": {
    color: "#61DAFB",
    icon: SiReact,
    bg: "rgba(97, 218, 251, 0.1)",
  },
  "Tailwind CSS": {
    color: "#06B6D4",
    icon: SiTailwindcss,
    bg: "rgba(6, 182, 212, 0.1)",
  },
  "Next.js": {
    color: "#FFFFFF",
    icon: SiNextdotjs,
    bg: "rgba(255, 255, 255, 0.1)",
  },
  NestJS: { color: "#E0234E", icon: SiNestjs, bg: "rgba(224, 35, 78, 0.1)" },
  "Node.js": {
    color: "#339933",
    icon: SiNodedotjs,
    bg: "rgba(51, 153, 51, 0.1)",
  },
  TypeScript: {
    color: "#3178C6",
    icon: SiTypescript,
    bg: "rgba(49, 120, 198, 0.1)",
  },
  PostgreSQL: {
    color: "#4169E1",
    icon: SiPostgresql,
    bg: "rgba(65, 105, 225, 0.1)",
  },
  MySQL: { color: "#4479A1", icon: SiMysql, bg: "rgba(68, 121, 161, 0.1)" },
  Docker: { color: "#2496ED", icon: SiDocker, bg: "rgba(36, 150, 237, 0.1)" },
  "Framer Motion": {
    color: "#0055FF",
    icon: SiFramer,
    bg: "rgba(0, 85, 255, 0.1)",
  },
  Expo: { color: "#FFFFFF", icon: SiExpo, bg: "rgba(255, 255, 255, 0.1)" },
};

const projects: Project[] = [
  {
    id: 1,
    title: "FavorApp Mobile",
    description:
      "Aplicación móvil para servicios comunitarios. Incluye chat en tiempo real, geolocalización avanzada y un sistema de reseñas para usuarios.",
    technologies: [
      "React Native",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Expo",
    ],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Enterprise ERP System v2",
    description:
      "Plataforma administrativa con dashboards dinámicos. Optimizada para manejar grandes volúmenes de datos con tiempos de respuesta menores a 200ms.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MySQL", "Docker"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-24 px-4 md:px-0">
      <div className="space-y-3">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-status"></span>
            <span className="text-status font-mono text-sm tracking-widest uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Proyectos{" "}
            <span className="text-status underline decoration-button underline-offset-8">
              Destacados
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col lg:flex-row items-stretch bg-button/10 border border-white/5 rounded-2xl overflow-hidden hover:bg-button/15 transition-all duration-500"
            >
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
                    const config = techConfig[tech] || {
                      color: "#eee",
                      icon: null,
                      bg: "rgba(255,255,255,0.05)",
                    };
                    const Icon = config.icon;
                    return (
                      <div
                        key={tech}
                        style={{
                          backgroundColor: config.bg,
                          borderColor: `${config.color}30`,
                        }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-bold tracking-wide"
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
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors group/link"
                  >
                    <FiGithub
                      size={20}
                      className="group-hover/link:text-status"
                    />
                    <span>Código Fuente</span>
                  </a>
                  <a
                    href={project.liveUrl}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
