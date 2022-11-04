import React from "react";
import AboutImage from "../../assets/images/about-hero.png";
import Hero from "../../components/pagehero/Hero";

export default function About() {
  return (
    <>
      <Hero color="#67beb0" imageUrl={AboutImage}>
        <h1 className="mb-1">Get to know our</h1>
        <p className="mb-3">vision, mission and meet our team.</p>
      </Hero>
    </>
  );
}
