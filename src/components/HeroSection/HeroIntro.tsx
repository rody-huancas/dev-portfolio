"use client";

import { motion } from "framer-motion";
import { heroTimeline } from "@/config/hero.config";
import { useHeroTransition } from "@/hooks/useHeroTransition";

interface Props {
  beforeYears: string;
  years      : string;
  afterYears : string;
}

const HeroIntro = ({ beforeYears, years, afterYears }: Props) => {
  const transition = useHeroTransition();

  return (
    <motion.p
      className="max-w-[600px] text-lg leading-8 text-background/68 dark:text-foreground/74 md:text-xl"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition({ delay: heroTimeline.introDelay, duration: heroTimeline.revealDuration, ease: "easeOut" })}
    >
      {beforeYears}
      <span className="font-semibold text-status">{years}</span>
      {afterYears}
    </motion.p>
  );
};

export default HeroIntro;
