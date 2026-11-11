import "./PP7.css";

export default function PP7() {
  return (
    <section className="pp7-section">
      <div className="pp7-container">
        <div className="pp7-images">
          <div className="pp7-image-frame pp7-main-frame">
            <img className="pp7-main-image" src="/page2/profile/grifty-portrait.webp" alt="Grifty, cabeleireiro e educador" loading="lazy" decoding="async" />
          </div>
          <div className="pp7-image-frame">
            <img className="pp7-demonstration-image" src="/page2/profile/grifty-demonstracao.webp" alt="Grifty durante uma demonstração prática" loading="lazy" decoding="async" />
          </div>
          <div className="pp7-image-frame">
            <img src="/page2/profile/grifty-aula.webp" alt="Grifty ensinando técnicas de corte para cabelos com curvatura" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
