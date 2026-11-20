import "./PP2.css"
import useTranslation from "../../../../i18n/useTranslation"

const PP2 = () => {
  const { t } = useTranslation();
  const slides = t("baby.ticker");

  const duplicatedSlides = [...slides, ...slides, ...slides, ...slides];

  return (
    <section className="pp2-section">
      <div className="pp2-carousel-infinite">
        <div className="pp2-track">
          {duplicatedSlides.map((slide, index) => (
            <div className="pp2-slide" key={index}>
              <h2>{slide}</h2>
              <span className="pp2-separator" aria-hidden="true">|</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PP2
