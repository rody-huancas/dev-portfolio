"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn.utils";
import { heroTimeline } from "@/config/hero.config";
import { permanentMarker } from "@/config/fonts.config";
import { useHeroTransition } from "@/hooks/useHeroTransition";

interface Props {
  label     : string;
  className?: string;
}

const BRUSH_PATH     = "M14 74c30-34 120-46 220-44s200 2 262 10c22 3 18 22 2 26-30 8-30 14-6 20 20 6 6 26-40 26-80 0-170-10-250-6-70 4-150 14-178-4-20-12-30-14-10-28z";
const HIGHLIGHT_PATH = "M40 58c80-14 200-16 300-10";
const FINAL_ROTATION = -5;

const HeroBrushTag = ({ label, className }: Props) => {
  const transition = useHeroTransition();

  return (
    <motion.span
      className={cn("relative flex h-[0.56em] w-[2.08em] items-center justify-center", className)}
      initial={{ rotate: 0 }}
      animate={{ rotate: FINAL_ROTATION }}
      transition={transition({ delay: heroTimeline.tagTextDelay, type: "spring", stiffness: 260, damping: 12 })}
    >
      <motion.svg
        viewBox="0 0 520 140"
        className="absolute inset-0 h-full w-full text-status"
        aria-hidden="true"
        focusable="false"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={transition({ delay: heroTimeline.brushDelay, duration: heroTimeline.brushDuration, ease: "easeOut" })}
      >
        <path d={BRUSH_PATH} fill="currentColor" />
        <path
          d={HIGHLIGHT_PATH}
          fill="none"
          stroke="var(--status-available-light)"
          strokeWidth={4}
          strokeLinecap="round"
          opacity={0.5}
        />
      </motion.svg>

      <motion.span
        className={cn(
          permanentMarker.className,
          "relative whitespace-nowrap text-[0.16em] leading-none font-normal tracking-normal text-[#06140b]",
        )}
        initial={{ opacity: 0, scale: 0.6, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={transition({ delay: heroTimeline.tagTextDelay, type: "spring", stiffness: 420, damping: 14 })}
      >
        {label}
      </motion.span>
    </motion.span>
  );
};

export default HeroBrushTag;
