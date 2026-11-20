import "./PP7.css";
import { page2Asset } from "../../config";
import useTranslation from "../../../../i18n/useTranslation";

export default function PP7() {
  const { t } = useTranslation();

  return (
    <section className="pp7-section">
      <div className="pp7-container">
        <div className="pp7-images">
          <div className="pp7-image-frame pp7-main-frame">
            <img className="pp7-main-image" src={page2Asset("profile/grifty-portrait.webp")} alt={t("baby.profile.portraitAlt")} loading="lazy" decoding="async" />
          </div>
          <div className="pp7-image-frame">
            <img className="pp7-demonstration-image" src={page2Asset("profile/grifty-demonstracao.webp")} alt={t("baby.profile.demonstrationAlt")} loading="lazy" decoding="async" />
          </div>
          <div className="pp7-image-frame">
            <img src={page2Asset("profile/grifty-aula.webp")} alt={t("baby.profile.classAlt")} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
