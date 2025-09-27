import { useState } from "react";
import { Link } from "react-router-dom";  // import Link from react-router-dom
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="public/logo3.png" alt="Logo" />
        <div className="brand-text">
          <h1>RP Associates</h1>
          <p>Architecture | Interiors | Project Management</p>
        </div>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/carriers">Carriers</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/why">Why RP Associates</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div
        className={`menu-icon ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}
