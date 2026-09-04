import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./P6.css";

// import grifty from "../../assets/images/grifty.webp";
import grifty from "/grifty.jpeg";

gsap.registerPlugin(ScrollTrigger);

const P6 = () => {
  const scope = useRef(null);

  useGSAP(() => {
    // 1. RECALCULAR POSIÇÕES: Vital para mobile
    ScrollTrigger.refresh();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scope.current,
        start: "top 90%", // Trigger mais amigável para telas pequenas
        toggleActions: "play none none none",
        fastScrollEnd: true,
      },
    });

    // Removido 'lazy: true' para evitar atrasos na renderização no mobile
    tl.from(".img img", {
      x: 30,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    })
    .from("h1", {
      y: 15,
      opacity: 0,
      duration: 0.6,
      ease: "power1.out",
    }, "-=0.7")
    .from(".p6 h1 span", {
      width: 0,
      duration: 0.8,
      ease: "power2.inOut",
    }, "-=0.4")
    .from(".content p", {
      y: 10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power1.out",
    }, "-=0.5")
    .from(".button", {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.4")
    .from(".last", {
      opacity: 0,
      y: 10,
      duration: 0.6,
      ease: "power1.out",
      onComplete: () => {
        gsap.set(".img img, h1, .content p, .button, .last", { willChange: "auto" });
      }
    }, "-=0.2");

  }, { scope: scope });

  return (
    <section 
      className="p6" 
      ref={scope}
      style={{ 
        // 2. REMOVIDO: contentVisibility e contain: paint
        // Essas propriedades impedem que o navegador saiba a posição real do elemento
        // no DOM até que você esteja em cima dele, quebrando o ScrollTrigger.
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div className="text">
        <div className="content">
          <h1><span>Criado por Grifty</span></h1>
          <p>
            Sou cabeleireiro, educador e pesquisador de forma. <br />
            Meu trabalho sempre partiu da pergunta: <strong>como transformar técnica em identidade?</strong>
          </p>
          <p>
            Depois de anos estudando cabelos ondulados, cacheados e crespos, percebi que o corte só ganha força quando nasce de uma leitura clara de linhas, volumes e intenções.
          </p>
          <p>
            O Linhas e Formas é a <strong>materialização dessa pesquisa</strong> — um método para quem quer deixar de apenas reproduzir e começar a criar cortes com assinatura própria.
          </p>
        </div>
      </div>

      <div className="img" style={{ pointerEvents: "none" }}>
        <img 
          src={grifty} 
          alt="Grifty" 
          loading="eager" 
          decoding="sync" 
          style={{ 
            display: "block",
            willChange: "transform, opacity" 
          }} 
        />
      </div>
    </section>
  );
};

export default P6;