import './PP5.css'
import { checkoutUrl } from '../../config'

export default function PP5() {
  return (
    <section className="pp5-section" id="oferta">
      <div className="pp5-card">
        <ul className="pp5-benefits">
          <li>Domine as curvaturas</li>
          <li>Aprenda a estruturar um corte</li>
          <li>Torne-se referência</li>
        </ul>

        <div className="pp5-pricing">
          <span className="pp5-cash-label">À VISTA POR APENAS</span>
          <h2 className="pp5-price">R$ 297,00</h2>
          <span className="pp5-installment">OU 12X DE R$30,76*</span>
        </div>

        <a className="pp5-cta-button" href={checkoutUrl}>
          QUERO GARANTIR AGORA
        </a>
      </div>
    </section>
  );
}
