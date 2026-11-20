import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./P3.css";
import AD1 from "../AD1/AD1";
import useTranslation from "../../../../i18n/useTranslation";

gsap.registerPlugin(ScrollTrigger);

const P3 = () => {
  const container = useRef(null);
  const { t } = useTranslation();
  const paragraphs = t("home.concept.paragraphs");

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
          <strong>{t("home.concept.heading")}</strong>
        </h1>
        
        <div className="text">
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p>{t("home.concept.statement")}</p>
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
