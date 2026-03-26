import React from "react";

/**
 * Renders a lead paragraph with subdued text coloring.
 * @param {Object} props Component properties.
 * @param {React.ReactNode} props.children The paragraph text.
 * @returns {JSX.Element}
 */
const LeadParagraph = ({ children }) => (
  <p
    style={{
      color: "#4a5580",
      fontSize: 13,
      marginBottom: 26,
      lineHeight: 1.7,
    }}
  >
    {children}
  </p>
);

export default LeadParagraph;
