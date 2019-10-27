/**
 * MessageView
 *
 * Renders a single message
 *
 * @property {Object} message
 */

import React from "react";

import MessageView from "./MessageView";
import ChartList from "./ChartList";

const Message = ({ message }) => {
  console.log(message);
  return (
    <div className={`message ${message.right ? "message-right" : ""}`}>
      <div
        className="message-sidebar"
        style={{ backgroundColor: message.color }}
      ></div>
      <div className="message-text">
        {/* <span className="message-text-title">Chart:</span>
        <span className="message-text-content">{message.eventName}</span> */}
        <span className="message-text-date">
          {formatDate(message.timestamp)}
        </span>
      </div>
      {message.eventName === "data" ? (
        <ChartList message={message.message[0]} />
      ) : (
        <MessageView
          index={0}
          message={message.message[0]}
          isSentMessage={!!message.right}
        />
      )}
    </div>
  );
};

export default Message;

function formatDate(date) {
  return new Date(date).toLocaleTimeString();
}
