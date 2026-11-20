import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import "./PP3.css";
import { page2Asset } from "../../config";
import useTranslation from "../../../../i18n/useTranslation";

export default function PP3() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = [
    {
      src: page2Asset("capa-shaggy.webp"),
      alt: t("baby.learning.coverAlt"),
    },
    {
      src: page2Asset("ad-optimized.webp"),
      alt: t("baby.learning.resultAlt"),
    },
  ];
  const currentImage = images[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pp3-section">
      <div className="pp3-container">
        <h2 className="pp3-title">{t("baby.learning.heading")}</h2>
        
        <ul className="pp3-list">
          {t("baby.learning.items").map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="pp3-gallery-wrapper">
          <div className="pp3-slider">
            <button className="pp3-arrow pp3-prev" onClick={handlePrev} aria-label={t("baby.learning.previous")}>
              <FiChevronLeft />
            </button>

            <button className="pp3-image-box" onClick={() => setIsModalOpen(true)} aria-label={t("baby.learning.enlarge", { item: currentImage.alt.toLowerCase() })}>
              <img 
                src={currentImage.src}
                alt={currentImage.alt}
                loading="lazy"
                decoding="async"
              />
            </button>

            <button className="pp3-arrow pp3-next" onClick={handleNext} aria-label={t("baby.learning.next")}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Tela Cheia */}
      {isModalOpen && (
        <div className="pp3-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="pp3-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pp3-modal-close" onClick={() => setIsModalOpen(false)} aria-label={t("baby.learning.close")}>
              <FiX />
            </button>
            <img src={currentImage.src} alt={t("baby.learning.enlarged", { item: currentImage.alt })} decoding="async" />
          </div>
        </div>
      )}
    </section>
  );
}
