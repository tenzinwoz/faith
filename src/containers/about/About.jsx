import React from "react";
import AboutImage from "../../assets/images/about-hero.png";
import Hero from "../../components/pagehero/Hero";
import TeamCard from "./components/TeamCard";
import { teamList } from "../../constants/data";

export default function About() {
  return (
    <>
      <Hero color="#67beb0" imageUrl={AboutImage}>
        <h1 className="mb-1">Get to know our</h1>
        <p className="mb-3">vision, mission and meet our team.</p>
      </Hero>
      <section className="section-pad">
        <div className="container">
          <h1 className="text-center mb-5">Who are we ?</h1>
          <p className="text-center para-width">
            We are the national charity for homeless people. We know that
            homelessness is not inevitable. We know that together we can end it.
            <p>
              <br />
              At faith helping homeless , one of our mission objectives is to
              raise awareness about homelessness issues. In doing so, we hope
              for a better future for our community - one where we can change so
              many of these misconceptions and make changes towards systemic
              issues that lead to and keep people homeless.
            </p>
          </p>
        </div>
      </section>
      <section className="section-pad grey-background  team">
        <div className="container mb-5">
          <h1 className="text-center mb-5">Team</h1>

          <div className="row">
            {teamList?.map((member, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-6 team-col" key={index}>
                  <TeamCard index={index} data={member} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
