import React from "react";
import "./InfiniteScrollerDemo.css";
import DemoTitle from "../../../Components/DemoTitle/DemoTitle";
import DemoArea from "../../../Components/DemoArea/DemoArea";
import InfiniteScroller from "../../../Components/InfiniteScroller/InfiniteScroller.jsx";

const InfiniteScrollerDemo = () => {
  return (
    <div className="spotify-filter-demo">
      <DemoTitle
        title={"Infinite Scroller"}
        desc={"A simple and performant CSS based infinite scroller"}
      />
      <DemoArea>
        <InfiniteScroller>
          <p>ScribleUI</p>
        </InfiniteScroller>
      </DemoArea>
    </div>
  );
  x;
};

export default InfiniteScrollerDemo;
