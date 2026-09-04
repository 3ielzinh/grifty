import "./PP2.css"

import React from 'react'

const PP2 = () => {
  const slides = [
    "ESTRUTURAÇÃO DO CORTE",
    "LEITURA DO CORTE",
    "GRADUAÇÃO",
    "CONQUISTE CLIENTES"
  ];

  // Triplicamos o array para garantir que nunca falte conteúdo na tela durante a animação
  const duplicatedSlides = [...slides, ...slides, ...slides,...slides, ...slides, ...slides,...slides, ...slides, ...slides];

  return (
    <section className="pp2-section">
      <div className="pp2-carousel-infinite">
        <div className="pp2-track">
          {duplicatedSlides.map((slide, index) => (
            <div className="pp2-slide" key={index}>
              <h2>{slide}</h2>
              {/* <span className="pp2-separator">|</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PP2