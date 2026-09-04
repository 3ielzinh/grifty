import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import "./P6_0.css";

import feedback1 from "/depoimentos/1.webp";
import feedback2 from "/depoimentos/2.webp";
import feedback3 from "/depoimentos/3.webp";
import feedback4 from "/depoimentos/4.webp";
import feedback5 from "/depoimentos/5.webp";

const P6_0 = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const feedbacks = [
    { id: 1, img: feedback1 },
    { id: 2, img: feedback2 },
    { id: 3, img: feedback3 },
    { id: 4, img: feedback4 },
    { id: 5, img: feedback5 },
  ];

  const scroll = (direction) => {
    const track = trackRef.current;
    const scrollAmount = 300; // Quantidade de pixels que move por clique
    
    if (direction === "left") {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useGSAP(() => {
    gsap.from(".p6_0-title h1", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });
  }, { scope: containerRef });

  return (
    <section className="p6_0" ref={containerRef}>
      <div className="p6_0-title">
        <h1>O QUE DIZEM OS NOSSOS ALUNOS?</h1>
      </div>

      <div className="fb-carousel-wrapper">
        <button className="nav-btn left" onClick={() => scroll("left")}>
          <BiChevronLeft size={40} />
        </button>

        <div className="fb-track-container" ref={trackRef}>
          <div className="fb-track">
            {feedbacks.map((fb) => (
              <div 
                key={fb.id} 
                className="fb-card"
                onClick={() => setSelectedImg(fb.img)}
              >
                <img src={fb.img} alt="Feedback" />
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn right" onClick={() => scroll("right")}>
          <BiChevronRight size={40} />
        </button>
      </div>

      {/* Modal / Lightbox */}
      {selectedImg && (
        <div className="fb-modal" onClick={() => setSelectedImg(null)}>
          <div className="fb-modal-content">
            <img src={selectedImg} alt="Feedback ampliado" />
            <span className="close-btn">&times;</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default P6_0;