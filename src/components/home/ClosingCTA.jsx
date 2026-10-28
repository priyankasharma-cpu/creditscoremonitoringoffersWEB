import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function ClosingCTA() {
  return (
    <section className="closing">
      <div className="container">
        <div>
          <span className="eyebrow">YOUR NEXT STEP STARTS WITH CLARITY</span>
          <h2>Make a more informed choice.</h2>
          <p>
            Understand the features. Compare your options. Decide with
            confidence.
          </p>
        </div>
        <Link className="button" to="/compare">
          Explore the comparison <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}
