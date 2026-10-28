import fs from "node:fs";
import path from "node:path";
import { build } from "esbuild";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { pathToFileURL } from "node:url";
import assert from "node:assert/strict";
const backup = path.resolve(
  "../creditscoremonitoringoffers-backup-20261027-refactor",
);
const router = import.meta.resolve("react-router-dom");
async function bundle(entry, name) {
  await build({
    entryPoints: [entry],
    outfile: `verification/${name}.cjs`,
    bundle: true,
    platform: "node",
    format: "cjs",
    jsx: "automatic",
    packages: "external",
    plugins: [
      {
        name: "render-in-memory-router",
        setup(build) {
          build.onResolve({ filter: /^react-router-dom$/ }, () => ({
            path: "router-shim",
            namespace: "verification",
          }));
          build.onLoad({ filter: /.*/, namespace: "verification" }, () => ({
            contents: `import React from 'react'; import {MemoryRouter} from ${JSON.stringify(new URL(router).pathname.replace(/^\/([A-Za-z]:)/, "$1"))}; export * from ${JSON.stringify(new URL(router).pathname.replace(/^\/([A-Za-z]:)/, "$1"))}; export function BrowserRouter({children}) { return React.createElement(MemoryRouter,{initialEntries:[globalThis.verificationRoute]},children); }`,
            resolveDir: process.cwd(),
          }));
          build.onLoad({ filter: /\.css$/ }, () => ({
            contents: "",
            loader: "js",
          }));
        },
      },
    ],
  });
  return (
    await import(pathToFileURL(path.resolve(`verification/${name}.cjs`)).href)
  ).default.default;
}
const Before = await bundle(path.join(backup, "src/App.jsx"), "before");
const After = await bundle(path.resolve("src/App.jsx"), "after");
const oldData = await import(
  pathToFileURL(path.join(backup, "src/data/content.js"))
);
const newData = await import(
  pathToFileURL(path.resolve("src/data/content.js"))
);
for (const key of ["providers", "articles", "faqs"])
  assert.deepEqual(newData[key], oldData[key]);
const routes = [
  "/",
  "/compare",
  "/best-credit-monitoring",
  "/reviews",
  "/education",
  "/about",
  "/contact",
  "/methodology",
  "/editorial-policy",
  "/advertiser-disclosure",
  "/privacy",
  "/terms",
  "/missing-page",
  "/reviews/invalid",
  "/education/invalid",
  ...oldData.providers.map((p) => "/reviews/" + p.id),
  ...oldData.articles.map((a) => "/education/" + a.slug),
];
const results = [];
for (const route of routes) {
  globalThis.verificationRoute = route;
  const before = renderToStaticMarkup(React.createElement(Before)),
    after = renderToStaticMarkup(React.createElement(After));
  const normalize = (s) =>
    s
      .replace(/\s+/g, " ")
      .replace(/> </g, "><")
      .replace(/ <\//g, "</")
      .replace(/> /g, ">");
  const same = normalize(before) === normalize(after);
  results.push({ route, same });
  if (!same) {
    fs.writeFileSync(
      "verification/" + route.replaceAll("/", "_") + "-before.html",
      before,
    );
    fs.writeFileSync(
      "verification/" + route.replaceAll("/", "_") + "-after.html",
      after,
    );
  }
}
fs.writeFileSync("verification/routes.json", JSON.stringify(results, null, 2));
console.log(JSON.stringify(results));
assert.ok(
  results.every((r) => r.same),
  "Route markup differs; inspect verification HTML.",
);
for (const file of [
  "package.json",
  "package-lock.json",
  "vite.config.js",
  "index.html",
  ...fs.readdirSync("public/images").map((f) => "public/images/" + f),
  "public/robots.txt",
  "public/_redirects",
  "public/sitemap.xml",
])
  assert.deepEqual(
    fs.readFileSync(file),
    fs.readFileSync(path.join(backup, file)),
    file + " changed",
  );
console.log(
  "Provider/article/FAQ data, package versions, config, static SEO files, assets, and all route markup verified.",
);

// Keep generated render bundles out of normal source/lint scans.
for (const name of ["before", "after"])
  fs.unlinkSync(`verification/${name}.cjs`);
