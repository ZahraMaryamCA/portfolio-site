/*
File name: Services.js
Student's Name: Zahra Maryam
Student ID: 301000279
Date: [September 20, 2025]
*/

import React from 'react';
import '../styles/Services.css';

const Services = () => {
  // Services data array
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Building responsive, modern websites using HTML, CSS, JavaScript, and React",
      icon: "🌐"
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Creating robust server-side applications and REST APIs with Node.js and Express.js",
      icon: "⚙️"
    },
    {
      id: 3,
      title: "Database Management",
      description: "Designing and implementing databases using MySQL and MongoDB",
      icon: "🗄️"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Creating intuitive, user-friendly interfaces with modern design principles",
      icon: "🎨"
    },
    {
      id: 5,
      title: "Academic Project Collaboration",
      description: "Assisting fellow students with coding projects and technical challenges",
      icon: "🤝"
    }
  ];

  return (
    <div className="services-page">
      <section className="services-header">
        <h1>My Services</h1>
        <p>Here's what I can help you with as a developing software engineer</p>
      </section>
      
      <section className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;