import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import "./PP3.css";

export default function PP3() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const coverImage = "/page2/capa-shaggy.webp";

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
            <button className="pp3-image-box" onClick={() => setIsModalOpen(true)} aria-label="Ampliar capa do curso">
              <img 
                src={coverImage}
                alt="Capa do curso Baby Shaggy"
                loading="lazy"
                decoding="async"
              />
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
            <img src={coverImage} alt="Capa do curso Baby Shaggy ampliada" decoding="async" />
          </div>
        </div>
      )}
    </section>
  );
}
