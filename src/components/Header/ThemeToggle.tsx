"use client";

import { useEffect, useState } from "react";
import useThemeStore from "@/store/useThemeStore";
import { cn } from "@/utils/cn.utils";
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
  }, [setTheme, theme]);

  if (!mounted) return <div className="w-12 h-12" />;

  return (
    <button
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 group relative",
        "text-gray-600 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/10",
      )}
      onClick={toggleTheme}
      aria-label="Cambiar tema"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.svg
            key="moon"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute inset-0 m-auto"
            initial={{ opacity: 0, scale: 0.82, filter: "blur(3px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(2px)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              initial={{ pathLength: 0.35, opacity: 0.7 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="sun"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute inset-0 m-auto"
            initial={{ opacity: 0, scale: 0.82, filter: "blur(3px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(2px)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.circle
              cx="12"
              cy="12"
              r="5"
              initial={{ scale: 0.7, opacity: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />

            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              {[
                "M12 1v2",
                "M12 21v2",
                "M4.22 4.22l1.42 1.42",
                "M18.36 18.36l1.42 1.42",
                "M1 12h2",
                "M21 12h2",
                "M4.22 19.78l1.42-1.42",
                "M18.36 5.64l1.42-1.42",
              ].map((d) => (
                <motion.path
                  key={d}
                  d={d}
                  initial={{ pathLength: 0.4, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              ))}
            </motion.g>
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
