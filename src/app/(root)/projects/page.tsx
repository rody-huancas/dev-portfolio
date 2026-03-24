import type { Metadata } from "next";
import ProjectsPageContent from "@/components/ProjectsSection/ProjectsPageContent";
import { projectsMetadata } from "@/seo/metadata";
import { jsonLd, projectsCollectionPageJsonLd } from "@/seo/schema";

export const metadata: Metadata = projectsMetadata;

const ProjectsPage = () => {
  return (
    <section className="animate-in fade-in duration-700 pt-16 md:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(projectsCollectionPageJsonLd)}
      />
      
      <ProjectsPageContent />
    </section>
  );
};

export default ProjectsPage;
