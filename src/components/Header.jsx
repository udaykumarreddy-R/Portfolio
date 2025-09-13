import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2"; // New download icon
import logo from "../Assets/ChatGPT Image Aug 12, 2025, 07_08_24 AM.png"; // your R logo
import "../components/Header.css";
import resumePDF from "../Assets/uday_fullstackdeveloper.pdf (2).pdf";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* Left: Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Middle: Nav items */}
      <nav className={`nav ${menuOpen ? "show" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#review" onClick={closeMenu}>Review</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      {/* Right: Actions */}
      <div className="actions">
        {/* Theme toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
 <a href={resumePDF} download="Uday_FullStack_Developer.pdf" className="resume-btn">
          <HiOutlineDocumentArrowDown /> Resume
        </a>
        {/* Resume button */}
       

        {/* Mobile menu toggle */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>
    </header>
  );
}
