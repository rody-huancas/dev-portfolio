import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import { homeMetadata } from "@/seo/metadata";
import { homeProfilePageJsonLd, jsonLd } from "@/seo/schema";

export const metadata: Metadata = homeMetadata;

const HomePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(homeProfilePageJsonLd)}
      />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
