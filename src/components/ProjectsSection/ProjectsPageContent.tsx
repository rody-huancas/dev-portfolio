"use client";

import Title from "@/components/Title";
import CardProject from "@/components/ProjectsSection/CardProject";
import { useI18n } from "@/i18n/I18nProvider";
import { projectsData } from "@/data/projects.data";

const ProjectsPageContent = () => {
  const { dictionary } = useI18n();

  return (
    <>
      <h1 className="sr-only">{dictionary.projects.pageSrTitle}</h1>

      <Title
        label={dictionary.projects.pageLabel}
        title={dictionary.projects.pageTitle}
        subtitle={dictionary.projects.pageSubtitle}
        level="h1"
      />

      <div className="flex flex-col gap-16 mt-12">
        {projectsData.map((project, index) => (
          <CardProject
            key={project.id}
            project={project}
            priority={index < 2}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsPageContent;
