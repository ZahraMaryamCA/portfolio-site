/*
File name: Contact.js
Student's Name: Zahra Maryam
Student ID: 301000279
Date: [September 20, 2025]
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css';

const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For now, just log the data and redirect
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact Me</h1>
        <p>Let's connect and discuss opportunities</p>
      </section>
      
      <section className="contact-content">
        {/* Contact Information Panel */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <div className="contact-details">
            <p>📧 <strong>Email:</strong> your.email@example.com</p>
            <p>📱 <strong>Phone:</strong> (xxx) xxx-xxxx</p>
            <p>🎓 <strong>School:</strong> Centennial College</p>
            <p>📍 <strong>Location:</strong> Toronto, ON</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;