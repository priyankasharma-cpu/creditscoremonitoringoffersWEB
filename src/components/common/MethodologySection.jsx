import { Link } from "react-router-dom";
import {
  ArrowRight,
  Layers,
  Bell,
  Receipt,
  ShieldCheck,
  ScanLine,
} from "lucide-react";
export default function MethodologySection() {
  return (
    <section className="methodology container">
      <div className="methodology-intro">
        <div className="eyebrow">OUR APPROACH</div>
        <h2>
          Good comparisons <br />
          start with the <br />
          <em>right questions.</em>
        </h2>
        <p>
          We believe you should know what goes into a comparison. Our proposed
          framework focuses on practical features, clear terms, and the
          limitations worth understanding.
        </p>
        <Link to="/methodology" className="text-link">
          Explore our methodology <ArrowRight size={16} />
        </Link>
      </div>
      <div className="criteria-grid">
        {[
          [
            Layers,
            "Bureau coverage",
            "Which credit files are monitored, and how often?",
          ],
          [
            Bell,
            "Monitoring & alerts",
            "What changes trigger alerts, and how are you notified?",
          ],
          [
            Receipt,
            "Pricing transparency",
            "What is included, what costs extra, and how do you cancel?",
          ],
          [
            ShieldCheck,
            "Identity features",
            "What support is offered, and what are its limits?",
          ],
        ].map(([Icon, title, body]) => (
          <div key={title}>
            <span className="criteria-icon">
              <Icon size={22} />
            </span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
      <div className="methodology-foot">
        <ScanLine size={16} /> Framework under development. No weighted scores
        or independent testing claims.
      </div>
    </section>
  );
}
