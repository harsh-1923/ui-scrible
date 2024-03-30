import React from "react";
import "./ChatDemo.css";

const ChatDemo = ({ children, label }) => {
  return (
    <div className="cd-wrap">
      {children}
      <div className="cd-label">
        {label && (
          <ul>
            {label.map((l, idx) => {
              return (
                <li className="cd-li">
                  <small className="demo-label">{l}</small>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChatDemo;
