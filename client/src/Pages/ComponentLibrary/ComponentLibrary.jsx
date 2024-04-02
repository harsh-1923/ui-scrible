import React from "react";
import "./ComponentLibrary.css";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ComponentLibrary = () => {
  return (
    <div className="comp-lib-wrap">
      <p className="basic-text">
        ScribleUI Component LIbrary is currently under development. <br></br>
      </p>
      <p className="basic-text-muted">
        Here are a few samples for you till we deploy our v1.
      </p>
      <Link className="link" to="/components/cuberto-design-list">
        Cuberto Design List
        <ArrowOutwardIcon fontSize="small" />
      </Link>
      <Link className="link" to="/components/chat-interfaces">
        Experimenting with Chat Interface
        <ArrowOutwardIcon fontSize="small" />
      </Link>
      <Link className="link" to="/components/spotify-filters">
        Spotify Filter
        <ArrowOutwardIcon fontSize="small" />
      </Link>
      <Link className="link" to="/components/infinite-scroller">
        Infinite Scroller
        <ArrowOutwardIcon fontSize="small" />
      </Link>
      <Link className="link" to="/components/animated-modal">
        Animated Mdoal
        <ArrowOutwardIcon />
      </Link>
      {/* <Link className="link" to="/components/app-store-banner">
        App Store Banner
        <ArrowOutwardIcon fontSize="small" />
      </Link> */}
    </div>
  );
};

export default ComponentLibrary;
