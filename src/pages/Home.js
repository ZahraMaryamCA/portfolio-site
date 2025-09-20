/*
File name: Home.js
Student's Name: Zahra Maryam
Student ID: 301000279
Date: [September 20, 2025]
*/

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hello, I'm Zahra Maryam</h1>
          <h2 className="hero-subtitle">Software Engineering Technician Student</h2>
          <p className="hero-description">
            Building tomorrow's digital solutions today. I combine technical expertise 
            with creative problem-solving to develop web applications that make a difference.
          </p>
          <Link to="/about" className="cta-button">Learn More About Me</Link>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="quick-links">
        <h3>Explore My Work</h3>
        <div className="quick-links-grid">
          <Link to="/projects" className="quick-link-card">
            <h4>View Projects</h4>
            <p>See my latest development work</p>
          </Link>
          <Link to="/services" className="quick-link-card">
            <h4>My Services</h4>
            <p>What I can help you with</p>
          </Link>
          <Link to="/contact" className="quick-link-card">
            <h4>Get In Touch</h4>
            <p>Let's work together</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;