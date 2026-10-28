import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-photo"
        src="/images/hero-final.jpg"
        alt="A couple reviewing information together on a laptop at home"
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <div className="container hero-grid">
        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
          }}
          className="hero-copy"
        >
          <div className="eyebrow">YOUR CREDIT. YOUR CONFIDENCE.</div>
          <h1>
            Stay Informed About Your Credit with the <em>Right Monitoring.</em>
          </h1>
          <p className="hero-description">
            Compare leading credit score monitoring services, explore key
            features, and find a provider that fits your needs.
          </p>
          <div className="hero-actions">
            <Link to="/best-credit-monitoring" className="button">
              EXPLORE TOP PICKS <ArrowRight size={20} />
            </Link>
            <Link to="/compare" className="button outline">
              COMPARE SERVICES
            </Link>
          </div>
          <div className="hero-caption">
            <ShieldCheck size={22} /> Clear information. More confident
            decisions.
          </div>
        </motion.div>
      </div>
      <div className="hero-glass">
        <span className="badge-icon">
          <ShieldCheck size={30} />
        </span>
        <div>
          <strong>Your next chapter starts with clarity.</strong>
          <span>Understand your options. Choose your direction.</span>
        </div>
      </div>
    </section>
  );
}
