import React, { useState } from "react";
// import { motion } from "framer-motion";

const AppleStoreBanner = ({ children }) => {
  const [showLayout, setShowLayout] = useState(false);

  const toggleLayout = () => {
    setShowLayout(!showLayout);
  };

  return (
    <div style={{ position: "relative" }}>
      {React.Children.map(children, (child) => {
        if (child.type === AppleStoreBanner.Banner) {
          return child;
        } else if (child.type === AppleStoreBanner.Layout) {
          return showLayout ? child : null;
        } else {
          return child;
        }
      })}
      <div
        onClick={toggleLayout}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          cursor: "pointer",
        }}
      />
    </div>
  );
};

AppleStoreBanner.Banner = ({ children }) => <>{children}</>;
AppleStoreBanner.Layout = ({ children }) => <>{children}</>;

export default AppleStoreBanner;
