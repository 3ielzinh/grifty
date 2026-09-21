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
          <p className="p7-pre">Segunda turma encerrada</p>

          <h2 className="p7-title p7-closed-title">
            No momento o Linhas e Formas está com as inscrições fechadas
            <br />
            A terceira turma será aberta em 2027
          </h2>

          <p className="p7-waitlist-subtitle">
            Tenha acesso exclusivo ao lançamento da terceira turma entrando em nossa lista de espera
          </p>

          <a
            className="p7-waitlist-btn"
            href="https://forms.gle/nz8wtQcJsjejNaRL7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar na lista de espera
          </a>

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
