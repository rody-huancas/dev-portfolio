import type { Metadata } from "next";
import Title from "@/components/Title";
import CardProject from "@/components/ProjectsSection/CardProject";
import projectsData from "@/data/projects-data.json";
import { IProject } from "@/types/projects.types";

export const metadata: Metadata = {
  title      : "Proyectos | Rody Huancas",
  description: "Explora mi portafolio de proyectos: desde herramientas de análisis de datos hasta plataformas de economía colaborativa. Cada proyecto refleja mi pasión por la innovación y el desarrollo de soluciones digitales efectivas.",
  openGraph  : {
    title      : "Portafolio de Proyectos - Rody Huancas",
    description: "Casos de estudio y aplicaciones reales desarrolladas con tecnologías modernas.",
    url        : "https://rody-huancas.dev/projects",
    type       : "website",
  },
  alternates: {
    canonical: "https://rody-huancas.dev/projects",
  }
};

const ProjectsPage = () => {
  const projects = projectsData.projects as IProject[];

  return (
    <section className="animate-in fade-in duration-700 pt-16 md:pt-0">
      <h1 className="sr-only">
        Portafolio de Proyectos de Desarrollo Web - Rody Huancas
      </h1>

      <Title
        label="Portafolio"
        title="Todos mis"
        subtitle="Proyectos"
        level="h1"
      />

      <div className="flex flex-col gap-16 mt-12">
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
