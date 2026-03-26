import { SYNTAX_KEYWORDS, DEFAULT_DEMO_CONFIG } from "../constants/demo.js";

/**
 * Parses a single line of JavaScript/React code into syntax-highlighted tokens.
 * @param {string} line The line of code to be tokenized.
 * @returns {import('../types/demo.js').SyntaxToken[]} An array of code tokens.
 */
export const tokenizeCodeLine = (line) => {
  const out = [];
  let rest = line;
  const pats = [
    [/^(\/\/.*)/, "cm"],
    [/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/, "st"],
    [/^(<\/?[A-Z][A-Za-z0-9]*)/, "tag"],
    [/^([a-zA-Z_$][a-zA-Z0-9_$]*)/, "id"],
    [/^(\d+\.?\d*)/, "nm"],
    [/^([^\w\s])/, "op"],
    [/^(\s+)/, null],
  ];
  while (rest.length) {
    let hit = false;
    for (const [re, c] of pats) {
      const m = rest.match(re);
      if (m) {
        const v = m[1];
        out.push({ v, c: c === "id" && SYNTAX_KEYWORDS.has(v) ? "kw" : c });
        rest = rest.slice(v.length);
        hit = true;
        break;
      }
    }
    if (!hit) {
      out.push({ v: rest[0], c: null });
      rest = rest.slice(1);
    }
  }
  return out;
};

/**
 * Generates a React JSX string representing the LoaderOverlay with the given configuration.
 * Config properties that match their defaults are dynamically omitted for brevity.
 * @param {import('../types/demo.js').DemoConfiguration} cfg The configuration object.
 * @returns {string} The formatted JSX code string.
 */
export const generateReactCode = (cfg) => {
  const diff = Object.entries(cfg).filter(([k, v]) => {
    if (k === "show") return false;
    return (
      DEFAULT_DEMO_CONFIG[k] !== undefined &&
      String(v) !== String(DEFAULT_DEMO_CONFIG[k])
    );
  });
  if (!diff.length) return "<LoaderOverlay show={loading} />";
  const lines = ["<LoaderOverlay", "  show={loading}"];
  for (const [k, v] of diff) {
    if (typeof v === "boolean") lines.push(`  ${v ? k : `${k}={false}`}`);
    else if (typeof v === "number") lines.push(`  ${k}={${v}}`);
    else lines.push(`  ${k}="${v}"`);
  }
  lines.push("/>");
  return lines.join("\n");
};
