import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AD1.css";
import useTranslation from "../../../../i18n/useTranslation";

gsap.registerPlugin(ScrollTrigger);

const AD1 = () => {
  const containerRef = useRef(null);
  const { t } = useTranslation();

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

  const handleJoinWaitlist = () => {
    window.open("https://forms.gle/nz8wtQcJsjejNaRL7", "_blank");
  };

  return (
    <div className="ad1" ref={containerRef}>
      <div className="ad1-content">
        <div className="ad1-grid">
          <div className="ad1-card">
            <h3>{t("home.payment.cashTitle")}</h3>
            <p>{t("home.payment.cashText")}</p>
          </div>

          <div className="ad1-card">
            <h3>{t("home.payment.cardTitle")}</h3>
            <p>{t("home.payment.cardText")}</p>
            <span>{t("home.payment.cardNote")}</span>
          </div>

          <div className="ad1-card">
            <h3>{t("home.payment.boletoTitle")}</h3>
            <p>{t("home.payment.boletoText")}</p>
            <span className="ad1-installment-note">
              {t("home.payment.boletoNote")}
            </span>
          </div>
        </div>

        <div className="ad1-button">
          <button onClick={handleJoinWaitlist}>
            {t("home.video.waitlist")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AD1;
