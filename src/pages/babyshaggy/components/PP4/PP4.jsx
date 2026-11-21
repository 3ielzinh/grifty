import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import "./PP4.css";
import { getCheckoutUrl, page2Asset } from "../../config";
import { trackCheckoutStart } from "../../metaPixel";
import useTranslation from "../../../../i18n/useTranslation";

export default function PP4() {
  const { language, t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    page2Asset("fd/dp/1.jpg"),
    page2Asset("fd/dp/2.jpg"),
    page2Asset("fd/dp/3.jpg"),
    page2Asset("fd/dp/4.jpg"),
    page2Asset("fd/dp/5.jpg"),
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const firstImage = images[currentIndex];
  const secondImage = images[(currentIndex + 1) % images.length];

  return (
    <section className="pp4-section">
      <div className="pp4-container">
        <h2 className="pp4-title">{t("baby.feedback.heading")}</h2>
        
        <div className="pp4-slider-wrapper">
          <button className="pp4-arrow pp4-prev" onClick={handlePrev} aria-label={t("baby.feedback.previous")}>
            <FiChevronLeft />
          </button>

          <div className="pp4-feedback-container">
            <button className="pp4-feedback-box" onClick={() => setSelectedImage(firstImage)} aria-label={t("baby.feedback.enlarge")}>
              <img src={firstImage} alt={t("baby.feedback.imageAlt", { number: 1 })} loading="lazy" decoding="async" />
            </button>
            <button className="pp4-feedback-box pp4-feedback-box-secondary" onClick={() => setSelectedImage(secondImage)} aria-label={t("baby.feedback.enlargeNext")}>
              <img src={secondImage} alt={t("baby.feedback.imageAlt", { number: 2 })} loading="lazy" decoding="async" />
            </button>
          </div>

          <button className="pp4-arrow pp4-next" onClick={handleNext} aria-label={t("baby.feedback.next")}>
            <FiChevronRight />
          </button>
        </div>

        <a className="pp4-cta-button" href={getCheckoutUrl(language)} onClick={trackCheckoutStart}>
          {t("baby.feedback.cta")}
        </a>
      </div>

      {selectedImage && (
        <div className="pp4-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="pp4-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pp4-modal-close" onClick={() => setSelectedImage(null)} aria-label={t("baby.feedback.close")}>
              <FiX />
            </button>
            <img src={selectedImage} alt={t("baby.feedback.enlargedAlt")} decoding="async" />
          </div>
        </div>
      )}
    </section>
  );
}
