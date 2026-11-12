import "./PP1.css"
import { checkoutUrl, page2Asset } from "../../config"
import { trackCheckoutStart } from "../../metaPixel"

const PP1 = () => {
    return (
        <section className="pp1-section">
        <div className="pp1-here">
            <div className="pp1-text">
              <h1>Domine as técnicas que vão te tornar referência em cortes de cabelos com curvatura</h1>
              <p className="pp1-kicker">O método para se diferenciar em um mercado onde todo mundo parece igual</p>
              <h2>Assista ao vídeo e conheça o pensamento do Grifty que vai te levar a criar cortes autênticos e lotar a sua agenda.</h2>
            </div>

            <div className="pp1-video-container">
              <video controls preload="metadata" poster={page2Asset("baby-shaggy-thumb.webp")} playsInline>
                <source src={page2Asset("baby-shaggy-540p.mp4")} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>

            <p className="pp1-subtext">
              Uma nova forma de cortar cabelos com curvatura que você nunca viu antes, até agora.
            </p>

            <a className="pp1-cta-button" href={checkoutUrl} onClick={trackCheckoutStart}>Quero adquirir o curso</a>
        </div>
        </section>
    );
}

export default PP1
