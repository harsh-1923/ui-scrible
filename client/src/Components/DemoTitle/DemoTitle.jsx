import React from "react";
import "./DemoTitle.css";

const DemoTitle = ({ title, desc }) => {
  if (!title) title = "Demo Title";
  return (
    <div className="demo-title-wrap">
      <h2 aria-label={`${title}`} className="demo-title">
        {title}
      </h2>
      <p className="basic-text-muted">{desc}</p>
    </div>
  );
};

export default DemoTitle;
