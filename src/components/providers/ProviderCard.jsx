import { Link } from "react-router-dom";
import { Check, Minus, ArrowRight, ArrowUpRight } from "lucide-react";
import ProviderLogo from "./ProviderLogo";
export default function ProviderCard({ provider: provider }) {
  return (
    <article
      className={"provider-card " + (provider.order === 1 ? "featured" : "")}
    >
      <div className="card-ribbon">
        <span>
          0{provider.order} <span> / SAMPLE PLACEMENT</span>
        </span>
        {provider.sponsored ? (
          <span>SPONSORED EXAMPLE</span>
        ) : (
          <span>{provider.category.toUpperCase()}</span>
        )}
      </div>
      <div className="provider-image">
        <img src={provider.image} alt={provider.imageAlt} loading="lazy" />
        <span className="photo-label">{provider.category}</span>
      </div>
      <div className="provider-content">
        <ProviderLogo provider={provider} />
        <h3>{provider.category}</h3>
        <p>{provider.description}</p>
        <ul className="feature-list">
          <li>
            <Check />
            {provider.bureaus}-bureau coverage example
          </li>
          <li>
            <Check />
            Credit change alerts example
          </li>
          <li>
            {provider.identity ? <Check /> : <Minus />}
            {provider.identity
              ? "Identity monitoring example"
              : "Credit-focused sample plan"}
          </li>
        </ul>
        <div className="price-line">
          <span>Plan pricing</span>
          <strong>Awaiting verification</strong>
        </div>
        <Link className="button outline" to={"/reviews/" + provider.id}>
          LEARN MORE <ArrowUpRight size={15} />
        </Link>
        <Link className="review-link" to={"/reviews/" + provider.id}>
          Read sample review <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  );
}
