"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn.utils";
import { gridTimeline } from "@/config/grid.config";
import { useMotionTransition } from "@/hooks/useMotionTransition";

interface Props {
  ariaLabel : string;
  children  : ReactNode;
  className?: string;
}

const LineGrid = ({ ariaLabel, children, className }: Props) => {
  const transition     = useMotionTransition();
  const lineTransition = transition({ duration: gridTimeline.lineDuration, ease: "easeInOut" });

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

      <ul className={cn("grid", className)} aria-label={ariaLabel}>
        {children}
      </ul>
    </motion.div>
  );
};

export default LineGrid;
