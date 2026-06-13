import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQAccordion({ items }) {
  const [active, setActive] = useState(0);

  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => (
        <div className="faq-item" key={question}>
          <button
            type="button"
            aria-expanded={active === index}
            onClick={() => setActive(active === index ? -1 : index)}
          >
            <span>{question}</span>
            <ChevronDown className={active === index ? "rotate" : ""} size={20} />
          </button>
          <div className={`faq-answer ${active === index ? "open" : ""}`}>
            <p>{answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
