import type { Metadata } from "next";
import Title from "@/components/Title";
import CardProject from "@/components/ProjectsSection/CardProject";
import projectsData from "@/data/projects-data.json";
import { projectsMetadata } from "@/seo/metadata";
import { jsonLd, projectsCollectionPageJsonLd } from "@/seo/schema";
import type { IProject } from "@/types/projects.types";

export const metadata: Metadata = projectsMetadata;

const ProjectsPage = () => {
  const projects = projectsData.projects as IProject[];

  return (
    <section className="animate-in fade-in duration-700 pt-16 md:pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(projectsCollectionPageJsonLd)}
      />
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
        {projects.map((project, index) => (
          <CardProject 
            key={project.id} 
            project={project} 
            priority={index < 2}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
