import React from "react";
import "./DemoArea.css";

const DemoArea = ({ children, allowExpansion = false, expanded = false }) => {
  const [isExpanded, setIsExpanded] = React.useState(expanded);
  const toggleExpansion = () => {};
  return (
    <div className="demo-area-wrap">
      {allowExpansion && (
        <button
          aria-label="Button to expand demo area"
          className="demo-area-button"
          onClick={toggleExpansion()}
        >
          <div className="expand-button-wrap">
            <p className="basic-text">Expand</p>
            <br />
            <p className="basic-text">Collapse</p>
          </div>
        </button>
      )}
      {children}
    </div>
  );
};

export default DemoArea;
