import React, { useState } from 'react';
import './FAQ.css'; // CSS štýly

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleFAQ}>
        <h3>{question}</h3>
        <button className={`arrow ${isOpen ? 'open' : ''}`}>
          {isOpen ? '▲' : '▼'}
        </button>
      </div>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

const FAQList = () => {
  const faqData = [
    {
      question: 'Je možné prihlásiť sa na dva kurzy naraz?',
      answer:
        'Áno, môžete sa prihlásiť na dva alebo viac kurzov naraz, pokiaľ nie sú v časovom konflikte.',
    },
    // Ďalšie otázky a odpovede
  ];

  return (
    <div className="faq-list">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};


export default FAQList;
