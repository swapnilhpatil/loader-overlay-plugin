import React, { useState } from "react";
import { SYNTAX_COLORS } from "../../constants/demo.js";
import { tokenizeCodeLine } from "../../utils/demo.js";

/**
 * Renders a syntax-highlighted block of code formatting keywords and strings.
 * @param {Object} props - The component props.
 * @param {string} props.code - The raw source code to display.
 * @param {string} [props.lang="jsx"] - The programming language label shown in the header.
 * @returns {JSX.Element}
 */
const CodeBlock = ({ code, lang = "jsx" }) => {
  const [copied, setCopied] = useState(false);

  const doCopy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        margin: "10px 0",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #1e2035",
        background: "#080c18",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6px 14px",
          background: "#0d1020",
          borderBottom: "1px solid #1a1d2e",
        }}
      >
        <span
          style={{
            fontSize: 10,
            color: "#4a5080",
            fontFamily: "monospace",
            letterSpacing: ".08em",
          }}
        >
          {lang}
        </span>
        <button
          onClick={doCopy}
          style={{
            background: copied ? "#1a3a1a" : "#1a1d2e",
            border: `1px solid ${copied ? "#60d394" : "#2a2d3e"}`,
            color: copied ? "#60d394" : "#6a7090",
            borderRadius: 6,
            padding: "3px 10px",
            fontSize: 11,
            cursor: "pointer",
            fontFamily: "monospace",
            transition: "all .2s",
          }}
        >
          {copied ? "✓ copied" : "copy"}
        </button>
      </div>
      <pre
        style={{
          margin: 0,
          padding: "13px 16px",
          overflowX: "auto",
          fontSize: 12.5,
          lineHeight: 1.75,
          fontFamily: "Consolas,monospace",
        }}
      >
        {code.split("\n").map((line, i) => (
          <div key={i}>
            {tokenizeCodeLine(line).map((t, j) => (
              <span
                key={j}
                style={{ color: t.c ? SYNTAX_COLORS[t.c] : "#94a3b8" }}
              >
                {t.v}
              </span>
            ))}
          </div>
        ))}
      </pre>
    </div>
  );
};

export default CodeBlock;
