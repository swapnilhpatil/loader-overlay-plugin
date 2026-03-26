import React from "react";

const SpinIcon = ({ s, color }) => {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 50 50"
      style={{ animation: "lSpin .9s linear infinite" }}
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
};

export default SpinIcon;
