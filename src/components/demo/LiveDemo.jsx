import React, { useState } from "react";
import LoaderOverlay from "../../index.jsx";
import CodeBlock from "./CodeBlock.jsx";
import { generateReactCode } from "../../utils/demo.js";

/**
 * Renders a live preview panel for the loader overlay, along with its generated JSX code.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the demo instance.
 * @param {string} props.desc - A short description of what is being demonstrated.
 * @param {import('../../types/demo.js').DemoConfiguration} [props.dp={}] - The default loader configuration props for the demo.
 * @param {string} [props.sc] - An optional source code block showing the full contextual example.
 * @returns {JSX.Element}
 */
const LiveDemo = ({ title, desc, dp = {}, sc }) => {
  const [lp, setLp] = useState({ show: false, ...dp });
  const [tab, setTab] = useState("preview");
  const set = (k, v) => setLp((p) => ({ ...p, [k]: v }));

  return (
    <div
      style={{
        border: "1px solid #1a1d30",
        borderRadius: 14,
        overflow: "hidden",
        marginBottom: 24,
        background: "#090c1a",
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #1a1d30",
          background: "#0d1020",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 3,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#c084fc",
                display: "inline-block",
                boxShadow: "0 0 8px #c084fc88",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#e2e8f0",
                fontFamily: "monospace",
              }}
            >
              {title}
            </span>
          </div>
          <p style={{ margin: 0, fontSize: 12, color: "#4a5580" }}>{desc}</p>
        </div>
        <div
          style={{
            display: "flex",
            background: "#080c18",
            border: "1px solid #1a1d30",
            borderRadius: 8,
            padding: 3,
            flexShrink: 0,
          }}
        >
          {[
            ["preview", "▶ Preview"],
            ["code", "</> Code"],
          ].map(([t, label]) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "4px 12px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                fontSize: 11,
                fontFamily: "monospace",
                fontWeight: 600,
                background: tab === t ? "#c084fc18" : "transparent",
                color: tab === t ? "#c084fc" : "#3a4060",
                boxShadow: tab === t ? "0 0 0 1px #c084fc30" : "none",
                transition: "all .15s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {tab === "preview" && (
        <>
          <div
            style={{
              position: "relative",
              height: 185,
              background: "#06080f",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: 14,
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 8,
              }}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: 38,
                    borderRadius: 8,
                    background: `#${["0d1020", "0f1224", "0c0e1a", "111428"][i % 4]}`,
                    border: "1px solid #1a1d30",
                  }}
                />
              ))}
            </div>
            <LoaderOverlay
              {...lp}
              fullScreen={false}
              onClose={() => set("show", false)}
            />
          </div>
          <div
            style={{
              padding: "8px 14px",
              borderTop: "1px solid #1a1d30",
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#080b16",
            }}
          >
            <button
              onClick={() => set("show", true)}
              style={{
                padding: "5px 14px",
                background: "#c084fc18",
                border: "1px solid #c084fc44",
                color: "#c084fc",
                borderRadius: 7,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 600,
                fontFamily: "monospace",
              }}
            >
              ▶ Run
            </button>
            <button
              onClick={() => set("show", false)}
              style={{
                padding: "5px 10px",
                background: "transparent",
                border: "1px solid #1e2035",
                color: "#3a4060",
                borderRadius: 7,
                cursor: "pointer",
                fontSize: 12,
                fontFamily: "monospace",
              }}
            >
              ■ Stop
            </button>
            <span
              style={{
                marginLeft: "auto",
                fontSize: 10,
                color: "#1e2840",
                fontFamily: "monospace",
              }}
            >
              switch to Code to see generated JSX
            </span>
          </div>
        </>
      )}

      {tab === "code" && (
        <div style={{ background: "#06080f" }}>
          <div
            style={{
              padding: "10px 14px 0",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 10,
                background: "#60d39415",
                color: "#60d394",
                border: "1px solid #60d39430",
                borderRadius: 99,
                padding: "2px 8px",
                fontFamily: "monospace",
              }}
            >
              ⚡ generated from props
            </span>
          </div>
          <CodeBlock code={generateReactCode(lp)} lang="jsx · generated" />
          {sc && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "0 14px",
                }}
              >
                <div style={{ flex: 1, height: 1, background: "#1a1d30" }} />
                <span
                  style={{
                    fontSize: 10,
                    color: "#2a3050",
                    fontFamily: "monospace",
                    whiteSpace: "nowrap",
                  }}
                >
                  full example
                </span>
                <div style={{ flex: 1, height: 1, background: "#1a1d30" }} />
              </div>
              <CodeBlock code={sc} lang="jsx · full example" />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LiveDemo;
