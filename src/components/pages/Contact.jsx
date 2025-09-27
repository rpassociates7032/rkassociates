import "./Contact.css";
import { Phone, Mail, MapPin, User, MessageSquare } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero" data-aos="fade-down">
        <h1>Contact Us</h1>
      </div>

      {/* Get In Touch Section */}
      <div className="get-in-touch" data-aos="fade-up">
        <h2>Let’s Get In Touch</h2>
        <div className="contact-info-grid">
          {/* Phone Box */}
          <div className="info-box" data-aos="zoom-in">
            <Phone size={36} />
            <h3>Call Us</h3>
            <p>
              <a href="tel:+91703280220">+91 703280220</a> /{" "}
              <a href="tel:+918247719943">+91 8247719943</a>
            </p>
          </div>

          {/* Email Box */}
          <div className="info-box" data-aos="zoom-in" data-aos-delay="100">
            <Mail size={36} />
            <h3>Email Us</h3>
            <p>
              <a href="mailto:rpassociates7032@gmail.com">
                rpassociates7032@gmail.com
              </a>
            </p>
          </div>

          {/* Address Box - Bhimavaram Branch */}
          <div className="info-box" data-aos="zoom-in" data-aos-delay="200">
            <MapPin size={36} />
            <h3>Bhimavaram Branch</h3>
            <p>
              G-13, Visisht Heights, Komarada Road
              <br />
              Near Aditya Junior College, Rayalam
              <br />
              Bhimavaram, Andhra Pradesh - 534208
            </p>
          </div>

          {/* Address Box - Vijayawada Branch */}
          <div className="info-box" data-aos="zoom-in" data-aos-delay="300">
            <MapPin size={36} />
            <h3>Vijayawada Branch</h3>
            <p>
              Near Swimming Pool, Gandhi Nagar
              <br />
              Vijayawada, Andhra Pradesh - 520003
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        {/* Left: Image */}
        <div className="contact-image-side" data-aos="fade-right">
          <img src="/con2.jpg" alt="Office" />
        </div>

        {/* Right: Form */}
        <div className="contact-form-side" data-aos="fade-right">
          <div className="form-card">
            <h2>Connect With Our Team</h2>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="014baf2a-98e2-4e50-b2d3-f5204945ff99"
              />

              {/* First & Last Name */}
              <div className="input-row">
                <div className="input-wrapper">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="input-wrapper">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              {/* Phone */}
              <div className="input-wrapper">
                <Phone size={18} className="input-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>

              {/* Message */}
              <div className="input-wrapper textarea-wrapper">
                <MessageSquare size={18} className="input-icon" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                />
              </div>

              {/* Submit */}
              <button type="submit">Submit Form →</button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container" data-aos="fade-up">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
