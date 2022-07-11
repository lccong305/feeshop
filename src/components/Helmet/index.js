import React from "react";

const Helmet = ({ title, children }) => {
  document.title = "yolo - " + title;
  return <div>{children}</div>;
};

export default Helmet;
