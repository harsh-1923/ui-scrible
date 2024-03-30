import React, { useEffect } from "react";
import "./ChatInterfaces.css";

import { Toaster, toast } from "sonner";

import DemoTitle from "../../../Components/DemoTitle/DemoTitle";
import DemoArea from "../../../Components/DemoArea/DemoArea";

import { motion } from "framer-motion";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import ChatVariantV2 from "../../../ui/ChatVariantV2/ChatVariantV2";
import ChatVariantV3 from "../../../ui/ChatVariantV3/ChatVariantV3";
import SwipeToReply from "../../../ui/SwipeToReply/SwipeToReply";
import ChatDemo from "../../../ui/ChatDemo/ChatDemo";

const ChatVariant1 = ({
  name = "John Doe",
  text = "How was your day?",
  time = "10:53 PM",
}) => {
  const [read, setRead] = React.useState(false);

  const handleDragEnd = (event, info) => {
    console.log(info);
    if (info.offset.x > 80) {
      setRead(!read);
      toast(`Switched to ${read ? "Read" : "Unread"}`);
    }
  };

  return (
    <div className="cv1-wrap">
      <div className="cv1-backdrop">
        {!read ? <MarkChatReadIcon /> : <MarkChatUnreadIcon />}
      </div>

      <motion.div
        drag={"x"}
        dragConstraints={{ left: 0, right: 80 }}
        dragElastic={0.1}
        dragSnapToOrigin
        className="chat-wrap"
        onDragEnd={handleDragEnd}
        dragMomentum={true}
      >
        <div className="cv1-profile-pic"></div>
        <div className="cv1-chat-details">
          <div className="cv1-cd-row1">
            <h4>{name}</h4>
            <small>{time}</small>
          </div>
          <div className="cv1-cd-row2">
            <p className="basic-text-muted">{text}</p>
            <div
              data-state-read={`${read ? "true" : "false"}`}
              className="small-circle"
            ></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ChatInterfaces = () => {
  // useEffect(() => {
  //   toast.info("This page is a work in progress.");
  // }, []);
  return (
    <div className="ci-wrap">
      <DemoTitle title={"Experimenting with Chat Interfaces"} />

      <Toaster richColors />

      <p className="basic-text-muted">
        We use chat interfaces so frequently that the interactions have become a
        part of out subconsciousness. Hence, a chat interface seemed to be the
        perfect staring point for understanding fluid humam interactions.
        <br />
        <br />
        In this blog, I briefly share my findings and re-creations of some of
        these interactions on the web.
      </p>

      <p className="subheader">Swipe Interactions</p>

      <p className="basic-text-muted">
        Swipe interactions are simple, intuitive and widely used in chat
        interfaces. Different apps and opertaing systems use swipe gestures for
        different uses.
        <br />
        <br />
        The most common application of swipes are to toggle between two states.
        For example, swiping right can switch between Read and Unread states.
      </p>

      <ChatDemo label={["Swipe Right to Read and Unread Messages"]}>
        <ChatVariant1 />
      </ChatDemo>

      <br />

      <p className="basic-text-muted">
        The swipe action is only triggered when the{" "}
        <code>swipe amount is more than a minimum threshold.</code>
        <br />
        In this case, the minimum threshold is 100px. The icon in the backdrop
        of the message, shows the new state to be adopted once the swipe is
        complete.
      </p>

      <ChatDemo
        label={[
          "Swipe Right to Read and Unread message.",
          "Swipe Left to Mute and Unmute message",
        ]}
      >
        <ChatVariantV2 />
        <ChatVariantV2 />
      </ChatDemo>
      {/* 
      <small className="demo-label">
        Swipe Right to Read and Unread message. <br />
        Swipe Left to Mute and Unmute message
      </small> */}

      {/* <ChatVariantV3 /> */}

      <SwipeToReply />

      <div className="filler" />
    </div>
  );
};

export default ChatInterfaces;
