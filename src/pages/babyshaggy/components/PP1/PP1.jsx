import { useCallback, useEffect, useRef, useState } from "react"
import "./PP1.css"
import { getCheckoutUrl, page2Asset } from "../../config"
import { trackCheckoutStart } from "../../metaPixel"
import useTranslation from "../../../../i18n/useTranslation"

const captionOptions = [
  { value: "pt", shortLabel: "PT", labelKey: "baby.hero.captions.portuguese" },
  { value: "en", shortLabel: "EN", labelKey: "baby.hero.captions.english" },
  { value: "es", shortLabel: "ES", labelKey: "baby.hero.captions.spanish" },
  { value: "off", shortLabel: "OFF", labelKey: "baby.hero.captions.off" },
]

const PP1 = () => {
    const { language, t } = useTranslation()
    const videoRef = useRef(null)
    const trackChangeFrameRef = useRef(null)
    const [captionLanguage, setCaptionLanguage] = useState(language)

    const syncCaptionTrack = useCallback(() => {
      const video = videoRef.current
      if (!video) return

      Array.from(video.textTracks).forEach((track) => {
        track.mode = captionLanguage !== "off" && track.language === captionLanguage ? "showing" : "disabled"
      })
    }, [captionLanguage])

    useEffect(() => {
      setCaptionLanguage(language)
    }, [language])

    useEffect(syncCaptionTrack, [syncCaptionTrack])

    useEffect(() => {
      const video = videoRef.current
      if (!video) return undefined

      const tracks = video.textTracks
      const handleNativeTrackChange = () => {
        if (trackChangeFrameRef.current) {
          cancelAnimationFrame(trackChangeFrameRef.current)
        }

        trackChangeFrameRef.current = requestAnimationFrame(() => {
          const activeTrack = Array.from(tracks).find((track) => track.mode === "showing")
          setCaptionLanguage(activeTrack?.language || "off")
        })
      }

      tracks.addEventListener("change", handleNativeTrackChange)

      return () => {
        tracks.removeEventListener("change", handleNativeTrackChange)
        if (trackChangeFrameRef.current) {
          cancelAnimationFrame(trackChangeFrameRef.current)
        }
      }
    }, [])

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
                <video ref={videoRef} controls preload="metadata" poster={page2Asset("baby-shaggy-thumb.webp")} playsInline onLoadedMetadata={syncCaptionTrack} onLoadedData={syncCaptionTrack} onPlay={syncCaptionTrack}>
                  <source src={page2Asset("baby-shaggy-clean-v2.mp4")} type="video/mp4" />
                  <track kind="captions" src={page2Asset("subtitles/baby-shaggy-pt.vtt")} srcLang="pt" label="Português" default={captionLanguage === "pt"} onLoad={syncCaptionTrack} />
                  <track kind="captions" src={page2Asset("subtitles/baby-shaggy-en.vtt")} srcLang="en" label="English" default={captionLanguage === "en"} onLoad={syncCaptionTrack} />
                  <track kind="captions" src={page2Asset("subtitles/baby-shaggy-es.vtt")} srcLang="es" label="Español" default={captionLanguage === "es"} onLoad={syncCaptionTrack} />
                  {t("baby.hero.unsupported")}
                </video>
              </div>

              <div className="pp1-caption-selector" role="group" aria-label={t("baby.hero.captions.label")}>
                <span className="pp1-caption-selector__label" aria-hidden="true">
                  <span className="pp1-caption-selector__badge" aria-hidden="true">CC</span>
                  <span className="pp1-caption-selector__label-text">{t("baby.hero.captions.label")}</span>
                </span>

                <div className="pp1-caption-selector__options">
                  {captionOptions.map((option) => {
                    const isActive = captionLanguage === option.value
                    const optionLabel = t(option.labelKey)

                    return (
                      <button
                        key={option.value}
                        className="pp1-caption-selector__option"
                        type="button"
                        aria-label={optionLabel}
                        aria-pressed={isActive}
                        title={optionLabel}
                        onClick={() => setCaptionLanguage(option.value)}
                      >
                        {option.shortLabel}
                      </button>
                    )
                  })}
                </div>
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
