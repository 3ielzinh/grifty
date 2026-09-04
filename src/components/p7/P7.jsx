import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./P7.css";

gsap.registerPlugin(ScrollTrigger);

const P7 = () => {
  const container = useRef(null);

  useGSAP(() => {
    ScrollTrigger.refresh();
    gsap.from(".p7-content > *", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section className="p7-section-container" ref={container}>
      <div className="p7-minimal">
        <div className="p7-content">
          <p className="p7-pre">Faça parte da segunda turma</p>

          <h2 className="p7-title">
            GARANTA SUA VAGA POR TEMPO LIMITADO
          </h2>

          <p className="p7-deadline">Vendas abertas até 20 de setembro.</p>

          {/* Grid de Cards de Pagamento */}
          <div className="p7-cards-container" id="payment-section">
            
            {/* CARD 1: À VISTA (DESTACADO) */}
            <div className="p7-card featured">
              <span className="p7-card-tag">10% OFF</span>
              <div className="p7-card-header">
                <h3 className="p7-card-title">À Vista c/ Desconto</h3>
              </div>
              <div className="p7-card-price">
                <span className="p7-amount">R$ 2.440,80</span>
                <span className="p7-subtext">Economize R$ 271,20 pagando à vista</span>
              </div>
              <button
                className="p7-card-btn"
                onClick={() => window.open("https://pay.hotmart.com/O103920781P?off=pyzdhze4&checkoutMode=0&hideBillet=1&hideTransf=1&hideMultipleCards=1&hidePayPal=1&hideTrial=1&bid=1788230091173](https://pay.hotmart.com/O103920781P?off=pyzdhze4&checkoutMode=0&hideBillet=1&hideTransf=1&hideMultipleCards=1&hidePayPal=1&hideTrial=1&bid=1788230091173", "_blank")}
              >
                Garantir Desconto
              </button>
            </div>

            {/* CARD 2: CARTÃO DE CRÉDITO */}
            <div className="p7-card">
              <div className="p7-card-header">
                <h3 className="p7-card-title">Cartão de Crédito</h3>
              </div>
              <div className="p7-card-price">
                <span className="p7-amount">12x R$ 255,00</span>
                <span className="p7-subtext">ou R$ 2.712,00 em até 5x</span>
              </div>
              <button
                className="p7-card-btn"
                onClick={() => window.open("https://pay.hotmart.com/O103920781P?off=rwh0g9r1", "_blank")}
              >
                Pagar no Cartão
              </button>
            </div>

            {/* CARD 3: BOLETO PARCELADO */}
            <div className="p7-card">
\              <div className="p7-card-header">
                <h3 className="p7-card-title">Boleto Parcelado</h3>
              </div>
              <div className="p7-card-price">
                <span className="p7-amount">Parcelado</span>
                <span className="p7-subtext">Sem comprometer o limite do cartão</span>
              </div>
              <button
                className="p7-card-btn"
                onClick={() => window.open("https://pay.hotmart.com/O103920781P?off=tty6p3s1", "_blank")}
              >
                Pagar via Boleto
              </button>
            </div>

          </div>

          <span className="p7-access-info">Acesso por 12 meses – Conteúdo 100% online</span>

          <hr className="p7-divider" />

          {/* Seção de Suporte */}
          <div className="p7-help-section">
            <h3 className="p7-help-title">PRECISA DE MAIS AJUDA?</h3>
            <p className="p7-help-subtitle">Fale com nossa equipe</p>
            
            <div className="p7-help-buttons">
              <a
                href="https://wa.me/5511974037901"
                target="_blank"
                rel="noopener noreferrer"
                className="p7-help-link"
              >
                Atendimento via Whatsapp
              </a>
              <a
                href="mailto:linhaseformas@grifty.net"
                className="p7-help-link"
              >
                Atendimento via e-mail: linhaseformas@grifty.net
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé de Apoio */}
      <div className="p7-support-wrapper">
        <div className="p7-support">
          <span className="p7-support-label">Apoio:</span>
          <img
            src="/CURLY.webp"
            alt="Logo Curly Care"
            className="p7-support-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default P7;