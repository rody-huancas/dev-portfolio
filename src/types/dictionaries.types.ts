import type { HeroLinkId, IHeroLinkCopy } from "@/types/hero.types";
import type { TechGroupId } from "@/types/stack.types";

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
    name        : {
      first: string;
      last : string;
    };
    role : string;
    intro: {
      beforeYears: string;
      years      : string;
      afterYears : string;
    };
    linksNavAria: string;
    links       : Record<HeroLinkId, IHeroLinkCopy>;
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
        beforeName: string;
        afterName : string;
        years     : string;
        afterYears: string;
      };
      second: {
        beforeRole       : string;
        role             : string;
        between          : string;
        architecture     : string;
        afterArchitecture: string;
        stack            : string;
        afterStack       : string;
      };
      third: {
        beforeEmphasis: string;
        emphasis      : string;
        afterEmphasis : string;
      };
    };
    stack: {
      label      : string;
      title      : string;
      subtitle   : string;
      description: string;
      groups     : Record<TechGroupId, string>;
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
