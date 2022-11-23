import React, { useState } from "react";
import ContactImage from "../../assets/images/contact-hero.png";
import Hero from "../../components/pagehero/Hero";
import Button from "../../components/button/Button";

export default function Contact() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e?.target?.name]: e?.target?.value });
  };
  console.log({ formData });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData?.fullname}  Email: ${formData?.email} Phone: ${formData?.phone} Company: ${formData?.company} Message: ${formData?.message}
    `);
  };
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
              <form className="shadow" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    name="fullname"
                    value={formData?.fullname}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    name="email"
                    value={formData?.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="phone"
                    required
                    name="phone"
                    value={formData?.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                    name="company"
                    value={formData?.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows="3"
                    name="message"
                    value={formData?.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" stylesClass="mt-4">
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
