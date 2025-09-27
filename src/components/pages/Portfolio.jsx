import { useState } from "react";
import "./Portfolio.css";

export default function Portfolio() {
  // Updated categories based on your architecture list
  const categories = [
    "All",
    "Residential Architecture",
    "Commercial Architecture",
    "Industrial Architecture",
    "Institutional Architecture",
    "Public / Community Architecture",
    "Urban Design & Master Planning",
    "Interior Design & Space Planning",
    "Landscape Architecture",
    "Specialized Streams",
  ];

  // Updated projects with example data based on your descriptions
  const allProjects = [
    {
      title: "Modern Family Home",
      description:
        "Design of homes, apartments, villas, and housing complexes focused on comfort, privacy, Vastu, lifestyle, and cost-efficiency.",
      category: "Residential Architecture",
      images: [
        "./rkhome2.jpg",
        "https://t4.ftcdn.net/jpg/02/31/69/05/360_F_231690594_1xpuGVGkzsPIvIVRyRkGLY5Ze11d3yev.jpg",
      ],
    },
    {
      title: "Corporate Office Complex",
      description:
        "Offices, malls, hotels, restaurants, and retail spaces designed with business needs, functionality, brand identity, and aesthetics in mind.",
      category: "Commercial Architecture",
      images: [
        "./corporate.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh97Zpln1d4FD3Z74VIffvXe6Hnf_S2xw4vg&s",
      ],
    },
    {
      title: "Manufacturing Plant",
      description:
        "Factories, warehouses, workshops designed for efficiency, safety, workflow, and expansion flexibility.",
      category: "Industrial Architecture",
      images: [
        "./industrial.jpg",
        "https://via.placeholder.com/800x500?text=Industrial+2",
      ],
    },
    {
      title: "City Hospital",
      description:
        "Hospitals and healthcare facilities with efficient layouts focusing on patient-centric design and accessibility.",
      category: "Institutional Architecture",
      images: [
        "./hospitl.jpg",
        "https://via.placeholder.com/800x500?text=Hospital+Interior",
      ],
    },
    {
      title: "Community Cultural Center",
      description:
        "Libraries, auditoriums, convention halls, and cultural centers designed for people-centric use and social impact.",
      category: "Public / Community Architecture",
      images: [
        "./library.jpg",
        "https://via.placeholder.com/800x500?text=Cultural+Center+2",
      ],
    },
    {
      title: "Smart City Master Plan",
      description:
        "Townships, smart cities, transport hubs focusing on zoning, mobility, and sustainability.",
      category: "Urban Design & Master Planning",
      images: [
        "./smartt.jpg",
        "https://via.placeholder.com/800x500?text=Smart+City+Plan+2",
      ],
    },
    {
      title: "Modern Office Interiors",
      description:
        "Interior layouts for homes, offices, and commercial spaces focusing on ergonomics, aesthetics, and material selection.",
      category: "Interior Design & Space Planning",
      images: [
        "./modern.jpg",
        "https://via.placeholder.com/800x500?text=Interior+Design+2",
      ],
    },
    {
      title: "Urban Park and Garden",
      description:
        "Gardens, parks, resorts, and urban outdoor spaces designed with nature integration and ecology in mind.",
      category: "Landscape Architecture",
      images: [
        "./urban.jpg",
        "https://via.placeholder.com/800x500?text=Landscape+2",
      ],
    },
    {
      title: "Green & Sustainable Architecture",
      description:
        "Eco-friendly, energy-efficient designs incorporating green technology and sustainability.",
      category: "Specialized Streams",
      images: [
        "./special.jpg",
        "https://via.placeholder.com/800x500?text=Green+Architecture+2",
      ],
    },
    {
      title: "Heritage Conservation Project",
      description:
        "Restoration of historic buildings preserving cultural significance.",
      category: "Specialized Streams",
      images: [
        "./heritage.jpg",
        "https://via.placeholder.com/800x500?text=Heritage+2",
      ],
    },
    {
      title: "Parametric Digital Design",
      description:
        "Advanced computational designs using parametric and digital architecture techniques.",
      category: "Specialized Streams",
      images: [
        "./parametric.jpg",
        "https://via.placeholder.com/800x500?text=Parametric+Design+2",
      ],
    },
    {
      title: "Smart Architecture Innovation",
      description:
        "Automation and AI-integrated buildings for future-ready smart living.",
      category: "Specialized Streams",
      images: [
        "./smart.jpg",
        "./smart.jpg",
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalProject, setModalProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  const openModal = (project, index = 0) => {
    setModalProject(project);
    setCurrentImageIndex(index);
  };

  const closeModal = () => setModalProject(null);

  const nextImage = () => {
    if (!modalProject) return;
    setCurrentImageIndex(
      (currentImageIndex + 1) % modalProject.images.length
    );
  };

  const prevImage = () => {
    if (!modalProject) return;
    setCurrentImageIndex(
      (currentImageIndex - 1 + modalProject.images.length) % modalProject.images.length
    );
  };

  const ProjectCard = ({ project }) => (
    <div className="project-card" onClick={() => openModal(project)}>
      <img src={project.images[0]} alt={project.title} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="project-category">{project.category}</span>
      </div>
    </div>
  );

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="overlay">
          <h1>Our Portfolio</h1>
          <p>
            Explore diverse projects we have delivered across multiple sectors.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="portfolio-categories container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Projects Grid */}
      <section className="projects-grid container">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>

      {/* Modal / Lightbox */}
      {modalProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="prev-btn" onClick={prevImage}>◀</button>
            <img src={modalProject.images[currentImageIndex]} alt={modalProject.title} />
            <button className="next-btn" onClick={nextImage}>▶</button>
            <h3>{modalProject.title}</h3>
            <p>{modalProject.description}</p>
            <button className="close-btn" onClick={closeModal}>X</button>
          </div>
        </div>
      )}

      {/* Closing Call to Action */}
      <section className="portfolio-cta">
        <h2>Start Your Project with RP Associates</h2>
        <p>
          Let’s collaborate to create inspiring and functional spaces. Contact us today and bring your vision to life.
        </p>
       
        <button className="cta-button" onClick={() => window.location.href = "/contact"}>
          Contact Us
        </button>
      </section>
    </div>
  );
}
