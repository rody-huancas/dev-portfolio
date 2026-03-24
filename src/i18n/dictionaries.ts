import type { Locale } from "@/i18n/config";

export interface AppDictionary {
  title: {
    sectionLabelAria: string;
  };
  header: {
    navigationAria: string;
    menu          : {
      hero    : string;
      projects: string;
      about   : string;
      contact : string;
    };
    navItemAria      : (label: string) => string;
    socialProfileAria: (label: string) => string;
    languageToggle   : {
      ariaLabel : (nextLocaleLabel: string) => string;
      tooltip   : string;
      shortLabel: {
        es: string;
        en: string;
      };
    };
    themeToggleAria: string;
  };
  hero: {
    sectionAria : string;
    availability: string;
    greeting    : string;
    role        : string;
    intro       : {
      beforeYears: string;
      years      : string;
      afterYears : string;
    };
    linksNavAria: string;
    email       : {
      ariaLabel: string;
      title    : string;
      label    : string;
    };
    github: {
      ariaLabel: string;
      title    : string;
    };
    linkedin: {
      ariaLabel: string;
      title    : string;
    };
    resume: {
      ariaLabel: string;
      title    : string;
      label    : string;
    };
  };
  projects: {
    sectionLabel   : string;
    sectionTitle   : string;
    sectionSubtitle: string;
    viewAll        : string;
    pageLabel      : string;
    pageTitle      : string;
    pageSubtitle   : string;
    pageSrTitle    : string;
    imageAlt       : (title: string) => string;
    sourceCode     : string;
    demo           : string;
    type           : {
      FrontEnd : string;
      BackEnd  : string;
      FullStack: string;
    };
  };
  experience: {
    sectionLabel   : string;
    sectionTitle   : string;
    sectionSubtitle: string;
    description    : string;
    multipleRoles  : string;
    website        : string;
    certificate    : string;
  };
  about: {
    sectionLabel   : string;
    sectionTitle   : string;
    sectionSubtitle: string;
    paragraphs     : {
      first: {
        beforeName     : string;
        afterName      : string;
        universityLabel: string;
        afterUniversity: string;
        years          : string;
        afterYears     : string;
      };
      second: {
        beforeRole       : string;
        role             : string;
        between          : string;
        architecture     : string;
        afterArchitecture: string;
      };
      third: {
        beforeStack  : string;
        stack        : string;
        between      : string;
        emphasis     : string;
        afterEmphasis: string;
      };
      closing: {
        beforeHighlight: string;
        highlight      : string;
        afterHighlight : string;
      };
    };
  };
  contact: {
    sectionLabel   : string;
    sectionTitle   : string;
    sectionSubtitle: string;
    description    : string;
    fields         : {
      name              : string;
      namePlaceholder   : string;
      email             : string;
      emailPlaceholder  : string;
      message           : string;
      messagePlaceholder: string;
    };
    submit     : string;
    submitting : string;
    success    : string;
    error      : string;
    submitError: string;
  };
  footer: {
    hiddenTitle      : string;
    hiddenDescription: string;
    madeBy           : string;
    profileTitle     : string;
    backToTopAria    : string;
    backToTop        : string;
  };
}

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
      greeting    : "Hola, soy Rody,",
      role        : "Software Developer",
      intro       : {
        beforeYears: "Programar es fácil, lo difícil es hacerlo simple. Llevo ",
        years      : "+3 años",
        afterYears : " priorizando la claridad sobre la complejidad, convencido de que una solución es perfecta no cuando no hay nada más que añadir, sino cuando no queda nada por quitar.",
      },
      linksNavAria: "Enlaces de contacto y redes sociales",
      email       : {
        ariaLabel: "Enviar correo electrónico a rodyhuancas.04@gmail.com",
        title    : "Contactar por email",
        label    : "Escríbeme",
      },
      github: {
        ariaLabel: "Ver perfil de GitHub de Rody Huancas",
        title    : "Visitar GitHub",
      },
      linkedin: {
        ariaLabel: "Ver perfil de LinkedIn de Rody Huancas",
        title    : "Visitar LinkedIn",
      },
      resume: {
        ariaLabel: "Descargar currículum vitae en formato PDF",
        title    : "Descargar CV",
        label    : "Ver CV",
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
      type           : {
        FrontEnd : "Frontend",
        BackEnd  : "Backend",
        FullStack: "Full Stack",
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
    },
    about: {
      sectionLabel   : "Sobre mí",
      sectionTitle   : "Un poco de mi",
      sectionSubtitle: "historia",
      paragraphs     : {
        first: {
          beforeName     : "Soy ",
          afterName      : ", Ingeniero de Sistemas de la",
          universityLabel: "USS",
          afterUniversity: " en Perú. Llevo ",
          years          : "más de tres años",
          afterYears     : " transformando ideas en software real, moviéndome con la misma soltura entre el diseño de una interfaz fluida y la lógica que la hace funcionar.",
        },
        second: {
          beforeRole       : "No me gusta dejar las cosas a medias. Como ",
          role             : "Full Stack Developer",
          between          : ", disfruto encargarme de la ",
          architecture     : "arquitectura completa",
          afterArchitecture: ": desde que el usuario hace clic hasta que el dato se guarda de forma segura en una base de datos bien estructurada.",
        },
        third: {
          beforeStack  : "Mi terreno de juego es el ecosistema de ",
          stack        : "JavaScript y TypeScript",
          between      : ". Para mí, programar no es solo \"picar código\" para cumplir una tarea; es diseñar sistemas ",
          emphasis     : "escalables, limpios",
          afterEmphasis: " y, sobre todo, que no se conviertan en un dolor de cabeza para el futuro.",
        },
        closing: {
          beforeHighlight: "Más allá de seguir tendencias, mi prioridad es la ",
          highlight      : "estabilidad",
          afterHighlight : ". Construyo software que soluciona problemas hoy, pero que está preparado para crecer mañana.",
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
      greeting    : "Hi, I'm Rody,",
      role        : "Software Developer",
      intro       : {
        beforeYears: "Writing code is easy, making it simple is the hard part. I have spent ",
        years      : "+3 years",
        afterYears : " prioritizing clarity over complexity, convinced that a solution is perfect not when there is nothing else to add, but when there is nothing left to remove.",
      },
      linksNavAria: "Contact and social links",
      email       : {
        ariaLabel: "Send an email to rodyhuancas.04@gmail.com",
        title    : "Contact by email",
        label    : "Write to me",
      },
      github: {
        ariaLabel: "View Rody Huancas GitHub profile",
        title    : "Visit GitHub",
      },
      linkedin: {
        ariaLabel: "View Rody Huancas LinkedIn profile",
        title    : "Visit LinkedIn",
      },
      resume: {
        ariaLabel: "Download resume in PDF format",
        title    : "Download resume",
        label    : "View resume",
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
      type           : {
        FrontEnd : "Frontend",
        BackEnd  : "Backend",
        FullStack: "Full Stack",
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
    },
    about: {
      sectionLabel   : "About",
      sectionTitle   : "A bit of my",
      sectionSubtitle: "story",
      paragraphs     : {
        first: {
          beforeName     : "I'm ",
          afterName      : ", a Systems Engineer from",
          universityLabel: "USS",
          afterUniversity: " in Peru. I have spent ",
          years          : "more than three years",
          afterYears     : " turning ideas into real software, moving just as comfortably through fluid interface design as the logic that makes it work.",
        },
        second: {
          beforeRole       : "I don't like leaving things halfway done. As a ",
          role             : "Full Stack Developer",
          between          : ", I enjoy owning the ",
          architecture     : "full architecture",
          afterArchitecture: ": from the moment a user clicks to the point where data is safely stored in a well-structured database.",
        },
        third: {
          beforeStack  : "My playground is the ",
          stack        : "JavaScript and TypeScript ecosystem",
          between      : ". To me, programming is not just \"shipping code\" to complete a task; it's about designing ",
          emphasis     : "scalable, clean systems",
          afterEmphasis: " that do not become a headache in the future.",
        },
        closing: {
          beforeHighlight: "Beyond following trends, my priority is ",
          highlight      : "stability",
          afterHighlight : ". I build software that solves problems today and is ready to grow tomorrow.",
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
