import React from "react";
import "./SpotifyFilterDemo.css";
import SpotifyFilter from "../../../ui/SpotifyFilter/SpotifyFilter";
import DemoTitle from "../../../Components/DemoTitle/DemoTitle";
import DemoArea from "../../../Components/DemoArea/DemoArea";

const SpotifyFilterDemo = () => {
  return (
    <div className="spotify-filter-demo">
      <DemoTitle
        title={"Spotify Filters"}
        desc={"A fun way to select filters inspired by Spotify."}
      />
      <DemoArea>
        <SpotifyFilter />

        <small className="demo-label">Tap to Select or Deselect filters</small>
      </DemoArea>
    </div>
  );
};

export default SpotifyFilterDemo;
