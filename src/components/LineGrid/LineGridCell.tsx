"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import LineGridCorner from "./LineGridCorner";
import { cn } from "@/utils/cn.utils";
import { gridTimeline } from "@/config/grid.config";
import { useMotionTransition } from "@/hooks/useMotionTransition";

interface Props {
  index     : number;
  children  : ReactNode;
  className?: string;
  style    ?: CSSProperties;
}

const lineX = {
  hidden : { scaleX: 0 },
  visible: { scaleX: 1 },
};

const lineY = {
  hidden : { scaleY: 0 },
  visible: { scaleY: 1 },
};

const cornerPositions = [
  "-top-1 -left-1",
  "-top-1 -right-[3px]",
  "-bottom-[3px] -left-1",
  "-bottom-[3px] -right-[3px]",
];

const LineGridCell = ({ index, children, className, style }: Props) => {
  const transition = useMotionTransition();

  const lineTransition = transition({
    delay   : index * gridTimeline.lineStagger,
    duration: gridTimeline.lineDuration,
    ease    : "easeInOut",
  });

  const cornerTransition = transition({
    delay   : gridTimeline.cornerDelay + index * gridTimeline.lineStagger,
    duration: gridTimeline.cornerDuration,
    ease    : "easeOut",
  });

  return (
    <li className={cn("relative", className)} style={style}>
      <motion.span
        className="pointer-events-none absolute inset-y-0 right-0 w-px origin-top bg-background/10 dark:bg-foreground/10"
        aria-hidden="true"
        variants={lineY}
        transition={lineTransition}
      />
      <motion.span
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-background/10 dark:bg-foreground/10"
        aria-hidden="true"
        variants={lineX}
        transition={lineTransition}
      />

      {cornerPositions.map((position) => (
        <LineGridCorner key={position} className={position} transition={cornerTransition} />
      ))}

      {children}
    </li>
  );
};

export default LineGridCell;
