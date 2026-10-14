import React from "react";
import "./AD01.css";
import bannerImg from "/grid.jpg";

const AD01 = () => {
  return (
    <section className="ad-banner-section">
      <div className="ad-banner-container">
        <h1 className="ad-banner-title">
          SÃO MAIS DE <strong>15 AULAS</strong> PARA VOCÊ EXPANDIR SEU PORTFÓLIO.
        </h1>

        <div className="ad-banner-image-wrapper">
          <img 
            src={bannerImg} 
            alt="Portfólio de aulas" 
            className="ad-banner-image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default AD01;