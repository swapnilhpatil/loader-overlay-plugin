import React, { useState } from "react";
import { SYNTAX_COLORS } from "../../../constants/demo.js";
import { tokenizeCodeLine } from "../../../utils/demo.js";

/**
 * Code Preview Panel
 * @param {Object} props
 * @param {string} props.code
 * @returns {JSX.Element}
 */
export function CodePreview({ code }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div
      style={{
        background: "#0d0d0d",
        border: "1px solid #2e2e2e",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 16px",
          background: "#161616",
          borderBottom: "1px solid #2a2a2a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontSize: 10,
              background: "#a78bfa18",
              color: "#a78bfa",
              border: "1px solid #a78bfa30",
              borderRadius: 99,
              padding: "2px 8px",
              fontFamily: "monospace",
            }}
          >
            ⚡ generated code
          </span>
          <span
            style={{ fontSize: 10, color: "#555555", fontFamily: "monospace" }}
          >
            updates as you change props
          </span>
        </div>
        <button
          onClick={copy}
          style={{
            background: copied ? "#1a3a1a" : "#2a2a2a",
            border: `1px solid ${copied ? "#60d394" : "#3a3a3a"}`,
            color: copied ? "#60d394" : "#888888",
            borderRadius: 6,
            padding: "4px 12px",
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
          padding: "16px 20px",
          overflowX: "auto",
          fontSize: 13,
          lineHeight: 1.8,
          fontFamily: "Consolas,monospace",
        }}
      >
        {code.split("\n").map((line, i) => (
          <div key={i}>
            {tokenizeCodeLine(line).map((t, j) => (
              <span
                key={j}
                style={{ color: t.c ? SYNTAX_COLORS[t.c] : "#888888" }}
              >
                {t.v}
              </span>
            ))}
          </div>
        ))}
      </pre>
    </div>
  );
}
