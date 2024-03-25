import React from "react";
import "./InfiniteScroller.css";

const InfiniteScroller = ({ children }) => {
  return (
    <div className="is-wrap">
      {Array(10)
        .fill()
        .map((idx) => {
          return (
            <div key={idx} className="is-span">
              {children}
            </div>
          );
        })}

      {Array(10)
        .fill()
        .map((idx) => {
          return (
            <div key={idx} className="is-span">
              {children}
            </div>
          );
        })}
    </div>
  );
};

export default InfiniteScroller;
