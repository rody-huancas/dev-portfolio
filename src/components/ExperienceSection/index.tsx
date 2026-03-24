"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Title from "../Title";
import CardExperience from "./CardExperience";
import { useI18n } from "@/i18n/I18nProvider";
import { experienceData } from "@/data/experience.data";

const ExperienceSection = () => {
  const { dictionary } = useI18n();
  const experiences  = experienceData;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping  : 30,
    restDelta: 0.001,
  });

  return (
    <section className="w-full mt-20 px-4 md:px-0">
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
          {experiences.map((experience) => (
            <CardExperience key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
