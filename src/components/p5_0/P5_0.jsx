import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/all";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import "./P5_0.css";

import mod1 from "/carrocel/2.png";
import mod2 from "/carrocel/3.png";
import mod3 from "/carrocel/4.png";
import mod4 from "/carrocel/5.png";
import mod5 from "/carrocel/6.png";
import mod6 from "/carrocel/7.png";
import mod7 from "/carrocel/8.png";
import mod8 from "/carrocel/9.png";
import mod9 from "/carrocel/10.png";
import mod10 from "/carrocel/11.png";
import mod11 from "/carrocel/12.png";
import mod12 from "/carrocel/13.png";
import mod13 from "/carrocel/14.png";

gsap.registerPlugin(ScrollTrigger, Draggable);

const P5_0 = () => {
  const containerRef = useRef(null);

  const staticContainerRef1 = useRef(null);
  const staticContainerRef2 = useRef(null);
  const staticContainerRef3 = useRef(null);

  const [showArrows1, setShowArrows1] = useState({ left: false, right: false });
  const [showArrows2, setShowArrows2] = useState({ left: false, right: false });
  const [showArrows3, setShowArrows3] = useState({ left: false, right: false });

  useGSAP(() => {
    // Habilita Draggable por mouse para todas as 3 fileiras estáticas
    const containers = [
      { ref: staticContainerRef1, setArrows: setShowArrows1 },
      { ref: staticContainerRef2, setArrows: setShowArrows2 },
      { ref: staticContainerRef3, setArrows: setShowArrows3 },
    ];

    containers.forEach(({ ref, setArrows }) => {
      if (ref.current) {
        Draggable.create(ref.current, {
          type: "scrollLeft",
          edgeResistance: 0.85,
          bounds: ref.current,
          inertia: true,
          cursor: "grab",
          activeCursor: "grabbing",
          onDrag: () => updateScrollButtons(ref, setArrows),
          onThrowUpdate: () => updateScrollButtons(ref, setArrows),
        });
      }
    });

    ScrollTrigger.refresh();
  }, { scope: containerRef });

  const updateScrollButtons = (ref, setArrowState) => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;

    const hasMoreRight = scrollLeft + clientWidth < scrollWidth - 5;
    const hasMoreLeft = scrollLeft > 5;

    setArrowState({
      left: hasMoreLeft,
      right: hasMoreRight,
    });
  };

  useEffect(() => {
    const checkScrolls = () => {
      updateScrollButtons(staticContainerRef1, setShowArrows1);
      updateScrollButtons(staticContainerRef2, setShowArrows2);
      updateScrollButtons(staticContainerRef3, setShowArrows3);
    };

    checkScrolls();
    window.addEventListener("resize", checkScrolls);
    return () => window.removeEventListener("resize", checkScrolls);
  }, []);

  const handleStaticScroll = (ref, direction, setArrowState) => {
    if (!ref.current) return;
    const scrollAmount = 350;
    ref.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => {
      updateScrollButtons(ref, setArrowState);
    }, 350);
  };

  const introducao = [
    { id: 1, img: mod1 },
    { id: 2, img: mod2 },
    { id: 3, img: mod3 },
    { id: 4, img: mod4 },
    { id: 5, img: mod5 },
  ];

  const linhasEFormas = [
    { id: 6, img: mod6 },
    { id: 7, img: mod7 },
    { id: 8, img: mod8 },
    { id: 9, img: mod9 },
    { id: 10, img: mod10 },
  ];

  const materialBonus = [
    { id: 11, img: mod11 },
    { id: 12, img: mod12 },
    { id: 13, img: mod13 },
  ];

  return (
    <div className="p5_0" ref={containerRef}>
      <div className="p5_0-title">
        <h1>NOSSOS MÓDULOS</h1>
      </div>

      {/* FILEIRA 1 */}
      <div className="row-wrapper">
        <h2 className="row-title">Introdução</h2>
        <div className="carousel-main-wrapper">
          {showArrows1.left && (
            <button
              className="nav-arrow-p5 left"
              onClick={() => handleStaticScroll(staticContainerRef1, "left", setShowArrows1)}
            >
              <BiChevronLeft size={45} />
            </button>
          )}
          <div
            className="static-container"
            ref={staticContainerRef1}
            onScroll={() => updateScrollButtons(staticContainerRef1, setShowArrows1)}
          >
            <div className="static-track">
              {introducao.map((mod, index) => (
                <div key={index} className="modulo-card">
                  <img src={mod.img} alt={`Introdução Módulo ${index}`} />
                </div>
              ))}
            </div>
          </div>
          {showArrows1.right && (
            <button
              className="nav-arrow-p5 right"
              onClick={() => handleStaticScroll(staticContainerRef1, "right", setShowArrows1)}
            >
              <BiChevronRight size={45} />
            </button>
          )}
        </div>
      </div>

      {/* FILEIRA 2 */}
      <div className="row-wrapper">
        <h2 className="row-title">Método Linhas e Formas</h2>
        <div className="carousel-main-wrapper">
          {showArrows2.left && (
            <button
              className="nav-arrow-p5 left"
              onClick={() => handleStaticScroll(staticContainerRef2, "left", setShowArrows2)}
            >
              <BiChevronLeft size={45} />
            </button>
          )}
          <div
            className="static-container"
            ref={staticContainerRef2}
            onScroll={() => updateScrollButtons(staticContainerRef2, setShowArrows2)}
          >
            <div className="static-track">
              {linhasEFormas.map((mod, index) => (
                <div key={index} className="modulo-card">
                  <img src={mod.img} alt={`Método Linhas e Formas Módulo ${index}`} />
                </div>
              ))}
            </div>
          </div>
          {showArrows2.right && (
            <button
              className="nav-arrow-p5 right"
              onClick={() => handleStaticScroll(staticContainerRef2, "right", setShowArrows2)}
            >
              <BiChevronRight size={45} />
            </button>
          )}
        </div>
      </div>

      {/* FILEIRA 3 */}
      <div className="row-wrapper">
        <h2 className="row-title">Material Bônus</h2>
        <div className="carousel-main-wrapper">
          {showArrows3.left && (
            <button
              className="nav-arrow-p5 left"
              onClick={() => handleStaticScroll(staticContainerRef3, "left", setShowArrows3)}
            >
              <BiChevronLeft size={45} />
            </button>
          )}
          <div
            className="static-container"
            ref={staticContainerRef3}
            onScroll={() => updateScrollButtons(staticContainerRef3, setShowArrows3)}
          >
            <div className="static-track">
              {materialBonus.map((mod, index) => (
                <div key={index} className="modulo-card">
                  <img src={mod.img} alt={`Material Bônus Módulo ${index}`} />
                </div>
              ))}
            </div>
          </div>
          {showArrows3.right && (
            <button
              className="nav-arrow-p5 right"
              onClick={() => handleStaticScroll(staticContainerRef3, "right", setShowArrows3)}
            >
              <BiChevronRight size={45} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default P5_0;