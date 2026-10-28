import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { providers } from "../../data/providers";
import ComparisonTable from "./ComparisonTable";
export default function ComparisonSection() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("order");
  function matchesFilter(provider) {
    if (filter === "all") return true;
    if (filter === "three") return provider.bureaus === 3;
    return provider.identity;
  }

  function compareProviders(firstProvider, secondProvider) {
    if (sort === "name")
      return firstProvider.name.localeCompare(secondProvider.name);
    if (sort === "coverage")
      return secondProvider.bureaus - firstProvider.bureaus;
    return firstProvider.order - secondProvider.order;
  }

  // Filtering creates a new array; the original provider order stays unchanged.
  const rows = providers.filter(matchesFilter).toSorted(compareProviders);
  return (
    <section className="section comparison-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">THE DETAILS, SIDE BY SIDE</div>
            <h2>Less guesswork. More clarity.</h2>
            <p>
              Compare the features that can make a difference to your decision.
            </p>
          </div>
          <SlidersHorizontal size={24} />
        </div>
        <div className="table-toolbar">
          <div className="filter-buttons" aria-label="Filter providers">
            {[
              ["all", "All services"],
              ["three", "3-bureau coverage"],
              ["identity", "Identity monitoring"],
            ].map(([value, label]) => (
              <button
                key={value}
                aria-pressed={filter === value}
                className={filter === value ? "selected" : ""}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <label>
            Sort by:{" "}
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="order">Sample order</option>
              <option value="name">Provider A–Z</option>
              <option value="coverage">Bureau coverage</option>
            </select>
          </label>
        </div>
        <ComparisonTable providers={rows} />
        <p className="fine-print">
          All entries are sample data. Availability, plans, and actual coverage
          have not been verified.
        </p>
      </div>
    </section>
  );
}
