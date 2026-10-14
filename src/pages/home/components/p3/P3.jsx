import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./P3.css";

import bannerImg from "/grid.jpg"; // Altere para o caminho da sua imagem estática
import AD1 from "../AD1/AD1";

gsap.registerPlugin(ScrollTrigger);

const P3 = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    tl.from(".text p", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    })
    .from(".cabecalho", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    }, "-=0.4")
    .from(".static-banner-wrapper", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.6");

  }, { scope: container });

  return (
    <section className="p3" ref={container} style={{ overflow: "hidden", position: "relative" }}>
      <div className="content">
        <h1 className="cabecalho2">
          <strong>QUAIS SÃO AS POSSIBILIDADES DE UM CABELO COM CURVATURA?</strong>
        </h1>
        
        <div className="text">
          <p>
            O Linhas e Formas é uma formação online para cabeleireiros que desejam ir além da repetição de técnicas e desenvolver um olhar mais profundo, consciente e criativo sobre o corte.
          </p>
          <p>
            Com foco em cabelos ondulados, cacheados e crespos, a formação explora a arquitetura do corte através de linhas, volumes, pesos, direções e equilíbrio, ajudando você a compreender a estrutura de cada cabelo e adaptar diferentes formas às suas curvaturas.
          </p>
          <p>
            Mais do que ensinar cortes para serem replicados, o Linhas e Formas te convida a entender o porquê de cada escolha, ampliar seu repertório e encontrar mais liberdade no seu processo criativo.
          </p>
          <p>
            É um caminho para construir mais segurança, desenvolver sua identidade profissional e criar um trabalho cada vez mais autoral.
          </p>
          <p>
            Porque corte é técnica, mas também é arte. E a sua assinatura nasce da forma como você escolhe olhar, interpretar e criar.
          </p>
          <p>
            EXISTEM INFINITAS POSSIBILIDADES, NÓS SÓ PARAMOS DE EXPLORAR.
          </p>
        </div>

        <AD1 />

        {/* <h1 className="cabecalho">
          SÃO MAIS DE <strong>15 AULAS</strong> PARA VOCÊ EXPANDIR SEU PORTFÓLIO.
        </h1>

        <div className="static-banner-wrapper">
          <img 
            src={bannerImg} 
            alt="Portfólio de aulas" 
            className="static-banner-img"
            loading="eager"
          />
        </div> */}
      </div>
    </section>
  );
};

export default P3;