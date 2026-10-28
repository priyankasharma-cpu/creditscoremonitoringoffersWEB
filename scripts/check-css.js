import fs from "node:fs";
import path from "node:path";
import postcss from "postcss";
const backup = "../creditscoremonitoringoffers-backup-20261027-refactor";
function rules(file) {
  const root = postcss.parse(fs.readFileSync(file, "utf8"));
  const output = [];
  function walk(container, media = []) {
    for (const node of container.nodes) {
      if (node.type === "atrule" && node.name === "import") {
        const match = node.params.match(/^["']([^"']+\.css)["']/);
        if (match)
          output.push(...rules(path.resolve(path.dirname(file), match[1])));
        continue;
      }
      if (node.type === "atrule" && node.nodes) {
        walk(node, [...media, node.params]);
        continue;
      }
      if (node.type === "rule")
        output.push({
          selector: node.selector,
          media,
          properties: node.nodes
            .filter((n) => n.type === "decl")
            .map((n) => [
              n.prop,
              n.value.replace(/\s+/g, " ").trim(),
              n.important || false,
            ]),
        });
    }
  }
  walk(root);
  return output;
}
const oldRules = rules(backup + "/src/styles/index.css"),
  newRules = rules("src/styles/index.css");
fs.writeFileSync(
  "verification/css-rules.json",
  JSON.stringify({ before: oldRules, after: newRules }),
);
const normalize = (value) =>
  value.replace(/[\s"']/g, "").replace(/(^|[^\d])0\./g, "$1.");
const canonical = (rule) =>
  JSON.stringify({
    selector: normalize(rule.selector),
    media: rule.media.map(normalize),
    properties: rule.properties.map(([name, value, important]) => [
      name,
      normalize(value),
      important,
    ]),
  });
console.log(
  "Original CSS rules:",
  oldRules.length,
  "Extracted:",
  newRules.length,
);
const missing = oldRules.filter(
  (r) => !newRules.some((n) => canonical(n) === canonical(r)),
);
fs.writeFileSync(
  "verification/css-missing.json",
  JSON.stringify(missing, null, 2),
);
console.log("Original rules missing after extraction:", missing.length);
