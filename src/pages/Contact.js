/*
File name: Contact.js
Student's Name: Zahra Maryam
Student ID: 301000279
Date: September 20, 2025
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css';

const Contact = () => {
  // ===== STATE MANAGEMENT =====
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // ===== FORM VALIDATION =====
  const validateForm = () => {
    const errors = {};
    
    // First name validation
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      errors.firstName = 'First name must be at least 2 characters';
    }
    
    // Last name validation
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      errors.lastName = 'Last name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    const phoneRegex = /^\d{10,}$/; // Just digits, 10 or more
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter at least 10 digits';
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };

  // ===== HANDLE INPUT CHANGES =====
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  // ===== HANDLE FORM SUBMISSION =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Start submission process
    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Log form data (in real app, this would be sent to a server)
      console.log('Form submitted successfully:', formData);
      
      // Show success message
      alert('Thank you for your message! I\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Clear any remaining errors
      setFormErrors({});
      
      // Redirect to home page after successful submission
      navigate('/');
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* ===== PAGE HEADER ===== */}
      <section className="contact-header">
        <div className="container">
          <h1>Contact Me</h1>
          <p>Let's connect and discuss opportunities</p>
        </div>
      </section>
      
      <div className="container">
        <section className="contact-content">
          {/* ===== CONTACT INFORMATION PANEL ===== */}
          <div className="contact-info card">
            <div className="card-body">
              <h3>Get In Touch</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email:</strong>
                    <p>zmaryamonca@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <strong>Phone:</strong>
                    <p>(416) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🎓</span>
                  <div>
                    <strong>School:</strong>
                    <p>Centennial College</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Location:</strong>
                    <p>Toronto, ON, Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* ===== CONTACT FORM ===== */}
          <div className="contact-form card">
            <div className="card-body">
              <h3>Send Me a Message</h3>
              <form onSubmit={handleSubmit} noValidate>
                {/* ===== NAME FIELDS ROW ===== */}
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={formErrors.firstName ? 'error' : ''}
                      disabled={isSubmitting}
                      required
                    />
                    {formErrors.firstName && (
                      <span className="error-message">{formErrors.firstName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={formErrors.lastName ? 'error' : ''}
                      disabled={isSubmitting}
                      required
                    />
                    {formErrors.lastName && (
                      <span className="error-message">{formErrors.lastName}</span>
                    )}
                  </div>
                </div>
                
                {/* ===== EMAIL FIELD ===== */}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? 'error' : ''}
                    disabled={isSubmitting}
                    required
                  />
                  {formErrors.email && (
                    <span className="error-message">{formErrors.email}</span>
                  )}
                </div>
                
                {/* ===== PHONE FIELD ===== */}
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className={formErrors.phone ? 'error' : ''}
                    disabled={isSubmitting}
                    required
                  />
                  {formErrors.phone && (
                    <span className="error-message">{formErrors.phone}</span>
                  )}
                </div>
                
                {/* ===== MESSAGE FIELD ===== */}
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={formErrors.message ? 'error' : ''}
                    disabled={isSubmitting}
                    required
                  ></textarea>
                  {formErrors.message && (
                    <span className="error-message">{formErrors.message}</span>
                  )}
                </div>
                
                {/* ===== SUBMIT BUTTON ===== */}
                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;