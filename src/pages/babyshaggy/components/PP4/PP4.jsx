import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import "./PP4.css";
import { checkoutUrl, page2Asset } from "../../config";
import { trackCheckoutStart } from "../../metaPixel";

export default function PP4() {
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
        <h2 className="pp4-title">#Feedback dos meus alunos</h2>
        
        <div className="pp4-slider-wrapper">
          <button className="pp4-arrow pp4-prev" onClick={handlePrev} aria-label="Anterior">
            <FiChevronLeft />
          </button>

          <div className="pp4-feedback-container">
            <button className="pp4-feedback-box" onClick={() => setSelectedImage(firstImage)} aria-label="Ampliar feedback de aluno">
              <img src={firstImage} alt="Feedback de aluno 1" loading="lazy" decoding="async" />
            </button>
            <button className="pp4-feedback-box pp4-feedback-box-secondary" onClick={() => setSelectedImage(secondImage)} aria-label="Ampliar próximo feedback de aluno">
              <img src={secondImage} alt="Feedback de aluno 2" loading="lazy" decoding="async" />
            </button>
          </div>

          <button className="pp4-arrow pp4-next" onClick={handleNext} aria-label="Próximo">
            <FiChevronRight />
          </button>
        </div>

        <a className="pp4-cta-button" href={checkoutUrl} onClick={trackCheckoutStart}>
          Quero elevar meus cortes
        </a>
      </div>

      {selectedImage && (
        <div className="pp4-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="pp4-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pp4-modal-close" onClick={() => setSelectedImage(null)} aria-label="Fechar">
              <FiX />
            </button>
            <img src={selectedImage} alt="Feedback ampliado" decoding="async" />
          </div>
        </div>
      )}
    </section>
  );
}
