import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title      : "Rody Huancas | Software Developer",
  description: "Desarrollador de software especializado en crear soluciones digitales escalables y robustas. Más de 3 años transformando ideas en código eficiente.",
  keywords   : [
    "Rody Huancas",
    "Hilder Rody Huancas Chuquipoma",
    "Software Developer",
    "Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Perú",
  ],
  openGraph: {
    title      : "Rody Huancas | Software Developer",
    description: "Construyo aplicaciones pensando en el largo plazo y en la experiencia del usuario.",
    url        : "https://rody-huancas.dev",
    siteName   : "Rody Huancas Portfolio",
    type       : "website",
  },
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
