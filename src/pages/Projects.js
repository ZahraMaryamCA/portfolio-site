/*
File name: Projects.js
Student's Name: Zahra Maryam
Student ID: 301000279
Date: [September 20, 2025]
*/

import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  // Project data array
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      technologies: "HTML, CSS, JavaScript, React",
      description: "A responsive personal portfolio built to showcase my skills, projects, and resume. Focused on clean design and smooth navigation with contact form integration.",
      role: "Full-Stack Developer & Designer",
      outcome: "Responsive personal portfolio showcasing skills and projects"
    },
    {
      id: 2,
      title: "Student Management System",
      technologies: "Java, MySQL, JDBC",
      description: "A comprehensive application for managing student records with login authentication, CRUD operations, and database integration. Built as part of coursework to strengthen backend programming skills.",
      role: "Backend Developer & Database Designer",
      outcome: "Complete CRUD application for managing student records"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      technologies: "JavaScript, OpenWeather API, HTML/CSS",
      description: "A web app that fetches live weather updates from the OpenWeather API. Displays current temperature, conditions, and 5-day forecast with dynamic UI updates.",
      role: "Frontend Developer & API Integration Specialist",
      outcome: "Real-time weather application with 5-day forecasts"
    },
    {
      id: 4,
      title: "Task Tracker App",
      technologies: "Node.js, Express.js, MongoDB, EJS",
      description: "A lightweight productivity app that allows users to add, edit, and delete tasks. Stores data in MongoDB for persistence with a user-friendly interface.",
      role: "Full-Stack Developer",
      outcome: "Productivity web application for task management"
    }
  ];

  return (
    <div className="projects-page">
      <section className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on during my studies and personal development</p>
      </section>
      
      <section className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-placeholder">
              <span>Project {project.id}</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-tech">{project.technologies}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-details">
                <p><strong>My Role:</strong> {project.role}</p>
                <p><strong>Outcome:</strong> {project.outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;