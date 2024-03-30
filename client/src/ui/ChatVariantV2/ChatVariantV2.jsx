import React from "react";
import "./ChatVariantV2.css";

import { motion } from "framer-motion";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";

import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { toast } from "sonner";

const DemoChat = ({ mute, read }) => {
  return (
    <div className="dc-wrap">
      <div className="dc-pp"></div>
      <div className="dc-chat-details">
        <div className="dc-chat-row1">
          <h4 className="dc-chat-name">John Doe</h4>
          <small className="muted">10:53 PM</small>
        </div>
        <div className="dc-chat-row2">
          <p className="dc-chat-text basic-text-muted">How was your day?</p>
          <div className="dc-chat-icons">
            <div className="dc-chat-icon">
              {mute && mute ? (
                <NotificationsOffIcon
                  className="muted small-icon"
                  fontSize={"small"}
                />
              ) : null}
            </div>

            <div className="dc-chat-icon">
              <div
                data-state-read={`${read ? "true" : "false"}`}
                className="dc-read-circle"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatVariantV2 = ({
  name = "John Doe",
  text = "How was your day?",
  time = "10:53 PM",
}) => {
  const [read, setRead] = React.useState(false);
  const [mute, setMute] = React.useState(false);
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

  return (
    <div className="cv-2-wrap">
      <div className="cv-2-backdrop">
        <div className="cv-2-icon1">
          {read ? <MarkChatReadIcon /> : <MarkChatUnreadIcon />}
        </div>
        <div className="cv-2-icon2">
          {!mute ? <NotificationsOffIcon /> : <NotificationsActiveIcon />}
        </div>
      </div>
      <motion.div
        drag={"x"}
        dragElastic={0.1}
        dragConstraints={{
          left: -1 * MAX_DRAG_DISTANCE,
          right: MAX_DRAG_DISTANCE,
        }}
        className="cv-2-chat-wrap"
        dragSnapToOrigin
        onDragEnd={handleDragEnd}
      >
        <DemoChat mute={mute} read={read} />
      </motion.div>
    </div>
  );
};

export default ChatVariantV2;
