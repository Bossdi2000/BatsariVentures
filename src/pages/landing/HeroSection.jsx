import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive breakpoints
  const isMobile = windowSize.width < 640;
  const isTablet = windowSize.width >= 640 && windowSize.width < 1024;
  const isDesktop = windowSize.width >= 1024;
  const isLargeDesktop = windowSize.width >= 1280;

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const sectionStyle = {
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 33%, #f0fdfa 100%)',
    overflow: 'hidden'
  };

  const backgroundStyle = {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden'
  };

  const getDecorativeElementStyle = (baseFontSize) => ({
    position: 'absolute',
    fontSize: isMobile ? `${baseFontSize * 0.6}px` : 
              isTablet ? `${baseFontSize * 0.8}px` : 
              `${baseFontSize}px`,
    opacity: 0.1
  });

  const containerStyle = {
    position: 'relative',
    padding: isMobile ? '60px 16px' : 
             isTablet ? '80px 24px' : 
             '80px 32px',
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh'
  };

  const contentStyle = {
    maxWidth: isMobile ? '100%' :
              isTablet ? '768px' :
              isDesktop ? '1024px' :
              '1280px',
    margin: '0 auto',
    textAlign: 'center',
    width: '100%'
  };

  const mainHeadingStyle = {
    fontSize: isMobile ? '1.875rem' :
              isTablet ? '2.5rem' :
              isDesktop ? '3.75rem' :
              '4.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: isMobile ? '16px' : '24px',
    lineHeight: isMobile ? '1.2' : '1.1'
  };

  const headingLineStyle = {
    display: 'block'
  };

  const greenTextStyle = {
    color: '#047857'
  };

  const taglineStyle = {
    fontSize: isMobile ? '1rem' :
              isTablet ? '1.25rem' :
              isDesktop ? '1.5rem' :
              '1.875rem',
    color: '#059669',
    fontWeight: '600',
    marginBottom: isMobile ? '24px' : '32px'
  };

  const descriptionStyle = {
    fontSize: isMobile ? '1rem' :
              isTablet ? '1.125rem' :
              '1.25rem',
    color: '#374151',
    maxWidth: isMobile ? '100%' : '896px',
    margin: isMobile ? '0 0 32px 0' : '0 auto 48px auto',
    lineHeight: '1.75',
    padding: isMobile ? '0 8px' : '0'
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '16px' : '24px',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const getButtonStyle = (isPrimary) => ({
    background: isPrimary ? '#059669' : 'transparent',
    color: isPrimary ? 'white' : '#059669',
    border: isPrimary ? 'none' : '2px solid #059669',
    fontWeight: 'bold',
    padding: isMobile ? '12px 24px' : '16px 32px',
    borderRadius: '9999px',
    fontSize: isMobile ? '1rem' : '1.125rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: isPrimary ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
    width: isMobile ? '100%' : 'auto',
    maxWidth: isMobile ? '280px' : 'none'
  });

  const statsContainerStyle = {
    marginTop: isMobile ? '48px' : '64px',
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' :
                        isTablet ? 'repeat(2, 1fr)' :
                        'repeat(4, 1fr)',
    gap: isMobile ? '24px' : '32px',
    maxWidth: isMobile ? '100%' : '896px',
    margin: isMobile ? '48px auto 0 auto' : '64px auto 0 auto'
  };

  const statItemStyle = {
    textAlign: 'center',
    padding: isMobile ? '16px 8px' : '20px 16px'
  };

  const statNumberStyle = {
    fontSize: isMobile ? '1.25rem' :
              isTablet ? '1.5rem' :
              '1.875rem',
    fontWeight: 'bold',
    color: '#047857',
    marginBottom: '8px'
  };

  const statLabelStyle = {
    fontSize: isMobile ? '0.75rem' :
              isTablet ? '0.875rem' :
              '1rem',
    color: '#4b5563'
  };

  const scrollIndicatorStyle = {
    position: 'absolute',
    bottom: isMobile ? '24px' : '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#059669'
  };

  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" },
    { number: "100%", label: "Quality Guarantee" }
  ];

  return (
    <section id="home" style={sectionStyle}>
      {/* Background decorative elements */}
      <div style={backgroundStyle}>
        <motion.div
          animate={floatingAnimation}
          style={{
            ...getDecorativeElementStyle(96),
            top: isMobile ? '60px' : '80px',
            left: isMobile ? '20px' : '40px'
          }}
        >
          🐄
        </motion.div>
        <motion.div
          animate={{...floatingAnimation, transition: {...floatingAnimation.transition, delay: 1}}}
          style={{
            ...getDecorativeElementStyle(80),
            top: isMobile ? '120px' : '160px',
            right: isMobile ? '40px' : '80px'
          }}
        >
          🐐
        </motion.div>
        <motion.div
          animate={{...floatingAnimation, transition: {...floatingAnimation.transition, delay: 2}}}
          style={{
            ...getDecorativeElementStyle(80),
            bottom: isMobile ? '120px' : '160px',
            left: isMobile ? '40px' : '80px'
          }}
        >
          🐑
        </motion.div>
      </div>

      <div style={containerStyle}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={contentStyle}
        >
          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            style={mainHeadingStyle}
          >
            <span style={headingLineStyle}>Batsari Livestock &</span>
            <span style={{...headingLineStyle, ...greenTextStyle}}>General Ventures Ltd</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            variants={itemVariants}
            style={taglineStyle}
          >
            Your Trusted Source for Quality Livestock
          </motion.p>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            style={descriptionStyle}
          >
            Welcome to Batsari Livestock & General Ventures Ltd, your reliable partner in 
            supplying healthy and well-bred livestock across Nigeria. We deal in all kinds 
            of livestock, including cattle, goats, sheep, rams, and more, to meet your needs 
            for farming, trading, or festive occasions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            style={buttonContainerStyle}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              style={getButtonStyle(true)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#047857';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#059669';
              }}
            >
              Browse Our Livestock
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={getButtonStyle(false)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#059669';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#059669';
              }}
            >
              Contact Us Today
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            style={statsContainerStyle}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                style={statItemStyle}
              >
                <div style={statNumberStyle}>
                  {stat.number}
                </div>
                <div style={statLabelStyle}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            style={scrollIndicatorStyle}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg 
                style={{
                  width: isMobile ? '20px' : '24px', 
                  height: isMobile ? '20px' : '24px'
                }} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;