import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  let location = useLocation();

  //On scroll of window, make header sticky
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    if (!!location?.pathname) {
      setActiveMenu(location.pathname.substring(1));
    }
  }, [location?.pathname]);

  console.log({ activeMenu });

  return (
    <header className={`${scroll ? "sticky" : ""} header shadow`}>
      <div className="container-fluid">
        <nav className="menu-content d-flex justify-content-between align-items-center">
          <Link to="/" className="logo-holder">
            <img src={Logo} alt="Fiath Company logo" />
          </Link>
          <ul className="menu-list d-flex">
            <Link
              to="/about"
              className={activeMenu === "about" ? "active" : ""}
            >
              About
            </Link>
            <Link
              to="dashboard"
              className={activeMenu === "dashboard" ? "active" : ""}
            >
              Dashboard
            </Link>
            <Link to="/news" className={activeMenu === "news" ? "active" : ""}>
              News
            </Link>
            <Link
              to="/events"
              className={activeMenu === "events" ? "active" : ""}
            >
              Events
            </Link>
            <Link
              to="/donate"
              className={activeMenu === "donate" ? "active" : ""}
            >
              Donate
            </Link>
            <Link
              to="/contact"
              className={activeMenu === "contact" ? "active" : ""}
            >
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
