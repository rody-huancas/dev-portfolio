"use client";

import { AnimatePresence, motion } from "framer-motion";
import { experienceConfig } from "@/config/experience.config";
import { useMotionTransition } from "@/hooks/useMotionTransition";

interface Props {
  id      : string;
  isOpen  : boolean;
  children: React.ReactNode;
}

const ExperienceCollapse = ({ id, isOpen, children }: Props) => {
  const transition = useMotionTransition();

  return (
    <div id={id}>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="experience-collapse"
            className="-ml-3 overflow-hidden pl-3"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition({ duration: experienceConfig.collapseDuration, ease: [0.4, 0, 0.2, 1] })}
          >
            <div className="flex flex-col pt-12">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperienceCollapse;
