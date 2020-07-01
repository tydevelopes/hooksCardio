import React from "react";

const Notification = ({ message }) => {
  console.log("<Notification/> rendered");
  return <span className="message">{message}</span>;
};
export default Notification;
