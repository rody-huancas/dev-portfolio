import type { Locale } from "@/i18n/config";
import { type AppDictionary } from "@/types/dictionaries.types";

export const dictionaries: Record<Locale, AppDictionary> = {
  es: {
    title: {
      sectionLabelAria: "Etiqueta de sección",
    },
    header: {
      navigationAria: "Navegación principal",
      menu          : {
        hero    : "Inicio",
        projects: "Proyectos",
        about   : "Sobre mí",
        contact : "Contacto",
      },
      navItemAria      : (label) => `Ir a ${label}`,
      socialProfileAria: (label) => `Visitar mi perfil de ${label}`,
      languageToggle   : {
        ariaLabel : (nextLocaleLabel) => `Cambiar idioma a ${nextLocaleLabel}`,
        tooltip   : "Idioma",
        shortLabel: {
          es: "ES",
          en: "EN",
        },
      },
      themeToggleAria: "Cambiar tema",
    },
    hero: {
      sectionAria : "Sección de presentación",
      availability: "Disponible para trabajar",
      name        : {
        first: "RODY",
        last : "HUANCAS",
      },
      role : "Software Developer",
      intro: {
        beforeYears: "Programar es fácil, lo difícil es hacerlo simple. Llevo ",
        years      : "+5 años",
        afterYears : " priorizando la claridad sobre la complejidad.",
      },
      linksNavAria: "Enlaces de contacto y redes sociales",
      links       : {
        email: {
          ariaLabel: "Enviar correo electrónico a rodyhuancas.04@gmail.com",
          title    : "Contactar por email",
          label    : "Escríbeme",
        },
        github: {
          ariaLabel: "Ver perfil de GitHub de Rody Huancas",
          title    : "Visitar GitHub",
          label    : "GitHub",
        },
        linkedin: {
          ariaLabel: "Ver perfil de LinkedIn de Rody Huancas",
          title    : "Visitar LinkedIn",
          label    : "LinkedIn",
        },
        resume: {
          ariaLabel: "Descargar currículum vitae en formato PDF",
          title    : "Descargar CV",
          label    : "Ver CV",
          url      : "https://res.cloudinary.com/dmgazox1n/image/upload/v1779678975/Portfolio/Documents/CV%20-%20RODY%20HUANCAS%20CHUQUIPOMA.pdf",
        },
      },
    },
    projects: {
      sectionLabel   : "Proyectos",
      sectionTitle   : "Mis",
      sectionSubtitle: "Proyectos",
      viewAll        : "Ver todos los proyectos",
      pageLabel      : "Portafolio",
      pageTitle      : "Todos mis",
      pageSubtitle   : "Proyectos",
      pageSrTitle    : "Portafolio de Proyectos de Desarrollo Web - Rody Huancas",
      imageAlt       : (title) => `Captura de pantalla del proyecto ${title}`,
      sourceCode     : "Código fuente",
      demo           : "Demo",
      website        : "Sitio web",
      type           : {
        FrontEnd : "Frontend",
        BackEnd  : "Backend",
        FullStack: "Full Stack",
        Library  : "Librería",
      },
    },
    experience: {
      sectionLabel   : "Experiencia",
      sectionTitle   : "Mi ruta",
      sectionSubtitle: "profesional",
      description    : "Trayectoria profesional enfocada en crear soluciones digitales eficientes y escalables.",
      multipleRoles  : "Colaboraciones en distintos periodos",
      website        : "Sitio web",
      certificate    : "Constancia",
      recommendation : "Recomendación",
      showMore       : "Ver más experiencia",
      showLess       : "Ver menos",
    },
    about: {
      sectionLabel   : "Sobre mí",
      sectionTitle   : "Un poco de mi",
      sectionSubtitle: "historia",
      paragraphs     : {
        first: {
          before   : "Soy Rody, ",
          highlight: "Ingeniero de Sistemas",
          after    : " de Chiclayo. Empecé en la tecnología por curiosidad, queriendo entender cómo funcionaban las cosas por dentro, y terminé haciendo de eso mi profesión.",
        },
        second: {
          before   : "Hoy llevo más de ",
          highlight: "5 años",
          after    : " construyendo software que la gente usa todos los días. Disfruto encargarme de todo el proceso: desde una interfaz clara en el navegador hasta una base de datos ordenada y segura.",
        },
      },
      quote: {
        before   : "No escribo código por escribir: busco soluciones ",
        highlight: "simples, rápidas",
        after    : " y que puedan crecer sin dolores de cabeza.",
      },
      stack: {
        label      : "Stack",
        title      : "Habilidades",
        subtitle   : "técnicas",
        description: "Las herramientas con las que construyo, de la interfaz a la base de datos.",
        groups     : {
          frontend  : "Frontend",
          backend   : "Backend",
          mobileData: "Móvil y datos",
        },
      },
    },
    contact: {
      sectionLabel   : "Contacto",
      sectionTitle   : "Hablemos",
      sectionSubtitle: "ahora",
      description    : "¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy disponible para nuevas oportunidades y retos técnicos.",
      fields         : {
        name              : "Nombre",
        namePlaceholder   : "Tu nombre",
        email             : "Email",
        emailPlaceholder  : "email@ejemplo.com",
        message           : "Mensaje",
        messagePlaceholder: "¿En qué puedo ayudarte?",
      },
      submit     : "Enviar mensaje",
      submitting : "Enviando...",
      success    : "¡Mensaje enviado correctamente! Te responderé pronto.",
      error      : "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
      submitError: "Error en el envío",
    },
    footer: {
      hiddenTitle      : "Rody Huancas - Desarrollador Full Stack en Perú",
      hiddenDescription: "Especialista en React, Node.js y desarrollo de aplicaciones web y móviles.",
      madeBy           : "Diseñado y desarrollado por",
      profileTitle     : "Ver perfil de desarrollador de Rody Huancas",
      backToTopAria    : "Volver al inicio de la página",
      backToTop        : "Ir al inicio",
    },
  },
  en: {
    title: {
      sectionLabelAria: "Section label",
    },
    header: {
      navigationAria: "Main navigation",
      menu          : {
        hero    : "Home",
        projects: "Projects",
        about   : "About",
        contact : "Contact",
      },
      navItemAria      : (label) => `Go to ${label}`,
      socialProfileAria: (label) => `Visit my ${label} profile`,
      languageToggle   : {
        ariaLabel : (nextLocaleLabel) => `Switch language to ${nextLocaleLabel}`,
        tooltip   : "Language",
        shortLabel: {
          es: "ES",
          en: "EN",
        },
      },
      themeToggleAria: "Switch theme",
    },
    hero: {
      sectionAria : "Introduction section",
      availability: "Available for work",
      name        : {
        first: "RODY",
        last : "HUANCAS",
      },
      role : "Software Developer",
      intro: {
        beforeYears: "Writing code is easy, making it simple is the hard part. I have spent ",
        years      : "+5 years",
        afterYears : " prioritizing clarity over complexity.",
      },
      linksNavAria: "Contact and social links",
      links       : {
        email: {
          ariaLabel: "Send an email to rodyhuancas.04@gmail.com",
          title    : "Contact by email",
          label    : "Write to me",
        },
        github: {
          ariaLabel: "View Rody Huancas GitHub profile",
          title    : "Visit GitHub",
          label    : "GitHub",
        },
        linkedin: {
          ariaLabel: "View Rody Huancas LinkedIn profile",
          title    : "Visit LinkedIn",
          label    : "LinkedIn",
        },
        resume: {
          ariaLabel: "Download resume in PDF format",
          title    : "Download resume",
          label    : "View resume",
          url      : "https://res.cloudinary.com/dmgazox1n/image/upload/v1779760447/Portfolio/Documents/CV%20-%20HILDER%20RODY%20HUANCAS%20CHUQUIPOMA%20-%20EN.pdf",
        },
      },
    },
    projects: {
      sectionLabel   : "Projects",
      sectionTitle   : "My",
      sectionSubtitle: "Projects",
      viewAll        : "View all projects",
      pageLabel      : "Portfolio",
      pageTitle      : "All my",
      pageSubtitle   : "Projects",
      pageSrTitle    : "Web Development Projects Portfolio - Rody Huancas",
      imageAlt       : (title) => `${title} project screenshot`,
      sourceCode     : "Source code",
      demo           : "Live demo",
      website        : "Website",
      type           : {
        FrontEnd : "Frontend",
        BackEnd  : "Backend",
        FullStack: "Full Stack",
        Library  : "Library",
      },
    },
    experience: {
      sectionLabel   : "Experience",
      sectionTitle   : "My",
      sectionSubtitle: "journey",
      description    : "Professional journey focused on building efficient and scalable digital solutions.",
      multipleRoles  : "Collaborations across different periods",
      website        : "Website",
      certificate    : "Certificate",
      recommendation : "Recommendation",
      showMore       : "Show more experience",
      showLess       : "Show less",
    },
    about: {
      sectionLabel   : "About",
      sectionTitle   : "A bit of my",
      sectionSubtitle: "story",
      paragraphs     : {
        first: {
          before   : "I'm Rody, a ",
          highlight: "Systems Engineer",
          after    : " from Chiclayo. I got into tech out of curiosity, wanting to understand how things worked on the inside, and ended up turning that into my profession.",
        },
        second: {
          before   : "Today I have more than ",
          highlight: "5 years",
          after    : " of experience building software people use every day. I enjoy owning the whole process: from a clear interface in the browser to a tidy, secure database.",
        },
      },
      quote: {
        before   : "I don't write code for the sake of it: I look for solutions that are ",
        highlight: "simple, fast",
        after    : " and able to grow without headaches.",
      },
      stack: {
        label      : "Stack",
        title      : "Technical",
        subtitle   : "skills",
        description: "The tools I build with, from the interface to the database.",
        groups     : {
          frontend  : "Frontend",
          backend   : "Backend",
          mobileData: "Mobile & data",
        },
      },
    },
    contact: {
      sectionLabel   : "Contact",
      sectionTitle   : "Let's talk",
      sectionSubtitle: "today",
      description    : "Do you have a project in mind or just want to say hello? I'm open to new opportunities and technical challenges.",
      fields         : {
        name              : "Name",
        namePlaceholder   : "Your name",
        email             : "Email",
        emailPlaceholder  : "email@example.com",
        message           : "Message",
        messagePlaceholder: "How can I help you?",
      },
      submit     : "Send message",
      submitting : "Sending...",
      success    : "Message sent successfully! I'll get back to you soon.",
      error      : "There was a problem sending your message. Please try again.",
      submitError: "Sending failed",
    },
    footer: {
      hiddenTitle      : "Rody Huancas - Full Stack Developer in Peru",
      hiddenDescription: "Specialized in React, Node.js, and web and mobile application development.",
      madeBy           : "Designed and developed by",
      profileTitle     : "View Rody Huancas developer profile",
      backToTopAria    : "Back to the top of the page",
      backToTop        : "Back to top",
    },
  },
};

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale];
};
