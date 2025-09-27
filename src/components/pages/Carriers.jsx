import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Careers.css";

export default function Careers() {
  const [openJob, setOpenJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [loading, setLoading] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // run only once
      offset: 100,    // distance before triggering
    });
  }, []);

  const jobs = [
    {
      id: 1,
      title: "Structural Designer",
      type: "Full Time",
      location: "Vijayawada, AP",
      posted: "Recently",
      shortDesc:
        "We are hiring candidates with Qualifications, Skills, Education, Experience, or Certifications in similar background. All candidates should show excellent communication skills.",
      responsibilities: [
        "Prepare structural drawings.",
        "Analyze loads and materials.",
        "Work with project teams to ensure quality."
      ]
    },
    {
      id: 2,
      title: "Senior Structural Designer",
      type: "Full Time",
      location: "Vijayawada, AP",
      posted: " Recently ",
      shortDesc:
        "We are hiring candidates with advanced Qualifications, Skills, and Experience in structural design projects.",
      responsibilities: [
        "Lead structural design teams.",
        "Mentor junior designers.",
        "Ensure timely delivery of projects."
      ]
    },
    {
      id: 3,
      title: "Internship - Architecture",
      type: "Internship",
      location: "Vijayawada, AP",
      posted: "Recently",
      shortDesc:
        "Exciting opportunity for architecture students to gain hands-on experience with real-world projects.",
      responsibilities: [
        "Assist senior architects in design development.",
        "Work with CAD and visualization tools.",
        "Learn construction documentation standards."
      ]
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("key", "014baf2a-98e2-4e50-b2d3-f5204945ff99"); 
    formData.append("recipient", "careers@rkassociates.com");

    try {
      const response = await fetch("https://api.w3forms.com/v1/form/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      console.log("W3Forms Response:", result);

      if (response.ok && result.success) {
        setShowForm(false);
        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 3000);
      } else {
        alert("❌ Failed: " + (result.message || "Please try again."));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
       <section className="heroo">
        <div className="overlay">
          <h1>Careers – Join Our Team
 </h1>
          <p>
            Discover exciting opportunities and grow your future with us.
          </p>
        </div>
      </section>

    {/* Careers Intro Text */}
{/* Careers Intro Text */}
<section className="careers-intro">
  <h2 className="intro-title" data-aos="fade-up">
    Careers at RK Associates
  </h2>
  <p className="intro-text" data-aos="fade-up" data-aos-delay="200">
    At RK Associates, we are growing and looking for passionate professionals 
    to join our team in Vijayawada. We invite candidates with relevant 
    qualifications, skills, education, experience, or certifications in the 
    fields of architecture, civil/structural engineering, and design.
  </p>
  <p className="intro-text" data-aos="fade-up" data-aos-delay="400">
    We value individuals with strong technical knowledge, excellent 
    communication skills, a collaborative and solution-oriented mindset, 
    and a commitment to quality and timely delivery. If you possess these 
    qualities and are eager to work on diverse, challenging, and rewarding 
    projects, we encourage you to apply.
  </p>

</section>

{/* Hiring Heading */}
<h2 className="hiring-title" data-aos="fade-up">
  We are Hiring
</h2>

      {/* Job Listings */}
      <div className="jobs-container">
        {jobs.map((job, index) => (
          <div
            key={job.id}
            className="job-card"
            data-aos="zoom-in-up"
            data-aos-delay={index * 150} // stagger effect
          >
            <h3>{job.title}</h3>
            <p className="meta">
              💼 {job.type} | 📍 {job.location} | 📅 Posted {job.posted}
            </p>
            <p>{job.shortDesc}</p>

            {openJob === job.id ? (
              <div className="job-details" data-aos="fade-left">
                <h4>Responsibilities:</h4>
                <ul>
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
                <button className="btn apply" onClick={() => setShowForm(true)}>
                  Apply Now
                </button>
                <button className="btn hide" onClick={() => setOpenJob(null)}>
                  Hide Details
                </button>
              </div>
            ) : (
              <button className="btn" onClick={() => setOpenJob(job.id)}>
                Read More
              </button>
            )}
          </div>
        ))}
      </div>
  <p className="intro-text highlight" data-aos="fade-up" data-aos-delay="600">
    📩 Send your resume to: <a href="mailto:Rpassciates97@gmail.com"><b>Rpassciates97@gmail.com</b></a>



    
  </p>
      {/* Application Form Modal */}
      {showForm && (
        <div className="modal" data-aos="zoom-in">
          <div className="modal-content">
            <span className="close" onClick={() => setShowForm(false)}>
              &times;
            </span>
            <h2>Apply Now</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="Full Name" placeholder="Full Name" required />
              <input type="email" name="Email" placeholder="Email" required />
              <input type="text" name="Mobile Number" placeholder="Mobile Number" required />
              <input type="text" name="Qualification" placeholder="Qualification" required />
              <input type="text" name="Designation" placeholder="Designation" required />
              <input type="number" name="Experience" placeholder="Years of Experience" required />
              <input type="file" name="Resume" accept=".pdf,.doc,.docx" required />
              <button type="submit" className="btn submit" disabled={loading}>
                {loading ? <span className="spinner"></span> : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="modal" data-aos="fade-up">
          <div className="modal-content center">
            <h2>✅ Thank You!</h2>
            <p>
              Your application has been submitted. Our HR team will contact you shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
