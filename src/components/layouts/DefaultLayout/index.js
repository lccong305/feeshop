import React from "react";
import ProductViewModal from "../../ProductViewModal";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./default.css";
const DefaultLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main default-layout-container">{children}</div>
      <Footer />
      <ProductViewModal />
    </div>
  );
};

export default DefaultLayout;
