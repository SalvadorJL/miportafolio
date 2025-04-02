// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import { 
  FaLinkedin, FaGithub
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Portafolio Salvador</h3>
          <p>Desarrollando soluciones creativas</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-nav">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Sobre Mí</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Redes Sociales</h4>
            <div className="social-icons">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="footer-icon"><FaLinkedin color="#0a66c2" /></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
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
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Tu Nombre. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;