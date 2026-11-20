import './PP5.css'
import { checkoutUrl } from '../../config'
import { trackCheckoutStart } from '../../metaPixel'
import useTranslation from '../../../../i18n/useTranslation'

export default function PP5() {
  const { t } = useTranslation()

  return (
    <section className="pp5-section" id="oferta">
      <div className="pp5-card">
        <ul className="pp5-benefits">
          {t("baby.offer.benefits").map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>

        <div className="pp5-pricing">
          <span className="pp5-cash-label">{t("baby.offer.cashLabel")}</span>
          <h2 className="pp5-price">{t("baby.offer.price")}</h2>
          <span className="pp5-installment">{t("baby.offer.installment")}</span>
        </div>

        <a className="pp5-cta-button" href={checkoutUrl} onClick={trackCheckoutStart}>
          {t("baby.offer.cta")}
        </a>
      </div>

      <p className="pp5-subtitle-note">
        <span className="pp5-subtitle-icon" aria-hidden="true">CC</span>
        <span>{t("baby.offer.subtitles")}</span>
      </p>
    </section>
  );
}
