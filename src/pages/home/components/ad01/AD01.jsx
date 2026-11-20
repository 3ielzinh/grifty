import React from "react";
import "./AD01.css";
import bannerImg from "/grid.jpg";
import useTranslation from "../../../../i18n/useTranslation";

const AD01 = () => {
  const { t } = useTranslation();

  return (
    <section className="ad-banner-section">
      <div className="ad-banner-container">
        <h1 className="ad-banner-title">
          {t("home.lessons.prefix")} <strong>{t("home.lessons.highlight")}</strong> {t("home.lessons.suffix")}
        </h1>

        <div className="ad-banner-image-wrapper">
          <img 
            src={bannerImg} 
            alt={t("home.lessons.imageAlt")}
            className="ad-banner-image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default AD01;
