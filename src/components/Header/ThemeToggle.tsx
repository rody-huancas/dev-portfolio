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
      <AnimatePresence mode="wait">
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
            initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3 }}
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
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <motion.circle
              cx="12"
              cy="12"
              r="5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />

            <motion.g
              initial={{ rotate: -45 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
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
              ].map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    delay: i * 0.03,
                    duration: 0.5,
                  }}
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
