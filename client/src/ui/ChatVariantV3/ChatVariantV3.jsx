import React from "react";
import "./ChatVariantV3.css";
import { motion } from "framer-motion";
import DemoChat from "../DemoChat/DemoChat";

import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { toast } from "sonner";

const ChatVariantV3 = () => {
  const [read, setRead] = React.useState(false);
  const [mute, setMute] = React.useState(false);
  const [swipeDirectionRight, setSwipeDirectionRight] = React.useState(null);
  const MAX_DRAG_DISTANCE = 100;
  const handleDragEnd = (event, info) => {
    const deltaX = info.offset.x;

    if (deltaX > MAX_DRAG_DISTANCE) {
      setRead(!read);
      toast(`Switched to ${read ? "Read" : "Unread"}`);
      return;
    }

    if (deltaX < -1 * MAX_DRAG_DISTANCE) {
      setMute(!mute);
      toast(`${mute ? "Muted" : "Unmuted"}`);
    }
  };

  const handleDrag = (event, info) => {
    const deltaX = info.offset.x;
    if (deltaX > 0) setSwipeDirectionRight(true);
    else if (deltaX < 0) setSwipeDirectionRight(false);
  };
  return (
    <div className="cv-3-wrap">
      <div className="cv-3-backdrop">
        {read ? <MarkChatReadIcon /> : <MarkChatUnreadIcon />}

        <div
          onClick={() =>
            toast.info(
              "This is a prototype. On Click More Options should be handled"
            )
          }
          className="cv-3-icon"
        >
          <MoreHorizIcon className="more-icon" fontSize="medium" />
        </div>
      </div>
      <motion.div
        drag={"x"}
        dragElastic={0.1}
        dragConstraints={{
          right: MAX_DRAG_DISTANCE,
          left: -60,
        }}
        className="cv-3-chat-wrap"
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        dragSnapToOrigin={
          swipeDirectionRight && swipeDirectionRight ? true : false
        }
      >
        <DemoChat />
      </motion.div>
    </div>
  );
};

export default ChatVariantV3;
