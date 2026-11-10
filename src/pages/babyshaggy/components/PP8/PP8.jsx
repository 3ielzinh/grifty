import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import "./PP8.css";

export default function PP8() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Para quem é esse curso?",
      answer: "Essa aula é para cabeleireiros que querem elevar o nível do seu trabalho, se destacar na área de curvaturas e aprender a criar cortes com estrutura e volume.",
    },
    {
      question: "O curso é 100% Online?",
      answer: "Sim, o curso é 100% online para você assistir onde e quando quiser.",
    },
    {
      question: "E se eu não gostar?",
      answer: "O reembolso pode ser solicitado em até 7 dias após a compra.",
    },
    {
      question: "Preciso ter experiência para assistir o conteúdo?",
      answer: "Não Precisa! O método é ensinado de forma prática, acessível até para iniciantes",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pp8-section">
      <div className="pp8-container">
        <div className="pp8-header">
          <span className="pp8-subtitle">F.A.Q</span>
          <h2 className="pp8-title">PERGUNTAS FREQUENTES</h2>
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
