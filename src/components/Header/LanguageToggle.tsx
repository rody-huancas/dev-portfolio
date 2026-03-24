"use client";

import { motion } from "framer-motion";
import { TbLanguage } from "react-icons/tb";
import { useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/config";
import { cn } from "@/utils/cn.utils";

const localeCycle: Record<Locale, Locale> = {
  es: "en",
  en: "es",
};

const LanguageToggle = () => {
  const { locale, setLocale, dictionary } = useI18n();
  const nextLocale = localeCycle[locale];
  const nextLocaleLabel = nextLocale === "es"
    ? locale === "es" ? "espanol" : "Spanish"
    : locale === "es" ? "ingles" : "English";

  return (
    <button
      type="button"
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 group relative",
        "text-gray-600 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/10",
      )}
      onClick={() => setLocale(nextLocale)}
      aria-label={dictionary.header.languageToggle.ariaLabel(nextLocaleLabel)}
      title={dictionary.header.languageToggle.tooltip}
    >
      <motion.div
        key={locale}
        initial={{ opacity: 0, scale: 0.9, y: 2 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center leading-none"
      >
        <TbLanguage size={17} className="mb-0.5" />
        <span className="text-[10px] font-black tracking-[0.18em] pl-[0.18em]">
          {dictionary.header.languageToggle.shortLabel[locale]}
        </span>
      </motion.div>
    </button>
  );
};

export default LanguageToggle;
