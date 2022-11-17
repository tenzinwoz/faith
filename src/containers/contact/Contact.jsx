import React from "react";
import ContactImage from "../../assets/images/contact-hero.png";
import Hero from "../../components/pagehero/Hero";
import Button from "../../components/button/Button";

export default function Contact() {
  return (
    <>
      <Hero color="#ebd2b4" imageUrl={ContactImage}>
        <h1 className="mb-1">Better Together. Let’s connect</h1>
      </Hero>
      <section className="section-pad contact-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mb-4">We’d love to hear from you.</h1>
              <p>
                Please fill the form for any kind of enquiry and one of our team
                member will get back to you as soon as possible.
              </p>
            </div>
            <div className="col-lg-6">
              <form className="shadow">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-control"
                    placeholder="phone"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-control"
                    placeholder="Company"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    placeholder="Message"
                    rows="3"
                  ></textarea>
                </div>
                <Button type="primary" stylesClass="mt-4">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
