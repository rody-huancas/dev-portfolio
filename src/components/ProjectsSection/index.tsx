import Link from "next/link";
import Title from "../Title";
import CardProject from "./CardProject";
import projectsData from "@/data/projects-data.json";
import { IProject } from "@/types/projects.types";
import { BsArrowRight } from "react-icons/bs";

const ProjectsSection = () => {
  const projects = projectsData.projects as IProject[];

  return (
    <section id="projects" className="pt-24">
      <div className="space-y-3">
        <Title label="Proyectos" title="Mis" subtitle="Proyectos" />

        <div className="flex flex-col gap-12">
            {projects.slice(0, 3).map((project) => (
            <CardProject key={project.id} project={project} />
            ))}
        </div>

        <Link 
          href="/projects" 
          className="text-status font-mono text-sm tracking-widest uppercase mt-8 flex items-center gap-2 w-fit border-b-2 border-transparent hover:border-status pb-1 transition-colors"
        >
          <BsArrowRight />
          <span>Ver todos los proyectos</span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
