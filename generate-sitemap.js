import { writeFileSync } from "node:fs";
import { providers } from "./src/data/providers.js";
import { articles } from "./src/data/articles.js";
const routes = [
  "",
  "best-credit-monitoring",
  "compare",
  "reviews",
  "education",
  "about",
  "methodology",
  "editorial-policy",
  "advertiser-disclosure",
  "privacy",
  "terms",
  "contact",
  ...providers.map((p) => "reviews/" + p.id),
  ...articles.map((a) => "education/" + a.slug),
];
writeFileSync(
  "public/sitemap.xml",
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    routes
      .map(
        (p) =>
          "<url><loc>https://creditscoremonitoringoffers.com/" +
          p +
          "</loc></url>",
      )
      .join("") +
    "</urlset>",
);
