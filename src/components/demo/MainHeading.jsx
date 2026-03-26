import React from "react";

/**
 * Renders the main title heading for sections.
 * @param {Object} props Component properties.
 * @param {React.ReactNode} props.children The heading text.
 * @returns {JSX.Element}
 */
const MainHeading = ({ children }) => (
  <h1
    style={{
      fontWeight: 800,
      fontSize: 24,
      color: "#e2e8f0",
      margin: "0 0 6px",
    }}
  >
    {children}
  </h1>
);

export default MainHeading;
