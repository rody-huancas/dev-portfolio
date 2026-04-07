import type { Metadata } from "next";
import { seoConfig } from "@/seo/config";

const defaultImage = "/logo.svg";

const sharedKeywords = [
  ...seoConfig.aliases,
  "Full Stack Developer",
  "Desarrollador Full Stack",
  "Desarrollador Web Perú",
  "Portafolio Rody Huancas",
];

export const rootMetadata: Metadata = {
  title: {
    default : seoConfig.defaultTitle,
    template: "%s | Rody Huancas",
  },
  description : seoConfig.defaultBio,
  keywords    : sharedKeywords,
  authors     : [{ name: seoConfig.authorName }],
  creator     : seoConfig.authorName,
  publisher   : seoConfig.authorName,
  metadataBase: new URL(seoConfig.siteUrl),
  alternates  : {
    canonical: seoConfig.siteUrl,
  },
  openGraph: {
    type       : "website",
    locale     : seoConfig.locale,
    url        : seoConfig.siteUrl,
    title      : seoConfig.defaultTitle,
    description: seoConfig.defaultBio,
    siteName   : seoConfig.siteName,
    images     : [
      {
        url   : defaultImage,
        width : 1200,
        height: 630,
        alt   : seoConfig.siteName,
      },
    ],
  },
  twitter: {
    card       : "summary_large_image",
    title      : seoConfig.defaultTitle,
    description: seoConfig.defaultBio,
    images     : [defaultImage],
  },
  robots: {
    index : true,
    follow: true,
    googleBot: {
      index               : true,
      follow              : true,
      "max-image-preview": "large",
      "max-snippet"      : -1,
      "max-video-preview": -1,
    },
  },
};

export const homeMetadata: Metadata = {
  title      : "Rody Huancas | Software Developer",
  description: "Desarrollador de software especializado en crear soluciones digitales escalables y robustas con React, Next.js y TypeScript.",
  keywords   : [
    ...seoConfig.aliases,
    "Software Developer",
    "Desarrollador de software",
    "Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Peru",
  ],
  alternates: {
    canonical: seoConfig.siteUrl,
  },
  openGraph: {
    title      : "Rody Huancas | Software Developer",
    description: "Construyo aplicaciones pensando en el largo plazo y en la experiencia del usuario.",
    url        : seoConfig.siteUrl,
    locale     : seoConfig.locale,
    siteName   : seoConfig.siteName,
    type       : "website",
  },
  twitter: {
    card       : "summary_large_image",
    title      : "Rody Huancas | Software Developer",
    description: "Portafolio y servicios de desarrollo de software moderno.",
    images     : [defaultImage],
  },
};

export const projectsMetadata: Metadata = {
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
  openGraph: {
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
    images     : [defaultImage],
  },
  alternates: {
    canonical: `${seoConfig.siteUrl}/projects`,
  },
};
