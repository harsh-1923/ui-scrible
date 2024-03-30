import React from "react";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";

import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

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

export default DemoChat;
