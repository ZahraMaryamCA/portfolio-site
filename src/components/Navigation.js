/*
File name: Navigation.js
Student's Name: Zahra Maryam
Student ID: 301000279
Date: September 20, 2025
*/

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/zm_custom_logo.png';
import '../styles/Navigation.css';

const Navigation = () => {
  // ===== STATE MANAGEMENT =====
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // ===== SCROLL EFFECT =====
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ===== MOBILE MENU TOGGLE =====
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // ===== CLOSE MENU ON NAVIGATION =====
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // ===== NAVIGATION ITEMS =====
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* ===== LOGO SECTION ===== */}
      <div className="nav-logo">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Zahra Maryam Logo" className="logo-img" />
        </Link>
      </div>
      
      {/* ===== DESKTOP NAVIGATION LINKS ===== */}
      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            {item.label}
          </Link>
        ))}
      </div>
      
      {/* ===== MOBILE MENU BUTTON ===== */}
      <div
        className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleMobileMenu();
          }
        }}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navigation;