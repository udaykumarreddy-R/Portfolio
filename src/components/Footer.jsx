import React from "react";
import "./Footer.css";

import githubIcon from "../Assets/ChatGPT Image Jul 20, 2025, 03_46_50 PM.png";
import instagramIcon from "../Assets/ChatGPT Image Jul 20, 2025, 04_12_57 PM.png";
import linkedinIcon from "../Assets/ChatGPT Image Jul 20, 2025, 03_48_15 PM.png";
import twitterIcon from "../Assets/ChatGPT Image Jul 20, 2025, 03_49_33 PM.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span>© 2025 Uday Kumar Reddy</span>
        <br />
        <small>Building ideas into reality, one line of code at a time.</small>
      </div>
      <div className="footer-right">
        <a href="https://github.com/udaykumarreddy" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="icon-image" />
        </a>
        <a href="https://instagram.com/udaykumarreddy" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="icon-image" />
        </a>
        <a href="https://linkedin.com/in/udaykumarreddy" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="icon-image" />
        </a>
        <a href="https://twitter.com/udaykumarreddy" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="icon-image" />
        </a>
      </div>
    </footer>
  );
}
