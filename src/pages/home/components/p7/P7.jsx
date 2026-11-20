import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./P7.css";
import useTranslation from "../../../../i18n/useTranslation";

gsap.registerPlugin(ScrollTrigger);

const P7 = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  useGSAP(() => {
    ScrollTrigger.refresh();
    gsap.from(".p7-content > *", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section className="p7-section-container" ref={container}>
      <div className="p7-minimal">
        <div className="p7-content">
          <p className="p7-pre">{t("home.closing.status")}</p>

          <h2 className="p7-title p7-closed-title">
            {t("home.closing.title")}
            <br />
            {t("home.closing.nextCohort")}
          </h2>

          <p className="p7-waitlist-subtitle">
            {t("home.closing.description")}
          </p>

          <a
            className="p7-waitlist-btn"
            href="https://forms.gle/nz8wtQcJsjejNaRL7"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("home.closing.waitlist")}
          </a>

          {/* Seção de Suporte */}
          <div className="p7-help-section">
            <h3 className="p7-help-title">{t("home.closing.helpTitle")}</h3>
            <p className="p7-help-subtitle">{t("home.closing.helpDescription")}</p>
            
            <div className="p7-help-buttons">
              <a
                href="https://wa.me/5511974037901"
                target="_blank"
                rel="noopener noreferrer"
                className="p7-help-link"
              >
                {t("home.closing.whatsapp")}
              </a>
              <a
                href="mailto:linhaseformas@grifty.net"
                className="p7-help-link"
              >
                {t("home.closing.email")}: linhaseformas@grifty.net
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé de Apoio */}
      <div className="p7-support-wrapper">
        <div className="p7-support">
          <span className="p7-support-label">{t("home.closing.support")}</span>
          <img
            src="/CURLY.webp"
            alt={t("home.closing.supportLogoAlt")}
            className="p7-support-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default P7;
