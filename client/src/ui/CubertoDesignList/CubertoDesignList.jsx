import React from "react";
import "./CubertoDesignList.css";
import InfiniteScroller from "../../Components/InfiniteScroller/InfiniteScroller";
import gsap from "gsap";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const CubertoDesignListItem = ({ item }) => {
  const backdropRef = React.useRef(null);
  const handleMouseLeave = (e) => {
    gsap.killTweensOf(backdropRef.current);
    gsap.to(backdropRef.current, {
      height: "0px",
      top: "50%",
      ease: "power2.easeOut",
      duration: 0.2,
    });
  };
  const handleMouseEnter = (e) => {
    if (window.innerWidth < 500) return;
    gsap.to(backdropRef.current, {
      height: "100%",
      top: 0,
      duration: 0.4,
      ease: "power2.easeIn",
    });
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cdl-item-wrap"
    >
      <div ref={backdropRef} className="cdl-item-backdrop">
        <InfiniteScroller key={item.title}>
          <div className="cdl-backdrop-item">
            <h2 className="cdli-title">{item.title}</h2>
            <ArrowOutwardIcon />
          </div>
        </InfiniteScroller>
      </div>
      <h2 className="cdli-title">{item.title}</h2>
      <ArrowOutwardIcon />
    </div>
  );
};

const CubertoDesignList = ({ items }) => {
  return (
    <div className="cdl-wrap">
      {items.map((item, idx) => {
        return <CubertoDesignListItem item={item} key={idx} />;
      })}
    </div>
  );
};

export default CubertoDesignList;
