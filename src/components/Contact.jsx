import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* Contact Heading Section */}
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>
          Let's discuss how we can work together to bring your ideas to life
        </p>
      </div>

      {/* Contact Details & Form Section */}
      <section className="contact-section">
        <div className="contact-left">
          <h2>
            Let's Build Something Amazing <span>Together</span>
          </h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Fill out the form and I'll
            get back to you as soon as possible.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <strong>Email</strong>
                <p>udayram8425@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <div>
                <strong>Phone</strong>
                <p>+91 6301534168 / +91 8088562974</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <strong>Location</strong>
                <p>Pincode: 515401 Gooty, Anantapur, Andhra Pradesh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right rotating-border">
          <form>
            <h3>
              Let's <span>Get Started</span>
            </h3>
            <p>Tell us a bit about yourself</p>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />

            <label>Email Address</label>
            <input type="email" placeholder="your.email@example.com" />

            <label>Phone Number</label>
            <input type="tel" placeholder="+91 00000 00000" />

            <button type="submit">Continue →</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
