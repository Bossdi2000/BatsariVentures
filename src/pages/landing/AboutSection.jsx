import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
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

  const stats = [
    { number: "5+", label: "Years of Experience" },
    { number: "1000+", label: "Satisfied Customers" },
    { number: "500+", label: "Livestock Supplied" },
    { number: "36", label: "States Covered" }
  ];

  const values = [
    {
      icon: "🏆",
      title: "Quality Assurance",
      description: "We maintain the highest standards in livestock care and health certification."
    },
    {
      icon: "🤝",
      title: "Trust & Reliability",
      description: "Built on trust, we deliver on our promises and maintain long-term relationships."
    },
    {
      icon: "💡",
      title: "Expert Knowledge",
      description: "Our team has extensive experience in livestock breeding and animal husbandry."
    },
    {
      icon: "🌍",
      title: "Nationwide Reach",
      description: "We serve customers across Nigeria with efficient delivery and support."
    }
  ];

  const sectionStyle = {
    padding: isMobile ? '40px 16px' : isTablet ? '60px 24px' : '80px 16px',
    background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
    position: 'relative'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const contentGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr',
    gap: isMobile ? '40px' : isTablet ? '50px' : '64px',
    alignItems: 'center'
  };

  const textContentStyle = {
    order: isMobile || isTablet ? 1 : 0
  };

  const titleStyle = {
    fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: isMobile ? '16px' : '24px',
    lineHeight: '1.2'
  };

  const descriptionStyle = {
    fontSize: isMobile ? '1rem' : '1.125rem',
    color: '#374151',
    lineHeight: '1.75',
    marginBottom: isMobile ? '24px' : '32px'
  };

  const highlightTextStyle = {
    color: '#059669',
    fontWeight: '600'
  };

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: isMobile ? '16px' : '24px',
    marginBottom: isMobile ? '32px' : '40px'
  };

  const statItemStyle = {
    textAlign: 'center',
    padding: isMobile ? '16px' : '20px',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  };

  const statNumberStyle = {
    fontSize: isMobile ? '1.75rem' : '2rem',
    fontWeight: 'bold',
    color: '#047857',
    marginBottom: isMobile ? '4px' : '8px'
  };

  const statLabelStyle = {
    fontSize: isMobile ? '0.75rem' : '0.875rem',
    color: '#6b7280'
  };

  const valuesGridStyle = {
    order: isMobile || isTablet ? 0 : 1
  };

  const valuesContainerStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
    gap: isMobile ? '20px' : '24px'
  };

  const valueCardStyle = {
    background: 'white',
    padding: isMobile ? '20px' : '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    border: '1px solid #f3f4f6'
  };

  const valueIconStyle = {
    fontSize: isMobile ? '2rem' : '2.5rem',
    marginBottom: isMobile ? '12px' : '16px',
    display: 'block'
  };

  const valueTitleStyle = {
    fontSize: isMobile ? '1.125rem' : '1.25rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: isMobile ? '8px' : '12px'
  };

  const valueDescriptionStyle = {
    fontSize: isMobile ? '0.8125rem' : '0.875rem',
    color: '#6b7280',
    lineHeight: '1.6'
  };

  const ctaButtonStyle = {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    fontWeight: 'bold',
    padding: isMobile ? '12px 24px' : '16px 32px',
    borderRadius: '9999px',
    fontSize: isMobile ? '1rem' : '1.125rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    marginTop: isMobile ? '16px' : '24px',
    width: isMobile ? '100%' : 'auto',
    maxWidth: isMobile ? '280px' : 'none'
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={contentGridStyle}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={textContentStyle}
          >
            <h2 style={titleStyle}>
              About <span style={highlightTextStyle}>Batsari Livestock</span>
            </h2>
            
            <p style={descriptionStyle}>
              Located in the heart of <span style={highlightTextStyle}>Batsari, Katsina State</span>, 
              we have been a trusted name in the livestock industry for over 5 years. Our commitment 
              to quality, health, and customer satisfaction has made us a preferred choice for farmers, 
              traders, and individuals across Nigeria.
            </p>

            <p style={descriptionStyle}>
              We specialize in providing <span style={highlightTextStyle}>healthy, well-fed livestock</span> 
              including cattle, goats, sheep, and rams. Every animal in our care receives proper nutrition, 
              regular health checkups, and is certified disease-free before delivery.
            </p>

            {/* Stats Grid */}
            <div style={statsContainerStyle}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={!isMobile ? { scale: 1.05 } : {}}
                  viewport={{ once: true }}
                  style={statItemStyle}
                >
                  <div style={statNumberStyle}>{stat.number}</div>
                  <div style={statLabelStyle}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
              style={ctaButtonStyle}
              onMouseEnter={!isMobile ? (e) => {
                e.target.style.boxShadow = '0 20px 25px -5px rgba(16, 185, 129, 0.4)';
              } : undefined}
              onMouseLeave={!isMobile ? (e) => {
                e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              } : undefined}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={valuesGridStyle}
          >
            <div style={valuesContainerStyle}>
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={!isMobile ? { 
                    scale: 1.03,
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.15)'
                  } : {}}
                  viewport={{ once: true }}
                  style={valueCardStyle}
                  onMouseEnter={!isMobile ? (e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.15)';
                  } : undefined}
                  onMouseLeave={!isMobile ? (e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  } : undefined}
                >
                  <div style={valueIconStyle}>{value.icon}</div>
                  <h3 style={valueTitleStyle}>{value.title}</h3>
                  <p style={valueDescriptionStyle}>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;