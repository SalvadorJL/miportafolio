// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import { 
  FaLinkedin, FaGithub
} from 'react-icons/fa';

const Footer = ({ text }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>LOGS</h3>
          <p>{text.subtitle}</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-nav">
            <h4>{text.navigation.title}</h4>
            <ul>
              <li><a href="#home">{text.navigation.menu.hero}</a></li>
              <li><a href="#about">{text.navigation.menu.about}</a></li>
              <li><a href="#projects">{text.navigation.menu.projects}</a></li>
              <li><a href="#skills">{text.navigation.menu.skills}</a></li>
              <li><a href="#contact">{text.navigation.menu.contact}</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>{text.socials}</h4>
            <div className="social-icons">
              <a href="https://github.com/SalvadorJL" target="_blank" rel="noopener noreferrer">
                <i className="footer-icon"><FaLinkedin color="#0a66c2" /></i>
              </a>
              <a href="https://linkedin.com/in/sjlg/" target="_blank" rel="noopener noreferrer">
                <i className="footer-icon"><FaGithub color="black" /></i>
              </a>
              {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="footer-bottom">
        <p>&copy; {currentYear} Salvador J. López. {text.footer_b}</p>
      </div> */}
    </footer>
  );
};

export default Footer;