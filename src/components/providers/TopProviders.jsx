import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { providers } from "../../data/providers";
import ProviderCard from "./ProviderCard";
import SampleNotice from "../common/SampleNotice";
export default function TopProviders() {
  return (
    <section className="section container" id="top-picks">
      <div className="section-heading">
        <div>
          <div className="eyebrow">THE COMPARISON SHORTLIST</div>
          <h2>Top credit score monitoring services</h2>
          <p>A side-by-side starting point for finding what matters to you.</p>
        </div>
        <Link className="text-link" to="/compare">
          Compare all features <ArrowRight size={16} />
        </Link>
      </div>
      <SampleNotice />
      <div className="provider-cards">
        {providers.map((provider) => (
          <ProviderCard provider={provider} key={provider.id} />
        ))}
      </div>
      <p className="fine-print">
        No review scores, real provider claims, or live affiliate offers are
        presented.{" "}
        <Link to="/methodology">Learn about our proposed methodology.</Link>
      </p>
    </section>
  );
}
