"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import useThemeStore from "@/store/useThemeStore";
import { TECH_STACK } from "@/config/stack.config";

const DURATION = 30;

const TechSlider = () => {
  const theme        = useThemeStore((state) => state.theme);
  const controls     = useAnimation();
  const x            = useMotionValue(0);
  const trackRef     = useRef<HTMLDivElement>(null);
  const dragStartX   = useRef(0);
  const dragStartVal = useRef(0);
  const isDragging   = useRef(false);
  const isLooping    = useRef(false);

  const duplicatedTech = [...TECH_STACK, ...TECH_STACK];

  const getHalfWidth = () => trackRef.current ? trackRef.current.scrollWidth / 2 : 0;

  const loop = async (fromX: number) => {
    if (isLooping.current) return;
    isLooping.current = true;

    const half     = getHalfWidth();
    const progress = Math.abs(fromX) / half;
    const duration = DURATION * (1 - progress);

    await controls.start({
      x         : -half,
      transition: { duration, ease: "linear" },
    });

    while (isLooping.current) {
      x.set(0);
      await controls.start({
        x         : -half,
        transition: { duration: DURATION, ease: "linear" },
      });
    }
  };

  const stopLoop = () => {
    isLooping.current = false;
    controls.stop();
  };

  useEffect(() => {
    loop(0);

    const handleGlobalMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        loop(x.get());
      }
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      stopLoop();
    };
  }, []);

  const handleMouseEnter = () => { if (!isDragging.current) stopLoop(); };
  const handleMouseLeave = () => { if (!isDragging.current) loop(x.get()); };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current   = true;
    stopLoop();
    dragStartX.current   = e.clientX;
    dragStartVal.current = x.get();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const half = getHalfWidth();
    const dx   = e.clientX - dragStartX.current;
    let newX   = dragStartVal.current + dx;

    if (newX > 0)     newX = newX - half;
    if (newX < -half) newX = newX + half;

    x.set(newX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current   = true;
    stopLoop();
    dragStartX.current   = e.touches[0].clientX;
    dragStartVal.current = x.get();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const half = getHalfWidth();
    const dx   = e.touches[0].clientX - dragStartX.current;
    let newX   = dragStartVal.current + dx;

    if (newX > 0)     newX = newX - half;
    if (newX < -half) newX = newX + half;

    x.set(newX);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    loop(x.get());
  };

  return (
    <div
      className="py-16 overflow-hidden w-full bg-transparent relative select-none"
      aria-label="Stack tecnológico"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
    >
      <h2 className="sr-only">Habilidades técnicas</h2>

      <div className="relative overflow-hidden py-4 -my-4 -rotate-2 transform-gpu">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-foreground dark:from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-foreground dark:from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex overflow-visible py-14"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            animate={controls}
            className="flex whitespace-nowrap gap-20 items-center px-10 will-change-transform"
          >
            {duplicatedTech.map((tech, index) => {
              const Icon      = tech.icon;
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
