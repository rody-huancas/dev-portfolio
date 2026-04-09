"use client";

import ExperienceSection from "../ExperienceSection";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { useI18n } from "@/i18n/I18nProvider";

const HeroSection = () => {
  const { dictionary } = useI18n();

  return (
    <section
      id="hero"
      className="flex flex-col gap-20"
      aria-label={dictionary.hero.sectionAria}
    >
      <div className="relative flex min-h-screen flex-col justify-center">
        <div
          className="pointer-events-none absolute inset-0 grid-bg"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-5xl space-y-16 lg:px-5">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-status/20 bg-status/8 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-status">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-status" />
            </span>
            <span>{dictionary.hero.availability}</span>
          </div>

          <h1 className="mt-5 max-w-4xl space-y-5 text-[2.85rem] font-bold leading-[0.94] tracking-[-0.07em] text-background dark:text-foreground sm:space-y-6 sm:text-[4.2rem] sm:leading-[0.92] md:text-[5.2rem] lg:text-[6rem]">
            <span className="block">{dictionary.hero.greeting}</span>

            <span className="mt-3 block md:mt-4">
              <span className="relative inline-flex max-w-full -rotate-[2.5deg] px-1 py-1">
                <span
                  className="absolute inset-0 translate-x-3 translate-y-2 rotate-[2.4deg] rounded-2xl border border-status/14 bg-status/10 sm:translate-x-4 sm:translate-y-2.5 sm:rounded-[1.2rem] md:translate-x-5 md:translate-y-3 md:rounded-[1.35rem]"
                  aria-hidden="true"
                />
                <span
                  className="absolute inset-0 translate-x-1.5 translate-y-1 rotate-[1.2deg] rounded-2xl border border-status/20 bg-status/18 sm:translate-x-2 sm:translate-y-1.5 sm:rounded-[1.2rem] md:translate-x-2.5 md:translate-y-2 md:rounded-[1.35rem]"
                  aria-hidden="true"
                />
                <span className="relative inline-flex max-w-full rounded-2xl bg-status px-4 py-2 text-[2.15rem] leading-none text-foreground shadow-[0_12px_30px_rgba(34,197,94,0.10)] sm:rounded-[1.2rem] sm:px-5 sm:py-2 sm:text-[3rem] md:rounded-[1.35rem] md:px-6 md:py-2.5 md:text-[4rem] lg:text-[6rem]">
                  <span
                    className="absolute left-2 top-1.5 h-1.5 w-1.5 rounded-full bg-foreground/16 sm:left-3 sm:top-2 sm:h-2 sm:w-2"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute right-2 bottom-1.5 h-1.5 w-1.5 rounded-full bg-foreground/12 sm:right-3 sm:bottom-2 sm:h-2 sm:w-2"
                    aria-hidden="true"
                  />
                  <span className="relative whitespace-nowrap">
                    {dictionary.hero.role}
                  </span>
                </span>
              </span>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-background/68 dark:text-foreground/74 md:text-xl">
            {dictionary.hero.intro.beforeYears}
            <span className="font-semibold text-status">{dictionary.hero.intro.years}</span>
            {dictionary.hero.intro.afterYears}
          </p>

          <nav
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
            aria-label={dictionary.hero.linksNavAria}
          >
            <a
              href="mailto:rodyhuancas.04@gmail.com"
              aria-label={dictionary.hero.email.ariaLabel}
              title={dictionary.hero.email.title}
              className="group inline-flex items-center gap-3 text-sm font-medium text-background/72 transition-colors hover:text-background dark:text-foreground/72 dark:hover:text-foreground"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/14 transition-transform duration-200 group-hover:-translate-y-0.5 dark:border-foreground/14">
                <FiMail aria-hidden="true" className="shrink-0 text-[0.9rem]" />
              </span>
              <span className="border-b border-transparent pb-1 transition-colors group-hover:border-current">
                {dictionary.hero.email.label}
              </span>
            </a>

            <a
              href="https://github.com/rody-huancas"
              aria-label={dictionary.hero.github.ariaLabel}
              title={dictionary.hero.github.title}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-medium text-background/72 transition-colors hover:text-background dark:text-foreground/72 dark:hover:text-foreground"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/14 transition-transform duration-200 group-hover:-translate-y-0.5 dark:border-foreground/14">
                <FaGithub
                  aria-hidden="true"
                  className="shrink-0 text-[0.9rem]"
                />
              </span>
              <span className="border-b border-transparent pb-1 transition-colors group-hover:border-current">
                GitHub
              </span>
            </a>

            <a
              href="https://linkedin.com/in/rody-huancas"
              aria-label={dictionary.hero.linkedin.ariaLabel}
              title={dictionary.hero.linkedin.title}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-medium text-background/72 transition-colors hover:text-background dark:text-foreground/72 dark:hover:text-foreground"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/14 transition-transform duration-200 group-hover:-translate-y-0.5 dark:border-foreground/14">
                <FaLinkedinIn
                  aria-hidden="true"
                  className="shrink-0 text-[0.9rem]"
                />
              </span>
              <span className="border-b border-transparent pb-1 transition-colors group-hover:border-current">
                LinkedIn
              </span>
            </a>

            <a
              href="https://res.cloudinary.com/dmgazox1n/image/upload/v1769735355/Portfolio/Documents/CV%20-%20HILDER%20RODY%20HUANCAS%20CHUQUIPOMA.pdf"
              aria-label={dictionary.hero.resume.ariaLabel}
              title={dictionary.hero.resume.title}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-medium text-background/72 transition-colors hover:text-background dark:text-foreground/72 dark:hover:text-foreground"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/14 transition-transform duration-200 group-hover:-translate-y-0.5 dark:border-foreground/14">
                <FiArrowUpRight
                  aria-hidden="true"
                  className="shrink-0 text-[0.9rem]"
                />
              </span>
              <span className="border-b border-transparent pb-1 transition-colors group-hover:border-current">
                {dictionary.hero.resume.label}
              </span>
            </a>
          </nav>
        </div>
      </div>

      <ExperienceSection />
    </section>
  );
};

export default HeroSection;
