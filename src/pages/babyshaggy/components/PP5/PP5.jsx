import './PP5.css'

export default function PP5() {
  return (
    <section className="pp5-section">
      <div className="pp5-card">
        <ul className="pp5-benefits">
          <li>Domine cortes com volume</li>
          <li>Aprenda a estruturar um corte</li>
          <li>Torne-se referência</li>
        </ul>

        <div className="pp5-pricing">
          <span className="pp5-cash-label">À VISTA POR APENAS</span>
          <h2 className="pp5-price">R$ 197,00</h2>
          <span className="pp5-installment">OU 12X DE R$19,70*</span>
        </div>

        <button className="pp5-cta-button">
          QUERO GARANTIR AGORA
        </button>
      </div>
    </section>
  );
}