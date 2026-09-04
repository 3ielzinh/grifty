import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./P4.css";
import { FaArrowDown } from "react-icons/fa";
import { HiMiniArrowRight } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const P4 = () => {
  const containerRef = useRef(null);
  const hereRef = useRef(null);
  const borderRef = useRef(null);
  const arrowRef = useRef(null);

  useGSAP(() => {
    // Linha de scroll e Seta
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: hereRef.current,
        start: "top 75%", 
        end: "bottom 70%",
        scrub: 1, // Scrub suave evita "trancos" em telas mobile
        invalidateOnRefresh: true, // Recalcula se a tela mudar de tamanho
      },
    });

    mainTl
      .fromTo(borderRef.current, 
        { scaleY: 0 }, 
        { scaleY: 1, ease: "none" }, 0
      )
      .fromTo(arrowRef.current, 
        { top: "0%", opacity: 0 }, 
        { top: "100%", opacity: 1, ease: "none" }, 0
      );

    // Fade-in do Título
    gsap.from(".title h1, .title h3", {
      scrollTrigger: {
        trigger: ".title",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out"
    });

    // Fade-in dos Itens (opcional, já que a linha corre ao lado)
    gsap.from(".seguir p", {
      scrollTrigger: {
        trigger: ".seguir",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      x: 10,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: "power2.out",
    });

  }, { scope: containerRef });

  return (
    <div className="p4" ref={containerRef}>
      <div className="content">
        <div className="title">
          <h1>O que você vai aprender?</h1>
          <h3>A formação é composta por mais de 10 aulas gravadas, com demonstrações práticas e explicações detalhadas:</h3>
        </div>

        <div className="here" ref={hereRef}>
          {/* Base cinza da linha */}
          <div className="scroll-base"></div>
          {/* Linha vinho que anima */}
          <div className="scroll-line" ref={borderRef}></div>
          {/* Seta que acompanha */}
          <div className="scroll-arrow" ref={arrowRef}>
            <FaArrowDown />
          </div>

          <div className="seguir">
            <p><HiMiniArrowRight />Leitura estrutural do corte</p>
            <p><HiMiniArrowRight />Ferramentas e Materiais</p>
            <p><HiMiniArrowRight />Ângulos e Projeções</p>
            <p><HiMiniArrowRight />Construção de camadas baixas, médias e altas</p>
            <p><HiMiniArrowRight />Shaggy Hair com tesoura e navalha</p>
            <p><HiMiniArrowRight />Mullet em diferentes curvaturas</p>
            <p><HiMiniArrowRight />Linhas geométricas aplicadas ao corte</p>
            <p><HiMiniArrowRight />Adaptação de técnicas para cada curvatura</p>
            <p><HiMiniArrowRight />Construção de Identidade e Posicionamento</p>
            <p><HiMiniArrowRight />Técnicas para atração de novos clientes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P4;