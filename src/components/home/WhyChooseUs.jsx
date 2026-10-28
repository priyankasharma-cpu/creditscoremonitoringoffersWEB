import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";
import { motion } from "framer-motion";
export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container why-layout">
        <motion.div
          className="why-panel"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="eyebrow">A CLEARER WAY TO COMPARE</div>
          <h2>Find Credit Monitoring That Works for You.</h2>
          <p>
            Your financial life is personal. Your comparison should start with
            what matters to you.
          </p>
          <ul>
            {[
              "Compare monitoring capabilities",
              "Explore available plan features",
              "Understand provider differences",
              "Make informed comparisons",
            ].map((label) => (
              <li key={label}>
                <Check size={25} />
                {label}
              </li>
            ))}
          </ul>
          <Link className="button" to="/compare">
            FIND YOUR STARTING POINT <ArrowRight size={20} />
          </Link>
        </motion.div>
        <div className="why-image">
          <img
            src="/images/advisors.jpg"
            alt="Professionals collaborating around a table with a laptop and documents"
            loading="lazy"
          />
          <div className="image-glass">
            <ShieldCheck size={30} />
            <div>
              <strong>Features first. Clarity always.</strong>
              <span>
                Transparent sample comparisons, without the guesswork.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
