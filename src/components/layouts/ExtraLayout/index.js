import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Siderbar/Sidebar";
import "./extralayout.scss";
const ExtraLayout = ({ children }) => {
  return (
    <div className="wrapper__extra-layout">
      <Navbar />
      <div className="container__extra-layout">
        <div className="extra-sidebar">
          <Sidebar />
        </div>

        <div className="extra-content">{children}</div>
      </div>
    </div>
  );
};

export default ExtraLayout;
