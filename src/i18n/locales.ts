export const locales = ["ja", "zh", "en"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  zh: "中文",
  en: "English",
};

const STORAGE_KEY = "tamap-locale";

export function getStoredLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && locales.includes(stored as Locale)) return stored as Locale;
  // Auto-detect from browser
  const lang = navigator.language.slice(0, 2);
  if (lang === "zh") return "zh";
  if (lang === "en") return "en";
  return "ja";
}

export function setStoredLocale(locale: Locale) {
  localStorage.setItem(STORAGE_KEY, locale);
}
