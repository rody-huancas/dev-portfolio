"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, localeCookieName, localeStorageKey, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { type AppDictionary } from "@/types/dictionaries.types";

interface I18nContextValue {
  locale    : Locale;
  dictionary: AppDictionary;
  setLocale : (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

interface I18nProviderProps {
  children      : React.ReactNode;
  initialLocale?: Locale;
}

export const I18nProvider = ({ children, initialLocale = defaultLocale }: I18nProviderProps) => {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem(localeStorageKey, locale);
    document.cookie = `${localeCookieName}=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    dictionary: getDictionary(locale),
    setLocale,
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }

  return context;
};
