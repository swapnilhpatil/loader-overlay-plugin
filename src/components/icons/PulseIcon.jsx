import React from "react";

const PulseIcon = ({ s, color }) => {
  return (
    <div style={{ position: "relative", width: s, height: s }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: color,
          opacity: 0.2,
          animation: "lPR 1.4s ease-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "20%",
          borderRadius: "50%",
          background: color,
          animation: "lPC 1.4s ease-in-out infinite",
        }}
      />
    </div>
  );
};

export default PulseIcon;
