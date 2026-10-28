
import { Link } from "react-router-dom";
import {
  Check,
  Minus,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CreditCard,
  BellRing,
  Eye,
  BadgeCheck,
  Info,
  CircleHelp,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Layers3,
} from "lucide-react";

import { providers } from "../../data/providers";
import SampleNotice from "../common/SampleNotice";
import "./ProviderReviewContent.css";

export default function ProviderReviewContent({ provider, slug }) {
  const hasProviderUrl = Boolean(provider.url);

  const features = [
    {
      icon: CreditCard,
      title: "Credit Monitoring",
      description: `${provider.bureaus}-bureau monitoring example`,
    },
    {
      icon: BellRing,
      title: "Credit Change Alerts",
      description: "Sample alerts for credit activity",
    },
    {
      icon: Eye,
      title: "Identity Monitoring",
      description: provider.identity
        ? "Included in this fictional example"
        : "Not included in this fictional example",
    },
  ];

  const alternatives = providers.filter(
    (candidate) => candidate.id !== slug
  );

  return (
    <main className="provider-review">
      <div className="container">
        {/* ================= NOTICE ================= */}
        <div className="provider-review__notice">
          <SampleNotice />
        </div>

        {/* ================= INTRO ================= */}
        <section className="provider-review__intro">
          <div className="provider-review__eyebrow">
            <Sparkles size={17} />
            PROVIDER REVIEW
          </div>

          <h2 className="provider-review__intro-title">
            Explore the Service
            <span> Overview</span>
          </h2>

          <p className="provider-review__lead">
            {provider.description}
          </p>

          <div className="provider-review__intro-info">
            <Info size={21} />
            <p>
              <strong>{provider.name}</strong> is a fictional
              placeholder used to demonstrate this review template.
              It is not a real provider recommendation.
            </p>
          </div>
        </section>

        {/* ================= KEY FEATURES ================= */}
        <section className="provider-review__section">
          <div className="provider-review__section-heading">
            <span className="provider-review__section-icon">
              <Layers3 size={27} />
            </span>

            <div>
              <span className="provider-review__section-label">
                SERVICE HIGHLIGHTS
              </span>
              <h2>Key Sample Features</h2>
            </div>
          </div>

          <div className="provider-review__features">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className="provider-review__feature-card"
                  key={feature.title}
                >
                  <div className="provider-review__feature-icon">
                    <Icon size={30} strokeWidth={1.8} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ================= PROS & CONS ================= */}
        <section className="provider-review__section">
          <div className="provider-review__section-heading">
            <span className="provider-review__section-icon">
              <BadgeCheck size={27} />
            </span>

            <div>
              <span className="provider-review__section-label">
                REVIEW OVERVIEW
              </span>
              <h2>Advantages & Limitations</h2>
            </div>
          </div>

          <div className="provider-review__pros-cons">
            <article className="provider-review__assessment provider-review__assessment--pros">
              <div className="provider-review__assessment-heading">
                <div className="provider-review__assessment-icon">
                  <Check size={27} />
                </div>

                <div>
                  <span>SAMPLE BENEFITS</span>
                  <h3>Sample Advantages</h3>
                </div>
              </div>

              <div className="provider-review__assessment-list">
                {provider.pros.map((candidate) => (
                  <div
                    className="provider-review__assessment-item"
                    key={candidate}
                  >
                    <CheckCircle2 size={21} />
                    <p>{candidate}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="provider-review__assessment provider-review__assessment--cons">
              <div className="provider-review__assessment-heading">
                <div className="provider-review__assessment-icon">
                  <Minus size={27} />
                </div>

                <div>
                  <span>IMPORTANT DETAILS</span>
                  <h3>Important Limitations</h3>
                </div>
              </div>

              <div className="provider-review__assessment-list">
                {provider.cons.map((candidate) => (
                  <div
                    className="provider-review__assessment-item"
                    key={candidate}
                  >
                    <AlertCircle size={21} />
                    <p>{candidate}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* ================= PRICING & SUITABILITY ================= */}
        <section className="provider-review__details-grid">
          <article className="provider-review__detail-card">
            <div className="provider-review__detail-icon">
              <CreditCard size={28} />
            </div>

            <h2>Plans & Pricing</h2>

            <p>
              Not verified. No prices, trial terms,
              guarantees, or insurance amounts have
              been approved.
            </p>

            <div className="provider-review__detail-footer">
              <Info size={17} />
              Pricing information pending verification
            </div>
          </article>

          <article className="provider-review__detail-card">
            <div className="provider-review__detail-icon">
              <ShieldCheck size={28} />
            </div>

            <h2>Who This Example May Suit</h2>

            <p>
              This template illustrates a service focused on{" "}
              <strong>{provider.category.toLowerCase()}</strong>.
              Actual suitability will depend on verified
              coverage, cost, and personal needs.
            </p>

            <div className="provider-review__detail-footer">
              <CheckCircle2 size={17} />
              Review verified details before choosing
            </div>
          </article>
        </section>

        {/* ================= PROVIDER CTA ================= */}
        <section className="provider-review__cta">
          <div className="provider-review__cta-content">
            <span className="provider-review__cta-label">
              PROVIDER AVAILABILITY
            </span>

            <h2>Explore Provider Information</h2>

            <p>
              Review available provider details and
              confirm the current service information.
            </p>
          </div>

          <div className="provider-review__cta-action">
            {hasProviderUrl ? (
              <a
                className="provider-review__cta-button"
                href={provider.url}
                rel="sponsored noopener noreferrer"
                target="_blank"
              >
                Visit Provider
                <ExternalLink size={19} />
              </a>
            ) : (
              <div className="provider-review__unavailable">
                <Info size={20} />
                <p>
                  Visit Provider is unavailable: this
                  fictional provider has no live offer
                  or approved destination.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ================= ALTERNATIVES ================= */}
        <section className="provider-review__section">
          <div className="provider-review__section-heading">
            <span className="provider-review__section-icon">
              <BookOpen size={27} />
            </span>

            <div>
              <span className="provider-review__section-label">
                EXPLORE MORE
              </span>
              <h2>Compare Alternatives</h2>
            </div>
          </div>

          <div className="provider-review__alternatives">
            {alternatives.map((candidate) => (
              <Link
                to={`/reviews/${candidate.id}`}
                key={candidate.id}
                className="provider-review__alternative-card"
              >
                <div className="provider-review__alternative-icon">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <h3>{candidate.name}</h3>
                  <p>Sample provider review</p>
                </div>

                <ArrowRight
                  size={21}
                  className="provider-review__alternative-arrow"
                />
              </Link>
            ))}
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="provider-review__section">
          <div className="provider-review__section-heading">
            <span className="provider-review__section-icon">
              <CircleHelp size={27} />
            </span>

            <div>
              <span className="provider-review__section-label">
                COMMON QUESTIONS
              </span>
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>

          <details className="provider-review__faq">
            <summary>
              Is this a real service?
              <span className="provider-review__faq-toggle">
                <ArrowRight size={19} />
              </span>
            </summary>

            <p>
              No. This review uses clearly labeled
              fictional sample data.
            </p>
          </details>
        </section>

        {/* ================= DISCLOSURE ================= */}
        <section className="provider-review__disclosure">
          <div className="provider-review__disclosure-icon">
            <Info size={25} />
          </div>

          <div>
            <h2>Editorial Methodology & Disclosure</h2>

            <p>
              No testing or weighted scoring has been
              performed.{" "}
              {provider.sponsored
                ? "This page demonstrates a sponsored placement label."
                : "This is an illustrative editorial placement."}{" "}
              There are no live affiliate links.
            </p>

            <Link to="/methodology">
              Read the proposed methodology
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
