import React from 'react';
import '../styles/Projects.css';
import projectsData from '../data/projects';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = ({ text }) => {
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>{text.title}</h2>
        <p>{text.subtitle}</p>
      </div>
      <div className="projects-grid">
        {text.projects.map((projects, index) => (
          <ProjectCard key={index} project={projects} />
        ))}
      </div>
    </section>
  );
};

export default Projects;