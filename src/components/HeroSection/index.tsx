import LinkButton from "../LinkButton";
import ExperienceSection from "../ExperienceSection";
import { FiMail } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center gap-10 py-10 px-4 md:px-6"
      aria-label="Sección de presentación"
    >
      <div className="w-full">
        <div
          className="inline-flex items-center gap-2 mb-8 px-3 py-2 rounded-full bg-status/10 border border-status/20"
          role="status"
          aria-live="polite"
        >
          <div
            className="w-2 h-2 rounded-full bg-status animate-pulse shadow-lg shadow-status/50"
            aria-hidden="true"
          />
          <span className="text-background/70 dark:text-foreground/90 text-sm font-medium">
            Disponible para trabajar
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tighter">
          Hola, soy{" "}
          <span className="text-background dark:text-foreground bg-linear-to-r from-background to-background/80 dark:from-foreground dark:to-foreground/80 bg-clip-text">
            Rody
          </span>
          ,
          <br />
          <span className="text-background/60 dark:text-foreground/60">
            Software Developer
          </span>
        </h1>

        <p className="text-background/70 dark:text-foreground/80 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10">
          Programar es fácil, lo difícil es hacerlo simple. Llevo{" "}
          <strong className="font-semibold text-background/80 dark:text-foreground/90">
            +3 años
          </strong>{" "}
          priorizando la claridad sobre la complejidad, convencido de que una
          solución es perfecta no cuando no hay nada más que añadir, sino cuando
          no queda nada por quitar.
        </p>

        <nav
          className="flex flex-wrap items-center gap-3 mb-12"
          aria-label="Enlaces de contacto y redes sociales"
        >
          <LinkButton
            href="mailto:rodyhuancas.04@gmail.com"
            ariaLabel="Enviar correo electrónico a rodyhuancas.04@gmail.com"
            title="Contactar por email"
            icon={FiMail}
            label="Email"
          />

          <LinkButton
            href="https://github.com/rody-huancas"
            ariaLabel="Ver perfil de GitHub de Rody Huancas"
            title="Visitar GitHub"
            icon={FaGithub}
            label="GitHub"
            isExternal
          />

          <LinkButton
            href="https://linkedin.com/in/rody-huancas"
            ariaLabel="Ver perfil de LinkedIn de Rody Huancas"
            title="Visitar LinkedIn"
            icon={FaLinkedinIn}
            label="LinkedIn"
            isExternal
          />

          <LinkButton
            href="https://res.cloudinary.com/dmgazox1n/image/upload/v1769735355/Portfolio/Documents/CV%20-%20HILDER%20RODY%20HUANCAS%20CHUQUIPOMA.pdf"
            ariaLabel="Descargar currículum vitae en formato PDF"
            title="Descargar CV"
            icon={HiDocumentText}
            label="CV"
            isExternal
          />
        </nav>
      </div>

      <ExperienceSection />
    </section>
  );
};

export default HeroSection;