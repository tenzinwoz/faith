import React from "react";
import Logo from "../../assets/images/white-logo.png";
import { BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="main-footer ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 address-box">
            <div className="logo-holder mb-4">
              <img src={Logo} alt="Company logo" />
            </div>
            <p> 513 St Clair Ave W, Toronto, Ontario, Canada. M6C 1A1</p>
          </div>
          <div className="col-lg-2 info">
            <h2>Help & Support</h2>
            <a href="mailto:faith@gmail.com">faith@gmail.com</a>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="col-lg-2 info">
            <h2>Quick links</h2>
            <Link to="/contact">Contact</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/news">News</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/events">Events</Link>
          </div>
          <div className="col-lg-2 info">
            <h2>Company</h2>
            <Link to="/about">Events</Link>
            <Link to="/events">Events</Link>
          </div>
        </div>
        <div className="d-flex justify-content-between lower-footer">
          <div className="">
            <p>Copyright © faith 2023</p>
          </div>
          <div className="">
            <div className="d-flex justify-content-between">
              <Link to="#">
                <BsFacebook className="social-links" />
              </Link>
              <Link to="#">
                <BsYoutube className="social-links" />
              </Link>
              <Link to="#">
                <BsLinkedin className="social-links" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
