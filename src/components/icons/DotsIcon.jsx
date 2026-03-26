import React from "react";

const DotsIcon = ({ s, color }) => {
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
            animation: `lBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default DotsIcon;
