import React from "react";
import "./InfoBox.css";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const InfoBox = ({ children }) => {
  return <alert className="ib-wrap">{children}</alert>;
};

export default InfoBox;
