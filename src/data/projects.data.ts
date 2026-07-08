import { defineProject } from "@/utils/id.utils";
import type { IProject } from "@/types/projects.types";

export const projectsData: IProject[] = [
  defineProject({
    title      : "Tabus JS",
    description: {
      es: "Un bus de mensajes liviano y type-safe para comunicar pestañas del navegador en tiempo real. Cuenta con soporte nativo para SSR (fallback en memoria), control de presencia automático y throttling inteligente integrado para eventos de alta frecuencia.",
      en: "A lightweight, type-safe message bus for cross-tab communication in real time. It features native SSR support (in-memory fallback), automatic presence tracking, and built-in smart throttling for high-frequency events.",
    },
    technologies: ["Astro", "GSAP", "TypeScript", "NPM", "Vitest", "VitePress"],
    githubUrl   : "https://github.com/rody-huancas/tabus-js",
    liveUrl     : "https://tabus-js.vercel.app/",
    imageUrl    : "/projects/image-tabus-js.webp",
    type        : "Library",
    links       : [
      { type: "website", url: "https://tabus-js.vercel.app/" },
      { type: "repo"   , url: "https://github.com/rody-huancas/tabus-js" },
      { type: "npm"    , url: "https://www.npmjs.com/package/tabus-js" },
    ],
  }),
  defineProject({
    title      : "Premios Lopito",
    description: {
      es: "Sistema completo de sorteos online con panel de administración, verificación de boletos por comprobante, consulta de DNI en tiempo real y exportación de reportes en PDF y Excel. Pagos vía YAPE y PLIN con gestión multi-administrador.",
      en: "Full-featured online raffle system with an admin dashboard, ticket verification via payment receipts, real-time DNI lookup, and report exports in PDF and Excel. Supports YAPE and PLIN payments with multi-admin management.",
    },
    technologies: ["Next.js", "PostgreSQL", "Drizzle ORM", "Tanstack Query", "Better Auth", "GSAP", "Tailwind CSS"],
    githubUrl   : "",
    liveUrl     : "https://www.premioslopito.com/",
    imageUrl    : "/projects/image-premios-lopito.webp",
    type        : "FullStack",
  }),
  defineProject({
    title      : "React Rescuer",
    description: {
      es: "Una librería ligera diseñada para rescatar aplicaciones de React de errores fatales de renderizado. Permite atrapar fallos en componentes específicos, mostrar fallback UIs personalizadas y recuperar el estado sin necesidad de recargar toda la página.",
      en: "A lightweight library designed to rescue React applications from fatal rendering errors. It catches failures in specific components, displays custom fallback UIs, and recovers state without needing a full page reload.",
    },
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP", "NPM", "Vitest"],
    githubUrl   : "https://github.com/rody-huancas/website-react-rescuer",
    liveUrl     : "https://react-rescuer.vercel.app/",
    imageUrl    : "/projects/image-react-rescuer.webp",
    type        : "Library",
    links       : [
      { type: "website", url: "https://react-rescuer.vercel.app/" },
      { type: "repo"   , url: "https://github.com/rody-huancas/website-react-rescuer" },
      { type: "npm"    , url: "https://www.npmjs.com/package/react-rescuer" },
    ],
  }),
  defineProject({
    title      : "AxisDev",
    description: {
      es: "Un tablero personal donde tienes todo tu mundo de Google (Drive, Gmail, Calendario y Tareas) en una sola pantalla. En lugar de abrir mil pestañas, aquí puedes ver tus archivos recientes, revisar correos y configurar tus preferencias para trabajar más rápido.",
      en: "A personal dashboard where you can see your entire Google ecosystem (Drive, Gmail, Calendar, and Tasks) all on one screen. Instead of opening a bunch of tabs, here you can view your recent files, check your emails, and set your preferences to work faster.",
    },
    technologies: ["Next.js", "Tailwind CSS", "NextAuth", "Supabase", "Zustand", "React Hook Form"],
    githubUrl   : "https://github.com/rody-huancas/axisdev",
    liveUrl     : "https://axisdev.vercel.app/",
    imageUrl    : "/projects/image-axisdev.webp",
    type        : "FullStack",
  }),
  defineProject({
    title      : "Appex IA",
    description: {
      es: "La web principal de Appex IA diseñada para conectar empresas con soluciones tecnológicas. Incluye una interfaz interactiva y un sistema privado donde administran todas la información de forma centralizada.",
      en: "The Appex AI main website is designed to connect businesses with technology solutions. It features an interactive interface and a private system where all information is managed centrally.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Prisma ORM", "PostgreSQL"],
    githubUrl   : "",
    liveUrl     : "https://www.appexsistemas.com/",
    imageUrl    : "/projects/image-appexia.webp",
    type        : "FullStack",
  }),
  defineProject({
    title      : "VizGit",
    description: {
      es: "Transforma tus commits en una experiencia visual. Una herramienta rápida y sin registros para analizar tu impacto en GitHub y compartir tus estadísticas con estilo.",
      en: "Turn your commits into a visual experience. A fast, no-signup tool to analyze your GitHub impact and share your stats with style.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl   : "https://github.com/rody-huancas/vizgit",
    liveUrl     : "https://vizgit-rh.vercel.app/",
    imageUrl    : "/projects/image-vizgit.webp",
    type        : "FrontEnd",
  }),
  defineProject({
    title      : "Dependra",
    description: {
      es: "Convierte cualquier repo público de GitHub en un mapa interactivo. Ideal para entender arquitecturas complejas y ver cómo se conectan las piezas de tu código de un vistazo.",
      en: "Turn any public GitHub repository into an interactive map. Ideal for understanding complex architectures and seeing how the pieces of your code connect at a glance.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl   : "https://github.com/rody-huancas/dependra",
    liveUrl     : "https://dependra-rh.vercel.app/",
    imageUrl    : "/projects/image-dependra.webp",
    type        : "FrontEnd",
  }),
  defineProject({
    title      : "FavorApp",
    description: {
      es: "La app para encontrar trabajo o pedir favores en tu ciudad. Landing page diseñada para conectar colaboradores locales con clientes de forma sencilla y directa.",
      en: "An app to find jobs or ask for favors in your city. A landing page designed to connect local collaborators with clients in a simple and direct way.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    githubUrl   : "",
    liveUrl     : "https://www.favorapp.app/",
    imageUrl    : "/projects/image-favorapp.webp",
    type        : "FrontEnd",
  }),
  defineProject({
    title      : "Enfoque Salud",
    description: {
      es: "Web médica que va más allá de informar. Incluye asistentes para calcular tu IMC o seguir tu embarazo, mejorando la experiencia del paciente desde el primer clic.",
      en: "A medical website that goes beyond informing. It includes assistants to calculate BMI or track pregnancy, improving the patient experience from the very first click.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl   : "",
    liveUrl     : "https://www.clinicaenfoquesalud.com/",
    imageUrl    : "/projects/image-clinicaenfoquesalud.webp",
    type        : "FrontEnd",
  }),
];
