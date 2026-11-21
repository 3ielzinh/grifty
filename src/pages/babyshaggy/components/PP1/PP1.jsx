import { useCallback, useEffect, useRef } from "react"
import "./PP1.css"
import { getCheckoutUrl, page2Asset } from "../../config"
import { trackCheckoutStart } from "../../metaPixel"
import useTranslation from "../../../../i18n/useTranslation"

const PP1 = () => {
    const { language, t } = useTranslation()
    const videoRef = useRef(null)
    const isPortuguese = language === "pt"
    const videoSource = page2Asset(isPortuguese ? "baby-shaggy-540p.mp4" : "baby-shaggy-clean-v2.mp4")
    const captionSource = !isPortuguese
      ? page2Asset(`subtitles/baby-shaggy-${language}.vtt`)
      : null
    const captionLabel = language === "en" ? "English" : "Español"

    const syncCaptionTrack = useCallback(() => {
      const video = videoRef.current
      if (!video) return

      Array.from(video.textTracks).forEach((track) => {
        track.mode = !isPortuguese && track.language === language ? "showing" : "disabled"
      })
    }, [isPortuguese, language])

    useEffect(syncCaptionTrack, [syncCaptionTrack])

    return (
        <section className="pp1-section">
        <div className="pp1-here">
            <div className="pp1-text">
              <h1>{t("baby.hero.title")}</h1>
              <p className="pp1-kicker">{t("baby.hero.kicker")}</p>
              <h2>{t("baby.hero.description")}</h2>
            </div>

            <div className="pp1-video-block">
              <div className="pp1-video-container">
                <video key={language} ref={videoRef} controls preload="metadata" poster={page2Asset("baby-shaggy-thumb.webp")} playsInline onLoadedMetadata={syncCaptionTrack} onLoadedData={syncCaptionTrack} onPlay={syncCaptionTrack}>
                  <source src={videoSource} type="video/mp4" />
                  {!isPortuguese && (
                    <track kind="captions" src={captionSource} srcLang={language} label={captionLabel} default onLoad={syncCaptionTrack} />
                  )}
                  {t("baby.hero.unsupported")}
                </video>
              </div>
            </div>

            <p className="pp1-subtext">
              {t("baby.hero.caption")}
            </p>

            <a className="pp1-cta-button" href={getCheckoutUrl(language)} onClick={trackCheckoutStart}>{t("baby.hero.cta")}</a>
        </div>
        </section>
    );
}

export default PP1
