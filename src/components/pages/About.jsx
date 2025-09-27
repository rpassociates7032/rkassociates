import "./AboutUs.css";
import { FaUsers, FaCogs, FaShieldAlt, FaLightbulb, FaClock } from "react-icons/fa";
export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero1">
        <div className="hero1-overlay">
          <h1>Welcome to RP Associates</h1>
          <p>Designing Dreams, Lifestyles, and Possibilities</p>
        </div>
      </section>

      {/* About Section with Founder */}
      <section className="about container">
        <div className="about-text">
          <h2>About Us</h2>
          <p >
            <strong>RP Associates</strong>, founded by{" "}
            <span className="founder-name">Pilla Devi Rakesh</span>, is a
            forward-thinking consulting and design firm specializing in{" "}
            <strong>
              Architecture, Structural Engineering, and Project Planning
            </strong>
            . Guided by the vision of our founder, we are committed to creating
            designs that not only meet functional needs but also inspire
            communities and enhance lifestyles.
          </p>

          <p>
            Since its inception, RP Associates has been dedicated to delivering
            innovative, practical, and sustainable solutions across diverse
            sectors including{" "}
            <strong>
              residential, commercial, educational, healthcare,
            </strong>{" "}
            and <strong>institutional projects</strong>. With a strong foundation
            in civil engineering and architectural design, we consistently
            execute projects that balance creativity, functionality, and
            precision.
          </p>

          <p>
            What sets RP Associates apart is our pool of{" "}
            <strong>highly skilled professionals</strong> with expertise in{" "}
            <strong>
              structural design, architecture, interior design, 3D visualization,
              renovation, and government approvals
            </strong>
            . This multidisciplinary strength enables us to deliver projects
            with confidence and excellence—shaping spaces that are both inspiring
            and enduring.
          </p>
        </div>

        <div className="founder-section">
          <img
            src="./founder.jpeg"
            alt="Founder Pilla Devi Rakesh"
          />
          <h3>Pilla Devi Rakesh</h3>
          <p>Founder & Visionary</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision container">
        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to craft spaces that go beyond aesthetics, creating
            environments that improve the quality of life, foster innovation, and
            encourage community well-being. We believe in blending functionality
            with creativity to deliver solutions that are sustainable, accessible,
            and future-ready.
          </p>
        </div>
        <div>
          <h2>Our Vision</h2>
          <p>
            Our vision is to be a trusted architectural partner, known for
            shaping iconic landmarks in Andhra Pradesh and beyond. We aspire to
            lead with innovation, embrace new technologies, and continuously
            redefine the standards of design and construction—transforming dreams
            into lasting realities for generations to come.
          </p>
        </div>
      </section>


{/* Core Values */}
<section className="core-values container">
  <h2>Our Core Values</h2>
  <p className="core-values-intro">
    At RP Associates, our values drive everything we do—from concept to creation. They guide our vision, our decisions, and our relationships.
  </p>
  <div className="values-grid">
    <div className="value-card">
      <FaUsers className="value-icon" />
      <h3>Client-Centric Approach</h3>
      <p>
        Your goals shape our designs. We listen, understand, and deliver solutions tailored to your vision.
      </p>
    </div>
    <div className="value-card">
      <FaCogs className="value-icon" />
      <h3>Uncompromised Quality</h3>
      <p>
        Every detail matters. We blend engineering precision with architectural excellence to ensure top-tier results.
      </p>
    </div>
    <div className="value-card">
      <FaShieldAlt className="value-icon" />
      <h3>Integrity & Transparency</h3>
      <p>
        We uphold the highest ethical standards in our processes, communication, and delivery.
      </p>
    </div>
    <div className="value-card">
      <FaLightbulb className="value-icon" />
      <h3>Innovative Thinking</h3>
      <p>
        From BIM to 3D visualization, we harness emerging technologies to create future-ready designs.
      </p>
    </div>
    <div className="value-card">
      <FaClock className="value-icon" />
      <h3>Punctual Delivery</h3>
      <p>
        We value your time. With robust planning and execution, we deliver every project on schedule.
      </p>
    </div>
  </div>
</section>

      {/* Closing */}
      <section className="closing">
        <h2>Design. Build. Inspire.</h2>
        <p>
          At RP Associates, we don’t just design structures—we create
          experiences. Let’s shape something extraordinary together.
        </p>
          <button className="cta-button" onClick={() => window.location.href = "/contact"}>
    Contact Us
  </button>
      </section>
    </div>
  );
}
