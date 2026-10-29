"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { aboutTimeline } from "@/config/about.config";
import { useMotionTransition } from "@/hooks/useMotionTransition";

interface Props {
  index     : number;
  children  : ReactNode;
  className?: string;
}

const AboutReveal = ({ index, children, className }: Props) => {
  const transition = useMotionTransition();

  return (
    <motion.div
      className={className}
      variants={{
        hidden : { opacity: 0, y: aboutTimeline.revealOffset },
        visible: { opacity: 1, y: 0 },
      }}
      transition={transition({
        delay   : index * aboutTimeline.textStagger,
        duration: aboutTimeline.revealDuration,
        ease    : "easeOut",
      })}
    >
      {children}
    </motion.div>
  );
};

export default AboutReveal;
