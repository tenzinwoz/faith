import React from "react";
import EventsImage from "../../assets/images/events-hero.png";
import Hero from "../../components/pagehero/Hero";
import WideCard from "../../components/wideCard/WideCard";
import { eventsList } from "../../constants/data";

export default function Events() {
  return (
    <>
      <Hero color="#ebd2b4" imageUrl={EventsImage}>
        <h1 className="mb-1">Get Involved.</h1>
        <p className="mb-3">Inspire change in your community</p>
      </Hero>
      <section className="section-pad events-list">
        <div className="container">
          <h1 className="text-center mb-5">Events</h1>
          <div className="row">
            {eventsList?.map((event, index) => {
              return (
                <div className="col-12 mb-5" key={index}>
                  <WideCard data={event} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
