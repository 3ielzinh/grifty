import { useCallback, useEffect, useRef } from "react"
import "./PP1.css"
import { getCheckoutUrl, page2Asset } from "../../config"
import { trackCheckoutStart } from "../../metaPixel"
import useTranslation from "../../../../i18n/useTranslation"

const PP1 = () => {
    const { language, t } = useTranslation()
    const videoRef = useRef(null)

    const syncCaptionTrack = useCallback(() => {
      const video = videoRef.current
      if (!video) return

      Array.from(video.textTracks).forEach((track) => {
        track.mode = track.language === language ? "showing" : "disabled"
      })
    }, [language])

    useEffect(syncCaptionTrack, [syncCaptionTrack])

    return (
        <section className="pp1-section">
        <div className="pp1-here">
            <div className="pp1-text">
              <h1>{t("baby.hero.title")}</h1>
              <p className="pp1-kicker">{t("baby.hero.kicker")}</p>
              <h2>{t("baby.hero.description")}</h2>
            </div>

            <div className="pp1-video-container">
              <video ref={videoRef} controls preload="metadata" poster={page2Asset("baby-shaggy-thumb.webp")} playsInline onLoadedMetadata={syncCaptionTrack}>
                <source src={page2Asset("baby-shaggy-clean-v2.mp4")} type="video/mp4" />
                <track kind="captions" src={page2Asset("subtitles/baby-shaggy-pt.vtt")} srcLang="pt" label="Português" default={language === "pt"} />
                <track kind="captions" src={page2Asset("subtitles/baby-shaggy-en.vtt")} srcLang="en" label="English" default={language === "en"} />
                <track kind="captions" src={page2Asset("subtitles/baby-shaggy-es.vtt")} srcLang="es" label="Español" default={language === "es"} />
                {t("baby.hero.unsupported")}
              </video>
            </div>

            <p className="pp1-subtext">
              {t("baby.hero.caption")}
              <span className="pp1-coupon">{t("baby.hero.coupon")}</span>
            </p>

            <a className="pp1-cta-button" href={getCheckoutUrl(language)} onClick={trackCheckoutStart}>{t("baby.hero.cta")}</a>
        </div>
        </section>
    );
}

export default PP1
