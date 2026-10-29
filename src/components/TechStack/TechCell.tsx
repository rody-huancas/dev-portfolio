"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import LineGridCell from "../LineGrid/LineGridCell";
import { stackTimeline } from "@/config/stack.config";
import { useMotionTransition } from "@/hooks/useMotionTransition";
import type { ITech } from "@/types/stack.types";

interface Props {
  tech : ITech;
  index: number;
}

const TechCell = ({ tech, index }: Props) => {
  const { name, icon: Icon, color, lightColor, iconScale } = tech;
  const brandStyle = { "--brand": color, "--brand-light": lightColor ?? color } as CSSProperties;
  const transition = useMotionTransition();

  return (
    <LineGridCell
      index={index}
      className="group flex flex-col items-center justify-center gap-2.5 px-2 py-7 transition-colors duration-300 hover:bg-status/5"
      style={brandStyle}
    >
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
    </LineGridCell>
  );
};

export default TechCell;
