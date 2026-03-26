import React from "react";

/**
 * Renders a secondary heading for sub-sections.
 * @param {Object} props Component properties.
 * @param {string} [props.n] An optional number or prefix.
 * @param {React.ReactNode} props.children The heading text.
 * @returns {JSX.Element}
 */
const SubHeading = ({ n, children }) => (
  <h2
    style={{
      fontWeight: 700,
      fontSize: 16,
      color: "#e2e8f0",
      margin: "28px 0 10px",
    }}
  >
    {n && <span style={{ color: "#c084fc" }}>{n} </span>}
    {children}
  </h2>
);

export default SubHeading;
