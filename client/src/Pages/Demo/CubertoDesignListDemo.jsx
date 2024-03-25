import React from "react";
import "./CubertoDesignListDemo.css";
import CubertoDesignList from "../../ui/CubertoDesignList/CubertoDesignList";

const data = [
  { title: "Instagram", link: "www.google.com" },
  { title: "Dribble", link: "www.google.com" },
  { title: "LinkedIn", link: "www.google.com" },
  { title: "Twitter", link: "www.google.com" },
  { title: "GitHub", link: "www.google.com" },
  { title: "YouTube", link: "www.google.com" },
  { title: "Behance", link: "www.google.com" },
];

const CubertoDesignListDemo = () => {
  return (
    <div className="cl-demo-wrap">
      <CubertoDesignList items={data} />
    </div>
  );
};

export default CubertoDesignListDemo;
