import { useState } from "react";
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
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/carriers">Carriers</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/why">Why RP Associates</a></li>
        <li><a href="/contact">Contact</a></li>
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
