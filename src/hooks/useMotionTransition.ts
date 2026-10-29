"use client";

import { useReducedMotion, type Transition } from "framer-motion";

const instantTransition: Transition = { duration: 0, delay: 0 };

export const useMotionTransition = () => {
  const shouldReduceMotion = useReducedMotion();

  return (transition: Transition): Transition => {
    return shouldReduceMotion ? instantTransition : transition;
  };
};
