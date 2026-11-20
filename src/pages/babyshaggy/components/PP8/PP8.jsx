import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import "./PP8.css";
import useTranslation from '../../../../i18n/useTranslation';

export default function PP8() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = t("baby.faq.items");

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pp8-section">
      <div className="pp8-container">
        <div className="pp8-header">
          <span className="pp8-subtitle">{t("baby.faq.eyebrow")}</span>
          <h2 className="pp8-title">{t("baby.faq.heading")}</h2>
        </div>

        <div className="pp8-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index} 
                className={`pp8-faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  className="pp8-faq-question"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <span className="pp8-icon" aria-hidden="true">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                {isOpen && (
                  <div className="pp8-faq-answer" id={`faq-answer-${index}`}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
