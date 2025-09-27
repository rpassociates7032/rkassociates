import React, { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
} from "lucide-react";
import {
  HiOutlineBuildingOffice2,
  HiOutlineWrenchScrewdriver,
  HiOutlineCurrencyRupee,
} from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import "./AboutUs.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80 });
  }, []);

  const slides = [
    {
      image: "./rkhome1.jpg",
      title: "Welcome to RP Associates",
      subtitle:
        "Designing Dreams, Building Futures with creativity, precision, and trust.",
      animation: "fade-up",
    },
    {
      image: "./rkhome2.jpg",
      title: "Architecture that Inspires",
      subtitle:
        "We shape the skyline with innovative, sustainable, and timeless architectural solutions.",
      animation: "fade-up",
    },
    {
      image: "./rkhome3.jpg",
      title: "Elegant Interiors, Thoughtfully Designed",
      subtitle:
        "Transform your spaces with interiors that reflect your personality and lifestyle.",
      animation: "fade-down",
    },
    {
      image: "./rkhome4.jpg",
      title: "Renovation & Remodeling Experts",
      subtitle:
        "Reimagine your home with modern upgrades and seamless functionality.",
      animation: "fade-up",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((s) => (s + 1) % slides.length);
    }, 5200);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    { img: "./corporate.jpg", title: "Corporate Tower Complex" },
    { img: "./rkhome2.jpg", title: "Modern House" },
    { img: "./special.jpg", title: "Green & Sustainable Architecture" },
    { img: "./greenbuilding.jpg", title: "Green Building Architecture" },
    { img: "./modern.jpg", title: "Modern Office Interiors" },
    { img: "./renovation and.jpg", title: "Renovation & Remodeling" },
    { img: "./mod3.jpg", title: "Urban Mixed-Use Project" },
    { img: "./cafes.jpg", title: "Restaurant & Cafes" },
    { img: "./rkhome3.jpg", title: "Interior Design" },
  ];

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero-slide ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
          >
            {i === current && (
              <div className="hero-content" data-aos={s.animation}>
                <h1>{s.title}</h1>
                <p>{s.subtitle}</p>
                <div className="slide-buttons">
                  <button className="btn-primary">Explore More</button>
                  <button className="btn-outline">Contact Us</button>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="hero-dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
              role="button"
              aria-label={`slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT US */}
      <section className="about container home-about">
        <div className="about-text">
          <h2>About Us</h2>
          <p data-aos="fade-up">
            <strong>RP Associates</strong>, founded by{" "}
            <span className="founder-name">Pilla Devi Rakesh</span>, is a
            forward-thinking consulting and design firm specializing in{" "}
            <strong>Architecture, Structural Engineering, and Project Planning</strong>. Guided by the
            vision of our founder, we are committed to creating designs that inspire and enhance lives.
          </p>
          <p>
            Since its inception, RP Associates has delivered innovative, practical, and sustainable
            solutions across <strong>residential, commercial, educational, healthcare,</strong> and{" "}
            <strong>institutional projects</strong>.
          </p>
          <p data-aos="fade-up">
            Our team of <strong>highly skilled professionals</strong> specializes in{" "}
            <strong>
              structural design, architecture, interior design, 3D visualization, renovation, and
              government approvals
            </strong>, ensuring each project is executed with excellence.
          </p>
          <p data-aos="fade-up">
            With over a decade of industry experience, we combine creative innovation with technical precision.
Our client-centric approach ensures personalized solutions tailored to each project's unique needs.
We prioritize quality, timely delivery, and regulatory compliance at every stage of development.
At RP Associates, we don’t just design buildings — we create environments that elevate lives.
          </p>
        </div>

        <div className="founder-image" data-aos="fade-right">
          <img src="./about1.jpg" alt="Founder Pilla Devi Rakesh" className="about-img" />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section" id="projects-masonry" data-aos="fade-up">
        <h2 className="projects-heading">Our Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => {
            const isLarge = i % 3 === 0;
            return (
              <div
                key={i}
                className={`project-item ${isLarge ? "large" : "small"}`}
                data-aos="fade-up"
                data-aos-delay={(i % 5) * 80}
              >
                <img src={p.img} alt={p.title} />
                <div className="project-overlay">
                  <h3>{p.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section className="three-services" id="three-services">
        <h2 className="projects-heading">Our Services</h2>
        <div className="services-inner">
          <div className="service-card" data-aos="fade-up">
            <div className="icon-heading-row">
              <div className="icon-wrap modern-icon">
                <HiOutlineBuildingOffice2 />
              </div>
              <h3>Architecture Service</h3>
            </div>
            <p>
              End-to-end architectural design — concept to construction, optimized for aesthetics,
              function and sustainability.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="150">
            <div className="icon-heading-row">
              <div className="icon-wrap modern-icon">
                <HiOutlineWrenchScrewdriver />
              </div>
              <h3>Structural Design</h3>
            </div>
            <p>
              Robust, code-compliant structural engineering (RCC / Steel / Precast) with MEP coordination
              for safe, economical structures.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-heading-row">
              <div className="icon-wrap modern-icon">
                <HiOutlineCurrencyRupee />
              </div>
              <h3>Service Cost</h3>
            </div>
            <p>
              Transparent estimates, BOQ-ready costing and value engineering to keep your project on
              budget.
            </p>
          </div>
        </div>

        <div className="center-explore">
          <button className="cta-button" onClick={() => window.location.href = "/Services"}>
            Explore Our Services
          </button>
        </div>
      </section>

      {/* CONTACT FORM */}
      <div className="contact-container">
        <div className="contact-image-side" data-aos="fade-right">
          <img src="/con2.jpg" alt="Office" />
        </div>

        <div className="contact-form-side" data-aos="fade-right">
          <div className="form-card">
            <h2>Connect With Our Team</h2>
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="014baf2a-98e2-4e50-b2d3-f5204945ff99" />
              <div className="input-row">
                <div className="input-wrapper">
                  <User size={18} className="input-icon" />
                  <input type="text" name="firstName" placeholder="First Name" required />
                </div>
                <div className="input-wrapper">
                  <User size={18} className="input-icon" />
                  <input type="text" name="lastName" placeholder="Last Name" required />
                </div>
              </div>

              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input type="email" name="email" placeholder="Email Address" required />
              </div>

              <div className="input-wrapper">
                <Phone size={18} className="input-icon" />
                <input type="tel" name="phone" placeholder="Phone Number" required />
              </div>

              <div className="input-wrapper textarea-wrapper">
                <MessageSquare size={18} className="input-icon" />
                <textarea name="message" placeholder="Your Message" rows="5" required />
              </div>

              <button type="submit">Submit Form →</button>
            </form>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="contact-home" data-aos="fade-up">
        <h2>Let’s Build Together</h2>
        <p>
          Have a project in mind? Get in touch with RP Associates today and let’s create something
          extraordinary.
        </p>
        <div className="contact-buttons">
          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>
          <a href="tel:+919494202220" className="btn btn-secondary">
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
}
