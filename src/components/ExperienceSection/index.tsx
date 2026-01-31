"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Title from "../Title";
import CardExperience from "./CardExperience";
import experienceData from "@/data/experience-data.json";
import type { IExperience } from "@/types/experience.types";

const ExperienceSection = () => {
  const experiences  = experienceData.experience as IExperience[];
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
        <Title label="Experiencia" title="Mi ruta" subtitle="profesional" />

        <p className="text-text-muted dark:text-foreground/70 text-lg max-w-xl">
          Trayectoria profesional enfocada en crear soluciones digitales
          eficientes y escalables.
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
