import React from "react";
import ContactImage from "../../assets/images/contact-hero.png";
import Hero from "../../components/pagehero/Hero";

export default function Contact() {
  return (
    <>
      <Hero color="#ebd2b4" imageUrl={ContactImage}>
        <h1 className="mb-1">Better Together. Let’s connect</h1>
      </Hero>
    </>
  );
}
