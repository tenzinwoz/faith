import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navlinks() {
  const [activeMenu, setActiveMenu] = useState("");
  let location = useLocation();
  useEffect(() => {
    if (!!location?.pathname) {
      setActiveMenu(location.pathname.substring(1));
    }
  }, [location?.pathname]);
  return (
    <ul className="menu-list">
      <li>
        <Link to="/about" className={activeMenu === "about" ? "active" : ""}>
          About
        </Link>
      </li>
      <li>
        <Link
          to="dashboard"
          className={activeMenu === "dashboard" ? "active" : ""}
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/news" className={activeMenu === "news" ? "active" : ""}>
          News
        </Link>
      </li>
      <li>
        <Link to="/events" className={activeMenu === "events" ? "active" : ""}>
          Events
        </Link>
      </li>
      <li>
        <Link to="/donate" className={activeMenu === "donate" ? "active" : ""}>
          Donate
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={activeMenu === "contact" ? "active" : ""}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
