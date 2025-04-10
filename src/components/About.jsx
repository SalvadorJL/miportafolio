import React from 'react';
import '../styles/About.css';

const About = ({ text }) => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="image-frame">
            <img src="/salvador_foto.jpeg" alt="Salvador López" />
          </div>
        </div>
        
        <div className="about-content">
          <div className="section-header text-left">
            <h2>{text.title}</h2>
            <p className="subtitle">{text.subtitle}</p>
          </div>
          
          <p className="about-description">
            {text.summary}
          </p>
          
          <div className="about-details">
            {text.aboutme.map((about, index) => (
              <div className="about-info" key={index}>
                <span className="info-title">{about.title}</span>
                <span className="info-value">{about.subtitle}</span>
              </div>
            ))}
          </div>
          
          <div className="about-buttons">
            <a href="/CV_Salvador_Lopez.pdf" className="btn btn-primary" download>{text.buttons[0]}</a>
            <a href="/CV_Salvador_Lopez_EN.pdf" className="btn btn-primary" download>{text.buttons[1]}</a>
            <a href="#contact" className="btn btn-secondary">{text.buttons[2]}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;