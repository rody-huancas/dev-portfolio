import type { Metadata } from "next";
import Title from "@/components/Title";
import CardProject from "@/components/ProjectsSection/CardProject";
import projectsData from "@/data/projects-data.json";
import { seoConfig } from "@/config/seo.config";
import type { IProject } from "@/types/projects.types";

export const metadata: Metadata = {
  title      : "Proyectos | Rody Huancas",
  description: "Explora mi portafolio de proyectos: desde herramientas de análisis de datos hasta plataformas de economía colaborativa. Cada proyecto refleja mi pasión por la innovación y el desarrollo de soluciones digitales efectivas.",
  keywords   : [
    ...seoConfig.aliases,
    "Proyectos de software",
    "Portafolio de desarrollo web",
    "Casos de estudio",
    "React projects",
    "Next.js projects",
  ],
  openGraph  : {
    title      : "Portafolio de Proyectos - Rody Huancas",
    description: "Casos de estudio y aplicaciones reales desarrolladas con tecnologías modernas.",
    url        : `${seoConfig.siteUrl}/projects`,
    locale     : seoConfig.locale,
    siteName   : seoConfig.siteName,
    type       : "website",
  },
  twitter: {
    card       : "summary_large_image",
    title      : "Proyectos de Rody Huancas",
    description: "Aplicaciones reales construidas con enfoque en rendimiento y escalabilidad.",
    images     : ["/logo.svg"],
  },
  alternates: {
    canonical: `${seoConfig.siteUrl}/projects`,
  },
};

const ProjectsPage = () => {
  const projects = projectsData.projects as IProject[];
  const projectsPageJsonLd = {
    "@context": "https://schema.org",
    "@type"   : "CollectionPage",
    name       : "Proyectos | Rody Huancas",
    url        : `${seoConfig.siteUrl}/projects`,
    inLanguage : "es-PE",
    about      : {
      "@type": "Person",
      name   : seoConfig.authorName,
      alternateName: seoConfig.aliases,
    },
  };

  return (
    <section className="animate-in fade-in duration-700 pt-16 md:pt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsPageJsonLd) }}
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
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
