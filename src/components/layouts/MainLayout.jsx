import React, { Fragment } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
