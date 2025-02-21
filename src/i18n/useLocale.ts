import { useState, useCallback } from "react";
import { type Locale, getStoredLocale, setStoredLocale } from "./locales";
import { t, type TranslationKey } from "./translations";

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(getStoredLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setStoredLocale(newLocale);
    setLocaleState(newLocale);
  }, []);

  const tt = useCallback(
    (key: TranslationKey) => t(locale, key),
    [locale]
  );

  return { locale, setLocale, t: tt };
}
