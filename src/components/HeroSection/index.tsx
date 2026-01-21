import ExperienceSection from "../ExperienceSection";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center gap-10 pt-10"
      aria-label="Sección de presentación"
    >
      <div className="w-full">
        <div
          className="flex items-center gap-2 mb-8"
          role="status"
          aria-live="polite"
        >
          <div
            className="w-2.5 h-2.5 rounded-full bg-status animate-pulse"
            aria-hidden="true"
          ></div>
          <span className="text-gray-300 text-sm font-medium">
            Disponible para trabajar
          </span>
        </div>

        <h1 className="text-7xl font-bold mb-12 leading-[1.1] tracking-tighter">
          Hola, soy <span className="text-white">Rody</span>
          <br />
          un <span className="text-hero-muted">desarrollador web.</span>
        </h1>

        <nav
          className="flex items-center gap-4 mb-12"
          aria-label="Enlaces de contacto y redes sociales"
        >
          <a
            href="mailto:rodyhuancas.04@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-button hover:bg-button-hover text-white rounded-full transition-colors duration-300"
            aria-label="Enviar correo electrónico"
            title="Contactar por email"
          >
            <FiMail size={20} aria-hidden="true" />
            <span className="font-medium">Email</span>
          </a>

          <a
            href="https://github.com/rody-huancas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-button hover:bg-button-hover text-white rounded-full transition-colors duration-300"
            aria-label="Ver perfil de GitHub"
            title="Visitar GitHub"
          >
            <FaGithub size={20} aria-hidden="true" />
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/rody-huancas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-button hover:bg-button-hover text-white rounded-full transition-colors duration-300"
            aria-label="Ver perfil de LinkedIn"
            title="Visitar LinkedIn"
          >
            <FaLinkedinIn size={20} aria-hidden="true" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </nav>

        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Desarrollo aplicaciones para resolver problemas concretos, con código
          claro y decisiones técnicas bien pensadas. +3 años construyendo
          software mantenible y bien estructurado.
        </p>
      </div>

      <ExperienceSection />
    </section>
  );
};

export default HeroSection;
