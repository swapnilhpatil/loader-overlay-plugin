import React from "react";

const BarIcon = ({ s, color }) => {
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
            animation: `lBar 1s ease-in-out ${i * 0.15}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default BarIcon;
