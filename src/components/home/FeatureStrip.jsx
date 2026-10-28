import { Link } from "react-router-dom";
import {
  ChartNoAxesCombined,
  Bell,
  ShieldCheck,
  GitCompareArrows,
} from "lucide-react";
export default function FeatureStrip() {
  return (
    <section className="feature-strip">
      <div className="container">
        {[
          [
            ChartNoAxesCombined,
            "Credit Score Monitoring",
            "Keep your credit in perspective.",
          ],
          [Bell, "Credit Report Alerts", "Understand the changes that matter."],
          [
            ShieldCheck,
            "Identity Monitoring",
            "Explore a wider view of protection.",
          ],
          [
            GitCompareArrows,
            "Compare Providers",
            "Find features that fit your needs.",
          ],
        ].map(([Icon, title, text]) => (
          <Link to="/compare" className="strip-item" key={title}>
            <span className="strip-icon">
              <Icon size={33} />
            </span>
            <span>
              <strong>{title}</strong>
              <span>{text}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
