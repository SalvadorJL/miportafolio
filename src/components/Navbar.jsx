import React, { useState } from 'react';
import '../styles/Navbar.css';
import { GrLanguage } from "react-icons/gr";
import Flag from 'react-world-flags'

const Navbar = ({ toggleLanguage, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">LOGS</a>
      </div>
      
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">{text.menu.hero}</a>
        <a href="#about">{text.menu.about}</a>
        <a href="#projects">{text.menu.projects}</a>
        <a href="#skills">{text.menu.skills}</a>
        <a href="#experience">{text.menu.experience}</a>
        <a href="#contact">{text.menu.contact}</a>
        <div className='navbar-language'>
          <a><Flag code="mx" height="14"/></a>
          <a><GrLanguage onClick={toggleLanguage}/></a>
          <a><Flag code="us" height="14"/></a>
        </div>
        
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