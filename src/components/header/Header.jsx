import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  //On scroll of window, make header sticky
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header className={`${scroll ? "sticky" : ""} header shadow`}>
      <div className="container-fluid">
        <nav className="menu-content d-flex justify-content-between align-items-center">
          <Link to="/" className="logo-holder">
            <img src={Logo} alt="Fiath Company logo" />
          </Link>
          <DesktopNav />
          <MobileNav />
        </nav>
      </div>
    </header>
  );
}
