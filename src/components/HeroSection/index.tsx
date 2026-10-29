"use client";

import HeroName from "./HeroName";
import HeroBadge from "./HeroBadge";
import HeroIntro from "./HeroIntro";
import HeroLinks from "./HeroLinks";
import ExperienceSection from "../ExperienceSection";
import { useI18n } from "@/i18n/I18nProvider";

const HeroSection = () => {
  const { dictionary } = useI18n();
  const { hero } = dictionary;

  return (
    <section
      id="hero"
      className="flex flex-col gap-20"
      aria-label={hero.sectionAria}
    >
      <div className="relative flex min-h-screen flex-col justify-center">
        <div
          className="pointer-events-none absolute inset-0 grid-bg"
          aria-hidden="true"
        />

        <div className="@container relative z-10 w-full">
          <div className="py-24 [--hero-name-size:min(190px,calc(100cqw/4.7))]">
            <HeroBadge label={hero.availability} />

            <div className="mt-[calc(var(--hero-name-size)*0.044)]">
              <HeroName
                firstName={hero.name.first}
                lastName={hero.name.last}
                role={hero.role}
              />
            </div>

            <div className="mt-[max(1.75rem,calc(var(--hero-name-size)*0.28))]">
              <HeroIntro
                beforeYears={hero.intro.beforeYears}
                years={hero.intro.years}
                afterYears={hero.intro.afterYears}
              />
            </div>

            <div className="mt-[max(2rem,calc(var(--hero-name-size)*0.224))]">
              <HeroLinks
                ariaLabel={hero.linksNavAria}
                copy={hero.links}
              />
            </div>
          </div>
        </div>
      </div>

      <ExperienceSection />
    </section>
  );
};

export default HeroSection;
