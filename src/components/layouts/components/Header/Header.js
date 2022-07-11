import React, { useEffect, useRef, forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../../assets/images/Logo-2.png";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { BsSearch, BsMinecartLoaded } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import Tippy from "@tippyjs/react";
import TippyHeadless from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import Popper from "../../../Popper";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/catalog",
  },
];
const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <BiMenuAltLeft />
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <AiOutlineClose />
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <BsSearch />
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/cart">
                <BsMinecartLoaded />
              </Link>
            </div>
            <TippyHeadless
              interactive={true}
              placement="bottom-end"
              render={(attrs) => (
                <div className="box" tabIndex="1" {...attrs}>
                  <Popper />
                </div>
              )}
            >
              <div className="header__menu__item header__menu__right__item">
                <FaUserCircle />
              </div>
            </TippyHeadless>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
