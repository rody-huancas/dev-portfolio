import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import { seoConfig } from "@/config/seo.config";

export const metadata: Metadata = {
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
    images     : ["/logo.svg"],
  },
};

const HomePage = () => {
  const homePageJsonLd = {
    "@context": "https://schema.org",
    "@type"   : "ProfilePage",
    name       : "Inicio | Rody Huancas",
    url        : seoConfig.siteUrl,
    inLanguage : "es-PE",
    mainEntity : {
      "@type": "Person",
      name   : seoConfig.authorName,
      alternateName: seoConfig.aliases,
      jobTitle: seoConfig.role,
      url     : seoConfig.siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
