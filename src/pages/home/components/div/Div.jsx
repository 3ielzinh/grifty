import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Div.css";

gsap.registerPlugin(ScrollTrigger);

const Div = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Garante que o GSAP recalcule as alturas no mobile
    ScrollTrigger.refresh();

    const elements = gsap.utils.toArray(".div");

    elements.forEach((el) => {
      gsap.fromTo(el, 
        { 
          backgroundPositionY: "20%" // Começa um pouco abaixo
        }, 
        {
          backgroundPositionY: "80%", // Termina um pouco acima
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom", 
            end: "bottom top",
            scrub: 0.5, // Scrub menor (0.5) é mais responsivo em touchscreens
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div className="div-wrapper" ref={containerRef}>
      <div className="div"></div>
    </div>
  );
};

export default Div;