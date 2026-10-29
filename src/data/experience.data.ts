import { defineExperience } from "@/utils/id.utils";
import type { IExperience } from "@/types/experience.types";

// Orden en el que se muestran en la sección; las primeras quedan visibles y el resto en «Ver más experiencia».
export const experienceData: IExperience[] = [
  defineExperience({
    company       : "NTT DATA Europe & Latam",
    websiteUrl    : "https://pe.nttdata.com/",
    certificateUrl: "",
    roles         : [
      {
        position: {
          es: "Ingeniero de Software",
          en: "Software Engineer",
        },
        period: {
          es: "Ene 2026 - Presente",
          en: "Jan 2026 - Present",
        },
        description: [
          {
            es: "Desarrollo funciones web y móviles para Telefónica Argentina, cuidando velocidad y UX.",
            en: "I build web and mobile features for Telefónica Argentina, focused on speed and UX.",
          },
          {
            es: "Creo componentes reutilizables para que todos los productos del cliente luzcan igual.",
            en: "I build reusable UI components so every client product looks consistent.",
          },
          {
            es: "Construyo microservicios que conectan el frontend con los datos del negocio.",
            en: "I build microservices that connect the frontend with business data.",
          },
        ],
        technologies: ["Next.js", "React Native", "Node.js", "Express", "TypeScript", "OpenShift", "Jest", "Storybook", "Material UI", "Git"],
      },
    ],
  }),
  defineExperience({
    company       : "USS - Universidad Señor de Sipán",
    websiteUrl    : "https://www.uss.edu.pe/",
    certificateUrl: "https://res.cloudinary.com/dmgazox1n/image/upload/v1775520201/Portfolio/Documents/records/CERTIFICADO%20DE%20TRABAJO%20-%20USS.jpg",
    roles         : [
      {
        position: {
          es: "Analista Desarrollador",
          en: "Developer Analyst",
        },
        period: {
          es: "Ago 2024 - Dic 2025",
          en: "Aug 2024 - Dec 2025",
        },
        description: [
          {
            es: "Creé 3 sistemas internos desde cero: asistencia docente, repositorios y capacitación.",
            en: "Built 3 internal systems from scratch: faculty attendance, file repositories and training.",
          },
          {
            es: "Optimicé consultas SQL críticas y bajé los tiempos de respuesta de minutos a segundos.",
            en: "Optimized critical SQL queries, cutting response times from minutes to seconds.",
          },
          {
            es: "Impulsé React, TypeScript y Git en el equipo para modernizar la forma de trabajar.",
            en: "Introduced React, TypeScript and Git to the team to modernize how we work.",
          },
        ],
        technologies: ["C#", ".Net", "React.js", "JavaScript", "TypeScript", "SQL Server", "Git"],
      },
    ],
  }),
  defineExperience({
    company          : "Appex IA",
    websiteUrl       : "https://www.appexsistemas.com/",
    certificateUrl   : "https://res.cloudinary.com/dmgazox1n/image/upload/v1775520201/Portfolio/Documents/records/CERTIFICADO%20DE%20TRABAJO%20-%20APPEXIA.jpg",
    recommendationUrl: "https://res.cloudinary.com/dmgazox1n/image/upload/v1775520201/Portfolio/Documents/records/CARTA%20DE%20RECOMENDACION%20-%20APPEXIA.jpg",
    roles            : [
      {
        position: {
          es: "Desarrollador Full Stack (Freelance)",
          en: "Full Stack Developer (Freelance)",
        },
        period: {
          es: "Feb 2026 - Mar 2026",
          en: "Feb 2026 - Mar 2026",
        },
        description: [
          {
            es: "Rediseñé el sitio web de la empresa con animaciones que destacan sus resultados.",
            en: "Redesigned the company website with animations that highlight its results.",
          },
          {
            es: "Mejoré la velocidad de carga del sitio y su posición en los buscadores.",
            en: "Improved the site's load speed and its search engine ranking.",
          },
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Prisma ORM", "PostgreSQL"],
      },
      {
        position: {
          es: "Desarrollador Frontend (Freelance)",
          en: "Frontend Developer (Freelance)",
        },
        period: {
          es: "Ene 2025 - Oct 2025",
          en: "Jan 2025 - Oct 2025",
        },
        description: [
          {
            es: "Desarrollé la app <a href='https://play.google.com/store/apps/details?id=com.favorapp&hl=es_PE' target='_blank' rel='noopener noreferrer' class='text-status font-bold hover:underline'>FavorApp</a> como parte del equipo principal.",
            en: "Built the <a href='https://play.google.com/store/apps/details?id=com.favorapp&hl=es_PE' target='_blank' rel='noopener noreferrer' class='text-status font-bold hover:underline'>FavorApp</a> mobile app as part of the core team.",
          },
          {
            es: "Guié al equipo con mentorías y revisiones de código para que el proyecto escale.",
            en: "Mentored the team and reviewed code so the project could scale.",
          },
        ],
        technologies: ["React Native", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
      },
    ],
  }),
  defineExperience({
    company       : "DATEC CONSULTING SAC",
    websiteUrl    : "https://www.datec.pe/",
    certificateUrl: "https://res.cloudinary.com/dmgazox1n/image/upload/v1775520201/Portfolio/Documents/records/CERTIFICADO%20DE%20TRABAJO%20-%20DATEC.jpg",
    roles         : [
      {
        position: {
          es: "Desarrollador Full Stack",
          en: "Full Stack Developer",
        },
        period: {
          es: "Ene 2023 - Ago 2024",
          en: "Jan 2023 - Aug 2024",
        },
        description: [
          {
            es: "Mantuve y amplié un ERP crítico con nuevos módulos de gestión.",
            en: "Maintained and extended a critical ERP with new management modules.",
          },
          {
            es: "Participé en la migración del ERP a una arquitectura moderna y fácil de mantener.",
            en: "Helped migrate the ERP to a modern architecture that is easier to maintain.",
          },
          {
            es: "Optimicé consultas lentas a la base de datos para acelerar procesos clave.",
            en: "Optimized slow database queries to speed up key processes.",
          },
        ],
        technologies: ["PHP", "React.js", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript", "NestJS", "PostgreSQL", "Docker"],
      },
    ],
  }),
];
