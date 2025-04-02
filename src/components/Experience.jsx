import React from 'react';
import '../styles/Experience.css';
import experienceData from '../data/experience';

const ExperienceItem = ({ experience }) => {
  return (
    <div className="experience-item">
      <div className="experience-timeline">
        <div className="timeline-dot"></div>
        <div className="timeline-line"></div>
      </div>
      
      <div className="experience-content">
        <div className="experience-header">
          <h3>{experience.title}</h3>
          <span className="company">{experience.company}</span>
          <span className="period">{experience.period}</span>
          <span className="location">{experience.location}</span>
        </div>
        
        <p className="description">{experience.description}</p>
        
        <ul className="achievements">
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2>Experiencia</h2>
        {/* <p>Mi trayectoria profesional</p> */}
      </div>
      
      <div className="experience-container">
        {experienceData.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;