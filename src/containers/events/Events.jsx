import React from "react";
import EventsImage from "../../assets/images/events-hero.png";
import Hero from "../../components/pagehero/Hero";

export default function Events() {
  return (
    <>
      <Hero color="#ebd2b4" imageUrl={EventsImage}>
        <h1 className="mb-1">Get Involved.</h1>
        <p className="mb-3">Inspire change in your community</p>
      </Hero>
    </>
  );
}
