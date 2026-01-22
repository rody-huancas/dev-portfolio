import Link from "next/link";
import CardProject from "./CardProject";
import projectsData from "@/data/projects-data.json";
import { IProject } from "@/types/projects.types";

const ProjectsSection = () => {
  const projects = projectsData.projects as IProject[];

  return (
    <section id="projects" className="pt-24 px-4 md:px-0">
      <div className="space-y-3">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-status"></span>
            <span className="text-status font-mono text-sm tracking-widest uppercase">
              Proyectos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Mis{" "}
            <span className="text-status underline decoration-button underline-offset-8">
              Proyectos
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </div>

        <Link href="/projects" className="text-status font-mono text-sm tracking-widest uppercase mt-8 inline-block hover:underline">
          Ver todos los proyectos
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
