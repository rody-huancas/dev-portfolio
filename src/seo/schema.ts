import { seoConfig } from "@/seo/config";

type JsonLdObject = Record<string, unknown>;

export const personJsonLd: JsonLdObject = {
  "@context"   : "https://schema.org",
  "@type"      : "Person",
  name         : seoConfig.authorName,
  alternateName: seoConfig.aliases,
  url          : seoConfig.siteUrl,
  jobTitle     : seoConfig.role,
  email        : seoConfig.contactEmail,
  sameAs       : seoConfig.socialProfiles,
};

export const websiteJsonLd: JsonLdObject = {
  "@context": "https://schema.org",
  "@type"   : "WebSite",
  name      : seoConfig.siteName,
  url       : seoConfig.siteUrl,
  inLanguage: "es-PE",
  author    : {
    "@type": "Person",
    name   : seoConfig.authorName,
  },
};

export const homeProfilePageJsonLd: JsonLdObject = {
  "@context": "https://schema.org",
  "@type"   : "ProfilePage",
  name       : "Inicio | Rody Huancas",
  url        : seoConfig.siteUrl,
  inLanguage : "es-PE",
  mainEntity : {
    "@type"      : "Person",
    name         : seoConfig.authorName,
    alternateName: seoConfig.aliases,
    jobTitle     : seoConfig.role,
    url          : seoConfig.siteUrl,
  },
};

export const projectsCollectionPageJsonLd: JsonLdObject = {
  "@context": "https://schema.org",
  "@type"   : "CollectionPage",
  name       : "Proyectos | Rody Huancas",
  url        : `${seoConfig.siteUrl}/projects`,
  inLanguage : "es-PE",
  about      : {
    "@type"      : "Person",
    name         : seoConfig.authorName,
    alternateName: seoConfig.aliases,
  },
};

export const jsonLd = (schema: JsonLdObject) => ({
  __html: JSON.stringify(schema),
});
