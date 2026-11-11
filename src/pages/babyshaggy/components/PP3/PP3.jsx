import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import "./PP3.css";

export default function PP3() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "/page2/ad-optimized.webp",
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pp3-section">
      <div className="pp3-container">
        <h2 className="pp3-title">O que você vai aprender?</h2>
        
        <ul className="pp3-list">
          <li>
            Leitura de Cortes
          </li>
          <li>
            Como se Destacar no Mercado
          </li>
          <li>
            Como Utilizar Navalhas em Curvaturas
          </li>
          <li>
            Como adaptar um corte para qualquer curvatura
          </li>
          <li>
            Técnicas de Finalização
          </li>
        </ul>

        <div className="pp3-gallery-wrapper">
          <div className="pp3-slider">
            <button className="pp3-arrow pp3-prev" onClick={handlePrev} aria-label="Anterior" disabled={images.length === 1}>
              <FiChevronLeft />
            </button>

            <button className="pp3-image-box" onClick={() => setIsModalOpen(true)} aria-label="Ampliar resultado antes e depois">
              <img 
                src={images[currentIndex]} 
                alt="Resultado Antes e Depois" 
                loading="lazy"
                decoding="async"
              />
            </button>

            <button className="pp3-arrow pp3-next" onClick={handleNext} aria-label="Próximo" disabled={images.length === 1}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Tela Cheia */}
      {isModalOpen && (
        <div className="pp3-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="pp3-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pp3-modal-close" onClick={() => setIsModalOpen(false)} aria-label="Fechar">
              <FiX />
            </button>
            <img src={images[currentIndex]} alt="Resultado ampliado" decoding="async" />
          </div>
        </div>
      )}
    </section>
  );
}
