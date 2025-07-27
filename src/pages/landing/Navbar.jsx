import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleActiveSection);
    handleActiveSection(); // Initial check
    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  // Responsive breakpoints
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const navbarStyle = {
    background: scrolled 
      ? 'rgba(255, 255, 255, 0.98)' 
      : 'rgba(255, 255, 255, 0.95)',
    boxShadow: scrolled 
      ? '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backdropFilter: 'blur(12px)',
    transition: 'all 0.3s ease',
    borderBottom: scrolled ? '1px solid rgba(229, 231, 235, 0.8)' : 'none'
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: isMobile ? '0 16px' : '0 24px'
  };

  const flexContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scrolled ? '60px' : '72px',
    transition: 'height 0.3s ease'
  };

  const logoStyle = {
    fontSize: isMobile ? '20px' : isTablet ? '22px' : '26px',
    fontWeight: '800',
    color: '#047857',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const logoImageStyle = {
    width: isMobile ? '24px' : isTablet ? '28px' : '32px',
    height: isMobile ? '24px' : isTablet ? '28px' : '32px',
    marginRight: '10px',
    filter: 'drop-shadow(0 2px 4px rgba(16, 185, 129, 0.3))',
    objectFit: 'contain'
  };

  const logoTextStyle = {
    background: 'linear-gradient(135deg, #047857, #10b981)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    letterSpacing: '-0.02em'
  };

  const desktopNavStyle = {
    display: isMobile ? 'none' : 'flex',
    alignItems: 'center'
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: isTablet ? '24px' : '32px',
    marginRight: '32px'
  };

  const getNavLinkStyle = (itemName) => ({
    padding: '10px 16px',
    fontSize: '15px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: '8px',
    position: 'relative',
    color: activeSection === itemName.toLowerCase() ? '#047857' : '#374151',
    background: activeSection === itemName.toLowerCase() 
      ? 'rgba(16, 185, 129, 0.1)' 
      : 'transparent'
  });

  const ctaButtonStyle = {
    background: 'linear-gradient(135deg, #10b981, #047857)',
    color: 'white',
    fontWeight: '600',
    padding: isTablet ? '10px 20px' : '12px 24px',
    borderRadius: '50px',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const mobileButtonStyle = {
    display: isMobile ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '44px',
    color: '#374151',
    background: 'rgba(243, 244, 246, 0.8)',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(8px)'
  };

  const mobileMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(20px)',
    borderTop: '1px solid rgba(229, 231, 235, 0.8)',
    boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  };

  const mobileMenuContainerStyle = {
    padding: '24px 16px',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const mobileMenuItemStyle = {
    display: 'block',
    padding: '16px 20px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#374151',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    borderRadius: '12px',
    margin: '8px 0',
    background: 'transparent'
  };

  const mobileCtaStyle = {
    ...ctaButtonStyle,
    width: '100%',
    textAlign: 'center',
    marginTop: '16px',
    padding: '16px 24px'
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={navbarStyle}
    >
      <div style={containerStyle}>
        <div style={flexContainerStyle}>
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={logoStyle}
            onClick={(e) => handleSmoothScroll(e, '#home')}
          >
            <motion.img 
              src="/BAT1.jpeg"
              alt="Batsari Livestock Logo"
              style={logoImageStyle}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            <span style={logoTextStyle}>
              {isMobile ? 'Batsari' : 'Batsari Livestock'}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div style={desktopNavStyle}>
            <div style={navLinksStyle}>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={getNavLinkStyle(item.name)}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.name.toLowerCase()) {
                      e.target.style.color = '#047857';
                      e.target.style.background = 'rgba(16, 185, 129, 0.08)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.name.toLowerCase()) {
                      e.target.style.color = '#374151';
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              style={ctaButtonStyle}
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #047857, #065f46)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #10b981, #047857)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Get Quote
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            style={mobileButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(16, 185, 129, 0.1)';
              e.target.style.color = '#047857';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(243, 244, 246, 0.8)';
              e.target.style.color = '#374151';
            }}
          >
            <motion.svg 
              style={{height: '24px', width: '24px'}} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0,
            y: isOpen ? 0 : -20
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={mobileMenuStyle}
        >
          <div style={mobileMenuContainerStyle}>
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -30 
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: isOpen ? index * 0.1 : 0,
                  ease: "easeOut"
                }}
                style={{
                  ...mobileMenuItemStyle,
                  color: activeSection === item.name.toLowerCase() ? '#047857' : '#374151',
                  background: activeSection === item.name.toLowerCase() 
                    ? 'rgba(16, 185, 129, 0.1)' 
                    : 'transparent'
                }}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                onMouseEnter={(e) => {
                  e.target.style.color = '#047857';
                  e.target.style.background = 'rgba(16, 185, 129, 0.1)';
                  e.target.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.name.toLowerCase()) {
                    e.target.style.color = '#374151';
                    e.target.style.background = 'transparent';
                  }
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Mobile CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20
              }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={mobileCtaStyle}
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #047857, #065f46)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #10b981, #047857)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Get Quote Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;