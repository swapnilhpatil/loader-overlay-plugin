import React, { useState } from "react";
import { PROPS_DOCUMENTATION } from "../../../constants/demo.js";
import { generateReactCode } from "../../../utils/demo.js";
import { CodePreview } from "./CodePreview.jsx";
import { LoaderOverlay as LoaderOverlayV2 } from "./LoaderOverlayV2.jsx";
import { Chk, Sel, Txt, Rng, Col } from "./Controls.jsx";

/**
 * Renders the comprehensive V2 interactive demo interface, displaying fully customizable loader controls.
 * @returns {JSX.Element}
 */
const InteractiveDemo = () => {
  const [cfg, setCfg] = useState({
    show: true,
    type: "spinner",
    size: "md",
    variant: "dark",
    color: "#a78bfa",
    message: "Loading data...",
    submessage: "Please wait",
    fullScreen: false,
    blur: 10,
    opacity: 1,
    zIndex: 10,
    showProgress: true,
    progress: 65,
    closable: true,
    position: "center",
    animateIn: true,
    timeout: 0,
    closeOnOutsideClick: false,
  });

  const set = (k, v) => setCfg((p) => ({ ...p, [k]: v }));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111111",
        color: "#d4d4d4",
        fontFamily: "system-ui,sans-serif",
        padding: "28px 24px",
      }}
    >
      <style>{`*{box-sizing:border-box} select,input[type=text]{appearance:none} select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23666'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:28px}`}</style>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 24,
        }}
      >
        <h1
          style={{ margin: 0, fontSize: 26, fontWeight: 800, color: "#eeeeee" }}
        >
          <span style={{ color: "#a78bfa" }}>Loader</span> Overlay
        </h1>
        <span
          style={{
            fontSize: 11,
            background: "#a78bfa18",
            color: "#a78bfa",
            border: "1px solid #a78bfa33",
            borderRadius: 99,
            padding: "3px 10px",
            fontFamily: "monospace",
            fontWeight: 600,
          }}
        >
          All Props
        </span>
      </div>

      <div
        style={{
          background: "#1a1a1a",
          border: "1px solid #2e2e2e",
          borderRadius: 14,
          padding: "20px 24px",
          marginBottom: 22,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr 1fr 1fr",
            gap: "16px 24px",
            marginBottom: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              paddingTop: 4,
            }}
          >
            <Chk cfg={cfg} set={set} k="show" label="show" />
          </div>
          <Sel
            cfg={cfg}
            set={set}
            k="type"
            label="type"
            opts={["spinner", "dots", "pulse", "ring", "bar"]}
          />
          <Sel
            cfg={cfg}
            set={set}
            k="size"
            label="size"
            opts={["sm", "md", "lg", "xl"]}
          />
          <Sel
            cfg={cfg}
            set={set}
            k="variant"
            label="variant"
            opts={["dark", "light", "blur", "transparent", "gradient"]}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr 1fr 1fr",
            gap: "16px 24px",
            marginBottom: 18,
          }}
        >
          <Col cfg={cfg} set={set} k="color" label="color" />
          <Txt cfg={cfg} set={set} k="message" label="message" />
          <Txt cfg={cfg} set={set} k="submessage" label="submessage" />
          <Sel
            cfg={cfg}
            set={set}
            k="position"
            label="position"
            opts={["center", "top", "bottom"]}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr 1fr 1fr",
            gap: "16px 24px",
            marginBottom: 18,
          }}
        >
          <Rng cfg={cfg} set={set} k="blur" label="blur" min={0} max={24} />
          <Rng
            cfg={cfg}
            set={set}
            k="opacity"
            label="opacity"
            min={0}
            max={1}
            step={0.05}
          />
          <Rng
            cfg={cfg}
            set={set}
            k="zIndex"
            label="zIndex"
            min={1}
            max={100}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <Chk cfg={cfg} set={set} k="showProgress" label="showProgress" />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr 1fr 1fr",
            gap: "16px 24px",
          }}
        >
          <Rng
            cfg={cfg}
            set={set}
            k="progress"
            label="progress"
            min={0}
            max={100}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <Chk cfg={cfg} set={set} k="closable" label="closable" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <Chk
              cfg={cfg}
              set={set}
              k="closeOnOutsideClick"
              label="closeOnOutsideClick"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <Chk cfg={cfg} set={set} k="fullScreen" label="fullScreen" />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr 1fr 1fr",
            gap: "16px 24px",
            marginTop: 18,
          }}
        >
          <Rng
            cfg={cfg}
            set={set}
            k="timeout"
            label="timeout(ms)"
            min={0}
            max={5000}
            step={500}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Chk cfg={cfg} set={set} k="animateIn" label="animateIn" />
          </div>
        </div>
      </div>

      <p
        style={{
          margin: "0 0 6px",
          fontSize: 12,
          color: "#555",
          fontFamily: "monospace",
        }}
      >
        Preview area (position: relative)
      </p>
      <div
        style={{
          position: "relative",
          height: 280,
          border: "1px dashed #3a3a3a",
          borderRadius: 12,
          overflow: "hidden",
          background: "#0d0d0d",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            padding: 20,
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 12,
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              style={{
                height: 64,
                borderRadius: 8,
                background: "#1e1e1e",
                border: "1px solid #2e2e2e",
              }}
            />
          ))}
        </div>
        <LoaderOverlayV2
          {...cfg}
          fullScreen={false}
          onClose={() => set("show", false)}
          onOutsideClick={() => {}}
        />
      </div>

      <button
        onClick={() => set("show", true)}
        style={{
          padding: "9px 22px",
          background: "#a78bfa18",
          border: "1px solid #a78bfa44",
          color: "#a78bfa",
          borderRadius: 9,
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 600,
          fontFamily: "monospace",
          marginBottom: 28,
        }}
      >
        ▶ Show Loader
      </button>

      <CodePreview code={generateReactCode(cfg)} />

      <div
        style={{
          marginTop: 28,
          background: "#1a1a1a",
          border: "1px solid #2e2e2e",
          borderRadius: 14,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "14px 20px",
            borderBottom: "1px solid #2e2e2e",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 13 }}>📋</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#eeeeee",
              fontFamily: "monospace",
            }}
          >
            All Properties
          </span>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#141414" }}>
              {["Prop", "Type", "Default", "Description"].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: "left",
                    padding: "9px 16px",
                    fontSize: 12,
                    color: "#888888",
                    fontFamily: "monospace",
                    fontWeight: 600,
                    borderBottom: "1px solid #2e2e2e",
                    letterSpacing: ".04em",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PROPS_DOCUMENTATION.map(([name, type, def, desc]) => (
              <tr key={name} style={{ borderBottom: "1px solid #222222" }}>
                <td
                  style={{
                    padding: "9px 16px",
                    fontFamily: "monospace",
                    fontSize: 12,
                    color: "#60d394",
                  }}
                >
                  {name}
                </td>
                <td
                  style={{
                    padding: "9px 16px",
                    fontFamily: "monospace",
                    fontSize: 12,
                    color: "#f9a825",
                  }}
                >
                  {type}
                </td>
                <td
                  style={{
                    padding: "9px 16px",
                    fontFamily: "monospace",
                    fontSize: 12,
                    color: "#60a8ff",
                  }}
                >
                  {def}
                </td>
                <td
                  style={{
                    padding: "9px 16px",
                    fontSize: 12,
                    color: "#888888",
                  }}
                >
                  {desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InteractiveDemo;
