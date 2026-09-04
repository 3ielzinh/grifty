import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./P2.css";

import capa2 from "/thumb.png";

gsap.registerPlugin(ScrollTrigger);

const P2 = () => {
  const containerRef = useRef(null); // Ref para o container pai
  const videoWrapperRef = useRef(null);

  const handleScrollToPayment = () => {
    const paymentSection = document.querySelector("#payment-section");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(() => {
    // Força o ScrollTrigger a recalcular as posições
    ScrollTrigger.refresh();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%", // Ajustado para disparar mais cedo no mobile
        toggleActions: "play none none none",
        once: true,
      }
    });

    tl.from(".p2 h1", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    .from(videoWrapperRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
    }, "-=0.6")
    .from(".p2 .button", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    <div className="p2" ref={containerRef}>
      <div className="content">
        <h1>Antes de continuar, assista ao vídeo de apresentação e descubra uma nova perspectiva sobre cabelos com curvatura.</h1>

        <div className="video" ref={videoWrapperRef}>
          <video 
            controls 
            poster={capa2}
            playsInline
            preload="metadata"
            style={{ width: "100%", display: "block" }} // Garante que o vídeo ocupe espaço para o trigger
          >
            <source media="(max-width: 768px)" src="/video-mobile.mp4" type="video/mp4" />
            <source src="/video-desktop.mp4" type="video/mp4" />
          </video>
        </div>
        <span style={{textAlign: 'center'}}> Obtenha o Linhas e Formas e destrave o seu potencial máximo.</span>
        <div className="button">
          <button onClick={handleScrollToPayment}>
            QUERO FAZER PARTE DESTA TURMA
          </button>
        </div>
      </div>
    </div>
  );
};

export default P2;
