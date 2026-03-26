import React from "react";

export function SpinIcon({ s, color }) {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 50 50"
      style={{ animation: "loaderSpin .9s linear infinite" }}
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="90 60"
      />
    </svg>
  );
}

export function DotsIcon({ s, color }) {
  return (
    <div style={{ display: "flex", gap: s * 0.18, alignItems: "center" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: s * 0.22,
            height: s * 0.22,
            borderRadius: "50%",
            background: color,
            animation: `loaderBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function PulseIcon({ s, color }) {
  return (
    <div style={{ position: "relative", width: s, height: s }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: color,
          opacity: 0.2,
          animation: "loaderPR 1.4s ease-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "20%",
          borderRadius: "50%",
          background: color,
          animation: "loaderPC 1.4s ease-in-out infinite",
        }}
      />
    </div>
  );
}

export function RingIcon({ s, color }) {
  return (
    <div
      style={{
        width: s,
        height: s,
        borderRadius: "50%",
        border: `${s * 0.08}px solid ${color}33`,
        borderTop: `${s * 0.08}px solid ${color}`,
        animation: "loaderSpin .75s linear infinite",
      }}
    />
  );
}

export function BarIcon({ s, color }) {
  return (
    <div
      style={{
        display: "flex",
        gap: s * 0.1,
        alignItems: "flex-end",
        height: s * 0.7,
      }}
    >
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            width: s * 0.15,
            background: color,
            borderRadius: 3,
            animation: `loaderBar 1s ease-in-out ${i * 0.15}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export const ICONS = {
  spinner: SpinIcon,
  dots: DotsIcon,
  pulse: PulseIcon,
  ring: RingIcon,
  bar: BarIcon,
};
