"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import TechCorner from "./TechCorner";
import { stackTimeline } from "@/config/stack.config";
import { useMotionTransition } from "@/hooks/useMotionTransition";
import type { ITech } from "@/types/stack.types";

interface Props {
  tech : ITech;
  index: number;
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

const TechCell = ({ tech, index }: Props) => {
  const { name, icon: Icon, color, lightColor, iconScale } = tech;
  const brandStyle = { "--brand": color, "--brand-light": lightColor ?? color } as CSSProperties;
  const transition = useMotionTransition();

  const lineTransition = transition({
    delay   : index * stackTimeline.lineStagger,
    duration: stackTimeline.lineDuration,
    ease    : "easeInOut",
  });

  const cornerTransition = transition({
    delay   : stackTimeline.cornerDelay + index * stackTimeline.lineStagger,
    duration: stackTimeline.revealDuration,
    ease    : "easeOut",
  });

  return (
    <li
      className="group relative flex flex-col items-center justify-center gap-2.5 px-2 py-7 transition-colors duration-300 hover:bg-status/5"
      style={brandStyle}
    >
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
        <TechCorner key={position} className={position} transition={cornerTransition} />
      ))}

      <motion.span
        className="flex flex-col items-center gap-2.5"
        variants={{
          hidden : { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={transition({
          delay   : stackTimeline.iconDelay + index * stackTimeline.iconStagger,
          duration: stackTimeline.revealDuration,
          ease    : "easeOut",
        })}
      >
        <Icon
          aria-hidden="true"
          className="size-6.5 text-background/85 transition duration-300 group-hover:-translate-y-0.5 group-hover:text-(--brand-light) dark:text-foreground/95 dark:group-hover:text-(--brand)"
          style={iconScale ? { scale: iconScale } : undefined}
        />
        <span className="text-sm text-background/60 transition-colors duration-300 group-hover:text-(--brand-light) dark:text-foreground/65 dark:group-hover:text-(--brand)">
          {name}
        </span>
      </motion.span>
    </li>
  );
};

export default TechCell;
