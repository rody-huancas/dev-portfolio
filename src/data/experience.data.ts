import { defineExperience } from "@/utils/id.utils";
import type { IExperience } from "@/types/experience.types";

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
            es: "Desarrollo de nuevas funcionalidades para las plataformas web y móvil de Telefónica Argentina, priorizando la velocidad y la experiencia de usuario.",
            en: "Developing new features for Telefónica Argentina's web and mobile platforms, focusing on speed and user experience.",
          },
          {
            es: "Creación de componentes reutilizables para la librería UI del cliente, asegurando que todos los productos mantengan el mismo diseño.",
            en: "Building reusable components for the client's UI library, ensuring all products maintain a consistent design.",
          },
          {
            es: "Construcción de microservicios para manejar la lógica de negocio y mejorar la comunicación entre el front y los datos.",
            en: "Building microservices to handle business logic and improve communication between the frontend and data.",
          },
          {
            es: "Apoyo en la gestión de despliegues y monitoreo de la infraestructura para que el servicio siempre esté disponible.",
            en: "Supporting deployment management and infrastructure monitoring to keep the service always available.",
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
            es: "Desarrollé tres sistemas internos desde cero: control de asistencia docente, gestión de repositorios entre áreas y un sistema de capacitación que incluía inscripción masiva, seguimiento de asistencia, generación automática de certificados, reportes y control de permisos por usuario.",
            en: "Built three internal systems from scratch: faculty attendance tracking, cross-department file repository management, and a training platform featuring bulk enrollment, attendance tracking, automatic certificate generation, reports, and role-based permissions.",
          },
          {
            es: "Optimicé consultas SQL críticas reduciendo tiempos de respuesta de varios minutos a segundos, identificando y resolviendo cuellos de botella en los procesos más exigentes del sistema.",
            en: "Optimized critical SQL queries, cutting response times from several minutes down to seconds by identifying and resolving bottlenecks in the system's most demanding processes.",
          },
          {
            es: "Lideré la adopción de React y TypeScript como stack principal para el desarrollo de nuevos sistemas, modernizando el flujo de trabajo del equipo e introduciendo Git como herramienta de control de versiones.",
            en: "Led the adoption of React and TypeScript as the main stack for new systems, modernizing the team's workflow and introducing Git for version control.",
          },
          {
            es: "Participé activamente en la toma de decisiones técnicas para nuevos requerimientos, aportando criterio en el diseño de soluciones y en el crecimiento de los sistemas existentes.",
            en: "Actively participated in technical decision-making for new requirements, contributing to solution design and the evolution of existing systems.",
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
            es: "Rediseñé el sitio web oficial de la empresa, mejorando su presencia en línea con animaciones atractivas enfocadas en mostrar resultados del negocio.",
            en: "Redesigned the company's official website, improving its online presence with engaging animations focused on showcasing business results.",
          },
          {
            es: "Apliqué mejoras técnicas para que el sitio cargue más rápido y aparezca mejor posicionado en los resultados de búsqueda.",
            en: "Applied technical improvements to make the site load faster and rank better in search results.",
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
            es: "Integrante principal del equipo de desarrollo de <a href='https://play.google.com/store/apps/details?id=com.favorapp&hl=es_PE' target='_blank' rel='noopener noreferrer' class='text-status font-bold hover:underline'>FavorApp</a>.",
            en: "Key member of the development team behind <a href='https://play.google.com/store/apps/details?id=com.favorapp&hl=es_PE' target='_blank' rel='noopener noreferrer' class='text-status font-bold hover:underline'>FavorApp</a>.",
          },
          {
            es: "Desarrollo y despliegue de sitios web a medida según requerimientos del cliente.",
            en: "Developed and deployed custom websites based on client requirements.",
          },
          {
            es: "Mentoría técnica y revisión de código para asegurar la escalabilidad del proyecto.",
            en: "Provided technical mentoring and code reviews to keep the project scalable.",
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
            es: "Participé en el mantenimiento y crecimiento de un ERP empresarial crítico, asegurando la continuidad operativa del negocio.",
            en: "Participated in the maintenance and growth of a critical enterprise ERP, ensuring business operational continuity.",
          },
          {
            es: "Formé parte del equipo que migró el sistema a una arquitectura moderna, mejorando su mantenibilidad y escalabilidad a futuro.",
            en: "Was part of the team that migrated the system to a modern architecture, improving its maintainability and future scalability.",
          },
          {
            es: "Desarrollé e integré nuevos módulos de gestión al ecosistema existente, ampliando las capacidades operativas de la plataforma.",
            en: "Developed and integrated new management modules into the existing ecosystem, expanding the platform's operational capabilities.",
          },
          {
            es: "Optimicé consultas a la base de datos, reduciendo tiempos de respuesta en procesos que anteriormente eran lentos.",
            en: "Optimized database queries, reducing response times in processes that were previously slow.",
          },
          {
            es: "Realicé despliegues del sistema para nuevos clientes, asegurando una implementación estable y sin interrupciones.",
            en: "Handled system deployments for new clients, ensuring a stable and seamless implementation.",
          },
        ],
        technologies: ["PHP", "React.js", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript", "NestJS", "PostgreSQL", "Docker"],
      },
    ],
  }),
];
