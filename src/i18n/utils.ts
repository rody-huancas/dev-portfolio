import { defaultLocale, type Locale } from "@/i18n/config";
import type { LocalizedText } from "@/types/i18n.types";

export const getLocalizedText = (value: LocalizedText, locale: Locale) => {
  return value[locale] ?? value[defaultLocale];
};
