import React from "react";
import Logo from "../../assets/images/white-logo.png";
import { BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="main-footer ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="logo-holder">
              <img src={Logo} alt="Company logo" />
              <p> 513 St Clair Ave W, Toronto, Ontario, Canada. M6C 1A1</p>
            </div>
          </div>
          <div className="col-lg-2">
            <h2>Help & Support</h2>
            <p>faith@gmail.com</p>
            <p>Contact</p>
          </div>
          <div className="col-lg-2">
            <h2>Quick links</h2>
            <p>Donate</p>
            <p>Dashboard</p>
            <p>News</p>
            <p>Blogs</p>
            <p>Events</p>
          </div>
          <div className="col-lg-2">
            <h2>Company</h2>
            <p>About</p>
            <p>Events</p>
          </div>
        </div>
        <div className="row lower-footer">
          <div className="col-lg-9">
            <p>Copyright © faith 2023</p>
          </div>
          <div className="col-lg-3">
            <div className="d-flex justify-content-between">
              <BsFacebook />
              <BsYoutube />
              <BsLinkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
