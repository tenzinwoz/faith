import React from "react";
import Hero from "../../components/pagehero/Hero";
import DonateImage from "../../assets/images/donate-hero.png";

export default function Donate() {
  return (
    <>
      <Hero color="#67beb0" imageUrl={DonateImage}>
        <h1 className="mb-1">Hope for the homeless</h1>
        <p className="mb-3">
          Your contribution can change someone’s life out there.
        </p>
      </Hero>
    </>
  );
}
