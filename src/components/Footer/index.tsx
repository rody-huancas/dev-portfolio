"use client";

import { scrollToTop } from "@/utils/scroll.utils";
import { useI18n } from "@/i18n/I18nProvider";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const { dictionary } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative mt-20 border-t border-white/5 mb-20 lg:mb-0 px-7 lg:px-0 bg-foreground dark:bg-background"
      role="contentinfo"
    >
      <div className="hidden" aria-hidden="true">
        <h2>{dictionary.footer.hiddenTitle}</h2>
        <p>
          {dictionary.footer.hiddenDescription}
        </p>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-status/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-5 sm:px-0 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-7">
          <p className="text-text-muted text-xs text-center md:text-left">
            &copy; {currentYear} — {dictionary.footer.madeBy}{" "}
            <a
              href="https://github.com/rody-huancas"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-status hover:underline"
              title={dictionary.footer.profileTitle}
            >
              Rody Huancas
            </a>
          </p>

          <button
            onClick={scrollToTop}
            aria-label={dictionary.footer.backToTopAria}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-hero-muted hover:text-status transition-colors cursor-pointer"
          >
            <span>{dictionary.footer.backToTop}</span>
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
