import { Link } from "react-router-dom";
import { Check, Minus, ArrowUpRight } from "lucide-react";
import ProviderLogo from "../providers/ProviderLogo";
export default function ComparisonTable({ providers: rows }) {
  return (
    <div
      className="table-scroll"
      role="region"
      aria-label="Sample provider comparison"
      tabIndex={0}
    >
      <table>
        <caption>
          Illustrative features only. All pricing and provider details require
          verification.
        </caption>
        <thead>
          <tr>
            {[
              "Provider",
              "Bureau coverage",
              "Credit monitoring",
              "Identity monitoring",
              "Alerts",
              "Pricing",
              "Best for",
              "Details",
            ].map((candidate) => (
              <th key={candidate} scope="col">
                {candidate}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((provider) => (
            <tr key={provider.id}>
              <th scope="row">
                <ProviderLogo provider={provider} />
              </th>
              <td>{provider.bureaus} bureaus</td>
              {[provider.monitoring, provider.identity, provider.alerts].map(
                (value, index) => (
                  <td key={index}>
                    <span className={value ? "yes" : "no"}>
                      {value ? <Check size={15} /> : <Minus size={15} />}{" "}
                      {value ? "Yes" : "No"}
                    </span>
                  </td>
                ),
              )}
              <td>Not verified</td>
              <td>{provider.category}</td>
              <td>
                <Link className="table-link" to={"/reviews/" + provider.id}>
                  View sample <ArrowUpRight size={14} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
