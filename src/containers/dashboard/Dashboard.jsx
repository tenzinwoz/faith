import React from "react";
import DashboardImage from "../../assets/images/dashboard-hero.png";
import Hero from "../../components/pagehero/Hero";
import Button from "../../components/button/Button";

export default function Dashboard() {
  return (
    <Hero color="#ebd2b4" imageUrl={DashboardImage}>
      <h1 className="mb-1">Our reports</h1>
    </Hero>
  );
}
