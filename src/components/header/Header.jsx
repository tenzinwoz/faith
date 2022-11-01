import React from "react";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="header container-fluid">
      <nav className="menu-content d-flex justify-content-between">
        <div className="logo-holder">
          <img src={Logo} alt="Fiath Company logo" />
        </div>
        <ul className="menu-list d-flex">
          <li>About</li>
          <li>Dashboard</li>
          <li>News</li>
          <li>Events</li>
          <li>Donate</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
