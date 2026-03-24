"use client";

import Title from "../Title";
import TechSlider from "../TechSlider";
import { useI18n } from "@/i18n/I18nProvider";

const AboutSection = () => {
  const { dictionary } = useI18n();
  const about = dictionary.about.paragraphs;

  return (
    <section id="about" className="pt-24">
      <div className="space-y-5">
        <Title
          label={dictionary.about.sectionLabel}
          title={dictionary.about.sectionTitle}
          subtitle={dictionary.about.sectionSubtitle}
        />

        <div className="space-y-10 text-background/60 dark:text-foreground text-lg md:text-xl leading-relaxed">
          <p>
            {about.first.beforeName}
            <span className="dark:text-foreground text-background/80 font-medium">
              Rody Huancas
            </span>
            {about.first.afterName}
            <a
              href="https://www.uss.edu.pe/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-foreground text-background/80 font-medium hover:text-status transition-all border-b border-status/20 hover:border-status mx-1"
              title="Universidad Señor de Sipán"
            >
              {about.first.universityLabel}
            </a>
            {about.first.afterUniversity}
            <span className="text-status">{about.first.years}</span>
            {about.first.afterYears}
          </p>

          <p>
            {about.second.beforeRole}
            <span className="text-status font-medium underline decoration-status/40 underline-offset-8">
              {about.second.role}
            </span>
            {about.second.between}
            <span className="dark:text-foreground text-background/80">
              {about.second.architecture}
            </span>
            {about.second.afterArchitecture}
          </p>

          <p>
            {about.third.beforeStack}
            <span className="dark:text-foreground text-background/80">
              {about.third.stack}
            </span>
            {about.third.between}
            <span className="text-status">{about.third.emphasis}</span>
            {about.third.afterEmphasis}
          </p>

          <div className="pt-10 border-t border-background/10 dark:border-foreground/10">
            <p className="dark:text-foreground text-background/60 font-medium">
              {about.closing.beforeHighlight}
              <span className="text-status">{about.closing.highlight}</span>
              {about.closing.afterHighlight}
            </p>
          </div>
        </div>
      </div>

      <TechSlider />
    </section>
  );
};

export default AboutSection;
