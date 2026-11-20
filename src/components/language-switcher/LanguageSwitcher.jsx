import { FiGlobe } from "react-icons/fi";
import useTranslation from "../../i18n/useTranslation";
import { languageOptions } from "../../i18n/languages";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher({ variant = "home" }) {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div
      className={`language-switcher language-switcher--${variant}`}
      role="group"
      aria-label={t("common.languageSelector.label")}
    >
      <FiGlobe className="language-switcher__icon" aria-hidden="true" />
      <div className="language-switcher__options">
        {languageOptions.map((option) => {
          const isActive = language === option.code;

          return (
            <button
              key={option.code}
              className="language-switcher__option"
              type="button"
              lang={option.htmlLang}
              aria-pressed={isActive}
              aria-label={option.nativeLabel}
              title={option.nativeLabel}
              onClick={() => setLanguage(option.code)}
            >
              {option.shortLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}
