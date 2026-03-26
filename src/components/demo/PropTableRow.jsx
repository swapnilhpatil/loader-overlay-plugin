import React from "react";

/**
 * Renders a row inside the prop documentation table.
 * @param {Object} props Component properties.
 * @param {string} props.name The prop name.
 * @param {string} props.type The prop data type.
 * @param {string} props.def The prop default value.
 * @param {string} props.desc A description of the prop.
 * @returns {JSX.Element}
 */
const PropTableRow = ({ name, type, def, desc }) => (
  <tr style={{ borderBottom: "1px solid #0f1120" }}>
    <td
      style={{
        padding: "8px 12px",
        fontFamily: "monospace",
        fontSize: 12,
        color: "#60d394",
      }}
    >
      {name}
    </td>
    <td
      style={{
        padding: "8px 12px",
        fontFamily: "monospace",
        fontSize: 11,
        color: "#c084fc",
      }}
    >
      {type}
    </td>
    <td
      style={{
        padding: "8px 12px",
        fontFamily: "monospace",
        fontSize: 11,
        color: "#60a8ff",
      }}
    >
      {def}
    </td>
    <td style={{ padding: "8px 12px", fontSize: 12, color: "#6a7a9a" }}>
      {desc}
    </td>
  </tr>
);

export default PropTableRow;
