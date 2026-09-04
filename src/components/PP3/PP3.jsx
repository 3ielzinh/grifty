import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import "./PP3.css";

export default function PP3() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "/page2/ad.png",
    "/page2/ad.png",
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
            <span className="pp3-check">✔</span> Leitura de Cortes
          </li>
          <li>
            <span className="pp3-check">✔</span> Como Criar um Corte estruturado
          </li>
          <li>
            <span className="pp3-check">✔</span> Distribuição Correta do Volume
          </li>
          <li>
            <span className="pp3-check">✔</span> Técnicas de Finalização
          </li>
        </ul>

        <div className="pp3-gallery-wrapper">
          <div className="pp3-slider">
            <button className="pp3-arrow pp3-prev" onClick={handlePrev} aria-label="Anterior">
              <FiChevronLeft />
            </button>

            <div className="pp3-image-box" onClick={() => setIsModalOpen(true)}>
              <img 
                src={images[currentIndex]} 
                alt="Resultado Antes e Depois" 
              />
            </div>

            <button className="pp3-arrow pp3-next" onClick={handleNext} aria-label="Próximo">
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
            <img src={images[currentIndex]} alt="Resultado ampliado" />
          </div>
        </div>
      )}
    </section>
  );
}