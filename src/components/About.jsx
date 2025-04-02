// src/components/About.jsx
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="image-frame">
            {/* Reemplaza con tu foto o imagen profesional */}
            <img src="/salvador_foto.jpeg" alt="Salvador López" />
          </div>
        </div>
        
        <div className="about-content">
          <div className="section-header text-left">
            <h2>Sobre Mí</h2>
            <p className="subtitle">Desarrollador Full Stack apasionado por crear soluciones web impactantes</p>
          </div>
          
          <p className="about-description">
            Soy un desarrollador Fullstack con 4 años de experiencia en la creación de aplicaciones modernas y responsivas. 
            Me especializo en tecnologías tanto de frontend como de backend, lo que me permite desarrollar 
            soluciones completas de principio a fin.
          </p>
          
          <div className="about-details">
            <div className="about-info">
              <span className="info-title">Nombre:</span>
              <span className="info-value">Salvador Jeremías López Gómez</span>
            </div>
            
            <div className="about-info">
              <span className="info-title">Email:</span>
              <span className="info-value">salvador.lopez.970519@gmail.com</span>
            </div>
            
            <div className="about-info">
              <span className="info-title">Ubicación:</span>
              <span className="info-value">Tuxtla Gutierrez, Chiapas</span>
            </div>
            
            <div className="about-info">
              <span className="info-title">Disponibilidad:</span>
              <span className="info-value">Freelance / Tiempo completo</span>
            </div>
          </div>
          
          <div className="about-buttons">
            <a href="/CV_Salvador_Lopez.pdf" className="btn btn-primary" download>Descargar CV</a>
            <a href="/CV_Salvador_Lopez_HV.pdf" className="btn btn-primary" download>Descargar CV en Ingles</a>
            <a href="#contact" className="btn btn-secondary">Contactar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;