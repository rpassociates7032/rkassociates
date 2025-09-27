import "./Services.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

const services = [
  {
    title: "Design & Planning",
    description: [
      "Conceptual Design & Ideation",
      "Space Planning & Zoning",
      "Detailed Architectural Drawings",
      "3D Floor Plans & Visualizations",
      "Structural Feasibility Studies",
      "Eco-Friendly & Sustainable Design Integration",
      "Cost-Effective Material Recommendations",
      "Vastu & Cultural Consultation",
    ],
    image: "./designing.jpg",
  },
  {
    title: "Approval & Documentation",
    description: [
      "PreDCR Drawings for Municipal Approval",
      "Building Plan Sanctions & Permissions",
      "Coordination with Government & Local Bodies",
      "Legal Compliance with Building Bye-laws",
      "Fire NOC, Environmental & Safety Approvals",
      "Project Documentation & Record Maintenance",
    ],
    image: "./documents.jpg",
  },
  {
    title: "Structural & Engineering Services",
    description: [
      "Structural Design (RCC, Steel, Precast)",
      "Foundation & Soil Testing Reports",
      "Earthquake & Wind Load Resistant Design",
      "MEP Coordination (Mechanical, Electrical, Plumbing)",
      "HVAC & Fire-Fighting System Planning",
      "Value Engineering for Cost Efficiency",
    ],
    image: "./structural.jpg",
  },
  {
    title: "Interior Design",
    description: [
      "Residential & Luxury Homes",
      "Corporate Offices & Commercial Spaces",
      "Modular Kitchens & Furniture Layouts",
      "Lighting, Color & Material Selection",
      "Custom Furniture & Décor Solutions",
      "Turnkey Interior Fit-outs",
      "Smart Space-Saving Design",
    ],
    image: "./interor.jpg",
  },
  {
    title: "Visualization & Presentations",
    description: [
      "2D Drafting & Working Drawings",
      "3D Elevations & Walkthroughs",
      "Photorealistic Interior & Exterior Renderings",
      "Virtual Reality (VR) & BIM Presentations",
      "Animated Project Visualizations",
      "Client-Friendly Interactive Proposals",
    ],
    image: "./visual.jpg",
  },
  {
    title: "Costing & Project Management",
    description: [
      "Accurate Estimation & BOQ Preparation",
      "Tender Documents & Bid Analysis",
      "Contractor Appointment & Coordination",
      "On-Site Supervision & Quality Assurance",
      "Project Scheduling (MS Project/Primavera)",
      "Progress Reports & Budget Tracking",
      "Post-Construction Audit",
    ],
    image: "./estimation.jpg",
  },
  {
    title: "Specialized Design",
    description: [
      "Sustainable & Green Building Solutions",
      "Landscape & Outdoor Architecture",
      "Heritage Building Conservation",
      "Renovation & Remodeling of Existing Spaces",
      "Smart Home Automation Planning",
      "LEED & IGBC Certified Green Projects",
    ],
    image: "./special.jpg",
  },
  {
    title: "Urban & Industrial Services",
    description: [
      "Layout & Master Planning for Townships",
      "Urban Infrastructure Development",
      "Industrial Building Design (Factories, Warehouses, Workshops)",
      "Transit-Oriented Development (TOD)",
      "Public Amenities & Smart City Projects",
      "Compliance with Industrial Safety Standards",
    ],
    image: "./industrial.jpg",
  },
];


  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="overlay">
          <h1>Our Services</h1>
          <p>
            At RP Associates, we transform ideas into inspiring realities.
            Explore our full spectrum of design and consulting services tailored
            to your vision.
          </p>
          <div className="hero-buttons">
            <a href="/contact" className="btn contact-btn">Contact Us</a>
            <a href="tel:+919494202220" className="btn call-btn">Call Now</a>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="featured-services">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-row ${index % 2 === 0 ? "row-left" : "row-right"}`}
          >
            {/* Image */}
            <div
              className="service-image"
              data-aos="fade-up"  // ✅ mobile friendly animation
            >
              <div className="image-overlay">
                <img src={service.image} alt={service.title} />
              </div>
            </div>

            {/* Content */}
            <div
              className="service-content"
              data-aos="fade-up"  // ✅ always fade-up on mobile
            >
              <h2>{service.title}</h2>
              <ul>
                {service.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="service-buttons">
                <a href="/contact" className="btn contact-btn">Contact Us</a>
                <a href="tel:+919494202220" className="btn call-btn">Call Now</a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
