import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AD1.css";

gsap.registerPlugin(ScrollTrigger);

const AD1 = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    gsap.from(".ad1-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".ad1-button", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
        once: true,
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  }, { scope: containerRef });

  const handleScrollToPayment = () => {
    const paymentSection = document.querySelector("#payment-section");
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="ad1" ref={containerRef}>
      <div className="ad1-content">
        <div className="ad1-grid">
          <div className="ad1-card">
            <h3>À Vista</h3>
            <p>Desconto de 10% para pagamentos à vista</p>
          </div>

          <div className="ad1-card">
            <h3>Cartão de Crédito</h3>
            <p>Compre parcelado no cartão de crédito em até 12x</p>
            <span>(sem juros até 5x)</span>
          </div>

          <div className="ad1-card">
            <h3>Boleto Parcelado</h3>
            <p>Compre no boleto parcelado</p>
          </div>
        </div>

        <div className="ad1-button">
          <button onClick={handleScrollToPayment}>
            QUERO ADQUIRIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default AD1;