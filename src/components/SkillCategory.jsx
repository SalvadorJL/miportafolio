import React from 'react';
import iconMap from '../data/iconMap';

const SkillCategory = ({ category, skills, images }) => {
  return (
    <div className="skill-category flip-card">
      <div className="flip-card-inner">
        {/* Frente */}
        <div className="flip-card-front">
          <h3>{category}</h3>
          <div className="skills-list">
            {skills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon];
              return (
                <div key={index} className="skill-item">
                  <div className="skill-icon">
                    {IconComponent ? <IconComponent color={skill.color || 'black'} size={24} /> : null}
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reverso */}
        <div className="flip-card-back">
          <div className="skills-list">
            <strong>{category}</strong>
            <img src={images} alt={images} className="skill-image" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default SkillCategory;