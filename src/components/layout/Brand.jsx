import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
export default function Brand() {
  return (
    <Link
      className="brand"
      to="/"
      aria-label="Credit Score Monitoring Offers home"
    >
      <span className="brand-icon">
        <ShieldCheck size={38} />
      </span>
      <span>
        Credit<span className="brand-accent">Score</span>
        <span className="brand-sub">MONITORING OFFERS</span>
      </span>
    </Link>
  );
}
