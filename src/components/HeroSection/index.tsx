import LinkButton from "../LinkButton";
import ExperienceSection from "../ExperienceSection";
import { FiMail } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi";
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
          <span className="text-background/60 dark:text-foreground text-sm font-medium">
            Disponible para trabajar
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-12 leading-[1.1] tracking-tighter">
          Hola, soy{" "}
          <span className="text-background/80 dark:text-foreground">Rody,</span>
          <br />
          <span className="text-background/60 dark:text-foreground/60">
            Software Developer.
          </span>
        </h1>

        <nav
          className="flex flex-wrap items-center gap-4 mb-12"
          aria-label="Enlaces de contacto y redes sociales"
        >
          <LinkButton
            href="mailto:rodyhuancas.04@gmail.com"
            ariaLabel="Enviar correo electrónico"
            title="Contactar por email"
            icon={FiMail}
            label="Email"
          />

          <LinkButton
            href="https://github.com/rody-huancas"
            ariaLabel="Ver perfil de GitHub"
            title="Visitar GitHub"
            icon={FaGithub}
            label="GitHub"
          />

          <LinkButton
            href="https://linkedin.com/in/rody-huancas"
            ariaLabel="Ver perfil de LinkedIn"
            title="Visitar LinkedIn"
            icon={FaLinkedinIn}
            label="LinkedIn"
          />

          <LinkButton
            href="https://res.cloudinary.com/dmgazox1n/image/upload/v1769735355/Portfolio/Documents/CV%20-%20HILDER%20RODY%20HUANCAS%20CHUQUIPOMA.pdf"
            ariaLabel="Ver currículum vitae"
            title="Ver CV"
            icon={HiDocumentText}
            label="CV"
          />
        </nav>

        <p className="text-background/60 dark:text-foreground text-lg max-w-2xl leading-relaxed">
          Programar es fácil, lo difícil es hacerlo simple. Llevo +3 años
          priorizando la claridad sobre la complejidad, convencido de que una
          solución es perfecta no cuando no hay nada más que añadir, sino cuando
          no queda nada por quitar.
        </p>
      </div>

      <ExperienceSection />
    </section>
  );
};

export default HeroSection;
