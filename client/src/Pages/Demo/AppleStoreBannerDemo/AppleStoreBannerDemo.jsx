import React, { useState } from "react";
import "./AppleStoreBannerDemo.css";
import DemoTitle from "../../../Components/DemoTitle/DemoTitle";
import DemoArea from "../../../Components/DemoArea/DemoArea";
import { motion, AnimatePresence } from "framer-motion";
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";
import InfiniteScroller from "../../../Components/InfiniteScroller/InfiniteScroller.jsx";
import gsap from "gsap";

import AppleStoreBanner from "../../../ui/AppleStoreBanner/AppleStoreBanner";

import APP_STORE from "../../../assets/APP_STORE.png";

const AppleStoreBannerDemo = () => {
  const [selectedId, setSelectedId] = useState(null);
  const open = () => {
    gsap.to(".banner-wrap", {
      top: 0,
      left: 0,
      width: "100dvw",
      height: "100dvh",
      overflow: "scroll",
      duration: 2,
      ease: "power1.in",
    });
  };
  return (
    <div className="asd-wrap">
      <DemoTitle
        title={"Apple App Store"}
        desc={
          "Animated modals that open up to show more relevant content on tap.Inspired from App Store."
        }
      />

      <DemoArea>
        <div onClick={() => open()} className="banner-wrap">
          <div className="banner">
            <InfiniteScroller>
              <div className="icon-span">
                <FaceIcon className="icon" />
                <ImageIcon className="icon" />
                <SunIcon className="icon" />
              </div>
            </InfiniteScroller>

            <InfiniteScroller>
              <div className="icon-span">
                <FaceIcon className="icon" />
                <ImageIcon className="icon" />
                <SunIcon className="icon" />
              </div>
            </InfiniteScroller>

            <div className="banner-title">
              <h1>Radix Icons: A crisp set of 15×15 icons</h1>
            </div>
          </div>
        </div>
      </DemoArea>
    </div>
  );
};

export default AppleStoreBannerDemo;
