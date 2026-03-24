"use client";

import Link from "next/link";
import Title from "../Title";
import CardProject from "./CardProject";
import { useI18n } from "@/i18n/I18nProvider";
import { projectsData } from "@/data/projects.data";
import { BsArrowRight } from "react-icons/bs";

const ProjectsSection = () => {
  const { dictionary } = useI18n();
  const projects = projectsData;

  return (
    <section id="projects" className="pt-24">
      <div className="space-y-3">
        <Title
          label={dictionary.projects.sectionLabel}
          title={dictionary.projects.sectionTitle}
          subtitle={dictionary.projects.sectionSubtitle}
        />

        <div className="flex flex-col gap-12">
          {projects.slice(0, 3).map((project, index) => (
            <CardProject 
              key={project.id} 
              project={project} 
              priority={index < 2}
            />
          ))}
        </div>

        <Link 
          href="/projects" 
          className="text-status font-mono text-sm tracking-widest uppercase mt-8 flex items-center gap-2 w-fit border-b-2 border-transparent hover:border-status pb-1 transition-colors"
        >
          <BsArrowRight />
          <span>{dictionary.projects.viewAll}</span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
