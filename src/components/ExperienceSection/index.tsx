"use client";

import { useEffect, useId, useRef, useState } from "react";
import { animate, motion, useReducedMotion, useScroll, useSpring, type AnimationPlaybackControls } from "framer-motion";
import Title from "../Title";
import CardExperience from "./CardExperience";
import ExperienceToggle from "./ExperienceToggle";
import ExperienceCollapse from "./ExperienceCollapse";
import { useI18n } from "@/i18n/I18nProvider";
import { experienceData } from "@/data/experience.data";
import { experienceConfig } from "@/config/experience.config";

const ExperienceSection = () => {
  const { dictionary } = useI18n();
  const sectionRef         = useRef<HTMLElement>(null);
  const containerRef       = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<AnimationPlaybackControls | null>(null);
  const collapseId         = useId();
  const shouldReduceMotion = useReducedMotion();
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleExperiences = experienceData.slice(0, experienceConfig.initialVisible);
  const hiddenExperiences  = experienceData.slice(experienceConfig.initialVisible);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping  : 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    return () => scrollAnimationRef.current?.stop();
  }, []);

  // Se anima el scroll manualmente: el colapso cambia la altura de la página y
  // el scroll anchoring del navegador cancela un scrollIntoView suave.
  const scrollToSectionStart = () => {
    const section = sectionRef.current;
    if (!section) return;

    const target = section.getBoundingClientRect().top + window.scrollY;

    scrollAnimationRef.current?.stop();

    if (shouldReduceMotion) {
      window.scrollTo(0, target);
      return;
    }

    scrollAnimationRef.current = animate(window.scrollY, target, {
      duration: experienceConfig.scrollDuration,
      ease    : [0.4, 0, 0.2, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    });
  };

  const handleToggle = () => {
    if (isExpanded) scrollToSectionStart();

    setIsExpanded((current) => !current);
  };

  return (
    <section ref={sectionRef} className="w-full px-4 md:px-0">
      <div className="mb-16">
        <Title
          label={dictionary.experience.sectionLabel}
          title={dictionary.experience.sectionTitle}
          subtitle={dictionary.experience.sectionSubtitle}
        />

        <p className="text-text-muted dark:text-foreground/70 text-lg max-w-xl">
          {dictionary.experience.description}
        </p>
      </div>

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        <div className="absolute left-0 top-0 w-0.5 h-full bg-button/30 dark:bg-foreground/20" />

        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-0 top-0 w-0.5 h-full bg-status z-10"
        />

        <div className="flex flex-col">
          {visibleExperiences.map((experience) => (
            <CardExperience key={experience.id} experience={experience} />
          ))}
        </div>

        {hiddenExperiences.length > 0 && (
          <ExperienceCollapse id={collapseId} isOpen={isExpanded}>
            {hiddenExperiences.map((experience) => (
              <CardExperience key={experience.id} experience={experience} />
            ))}
          </ExperienceCollapse>
        )}
      </div>

      {hiddenExperiences.length > 0 && (
        <div className="mt-12 pl-10">
          <ExperienceToggle
            isOpen={isExpanded}
            controls={collapseId}
            label={isExpanded ? dictionary.experience.showLess : dictionary.experience.showMore}
            onToggle={handleToggle}
          />
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
