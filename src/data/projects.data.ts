import type { IProject } from "@/types/projects.types";

export const projectsData: IProject[] = [
  {
    id: "62c17723-d764-4b6e-95a8-c86c69a5bd50",
    title: "Appex IA",
    description: {
      es: "La web principal de Appex IA diseñada para conectar empresas con soluciones tecnológicas. Incluye una interfaz interactiva para el usuario y un sistema privado donde el equipo administra todas las consultas de forma centralizada.",
      en: "Appex IA's main website, designed to connect companies with technology solutions. It includes an interactive user-facing interface and a private system where the team manages every inquiry from one place.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Prisma ORM", "MongoDB"],
    githubUrl: "",
    liveUrl: "https://www.appexsistemas.com/",
    imageUrl: "/projects/image-appexia.webp",
    type: "FullStack",
  },
  {
    id: "ed4f0c80-014e-4fa9-b8b0-e58cceedee08",
    title: "VizGit",
    description: {
      es: "Transforma tus commits en una experiencia visual. Una herramienta rápida y sin registros para analizar tu impacto en GitHub y compartir tus estadísticas con estilo.",
      en: "Turn your commits into a visual experience. A fast, no-signup tool to analyze your GitHub impact and share your stats with style.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/rody-huancas/vizgit",
    liveUrl: "https://vizgit.novtiq.com/",
    imageUrl: "/projects/image-vizgit.webp",
    type: "FrontEnd",
  },
  {
    id: "e6c0c439-8959-4c42-a627-d78f69ef0c15",
    title: "Dependra",
    description: {
      es: "Convierte cualquier repo público de GitHub en un mapa interactivo. Ideal para entender arquitecturas complejas y ver cómo se conectan las piezas de tu código de un vistazo.",
      en: "Turn any public GitHub repository into an interactive map. Ideal for understanding complex architectures and seeing how the pieces of your code connect at a glance.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/rody-huancas/dependra",
    liveUrl: "https://dependra.novtiq.com/",
    imageUrl: "/projects/image-dependra.webp",
    type: "FrontEnd",
  },
  {
    id: "13e17624-43aa-46da-9b8f-859c5e682916",
    title: "FavorApp",
    description: {
      es: "La app para encontrar trabajo o pedir favores en tu ciudad. Landing page diseñada para conectar colaboradores locales con clientes de forma sencilla y directa.",
      en: "An app to find jobs or ask for favors in your city. A landing page designed to connect local collaborators with clients in a simple and direct way.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    githubUrl: "",
    liveUrl: "https://www.favorapp.app/",
    imageUrl: "/projects/image-favorapp.webp",
    type: "FrontEnd",
  },
  {
    id: "84f21e59-a43d-4ae9-9291-73529eba385a",
    title: "Enfoque Salud",
    description: {
      es: "Web médica que va más allá de informar. Incluye asistentes para calcular tu IMC o seguir tu embarazo, mejorando la experiencia del paciente desde el primer clic.",
      en: "A medical website that goes beyond informing. It includes assistants to calculate BMI or track pregnancy, improving the patient experience from the very first click.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "",
    liveUrl: "https://www.clinicaenfoquesalud.com/",
    imageUrl: "/projects/image-clinicaenfoquesalud.webp",
    type: "FrontEnd",
  },
];
