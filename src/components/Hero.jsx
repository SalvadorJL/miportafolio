import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hola, soy <span className="highlight">Salvador López</span></h1>
        <h2>Desarrollador Full Stack</h2>
        <p>Creo aplicaciones web modernas y atractivas</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contact" className="btn btn-secondary">Contactar</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;