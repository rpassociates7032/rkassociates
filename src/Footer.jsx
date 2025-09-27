import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css"; // import CSS file

const stats = [
  { label: "Year of Foundation", value: 2021, animate: false, color: "#76d336;" }, // Green
  { label: "Happy Clients", value: 150, animate: true, color: "#B38C52" },       // Gold
  { label: "Projects Delivered", value: 75, animate: true, color: "#E6DCA8" },  // Light Yellow
];

const Counter = ({ value, animate }) => {
  const [count, setCount] = useState(animate ? 0 : value);

  useEffect(() => {
    if (!animate) return; // skip animation if not required

    let start = 0;
    const end = value;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, animate]);

  return <span>{count}{animate ? "+" : ""}</span>;
};

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Stats */}
      <div className="footer-stats">
        {stats.map((item, i) => (
          <div key={i} className="footer-stat">
            <p className="footer-stat-value">
              <Counter value={item.value} animate={item.animate} />
            </p>
            <p className="footer-stat-label">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div className="footer-main">
        {/* Logo + About */}
        <div className="footer-about">
          {/* Logo above title */}
          <img
            src="logo3.png"   // ✅ Use this (place logo2.png in public/)
            alt="RP Associates Logo"
            className="footer-logo"
          />
        <h2 className="footer-title">RP Associates</h2>

<p className="footer-tagline">
  <span style={{ color: "#ffffff" }}>Architecture</span> |{" "}
  <span style={{ color: "#ffffff" }}>Interiors</span> |{" "}
  <span style={{ color: "#ffffff" }}>Project Management</span>
</p>

&nbsp;


          <p className="footer-text">
            Excellence in interior & exterior design, outdoor planning, and
            architectural solutions. We bring innovation & creativity to every
            project.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h2 className="footer-title">Quick Links</h2>
          &nbsp;
          <ul>
            <li><a href="/">🏠 Home</a></li>
            <li><a href="/about">ℹ️ About</a></li>
            <li><a href="/services">🛠 Services</a></li>
            <li><a href="/Carriers">💼 Carriers</a></li>
            
            <li><a href="/portfolio">🖼 Portfolio</a></li>
            <li><a href="/contact">✉️ Contact</a></li>
            <li><a href="/WhyRP">✔️ Why RP Associates</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h2 className="footer-title">Head Office</h2> &nbsp;
          <p>G-13, Visisht Heights, Komarada Road</p>
          <p>Near Aditya Junior College, Rayalam</p>
          <p>Bhimavaram, Andhra Pradesh-534208</p>
          <p>rpassciates97@gmail.com</p>
          <p>+91-9494202220</p>

          <div className="footer-socials">
            <a href="#"><FaFacebook /></a>
            <a href="https://www.instagram.com/rpassociates7032?igsh=MThuc2NybWhmZWQ3Yw%3D%3D&utm_source=qr"><FaInstagram /></a>
            <a href="#"><FaTelegram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} RP Associates. All Rights Reserved.
        Designed by{" "}
        <a
          href="http://www.pandjtechnologies.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          P & J Technologies
        </a>
      </div>
    </footer>
  );
}
