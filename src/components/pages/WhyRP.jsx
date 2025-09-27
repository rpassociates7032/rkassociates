import React, { useEffect } from "react";
import "./WhyRP.css"; // Make sure this path matches your file structure

export default function WhyRP() {
  const reasons = [
    {
      title: "Experienced Professionals",
      description:
        "Our multidisciplinary team of architects, engineers, and interior designers brings decades of experience. Each professional contributes expertise to ensure designs are technically sound, aesthetically pleasing, and fully functional.",
      icon: "fa-solid fa-users",
    },
    {
      title: "Innovative Design Solutions",
      description:
        "We combine creativity, sustainability, and functionality to create spaces that inspire. Every design is tailored to meet client needs while staying innovative and forward-thinking.",
      icon: "fa-solid fa-lightbulb",
    },
    {
      title: "End-to-End Services",
      description:
        "From initial consultation, conceptual planning, structural design, interior layouts, 3D visualization, and government approvals, we provide complete solutions under one roof. This reduces client effort and streamlines project management.",
      icon: "fa-solid fa-building",
    },
    {
      title: "Timely Project Delivery",
      description:
        "We follow a structured project management process, including scheduling, resource allocation, and milestone tracking. This ensures projects are delivered on time without compromising quality.",
      icon: "fa-solid fa-clock",
    },
    {
      title: "Client-Centric Collaboration",
      description:
        "We believe that the best results come from active collaboration. Clients are involved at every stage, from brainstorming to final delivery, ensuring their vision is realized accurately.",
      icon: "fa-solid fa-handshake",
    },
    {
      title: "Cost Efficiency & Value",
      description:
        "Our team carefully plans and optimizes every aspect of a project. By reducing unnecessary costs and selecting efficient materials and methods, we deliver high value without compromising quality.",
      icon: "fa-solid fa-money-bill-wave",
    },
    {
      title: "Sustainable & Responsible Design",
      description:
        "We integrate eco-friendly materials, energy-efficient systems, and sustainable practices into all projects. Our designs prioritize environmental responsibility alongside aesthetics and functionality.",
      icon: "fa-solid fa-leaf",
    },
    {
      title: "Attention to Detail",
      description:
        "Every element of a project receives rigorous attention, from structural calculations to interior finishes. This meticulous approach ensures a flawless final result that exceeds client expectations.",
      icon: "fa-solid fa-magnifying-glass",
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".reason-card");

    const revealOnScroll = () => {
      const windowBottom = window.innerHeight;

      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowBottom - 100) {
          card.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const ReasonCard = ({ icon, title, description }) => (
    <div className="reason-card">
      <i className={`reason-icon ${icon}`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className="why-rp-page">
      <section className="why-hero">
        <div className="overlay">
          <h1>Why Choose RP Associates?</h1>
          <p>
            Discover the qualities that make us the trusted partner for your architectural and structural design projects.
          </p>
        </div>
      </section>

      <section className="introduction container">
        <h2>Our Philosophy</h2>
        <p>
          At <strong>RP Associates</strong>, we design spaces that inspire, function efficiently, and reflect the unique vision of our clients. We focus on creativity, precision, and collaboration to deliver exceptional results.
        </p>
        <p>
          Founded by <span className="founder-name">Pilla Devi Rakesh</span>, our team is composed of experienced professionals spanning architecture, structural engineering, interior design, and project management. Together, we transform ideas into reality.
        </p>
      </section>

      <section className="reasons container">
        {reasons.map((reason, idx) => (
          <ReasonCard
            key={idx}
            icon={reason.icon}
            title={reason.title}
            description={reason.description}
          />
        ))}
      </section>

   <section className="closing-cta">
  <h2>Partner with RP Associates</h2>
  <p>
    Let’s create spaces that inspire, function efficiently, and leave a lasting impression.
    Contact us today to start your next project with RP Associates.
  </p>
  <button className="cta-button" onClick={() => window.location.href = "/contact"}>
    Contact Us
  </button>
</section>

    </div>
  );
}
