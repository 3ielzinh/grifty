import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BiRightArrowCircle } from "react-icons/bi";

import "./P5.css";

import nw1 from "../../assets/images/whats/nw1.webp"
import nw2 from "../../assets/images/whats/nw2.webp"
import nw3 from "../../assets/images/whats/nw3.webp"

gsap.registerPlugin(ScrollTrigger);

const P5 = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Promoção de camadas
    gsap.set(".image img, .text p, .title h1, .title h3", { 
      force3D: true, 
      backfaceVisibility: "hidden",
      willChange: "transform, opacity"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%", // Ajustado para disparar um pouco antes no mobile
        toggleActions: "play none none none",
        fastScrollEnd: true,
      },
    });

    tl.from(".title h1, .title h3", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    })
    .from(".text p", {
      x: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    }, "-=0.3")
    .from(".image img", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      onComplete: () => {
        gsap.set(".image img, .text p, .title h1, .title h3", { willChange: "auto" });
      }
    }, "-=0.4");

    // Força o recalculo de posições após a montagem do componente
    ScrollTrigger.refresh();
  }, { scope: containerRef });

  return (
    <div 
      className="p5" 
      ref={containerRef}
      style={{ 
        overflow: "hidden",
        position: "relative" // Garante contexto de posicionamento
      }}
    >
      <div className="content">
        <div className="title">
          <h1>Para quem é essa formação?</h1>
          <h3>Profissionais cabeleireiros que:</h3>
        </div>
        <div className="text">
          <p><BiRightArrowCircle color="#830E0E" /> Desejam se aprofundar na área de cabelos com curvatura</p>
          <p><BiRightArrowCircle color="#830E0E" /> Querem evoluir tecnicamente e aumentar seu repertório</p>
          <p><BiRightArrowCircle color="#830E0E" /> Buscam identidade, método e segurança</p>
          <p><BiRightArrowCircle color="#830E0E" /> Desejam elevar o valor do próprio trabalho</p>
        </div>
      </div>
      {/* <div className="image" style={{ pointerEvents: "none" }}>
        <img src={nw1} alt="Corte 1" loading="eager" decoding="async" />
        <img src={nw2} alt="Corte 3" loading="eager" decoding="async" />
        <img src={nw3} alt="Corte 2" loading="eager" decoding="async" />
      </div> */}
    </div>
  );
};

export default P5;