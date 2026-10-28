import { BookOpen, ChevronDown } from "lucide-react";
import { faqs } from "../../data/faqs";
export default function HomeFAQ() {
  return (
    <section className="section container faq-section">
      <div>
        <div className="eyebrow">A FEW THINGS TO KNOW</div>
        <h2>
          Your questions. <br />
          Clear answers.
        </h2>
        <p>
          Get familiar with the essentials
          <br />
          before you choose a service.
        </p>
        <BookOpen className="faq-book" size={45} strokeWidth={1} />
      </div>
      <div>
        {faqs.map(([question, article]) => (
          <details key={question}>
            <summary>
              {question}
              <ChevronDown size={18} />
            </summary>
            <p>{article}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
