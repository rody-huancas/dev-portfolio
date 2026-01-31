"use client";

import { useEffect, useState } from "react";
import useThemeStore from "@/store/useThemeStore";
import { cn } from "@/utils/cn.utils";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const theme       = useThemeStore((state) => state.theme);
  const setTheme    = useThemeStore((state) => state.setTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const storedTheme = localStorage.getItem("rody-theme-storage");
    
    if (!storedTheme) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(systemTheme);
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("rody-theme-storage")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [setTheme, theme]);

  if (!mounted) return <div className="w-12 h-12" />;

  return (
    <button
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group relative overflow-hidden",
        "text-gray-600 dark:text-gray-100 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10",
      )}
      onClick={toggleTheme}
      aria-label="Cambiar tema"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {theme === "light" ? (
            <BsMoon size={20} className="transition-transform group-hover:rotate-12" />
          ) : (
            <BsSun size={20} className="transition-transform group-hover:rotate-90" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
