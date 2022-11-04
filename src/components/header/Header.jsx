import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="header shadow">
      <div className="container-fluid">
        <nav className="menu-content d-flex justify-content-between align-items-center">
          <Link to="/" className="logo-holder">
            <img src={Logo} alt="Fiath Company logo" />
          </Link>
          <ul className="menu-list d-flex">
            <Link to="/about">About</Link>
            <Link to="dashboard">Dashboard</Link>
            <Link to="/news">News</Link>
            <Link to="/events">Events</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
