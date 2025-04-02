import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Portafolio Salvador</a>
      </div>
      
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Inicio</a>
        <a href="#about">Sobre Mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#skills">Habilidades</a>
        <a href="#experience">Experiencia</a>
        <a href="#contact">Contacto</a>
      </div>
      
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;