import React from "react";

const Helmet = ({ title, children }) => {
  document.title = "YoLo - " + title;
  return <div>{children}</div>;
};

export default Helmet;
