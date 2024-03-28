import React from "react";
import "./CubertoDesignListDemo.css";
import CubertoDesignList from "../../ui/CubertoDesignList/CubertoDesignList";
import DemoTitle from "../../Components/DemoTitle/DemoTitle";
import DemoArea from "../../Components/DemoArea/DemoArea";
import InfoBox from "../../Components/InfoBox/InfoBox";

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
      <DemoTitle
        title={"Cuberto Design List"}
        desc={"On hover, an infinitely scrolling backdrop is revealed."}
      />

      <InfoBox>
        <small>
          This Component has Hover interactions. Viewing recomended on desktop.
        </small>
      </InfoBox>

      <DemoArea>
        <CubertoDesignList items={data} />
      </DemoArea>
    </div>
  );
};

export default CubertoDesignListDemo;
