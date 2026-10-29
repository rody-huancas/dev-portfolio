"use client";

import { motion } from "framer-motion";
import TechCell from "./TechCell";
import { stackTimeline } from "@/config/stack.config";
import { useMotionTransition } from "@/hooks/useMotionTransition";
import type { ITech } from "@/types/stack.types";

interface Props {
  ariaLabel   : string;
  technologies: ITech[];
}

const TechGrid = ({ ariaLabel, technologies }: Props) => {
  const transition     = useMotionTransition();
  const lineTransition = transition({ duration: stackTimeline.lineDuration, ease: "easeInOut" });

  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.span
        className="pointer-events-none absolute inset-x-0 -top-px h-px origin-left bg-background/10 dark:bg-foreground/10"
        aria-hidden="true"
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={lineTransition}
      />
      <motion.span
        className="pointer-events-none absolute inset-y-0 -left-px w-px origin-top bg-background/10 dark:bg-foreground/10"
        aria-hidden="true"
        variants={{ hidden: { scaleY: 0 }, visible: { scaleY: 1 } }}
        transition={lineTransition}
      />

      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6" aria-label={ariaLabel}>
        {technologies.map((tech, index) => (
          <TechCell key={tech.name} tech={tech} index={index} />
        ))}
      </ul>
    </motion.div>
  );
};

export default TechGrid;
