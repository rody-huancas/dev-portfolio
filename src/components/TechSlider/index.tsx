"use client";

import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { TECH_STACK } from "@/config/stack.config";

const TechSlider = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const controls       = useAnimationControls();
  const duplicatedTech = [...TECH_STACK, ...TECH_STACK];

  useEffect(() => {
    const startAnimation = async () => {
      if (!isPaused) {
        await controls.start({
          x         : "-50%",
          transition: {
            duration  : 50,
            repeat    : Infinity,
            ease      : "linear",
            repeatType: "loop",
          },
        });
      }
    };
    
    startAnimation();
  }, [isPaused, controls]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="py-16 overflow-hidden w-full bg-transparent relative" 
      aria-label="Stack tecnológico y herramientas"
    >
      <h2 className="sr-only">Habilidades técnicas y tecnologías: React, Next.js, TypeScript y más.</h2>
      
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background via-background/50 to-transparent z-10 pointer-events-none" />
        
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background via-background/50 to-transparent z-10 pointer-events-none" />

        <div 
          className="flex overflow-visible py-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="list"
        >
          <motion.div
            className="flex whitespace-nowrap gap-20 items-center px-10"
            animate={controls}
          >
            {duplicatedTech.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-center gap-3 transition-all duration-300"
                  role="listitem"
                  aria-label={tech.name}
                >
                  <div
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-full scale-125"
                    style={{ backgroundColor: tech.color }}
                  />

                  <div 
                    className="relative p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                  >
                    <Icon
                      size={50}
                      className="relative z-20 transition-all duration-300"
                      style={{ color: tech.color, opacity: 0.9 }}
                    />
                  </div>

                  <span className="text-xs font-medium text-white/40 group-hover:text-white/80 transition-all duration-300 absolute -bottom-6">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechSlider;