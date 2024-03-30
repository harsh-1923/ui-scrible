import React from "react";
import "./SwipeToReply.css";

import { motion } from "framer-motion";

const messages = [
  { sender: true, text: "Get some rest now. haha :)" },
  { sender: false, text: "Lol, yeah" },
  { sender: true, text: "See ya" },
];

const Reply = () => {
  return (
    <svg
      className="reply-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
};

const Message = ({ inputRef, message }) => {
  const [draggring, setDragging] = React.useState(false);
  const MAX_DRAG_DISTANCE = 40;

  const handleDragStart = (event, info) => {
    setDragging(false);
    setDragging(true);
  };

  const handleDragEnd = (event, info) => {
    setDragging(false);

    const deltaX = info.offset.x;

    if (deltaX > MAX_DRAG_DISTANCE) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };
  return (
    <div
      data-state-sender={`${message.sender ? "true" : "false"}`}
      className="message-wrap"
    >
      <div className="message-backdrop">
        <svg
          className={`${draggring ? "reply-icon" : null}`}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 17 4 12 9 7" />
          <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
        </svg>
      </div>
      <motion.div
        drag={"x"}
        dragElastic={0.1}
        dragSnapToOrigin
        dragConstraints={{
          left: -1 * MAX_DRAG_DISTANCE,
          right: MAX_DRAG_DISTANCE,
        }}
        // onDrag={handleDrag}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        data-state-sender={`${message.sender ? "true" : "false"}`}
        className="message"
      >
        {message.text}
      </motion.div>
    </div>
  );
};

const SwipeToReply = () => {
  const strInputRef = React.useRef(null);
  return (
    <div className="str-wrap">
      {messages.map((msg, idx) => {
        return (
          <Message
            inputRef={strInputRef}
            message={msg}
            text={msg.text}
            key={idx}
          />
        );
      })}

      <form>
        <input
          className="str-input"
          ref={strInputRef}
          placeholder="Reply"
          type="text"
        />
      </form>
    </div>
  );
};

export default SwipeToReply;
