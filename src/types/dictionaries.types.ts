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
    website        : string;
    type           : {
      FrontEnd : string;
      BackEnd  : string;
      FullStack: string;
      Library  : string;
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
    recommendation : string;
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
