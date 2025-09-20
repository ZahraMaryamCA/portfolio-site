/*
File name: AboutMe.js
Student's Name: Zahra Maryam
Student ID: 301000279
Date: [September 20, 2025]
*/

import React from 'react';
import headshot from '../assets/images/zm_headshot.jpg';
import resumePdf from '../assets/documents/zm_resume.pdf';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-page">
      <section className="about-header">
        <h1>About Zahra Maryam</h1>
      </section>
      
      <section className="about-content">
        <div className="about-photo">
          <img src={headshot} alt="Zahra Maryam" className="headshot-img" />
        </div>
        
        <div className="about-text">
          <h2>Software Engineering Technician Student</h2>
          <p>
            Hi, I'm Zahra Maryam, a 4th semester Software Engineering Technician 
            student at Centennial College. I'm passionate about designing and 
            developing web applications, solving coding challenges, and exploring 
            modern technologies that make software smarter and more efficient.
          </p>
          <p>
            I enjoy working on projects that combine creativity and logic—whether 
            it's building user-friendly interfaces or optimizing back-end systems. 
            My long-term goal is to become a full-stack developer and contribute 
            to innovative software solutions.
          </p>
          <p>
            Currently, I'm expanding my skills in React, Node.js, and database 
            management while working on various academic and personal projects.
          </p>
          
          <a href={resumePdf} download="Zahra_Maryam_Resume.pdf" className="resume-button">
            Download My Resume
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;