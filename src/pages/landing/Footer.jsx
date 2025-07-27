import React from 'react';
import { motion } from 'framer-motion';
import { Box, Grid, Typography, Link, Divider } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Cattle Supply',
    'Goats & Sheep',
    'Bulk Orders',
    'Nationwide Delivery',
  ];

  const contactInfo = [
    { icon: '📞', text: '+234 9124073617', href: 'tel:+234 9124073617' },
    { icon: '💬', text: 'WhatsApp 24/7', href: 'https://wa.me/+234 912 407 3617' },
    { icon: '📍', text: 'Kugbo, Abuja FCT, Nigeria' },
    { icon: '✉️', text: 'batsarilivestock@gmail.com', href: 'batsarilivestock@gmail.com' },
  ];

  const socialLinks = [
    { icon: '📘', href: '#', ariaLabel: 'Facebook' },
    { icon: '🐦', href: '#', ariaLabel: 'Twitter' },
    { icon: '💬', href: 'https://wa.me/+234 9124073617', ariaLabel: 'WhatsApp' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #065f46 0%, #047857 100%)',
        color: 'white',
        py: { xs: 6, sm: 8 }, // 48px mobile, 64px tablet+
        px: { xs: 2, sm: 4, lg: 8 }, // 16px mobile, 32px tablet, 64px desktop
      }}
    >
      <Box sx={{ maxWidth: 1280, mx: 'auto' }}>
        {/* Main Footer Content */}
        <Grid
          container
          spacing={5}
          sx={{
            mb: 5,
            justifyContent: 'space-between',
          }}
          columns={{ xs: 1, sm: 2, lg: 4 }}
        >
          {/* Company Info */}
          <Grid item xs={1} sm={1} lg={1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#ecfdf5', mb: 2 }}
              >
                🐄 Batsari Livestock
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#a7f3d0', lineHeight: 1.6, mb: 2.5 }}
              >
                Your trusted source for quality livestock in Nigeria. We provide healthy,
                well-fed animals with nationwide delivery and exceptional customer service.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  mt: 2.5,
                  flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on mobile
                }}
              >
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      aria-label={link.ariaLabel}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                        color: '#a7f3d0',
                        textDecoration: 'none',
                        fontSize: '1.25rem',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          color: '#ecfdf5',
                        },
                      }}
                    >
                      {link.icon}
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={1} sm={1} lg={1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#ecfdf5', mb: 2 }}
              >
                Quick Links
              </Typography>
              <Box component="nav" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {quickLinks.map((link, index) => (
                  <Box key={index} sx={{ mb: 1 }}>
                    <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={link.href}
                        sx={{
                          color: '#a7f3d0',
                          textDecoration: 'none',
                          fontSize: '0.875rem',
                          display: 'block',
                          transition: 'color 0.3s ease',
                          '&:hover': { color: '#ecfdf5' },
                        }}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Services */}
          <Grid item xs={1} sm={1} lg={1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#ecfdf5', mb: 2 }}
              >
                Our Services
              </Typography>
              <Box sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {services.map((service, index) => (
                  <Box key={index} sx={{ mb: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: '#a7f3d0', fontSize: '0.875rem' }}
                    >
                      {service}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={1} sm={1} lg={1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: '#ecfdf5', mb: 2 }}
              >
                Contact Info
              </Typography>
              {contactInfo.map((contact, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1.5,
                    fontSize: '0.875rem',
                    color: '#a7f3d0',
                  }}
                >
                  <Box sx={{ mr: 1, fontSize: '1rem' }}>{contact.icon}</Box>
                  {contact.href ? (
                    <Link
                      href={contact.href}
                      sx={{
                        color: '#a7f3d0',
                        textDecoration: 'none',
                        '&:hover': { color: '#ecfdf5' },
                      }}
                    >
                      {contact.text}
                    </Link>
                  ) : (
                    <Typography variant="body2">{contact.text}</Typography>
                  )}
                </Box>
              ))}
            </motion.div>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', my: 5 }} />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: { md: 'space-between' },
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: '#a7f3d0', textAlign: { xs: 'center', md: 'left' } }}
            >
              © {currentYear} Batsari Livestock & General Ventures Ltd. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/privacy-policy"
                  sx={{
                    color: '#a7f3d0',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': { color: '#ecfdf5' },
                  }}
                >
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/terms-of-service"
                  sx={{
                    color: '#a7f3d0',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': { color: '#ecfdf5' },
                  }}
                >
                  Terms of Service
                </Link>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Footer;