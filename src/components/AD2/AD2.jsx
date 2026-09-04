import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AD2.css";

import logoCurly from "/logo2.png"; // Ajuste o caminho conforme o seu projeto

gsap.registerPlugin(ScrollTrigger);

const AD2 = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.from(".ad2-title", {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(".ad2-card", {
      scale: 0.95,
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.4")
    .from(".ad2-logo-circle", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.5)",
    }, "-=0.6")
    .from(".ad2-text-content", {
      x: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.6");

  }, { scope: containerRef });

  return (
    <section className="ad2" ref={containerRef}>
      <div className="ad2-container">
        <h2 className="ad2-title">OFERTA EXCLUSIVA</h2>

        <div className="ad2-card">
          <div className="ad2-logo-circle">
            <img 
              src={logoCurly} 
              alt="Logo Curly Care" 
              className="ad2-logo" 
              loading="lazy" 
            />
          </div>

          <div className="ad2-text-content">
            <h3 className="ad2-card-title">
              Faça parte da Segunda Turma e receba em sua casa 01 kit de Finalizadores Curly Care
            </h3>
            <p className="ad2-description">
              Conheça os produtos de finalização mais utilizados pelo Grifty e entregue resultados surpreendentes para as suas clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AD2;