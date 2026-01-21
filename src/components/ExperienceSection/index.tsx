import CardExperience from "./CardExperience";

export interface IExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  websiteUrl: string;
  certificateUrl: string;
}

const experiences: IExperience[] = [
  {
    id: 1,
    company: "NTT DATA Europe & Latam",
    position: "React Native Developer",
    period: "Enero 2026 - Presente",
    description:
      "Desarrollo de aplicaciones móviles multiplataforma con React Native para proyectos de alcance internacional, aplicando principios de escalabilidad, mantenibilidad y buenas prácticas de desarrollo.",
    technologies: ["React Native", "TypeScript", "JavaScript", "Git"],
    websiteUrl: "#",
    certificateUrl: "#",
  },
  {
    id: 2,
    company: "USS - Universidad Señor de Sipán",
    position: "Analista Desarrollador",
    period: "Agosto 2024 - Diciembre 2025",
    description:
      "Optimicé consultas críticas del sistema, reduciendo los tiempos de respuesta entre un 80% y 95%. Desarrollé nuevas funcionalidades y rediseñé interfaces internas, mejorando la eficiencia operativa. Impulsé la adopción de React y TypeScript aplicando buenas prácticas y optimización de rendimiento.",
    technologies: [
      "C#",
      ".Net",
      "React",
      "TypeScript",
      "JavaScript",
      "SQL Server",
      "Git",
    ],
    websiteUrl: "#",
    certificateUrl: "#",
  },
  {
    id: 3,
    company: "Appex IA",
    position: "Desarrollador Frontend",
    period: "Enero 2025 - Octubre 2025",
    description:
      "Desarrollo de landing pages responsivas enfocadas en conversión y presencia digital. Lideré el frontend de FavorApp creando interfaces intuitivas y componentes reutilizables. Realicé mentoría y code reviews promoviendo estándares de calidad y buenas prácticas.",
    technologies: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Docker",
      "Git",
    ],
    websiteUrl: "#",
    certificateUrl: "#",
  },
  {
    id: 4,
    company: "DATEC CONSULTING SAC",
    position: "Desarrollador Full Stack",
    period: "Enero 2023 - Agosto 2024",
    description:
      "Mantenimiento y evolución de un sistema ERP, implementando nuevas funcionalidades y optimizando el rendimiento. Colaboré directamente con usuarios finales para adaptar el sistema a sus necesidades. Participé en el desarrollo de una nueva versión del ERP con enfoque en escalabilidad y mantenibilidad.",
    technologies: [
      "PHP",
      "TypeScript",
      "JavaScript",
      "React.js",
      "Node.js",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Git",
    ],
    websiteUrl: "#",
    certificateUrl: "#",
  },
];

const ExperienceSection = () => {
  return (
    <div className="w-full mt-20">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Experiencia <span className="text-hero-muted">Laboral</span>
        </h2>
        <p className="text-text-muted text-lg max-w-xl">
          Trayectoria profesional enfocada en crear soluciones digitales
          eficientes y escalables.
        </p>
      </div>

      <div className="relative">
        {experiences.map((experience) => (
          <CardExperience key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
