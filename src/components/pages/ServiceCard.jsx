import "./WhyRP.css";

export default function WhyRP() {
  const reasons = [
    {
      title: "Experienced Professionals",
      description:
        "Our team of architects, engineers, and designers brings years of expertise to every project, ensuring high-quality and precise execution.",
      image: "https://via.placeholder.com/400x300?text=Team+Expertise",
    },
    {
      title: "Innovative Design Solutions",
      description:
        "We combine creativity and functionality to deliver designs that are not only aesthetically pleasing but also practical and sustainable.",
      image: "https://via.placeholder.com/400x300?text=Design+Innovation",
    },
    {
      title: "End-to-End Services",
      description:
        "From conceptualization to government approvals and 3D visualization, RP Associates provides comprehensive services under one roof.",
      image: "https://via.placeholder.com/400x300?text=Complete+Services",
    },
    {
      title: "Timely Project Delivery",
      description:
        "We follow a systematic approach to manage timelines, resources, and costs efficiently, ensuring projects are delivered on time.",
      image: "https://via.placeholder.com/400x300?text=Timely+Delivery",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "Our process is collaborative, keeping clients involved at every stage, resulting in designs that truly reflect their vision.",
      image: "https://via.placeholder.com/400x300?text=Customer+Focus",
    },
  ];

  // Inline ReasonCard component
  const ReasonCard = ({ image, title, description }) => (
    <div className="reason-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className="why-rp-page">
      {/* Hero Section */}
      <section className="why-hero">
        <div className="overlay">
          <h1>Why Choose RP Associates?</h1>
          <p>
            Discover what makes us a trusted partner for architectural and structural design projects.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="introduction container">
        <h2>Our Philosophy</h2>
        <p>
          At <strong>RP Associates</strong>, we believe that every space we design
          should inspire, function efficiently, and reflect the unique vision of
          our clients. Our collaborative approach ensures that creativity,
          innovation, and technical precision are applied at every stage of a
          project.
        </p>
        <p>
          Led by <span className="founder-name">Pilla Devi Rakesh</span>, our
          team brings together skilled professionals with expertise across
          architecture, structural engineering, interior design, and project
          management.
        </p>
      </section>

      {/* Key Reasons Section */}
      <section className="reasons container">
        {reasons.map((reason, index) => (
          <ReasonCard
            key={index}
            image={reason.image}
            title={reason.title}
            description={reason.description}
          />
        ))}
      </section>

      {/* Closing / Call to Action */}
      <section className="closing-cta">
        <h2>Partner with RP Associates</h2>
        <p>
          Let’s create spaces that inspire, function efficiently, and leave a
          lasting impression. Contact us today to start your next project with
          RP Associates.
        </p>
      </section>
    </div>
  );
}
