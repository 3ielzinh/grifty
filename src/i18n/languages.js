export const DEFAULT_LANGUAGE = "pt";
export const LANGUAGE_STORAGE_KEY = "grifty:language";

export const languageOptions = [
  { code: "pt", shortLabel: "PT", nativeLabel: "Português", htmlLang: "pt-BR" },
  { code: "en", shortLabel: "EN", nativeLabel: "English", htmlLang: "en" },
  { code: "es", shortLabel: "ES", nativeLabel: "Español", htmlLang: "es" },
];

export const isSupportedLanguage = (language) =>
  languageOptions.some(({ code }) => code === language);

export const getHtmlLanguage = (language) =>
  languageOptions.find(({ code }) => code === language)?.htmlLang ?? "pt-BR";
