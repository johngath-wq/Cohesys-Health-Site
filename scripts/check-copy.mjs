import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const root = join(process.cwd());
const targets = ["app", "components", "lib"];
const extensions = new Set([".ts", ".tsx", ".js", ".jsx", ".md", ".mjs"]);

const forbidden = [
  /MEDITECH Alliance/i,
  /\bAlliance membership\b/i,
  /\bAlliance member\b/i,
  /St\.?\s*Claire/i,
  /\bNCCN\b/,
  /GenomOncology/i,
  /\bVarian\b/i,
  /Cohesys Health Sol 1/i,
  /over a decade/i,
  /\bseamless\b/i,
  /\bempowering\b/i,
  /cutting-edge/i,
  /dual-EHR/i,
];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next") continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (extensions.has(extname(name))) out.push(full);
  }
  return out;
}

const files = targets.flatMap((dir) => walk(join(root, dir)));
const hits = [];

for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const pattern of forbidden) {
    if (pattern.test(text)) {
      hits.push(`${file.replace(root + "/", "")}: ${pattern}`);
    }
  }
}

if (hits.length) {
  console.error("Forbidden copy found:\n" + hits.join("\n"));
  process.exit(1);
}

console.log(`Copy check passed (${files.length} files).`);
