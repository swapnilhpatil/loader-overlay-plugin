import React, { useState } from "react";
import { CODE_EXAMPLES } from "./constants/demo.js";
import CodeBlock from "./components/demo/CodeBlock.jsx";
import LiveDemo from "./components/demo/LiveDemo.jsx";
import PropTableRow from "./components/demo/PropTableRow.jsx";
import MainHeading from "./components/demo/MainHeading.jsx";
import SubHeading from "./components/demo/SubHeading.jsx";
import LoaderOverlay from "./index.jsx";
import LeadParagraph from "./components/demo/LeadParagraph.jsx";
import Playground from "./components/demo/Playground.jsx";
import InteractiveDemo from "./components/demo/InteractiveDemo/index.jsx";

const NAV = [
  { id: "install", label: "Installation", icon: "📦" },
  { id: "quickstart", label: "Quick Start", icon: "⚡" },
  { id: "stories", label: "Live Stories", icon: "📖" },
  { id: "playground", label: "Playground", icon: "🎮" },
  { id: "v2demo", label: "V2 Demo", icon: "✨" },
  { id: "props", label: "Props", icon: "📋" },
  { id: "examples", label: "Examples", icon: "🧪" },
  { id: "changelog", label: "Changelog", icon: "📝" },
];

export default function App() {
  const [page, setPage] = useState("v2demo");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060810",
        color: "#c8d0e8",
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: #08091a; }
        ::-webkit-scrollbar-thumb { background: #1e2240; border-radius: 3px; }
        .ni { transition: all .15s; cursor: pointer; user-select: none; }
        .ni:hover { background: #1a1d30 !important; color: #e2e8f0 !important; }
        .ni.on { background: #c084fc14 !important; color: #c084fc !important; border-left: 2px solid #c084fc !important; }
        table { width: 100%; border-collapse: collapse; }
        thead th { text-align: left; padding: 8px 12px; font-size: 11px; color: #4a5580; font-family: monospace; letter-spacing: .08em; font-weight: 500; border-bottom: 1px solid #1a1d30; background: #0c0f20; }
        @keyframes hglow { 0%, 100% { opacity: .3; } 50% { opacity: .7; } }
      `}</style>

      {/* ── HEADER ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 200,
          background: "rgba(6, 8, 16, .94)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid #12152a",
          display: "flex",
          alignItems: "center",
          padding: "0 22px",
          height: 52,
          gap: 10,
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: 6,
            background: "linear-gradient(135deg, #c084fc, #6366f1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            flexShrink: 0,
          }}
        >
          ⟳
        </div>
        <span
          style={{ fontWeight: 800, fontSize: 14, letterSpacing: "-.01em" }}
        >
          <span style={{ color: "#c084fc" }}>loader</span>
          <span style={{ color: "#e2e8f0" }}>-overlay</span>
        </span>
        <span
          style={{
            fontSize: 10,
            background: "#60d39418",
            color: "#60d394",
            border: "1px solid #60d39430",
            borderRadius: 99,
            padding: "2px 7px",
            fontFamily: "monospace",
          }}
        >
          v1.0.1
        </span>
        <div style={{ flex: 1 }} />
        <span
          style={{ fontSize: 11, color: "#2a3050", fontFamily: "monospace" }}
        >
          React · TypeScript · Zero deps
        </span>
      </header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* ── SIDEBAR ── */}
        <aside
          style={{
            width: 196,
            flexShrink: 0,
            borderRight: "1px solid #12152a",
            padding: "18px 0",
            position: "sticky",
            top: 52,
            height: "calc(100vh - 52px)",
            overflowY: "auto",
            background: "#060810",
          }}
        >
          <div
            style={{
              padding: "0 10px 5px",
              fontSize: 10,
              color: "#2a3050",
              fontFamily: "monospace",
              letterSpacing: ".1em",
            }}
          >
            DOCS
          </div>
          {NAV.map((n) => (
            <div
              key={n.id}
              className={`ni${page === n.id ? " on" : ""}`}
              onClick={() => setPage(n.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 13px",
                borderLeft: "2px solid transparent",
                color: "#4a5580",
                fontSize: 13,
              }}
            >
              <span>{n.icon}</span>
              {n.label}
            </div>
          ))}
          <div
            style={{ margin: "14px 10px", height: 1, background: "#12152a" }}
          />
          <div style={{ padding: "0 11px" }}>
            <div
              style={{
                background: "#0c0f1e",
                border: "1px solid #1a1d30",
                borderRadius: 10,
                padding: "11px",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#4a5580",
                  fontFamily: "monospace",
                  marginBottom: 4,
                }}
              >
                weekly downloads
              </div>
              {/* <div style={{ fontSize: 22, fontWeight: 800, color: "#c084fc" }}>
                48.2k
              </div> */}
              <div
                style={{
                  marginTop: 6,
                  height: 3,
                  background: "#1a1d30",
                  borderRadius: 99,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "72%",
                    background: "linear-gradient(90deg, #c084fc, #6366f1)",
                    borderRadius: 99,
                  }}
                />
              </div>
            </div>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main
          style={{
            flex: 1,
            padding: "34px 42px",
            overflowY: "auto",
            maxWidth: 960,
          }}
        >
          {/* INSTALL */}
          {page === "install" && (
            <div>
              <div
                style={{
                  position: "relative",
                  marginBottom: 40,
                  padding: "34px",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #0d0820, #12082a)",
                  border: "1px solid #2a1a4a",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, #c084fc18, transparent 70%)",
                    animation: "hglow 3s ease-in-out infinite",
                    pointerEvents: "none",
                  }}
                />
                <h1
                  style={{
                    margin: "0 0 8px",
                    fontWeight: 800,
                    fontSize: 24,
                    color: "#f0e8ff",
                  }}
                >
                  loader-overlay
                </h1>
                <p
                  style={{
                    margin: "0 0 18px",
                    fontSize: 13,
                    color: "#9070b8",
                    lineHeight: 1.7,
                    maxWidth: 480,
                  }}
                >
                  Drop-in React overlay loader — 5 animation types, full theme
                  control, progress tracking, outside-click dismissal, and zero
                  dependencies.
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[
                    "5 loader types",
                    "TypeScript ready",
                    "Zero deps",
                    "Accessible",
                    "Tree-shakeable",
                  ].map((b) => (
                    <span
                      key={b}
                      style={{
                        fontSize: 11,
                        background: "#c084fc12",
                        color: "#c084fc",
                        border: "1px solid #c084fc25",
                        borderRadius: 99,
                        padding: "3px 10px",
                        fontFamily: "monospace",
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <SubHeading n="01">Install</SubHeading>
              {[
                ["npm", "npm install loader-overlay"],
                ["yarn", "yarn add loader-overlay"],
                ["pnpm", "pnpm add loader-overlay"],
                ["bun", "bun add loader-overlay"],
              ].map(([pm, cmd]) => (
                <CodeBlock key={pm} code={cmd} lang={`shell · ${pm}`} />
              ))}

              <SubHeading n="02">Peer dependencies</SubHeading>
              <CodeBlock
                code={`// package.json\n{\n  "react": ">=17.0.0",\n  "react-dom": ">=17.0.0"\n}`}
                lang="json"
              />

              <SubHeading n="03">TypeScript</SubHeading>
              <LeadParagraph>
                Types are bundled — no{" "}
                <code style={{ color: "#c084fc", fontFamily: "monospace" }}>
                  @types
                </code>{" "}
                package needed.
              </LeadParagraph>
              <CodeBlock code={CODE_EXAMPLES.tsUsage} lang="tsx" />
            </div>
          )}

          {/* QUICK START */}
          {page === "quickstart" && (
            <div>
              <MainHeading>⚡ Quick Start</MainHeading>
              <LeadParagraph>Up and running in under 60 seconds.</LeadParagraph>
              <SubHeading>Minimal usage</SubHeading>
              <CodeBlock code={CODE_EXAMPLES.minimal} />
              <SubHeading>With progress tracking</SubHeading>
              <CodeBlock code={CODE_EXAMPLES.withProgress} />
              <SubHeading>Outside click dismiss</SubHeading>
              <CodeBlock code={CODE_EXAMPLES.outsideClick} />
            </div>
          )}

          {/* PLAYGROUND */}
          {page === "playground" && (
            <div>
              <MainHeading>🎮 Interactive Playground</MainHeading>
              <LeadParagraph>
                Tweak every available prop and automatically preview how your
                loader will behave.
              </LeadParagraph>
              <Playground />
            </div>
          )}

          {/* V2 DEMO */}
          {page === "v2demo" && (
            <div style={{ margin: "-34px -42px" }}>
              <InteractiveDemo />
            </div>
          )}

          {/* LIVE STORIES */}
          {page === "stories" && (
            <div>
              <MainHeading>📖 Live Stories</MainHeading>
              <LeadParagraph>
                Click ▶ Preview to run each story live, then switch to &lt;/&gt;
                Code to see the JSX snippet for each configuration.
              </LeadParagraph>

              <LiveDemo
                title="Default Spinner"
                desc="Standard spinner for any loading state."
                dp={{
                  type: "spinner",
                  variant: "dark",
                  color: "#c084fc",
                  message: "Loading...",
                  blur: 10,
                }}
                sc={`<LoaderOverlay\n  show={loading}\n  type="spinner"\n  variant="dark"\n  color="#c084fc"\n  message="Loading..."\n/>`}
              />
              <LiveDemo
                title="Dots — Light Mode"
                desc="Bouncing dots on a light backdrop."
                dp={{
                  type: "dots",
                  variant: "light",
                  color: "#6366f1",
                  message: "Please wait",
                  blur: 6,
                }}
                sc={`<LoaderOverlay\n  show={loading}\n  type="dots"\n  variant="light"\n  color="#6366f1"\n  message="Please wait"\n/>`}
              />
              <LiveDemo
                title="Pulse — Gradient"
                desc="Pulsing circle with a deep gradient overlay."
                dp={{
                  type: "pulse",
                  variant: "gradient",
                  color: "#f472b6",
                  message: "Syncing...",
                  submessage: "Do not close this window",
                  blur: 0,
                }}
                sc={`<LoaderOverlay\n  show={loading}\n  type="pulse"\n  variant="gradient"\n  color="#f472b6"\n  message="Syncing..."\n  submessage="Do not close this window"\n/>`}
              />
              <LiveDemo
                title="Bar — With Progress"
                desc="Bar columns with live progress tracking."
                dp={{
                  type: "bar",
                  variant: "dark",
                  color: "#60d394",
                  message: "Uploading...",
                  showProgress: true,
                  progress: 68,
                }}
                sc={`<LoaderOverlay\n  show={loading}\n  type="bar"\n  color="#60d394"\n  message="Uploading..."\n  showProgress\n  progress={pct}\n/>`}
              />
              <LiveDemo
                title="Ring — Blur Backdrop"
                desc="Minimal ring on a frosted glass overlay."
                dp={{
                  type: "ring",
                  variant: "blur",
                  color: "#f9a825",
                  message: "Fetching data",
                  blur: 14,
                  size: "lg",
                }}
                sc={`<LoaderOverlay\n  show={loading}\n  type="ring"\n  variant="blur"\n  color="#f9a825"\n  size="lg"\n  blur={14}\n  message="Fetching data"\n/>`}
              />
              <LiveDemo
                title="Outside Click Dismiss"
                desc="Dismiss by clicking anywhere outside the box."
                dp={{
                  type: "spinner",
                  variant: "dark",
                  color: "#c084fc",
                  message: "Click outside to close",
                  closeOnOutsideClick: true,
                  blur: 10,
                }}
                sc={`<LoaderOverlay\n  show={loading}\n  closeOnOutsideClick\n  onClose={() => setLoading(false)}\n  message="Click outside to close"\n/>`}
              />
              <LiveDemo
                title="Auto-dismiss Timeout"
                desc="Loader closes automatically after 3 seconds."
                dp={{
                  type: "dots",
                  variant: "gradient",
                  color: "#60d394",
                  message: "Auto-closing in 3s...",
                  timeout: 3000,
                  blur: 8,
                }}
                sc={`<LoaderOverlay\n  show={loading}\n  timeout={3000}\n  onClose={() => setLoading(false)}\n  message="Auto-closing in 3s..."\n/>`}
              />
            </div>
          )}

          {/* PROPS */}
          {page === "props" && (
            <div>
              <MainHeading>📋 Props Reference</MainHeading>
              <LeadParagraph>All props grouped by category.</LeadParagraph>
              {[
                {
                  sec: "Visibility & Lifecycle",
                  rows: [
                    ["show", "boolean", "true", "Controls overlay visibility"],
                    [
                      "timeout",
                      "number",
                      "0",
                      "Auto-hide after N ms. 0 = never",
                    ],
                    [
                      "animateIn",
                      "boolean",
                      "true",
                      "Fade-in animation on mount",
                    ],
                    [
                      "fullScreen",
                      "boolean",
                      "true",
                      "Cover viewport vs parent element",
                    ],
                    [
                      "lockScroll",
                      "boolean",
                      "true",
                      "Lock body scroll when active",
                    ],
                    ["zIndex", "number", "9999", "CSS z-index"],
                  ],
                },
                {
                  sec: "Appearance",
                  rows: [
                    [
                      "type",
                      "'spinner'|'dots'|'pulse'|'ring'|'bar'",
                      "'spinner'",
                      "Loader animation type",
                    ],
                    ["size", "'sm'|'md'|'lg'|'xl'", "'md'", "Loader size"],
                    [
                      "variant",
                      "'dark'|'light'|'blur'|'transparent'|'gradient'",
                      "'dark'",
                      "Overlay background style",
                    ],
                    [
                      "color",
                      "string",
                      "'#a78bfa'",
                      "Accent color (any CSS value)",
                    ],
                    ["opacity", "number", "1", "Background opacity 0–1"],
                    ["blur", "number", "8", "Backdrop blur in px"],
                    [
                      "position",
                      "'center'|'top'|'bottom'",
                      "'center'",
                      "Vertical position of box",
                    ],
                  ],
                },
                {
                  sec: "Content",
                  rows: [
                    ["message", "string", "'Loading...'", "Primary label text"],
                    ["submessage", "string", "''", "Secondary hint text"],
                    [
                      "children",
                      "ReactNode",
                      "null",
                      "Replace loader with custom content",
                    ],
                  ],
                },
                {
                  sec: "Progress",
                  rows: [
                    [
                      "showProgress",
                      "boolean",
                      "false",
                      "Show animated progress bar",
                    ],
                    ["progress", "number", "0", "Progress value 0–100"],
                  ],
                },
                {
                  sec: "Close Behavior",
                  rows: [
                    ["closable", "boolean", "false", "Show ✕ close button"],
                    ["onClose", "()=>void", "()=>{}", "Callback when closed"],
                    [
                      "closeOnOutsideClick",
                      "boolean",
                      "false",
                      "Dismiss on backdrop click",
                    ],
                    [
                      "onOutsideClick",
                      "()=>void",
                      "()=>{}",
                      "Callback on outside click",
                    ],
                  ],
                },
              ].map(({ sec, rows }) => (
                <div key={sec} style={{ marginBottom: 26 }}>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: 11,
                      color: "#c084fc",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {sec}
                  </h3>
                  <div
                    style={{
                      border: "1px solid #1a1d30",
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <table>
                      <thead>
                        <tr>
                          <th>Prop</th>
                          <th>Type</th>
                          <th>Default</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((r) => (
                          <PropTableRow
                            key={r[0]}
                            name={r[0]}
                            type={r[1]}
                            def={r[2]}
                            desc={r[3]}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EXAMPLES */}
          {page === "examples" && (
            <div>
              <MainHeading>🧪 Examples</MainHeading>
              <LeadParagraph>
                Real-world patterns — copy and paste ready.
              </LeadParagraph>
              <SubHeading>API call</SubHeading>
              <CodeBlock code={CODE_EXAMPLES.apiCall} />
              <SubHeading>File upload with progress</SubHeading>
              <CodeBlock code={CODE_EXAMPLES.withProgress} />
              <SubHeading>Route transition</SubHeading>
              <CodeBlock code={CODE_EXAMPLES.routerTransition} />
              <SubHeading>Custom children</SubHeading>
              <CodeBlock code={CODE_EXAMPLES.customChildren} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
