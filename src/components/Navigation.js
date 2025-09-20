/*
File name: Navigation.js
Student's Name: Zahra Maryam
Student ID: 301000279
Date: [September 20, 2025]
*/

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/zm_custom_logo.png';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Zahra Maryam Logo" className="logo-img" />
        </Link>
      </div>
      
      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
      
      {/* Mobile Menu Button (we'll style this later) */}
      <div className="mobile-menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navigation;