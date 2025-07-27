import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
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

  const services = [
    {
      icon: "🐄",
      title: "Well-fed and Healthy Cows",
      description: "Premium quality cattle raised with proper nutrition and care. Perfect for dairy, beef production, or breeding purposes.",
      features: ["Disease-free certification", "Proper vaccination", "Quality feed", "Expert care"]
    },
    {
      icon: "🐐",
      title: "Quality Goats and Sheep",
      description: "Healthy goats and sheep suitable for meat production, milk, or breeding. All animals are well-maintained and healthy.",
      features: ["Various breeds available", "Health certificates", "Breeding quality", "Competitive prices"]
    },
    {
      icon: "💰",
      title: "Fair Prices and Bulk Supply",
      description: "Competitive pricing for individual purchases and special rates for bulk orders. We offer flexible payment options.",
      features: ["Competitive rates", "Bulk discounts", "Flexible payment", "No hidden charges"]
    },
    {
      icon: "🚚",
      title: "Nationwide Delivery",
      description: "We provide reliable delivery services across Nigeria. Your livestock will be transported safely and on time.",
      features: ["Safe transportation", "Nationwide coverage", "Timely delivery", "Professional handling"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const sectionStyle = {
    padding: isMobile ? '40px 16px' : isTablet ? '60px 24px' : '80px 16px',
    background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
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
    fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: isMobile ? '12px' : '16px',
    lineHeight: isMobile ? '1.2' : '1.3'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.125rem',
    color: '#6b7280',
    maxWidth: isMobile ? '100%' : '600px',
    margin: '0 auto',
    lineHeight: '1.75',
    padding: isMobile ? '0 8px' : '0'
  };

  const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile 
      ? '1fr' 
      : isTablet 
        ? 'repeat(2, 1fr)' 
        : 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: isMobile ? '24px' : isTablet ? '28px' : '32px',
    marginBottom: isMobile ? '40px' : isTablet ? '50px' : '64px'
  };

  const serviceCardStyle = {
    background: 'white',
    borderRadius: '16px',
    padding: isMobile ? '24px' : isTablet ? '28px' : '32px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s ease',
    border: '1px solid #f3f4f6',
    position: 'relative',
    overflow: 'hidden'
  };

  const serviceIconStyle = {
    fontSize: isMobile ? '2.5rem' : isTablet ? '2.75rem' : '3rem',
    marginBottom: isMobile ? '12px' : '16px',
    display: 'block'
  };

  const serviceTitleStyle = {
    fontSize: isMobile ? '1.25rem' : isTablet ? '1.375rem' : '1.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: isMobile ? '8px' : '12px',
    lineHeight: '1.3'
  };

  const serviceDescriptionStyle = {
    fontSize: isMobile ? '0.875rem' : '1rem',
    color: '#6b7280',
    lineHeight: '1.75',
    marginBottom: isMobile ? '16px' : '20px'
  };

  const featuresListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: isMobile ? '6px' : '8px',
    fontSize: isMobile ? '0.8125rem' : '0.875rem',
    color: '#374151'
  };

  const checkIconStyle = {
    width: isMobile ? '14px' : '16px',
    height: isMobile ? '14px' : '16px',
    color: '#10b981',
    marginRight: isMobile ? '6px' : '8px',
    flexShrink: 0
  };

  const decorativeElementStyle = {
    position: 'absolute',
    top: '-20px',
    right: '-20px',
    width: isMobile ? '60px' : '80px',
    height: isMobile ? '60px' : '80px',
    background: 'linear-gradient(135deg, #10b981, #059669)',
    borderRadius: '50%',
    opacity: 0.1
  };

  const ctaButtonStyle = {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    fontWeight: 'bold',
    padding: isMobile ? '12px 24px' : isTablet ? '14px 28px' : '16px 32px',
    borderRadius: '9999px',
    fontSize: isMobile ? '1rem' : '1.125rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    width: isMobile ? '100%' : 'auto',
    maxWidth: isMobile ? '280px' : 'none'
  };

  const ctaContainerStyle = {
    textAlign: 'center',
    marginTop: isMobile ? '40px' : isTablet ? '50px' : '64px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <section id="services" style={sectionStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={headerStyle}
        >
          <h2 style={titleStyle}>What We Offer</h2>
          <p style={subtitleStyle}>
            Discover our comprehensive range of livestock services designed to meet all your agricultural and trading needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={servicesGridStyle}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={!isMobile ? { 
                scale: 1.03,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              } : {}}
              style={serviceCardStyle}
              onMouseEnter={!isMobile ? (e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)';
              } : undefined}
              onMouseLeave={!isMobile ? (e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
              } : undefined}
            >
              {/* Decorative Element */}
              <div style={decorativeElementStyle}></div>
              
              {/* Service Icon */}
              <div style={serviceIconStyle}>
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 style={serviceTitleStyle}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p style={serviceDescriptionStyle}>
                {service.description}
              </p>

              {/* Features List */}
              <ul style={featuresListStyle}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={featureItemStyle}>
                    <svg style={checkIconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={ctaContainerStyle}
        >
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
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;