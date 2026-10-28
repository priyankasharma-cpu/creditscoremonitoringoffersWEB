import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ArticleCards from "../education/ArticleCards";
export default function EducationalResources() {
  return (
    <section className="section container education-section">
      <div className="education-banner">
        <div className="eyebrow">THE MORE YOU KNOW</div>
        <h2>
          A little knowledge.
          <br />A lot more confidence.
        </h2>
        <p>Make room for a clearer financial future.</p>
      </div>
      <div className="section-heading">
        <div>
          <div className="eyebrow">A LITTLE KNOWLEDGE GOES A LONG WAY</div>
          <h2>Build your credit confidence.</h2>
          <p>Plain-language guides for more informed financial decisions.</p>
        </div>
        <Link className="text-link" to="/education">
          Visit the learning center <ArrowRight size={16} />
        </Link>
      </div>
      <ArticleCards />
    </section>
  );
}
