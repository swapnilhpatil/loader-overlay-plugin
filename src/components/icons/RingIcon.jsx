import React from "react";

const RingIcon = ({ s, color }) => {
  return (
    <div
      style={{
        width: s,
        height: s,
        borderRadius: "50%",
        border: `${s * 0.08}px solid ${color}22`,
        borderTop: `${s * 0.08}px solid ${color}`,
        animation: "lSpin .75s linear infinite",
      }}
    />
  );
};

export default RingIcon;
