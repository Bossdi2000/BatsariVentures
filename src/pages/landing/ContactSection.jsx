import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Call Us",
      detail: "+234 XXX XXX XXXX",
      description: "Available during business hours"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      detail: "Available 24/7",
      description: "Quick response guaranteed"
    },
    {
      icon: "📍",
      title: "Location",
      detail: "Batsari, Katsina State",
      description: "Nigeria"
    },
    {
      icon: "✉️",
      title: "Email",
      detail: "info@batsarilivestock.com",
      description: "We'll respond within 24 hours"
    }
  ];

  const sectionStyle = {
    padding: isMobile ? '40px 16px' : isTablet ? '60px 24px' : '80px 16px',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    position: 'relative'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: isMobile ? '40px' : isTablet ? '50px' : '64px'
  };

  const titleStyle = {
    fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: isMobile ? '12px' : '16px',
    lineHeight: '1.2'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '1rem' : '1.125rem',
    color: '#6b7280',
    maxWidth: isMobile ? '100%' : '600px',
    margin: '0 auto',
    lineHeight: '1.75',
    padding: isMobile ? '0 8px' : '0'
  };

  const contentGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
    gap: isMobile ? '40px' : isTablet ? '50px' : '64px',
    alignItems: 'start'
  };

  const contactInfoStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : '1fr',
    gap: isMobile ? '20px' : '24px',
    order: isMobile ? 2 : 0
  };

  const contactCardStyle = {
    background: 'white',
    padding: isMobile ? '20px' : '24px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    border: '1px solid #f3f4f6',
    transition: 'all 0.3s ease'
  };

  const contactIconStyle = {
    fontSize: isMobile ? '1.75rem' : '2rem',
    marginBottom: isMobile ? '8px' : '12px',
    display: 'block'
  };

  const contactTitleStyle = {
    fontSize: isMobile ? '1.125rem' : '1.25rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: isMobile ? '6px' : '8px'
  };

  const contactDetailStyle = {
    fontSize: isMobile ? '0.875rem' : '1rem',
    color: '#059669',
    fontWeight: '600',
    marginBottom: '4px',
    wordBreak: 'break-word'
  };

  const contactDescriptionStyle = {
    fontSize: isMobile ? '0.8125rem' : '0.875rem',
    color: '#6b7280'
  };

  const formContainerStyle = {
    background: 'white',
    padding: isMobile ? '24px' : isTablet ? '28px' : '32px',
    borderRadius: '16px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    border: '1px solid #f3f4f6',
    order: isMobile ? 1 : 0
  };

  const formTitleStyle = {
    fontSize: isMobile ? '1.25rem' : '1.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: isMobile ? '20px' : '24px',
    textAlign: 'center'
  };

  const formGroupStyle = {
    marginBottom: isMobile ? '16px' : '20px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: isMobile ? '0.8125rem' : '0.875rem',
    fontWeight: '600',
    color: '#374151',
    marginBottom: isMobile ? '6px' : '8px'
  };

  const inputStyle = {
    width: '100%',
    padding: isMobile ? '10px 14px' : '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: isMobile ? '0.9375rem' : '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: isMobile ? '100px' : '120px'
  };

  const submitButtonStyle = {
    width: '100%',
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    fontWeight: 'bold',
    padding: isMobile ? '14px 20px' : '16px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: isMobile ? '0.9375rem' : '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={headerStyle}
        >
          <h2 style={titleStyle}>
            Get In Touch
          </h2>
          <p style={subtitleStyle}>
            Ready to get quality livestock? Contact us today and let's discuss your needs. 
            We're here to help you find the perfect animals for your requirements.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div style={contentGridStyle}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ order: isMobile ? 2 : 0 }}
          >
            <div style={contactInfoStyle}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={!isMobile ? { 
                    scale: 1.03,
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.15)'
                  } : {}}
                  viewport={{ once: true }}
                  style={contactCardStyle}
                  onMouseEnter={!isMobile ? (e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.15)';
                  } : undefined}
                  onMouseLeave={!isMobile ? (e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  } : undefined}
                >
                  <div style={contactIconStyle}>{info.icon}</div>
                  <h3 style={contactTitleStyle}>{info.title}</h3>
                  <p style={contactDetailStyle}>{info.detail}</p>
                  <p style={contactDescriptionStyle}>{info.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ ...formContainerStyle, order: isMobile ? 1 : 0 }}
          >
            <h3 style={formTitleStyle}>Send us a Message</h3>
            
            <div>
              <div style={formGroupStyle}>
                <div style={labelStyle}>Full Name</div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#10b981';
                    e.target.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Enter your full name"
                />
              </div>

              <div style={formGroupStyle}>
                <div style={labelStyle}>Email Address</div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#10b981';
                    e.target.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Enter your email address"
                />
              </div>

              <div style={formGroupStyle}>
                <div style={labelStyle}>Phone Number</div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#10b981';
                    e.target.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Enter your phone number"
                />
              </div>

              <div style={formGroupStyle}>
                <div style={labelStyle}>Message</div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={textareaStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#10b981';
                    e.target.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Tell us about your livestock needs..."
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                whileHover={!isMobile ? { scale: 1.02 } : {}}
                whileTap={{ scale: 0.98 }}
                style={submitButtonStyle}
                onMouseEnter={!isMobile ? (e) => {
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(16, 185, 129, 0.4)';
                } : undefined}
                onMouseLeave={!isMobile ? (e) => {
                  e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                } : undefined}
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;