export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";
export const localeStorageKey = "rody-locale";
export const localeCookieName = "rody-locale";

export const isLocale = (value: string | undefined | null): value is Locale => {
  return locales.includes(value as Locale);
};

export const resolveLocale = (value: string | undefined | null): Locale => {
  return isLocale(value) ? value : defaultLocale;
};
