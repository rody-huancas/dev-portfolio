"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/config/stack.config";
import useThemeStore from "@/store/useThemeStore";

const TechSlider = () => {
  const theme = useThemeStore((state) => state.theme);
  const duplicatedTech = [...TECH_STACK, ...TECH_STACK];

  return (
    <div 
      className="py-16 overflow-hidden w-full bg-transparent relative" 
      aria-label="Stack tecnológico"
    >
      <h2 className="sr-only">Habilidades técnicas</h2>
      
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-foreground dark:from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-foreground dark:from-background to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-visible py-12">
          <motion.div
            className="flex whitespace-nowrap gap-20 items-center px-10"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat    : Infinity,
                repeatType: "loop",
                duration  : 40,
                ease      : "linear",
              },
            }}
            whileHover={{ transition: { duration: 0 } }} 
            style={{ width: "fit-content" }}
          >
            {duplicatedTech.map((tech, index) => {
              const Icon = tech.icon;
              const iconColor = theme === "dark" ? tech.color : (tech.lightColor || tech.color);
              
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-center gap-3"
                  role="listitem"
                >
                  <div
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-full scale-125"
                    style={{ backgroundColor: iconColor }}
                  />

                  <div className="relative p-4 rounded-xl bg-white/5 dark:bg-input-bg/40 border-none transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <Icon
                      size={50}
                      className="relative z-20"
                      style={{ color: iconColor, opacity: 0.9 }}
                    />
                  </div>

                  <span className="text-xs font-medium text-background dark:text-description dark:group-hover:text-secondary transition-all duration-300 absolute -bottom-6">
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
