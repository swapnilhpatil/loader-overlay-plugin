import React from "react";

const lbl = {
  fontSize: 11,
  color: "#888",
  letterSpacing: ".04em",
  fontFamily: "monospace",
};
const inp = {
  background: "#222222",
  border: "1px solid #3a3a3a",
  borderRadius: 7,
  color: "#eeeeee",
  padding: "6px 10px",
  fontSize: 13,
  fontFamily: "system-ui",
  outline: "none",
  width: "100%",
};

/**
 * Helper checkbox control
 */
export const Chk = ({ cfg, set, k, label }) => (
  <label
    style={{
      display: "flex",
      alignItems: "center",
      gap: 7,
      cursor: "pointer",
      fontSize: 13,
      color: "#d4d4d4",
    }}
  >
    <input
      type="checkbox"
      checked={cfg[k]}
      onChange={(e) => set(k, e.target.checked)}
      style={{
        width: 15,
        height: 15,
        accentColor: "#a78bfa",
        cursor: "pointer",
        flexShrink: 0,
      }}
    />
    {label}
  </label>
);

/**
 * Helper select control
 */
export const Sel = ({ cfg, set, k, label, opts }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
    <span style={lbl}>{label}</span>
    <select value={cfg[k]} onChange={(e) => set(k, e.target.value)} style={inp}>
      {opts.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);

/**
 * Helper text control
 */
export const Txt = ({ cfg, set, k, label }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
    <span style={lbl}>{label}</span>
    <input
      value={cfg[k]}
      onChange={(e) => set(k, e.target.value)}
      style={inp}
    />
  </div>
);

/**
 * Helper range control
 */
export const Rng = ({ cfg, set, k, label, min, max, step = 1 }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
    <span style={lbl}>{label}</span>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={cfg[k]}
        onChange={(e) => set(k, Number(e.target.value))}
        style={{ flex: 1, accentColor: "#a78bfa" }}
      />
      <span
        style={{
          fontSize: 12,
          color: "#a78bfa",
          minWidth: 28,
          fontFamily: "monospace",
        }}
      >
        {cfg[k]}
      </span>
    </div>
  </div>
);

/**
 * Helper color control
 */
export const Col = ({ cfg, set, k, label }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
    <span style={lbl}>{label}</span>
    <input
      type="color"
      value={cfg[k]}
      onChange={(e) => set(k, e.target.value)}
      style={{
        width: 52,
        height: 30,
        padding: 2,
        borderRadius: 6,
        border: "1px solid #3a3a3a",
        background: "#222222",
        cursor: "pointer",
      }}
    />
  </div>
);
