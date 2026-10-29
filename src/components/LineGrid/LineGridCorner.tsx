"use client";

import { motion, type Transition } from "framer-motion";
import { cn } from "@/utils/cn.utils";

interface Props {
  className : string;
  transition: Transition;
}

const LineGridCorner = ({ className, transition }: Props) => {
  return (
    <motion.span
      className={cn("pointer-events-none absolute z-10 h-1.75 w-1.75 bg-status", className)}
      aria-hidden="true"
      variants={{
        hidden : { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={transition}
    />
  );
};

export default LineGridCorner;
