import { Link } from "react-router-dom";
import Brand from "./Brand";
export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Brand />
          <p>
            A clearer view of credit monitoring.
            <br />A more informed choice for you.
          </p>
          <span className="footer-note">
            Knowledge first. Decisions second.
          </span>
        </div>
        {[
          [
            "Compare",
            [
              ["Best monitoring services", "/best-credit-monitoring"],
              ["Compare providers", "/compare"],
              ["Provider reviews", "/reviews"],
            ],
          ],
          [
            "Learn",
            [
              ["Credit education", "/education"],
              ["How we compare", "/methodology"],
              ["Editorial policy", "/editorial-policy"],
            ],
          ],
          [
            "Our publication",
            [
              ["About us", "/about"],
              ["Contact us", "/contact"],
              ["Advertiser disclosure", "/advertiser-disclosure"],
            ],
          ],
        ].map(([title, items]) => (
          <div key={title}>
            <h3>{title}</h3>
            {items.map(([label, url]) => (
              <Link key={url} to={url}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Credit Score Monitoring Offers</span>
        <div>
          <Link to="/privacy">Privacy policy</Link>
          <Link to="/terms">Terms & conditions</Link>
        </div>
      </div>
      <p className="container legal-note">
        Demonstration website. All provider names, features, and placements are
        illustrative. No real offers or rankings are available. Educational
        content is general information.
      </p>
    </footer>
  );
}
