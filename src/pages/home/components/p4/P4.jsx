import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./P4.css";
import { FaArrowDown } from "react-icons/fa";
import { HiMiniArrowRight } from "react-icons/hi2";
import useTranslation from "../../../../i18n/useTranslation";

gsap.registerPlugin(ScrollTrigger);

const P4 = () => {
  const containerRef = useRef(null);
  const hereRef = useRef(null);
  const borderRef = useRef(null);
  const arrowRef = useRef(null);
  const { t } = useTranslation();
  const items = t("home.curriculum.items");

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
          <h1>{t("home.curriculum.heading")}</h1>
          <h3>{t("home.curriculum.description")}</h3>
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
            {items.map((item) => <p key={item}><HiMiniArrowRight />{item}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default P4;
