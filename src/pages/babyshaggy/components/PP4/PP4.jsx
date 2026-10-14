import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import "./PP4.css";

export default function PP4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // Lista com todas as imagens dos feedbacks
  const images = [
    "/page2/fd/dp/1.jpg",
    "/page2/fd/dp/2.jpg",
    "/page2/fd/dp/3.jpg",
    "/page2/fd/dp/4.jpg",
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= images.length - 2 ? 0 : prev + 1));
  };

  // Pega a imagem atual e a próxima para exibir as 2 lado a lado
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
            <div className="pp4-feedback-box" onClick={() => setSelectedImage(firstImage)}>
              <img src={firstImage} alt="Feedback de aluno 1" />
            </div>
            <div className="pp4-feedback-box" onClick={() => setSelectedImage(secondImage)}>
              <img src={secondImage} alt="Feedback de aluno 2" />
            </div>
          </div>

          <button className="pp4-arrow pp4-next" onClick={handleNext} aria-label="Próximo">
            <FiChevronRight />
          </button>
        </div>

        <button className="pp4-cta-button">
          Quero elevar meus cortes
        </button>
      </div>

      {/* Modal de Tela Cheia */}
      {selectedImage && (
        <div className="pp4-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="pp4-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pp4-modal-close" onClick={() => setSelectedImage(null)} aria-label="Fechar">
              <FiX />
            </button>
            <img src={selectedImage} alt="Feedback ampliado" />
          </div>
        </div>
      )}
    </section>
  );
}