import "./PP6.css";
import useTranslation from "../../../../i18n/useTranslation";

export default function PP6() {
  const { t } = useTranslation();

  return (
    <section className="pp6-section">
      <div className="pp6-card">
        <div className="pp6-content">
          <h2 className="pp6-title">{t("baby.author.heading")}</h2>
          <div className="pp6-text">
            {t("baby.author.paragraphs").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
