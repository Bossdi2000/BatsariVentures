// pages/landing/LandingPage.jsx
import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <HeroSection />
      {/* Option 1: Use full width container */}
      <Container maxWidth={false} sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}>
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </Container>
      {/* Alternative Option 2: Use Box instead of Container
      <Box sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}>
        <Testimonies />
      </Box>
      */}
      <Footer />
    </Box>
  );
};

export default LandingPage;