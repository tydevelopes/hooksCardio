import React from "react";
import "./Tooltip.css";

const ToolTip = ({ content, styles }) =>
  content ? (
    <span style={styles} className="tooltip">
      {content}
    </span>
  ) : null;

export default ToolTip;
