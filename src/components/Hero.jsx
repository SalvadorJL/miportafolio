import React from 'react';
import '../styles/Hero.css';

const Hero = ({ text }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>{text.greeting}<span className="highlight">Salvador López</span></h1>
        <h2>{text.career}</h2>
        <p>{text.expert}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">{text.buttons[0]}</a>
          <a href="#contact" className="btn btn-secondary">{text.buttons[1]}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;