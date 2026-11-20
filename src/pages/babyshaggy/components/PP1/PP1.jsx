import "./PP1.css"
import { checkoutUrl, page2Asset } from "../../config"
import { trackCheckoutStart } from "../../metaPixel"
import useTranslation from "../../../../i18n/useTranslation"

const PP1 = () => {
    const { t } = useTranslation()

    return (
        <section className="pp1-section">
        <div className="pp1-here">
            <div className="pp1-text">
              <h1>{t("baby.hero.title")}</h1>
              <p className="pp1-kicker">{t("baby.hero.kicker")}</p>
              <h2>{t("baby.hero.description")}</h2>
            </div>

            <div className="pp1-video-container">
              <video controls preload="metadata" poster={page2Asset("baby-shaggy-thumb.webp")} playsInline>
                <source src={page2Asset("baby-shaggy-540p.mp4")} type="video/mp4" />
                {t("baby.hero.unsupported")}
              </video>
            </div>

            <p className="pp1-subtext">
              {t("baby.hero.caption")}
            </p>

            <a className="pp1-cta-button" href={checkoutUrl} onClick={trackCheckoutStart}>{t("baby.hero.cta")}</a>
        </div>
        </section>
    );
}

export default PP1
