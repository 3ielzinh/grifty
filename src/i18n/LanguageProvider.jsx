import { useCallback, useEffect, useMemo, useState } from "react";
import LanguageContext from "./LanguageContext";
import translations from "./translations";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  getHtmlLanguage,
  isSupportedLanguage,
} from "./languages";

const getStoredLanguage = () => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isSupportedLanguage(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
};

const getNestedValue = (object, path) =>
  path.split(".").reduce((value, key) => value?.[key], object);

const interpolate = (value, parameters) => {
  if (typeof value !== "string" || !parameters) return value;

  return value.replace(/\{(\w+)\}/g, (match, key) =>
    Object.prototype.hasOwnProperty.call(parameters, key) ? String(parameters[key]) : match,
  );
};

export default function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getStoredLanguage);

  const setLanguage = useCallback((nextLanguage) => {
    if (isSupportedLanguage(nextLanguage)) setLanguageState(nextLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = getHtmlLanguage(language);

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // The language remains active for the current session when storage is unavailable.
    }
  }, [language]);

  const t = useCallback(
    (path, parameters) => {
      const localizedValue = getNestedValue(translations[language], path);
      const fallbackValue = getNestedValue(translations[DEFAULT_LANGUAGE], path);
      return interpolate(localizedValue ?? fallbackValue ?? path, parameters);
    },
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
