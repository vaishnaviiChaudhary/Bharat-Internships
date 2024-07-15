import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../Assets/main_logo.png"; // Import your logo
import { FaLinkedin } from 'react-icons/fa';
import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="Bharat Internships Logo" />
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>Bharat Internships All Rights Reserved, 2024</p>
      </div>

      {/* Company Section */}
      <div className="footer-section">
        <h2>Company</h2>
        <ul>
          <li>About us</li>
          <li>How we work?</li>
          <li>Popular Course</li>
          <li>Success Story</li>
        </ul>
      </div>

      {/* Courses Section */}
      <div className="footer-section">
        <h2>Courses</h2>
        <ul>
          <li>Categories</li>
          <li>Internship Course</li>
          <li>Program Course</li>
        </ul>
      </div>

      {/* Support Section */}
      <div className="footer-section">
        <h2>Support</h2>
        <ul>
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Career</li>
          <li>Privacy</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="footer-section">
        <h2>Contact</h2>
        <div className="socials">
          <a href="https://wa.me//8123059031
" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.linkedin.com/company/bharat-internships/" target="_blank" rel="noopener noreferrer">
  <FaLinkedin />
</a>
        </div>
        <ul>
          <li>bharatinternships@gmail.com</li>
          <li>Education</li>
          <li>Banglore, Karnataka</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
