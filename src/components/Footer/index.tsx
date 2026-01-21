import { scrollToTop } from "@/utils/scroll.utils";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative mt-20 border-t border-white/5 bg-background"
      role="contentinfo"
    >
      <div className="hidden" aria-hidden="true">
        <h2>Rody Huancas - Desarrollador Full Stack en Perú</h2>
        <p>
          Especialista en React, Node.js y desarrollo de aplicaciones web y móviles.
        </p>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-status/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-5 sm:px-0 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs text-center md:text-left">
            &copy; {currentYear} — Diseñado y desarrollado por{" "}
            <a
              href="https://github.com/rody-huancas"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-status hover:underline"
              title="Ver perfil de desarrollador de Rody Huancas"
            >
              Rody Huancas
            </a>
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Volver al inicio de la página"
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-hero-muted hover:text-status transition-colors cursor-pointer"
          >
            <span>Ir al inicio</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 group-hover:border-status group-hover:-translate-y-1 transition-all">
              <FiArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
