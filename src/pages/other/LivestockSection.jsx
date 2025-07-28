import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

// Memoized Card component to prevent unnecessary re-renders
const LivestockCard = memo(({ item, handleSmoothScroll, isMobile, isTablet }) => {
  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.3s ease',
  };

  const featuredBadgeStyle = {
    position: 'absolute',
    top: '16px',
    left: '16px',
    zIndex: 10,
    backgroundColor: '#059669',
    color: '#ffffff',
    padding: '4px 12px',
    borderRadius: '9999px',
    fontSize: isMobile ? '10px' : '12px',
    fontWeight: '600',
  };

  const stockBadgeStyle = (inStock) => ({
    position: 'absolute',
    top: '16px',
    right: '16px',
    zIndex: 10,
    padding: '4px 12px',
    borderRadius: '9999px',
    fontSize: isMobile ? '10px' : '12px',
    fontWeight: '600',
    backgroundColor: inStock ? '#dcfce7' : '#fee2e2',
    color: inStock ? '#166534' : '#991b1b',
  });

  const imageContainerStyle = {
    position: 'relative',
    height: isMobile ? '200px' : '256px',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  };

  const imageOverlayStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)',
  };

  const cardContentStyle = {
    padding: isMobile ? '16px' : '24px',
  };

  const cardHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px',
  };

  const cardTitleStyle = {
    fontSize: isMobile ? '1rem' : '1.25rem',
    fontWeight: 'bold',
    color: '#111827',
  };

  const priceContainerStyle = {
    textAlign: 'right',
  };

  const priceStyle = {
    fontSize: isMobile ? '1.25rem' : '1.5rem',
    fontWeight: 'bold',
    color: '#059669',
  };

  const originalPriceStyle = {
    fontSize: isMobile ? '12px' : '14px',
    color: '#6b7280',
    textDecoration: 'line-through',
  };

  const cardDescriptionStyle = {
    color: '#6b7280',
    marginBottom: '16px',
    fontSize: isMobile ? '14px' : '16px',
    lineHeight: 1.6,
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: '8px',
    marginBottom: '24px',
  };

  const featureStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: isMobile ? '12px' : '14px',
    color: '#6b7280',
  };

  const featureDotStyle = {
    width: '8px',
    height: '8px',
    backgroundColor: '#10b981',
    borderRadius: '50%',
    marginRight: '8px',
    flexShrink: 0,
  };

  const getActionButtonStyle = (inStock) => ({
    width: '100%',
    padding: isMobile ? '10px 14px' : '12px 16px',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: isMobile ? '14px' : '16px',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: inStock ? 'pointer' : 'not-allowed',
    backgroundColor: inStock ? '#059669' : '#e5e7eb',
    color: inStock ? '#ffffff' : '#9ca3af',
  });

  return (
    <motion.div
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={cardStyle}
      role="article"
      aria-labelledby={`livestock-title-${item.id}`}
    >
      {item.featured && <div style={featuredBadgeStyle}>Featured</div>}
      <div style={stockBadgeStyle(item.inStock)}>{item.inStock ? 'In Stock' : 'Sold Out'}</div>
      <div style={imageContainerStyle}>
        <img
          src={item.image}
          alt={item.title}
          style={imageStyle}
          loading="lazy"
          srcSet={`${item.image}&w=200 200w, ${item.image}&w=400 400w, ${item.image}&w=800 800w`}
          sizes={isMobile ? '100vw' : isTablet ? '50vw' : '33vw'}
          onError={(e) =>
            (e.target.src = `https://via.placeholder.com/400x300/059669/ffffff?text=${encodeURIComponent(item.title)}`)
          }
        />
        <div style={imageOverlayStyle} />
      </div>
      <div style={cardContentStyle}>
        <div style={cardHeaderStyle}>
          <h3 id={`livestock-title-${item.id}`} style={cardTitleStyle}>
            {item.title}
          </h3>
          <div style={priceContainerStyle}>
            <div style={priceStyle}>{item.price}</div>
            {item.originalPrice && <div style={originalPriceStyle}>{item.originalPrice}</div>}
          </div>
        </div>
        <p style={cardDescriptionStyle}>{item.description}</p>
        <div style={featuresGridStyle}>
          {item.features.map((feature, idx) => (
            <div key={idx} style={featureStyle}>
              <div style={featureDotStyle} />
              {feature}
            </div>
          ))}
        </div>
        <button
          onClick={item.inStock ? handleSmoothScroll : undefined}
          style={getActionButtonStyle(item.inStock)}
          disabled={!item.inStock}
          aria-disabled={!item.inStock}
          onMouseEnter={(e) => {
            if (item.inStock) {
              e.target.style.backgroundColor = '#047857';
              e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (item.inStock) {
              e.target.style.backgroundColor = '#059669';
              e.target.style.boxShadow = 'none';
            }
          }}
        >
          {item.inStock ? 'Contact to Purchase' : 'Currently Unavailable'}
        </button>
      </div>
    </motion.div>
  );
});

const LivestockSection = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Enhanced breakpoints
  const isXSmall = windowSize.width < 480;
  const isMobile = windowSize.width >= 480 && windowSize.width < 640;
  const isTablet = windowSize.width >= 640 && windowSize.width < 1024;
  const isDesktop = windowSize.width >= 1024 && windowSize.width < 1440;
  const isLargeDesktop = windowSize.width >= 1440;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const livestock = [
    {
      id: 1,
      title: 'Premium Rams',
      category: 'rams',
      price: '₦150,000',
      originalPrice: '₦180,000',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
      description: 'Healthy, well-bred rams ideal for festive occasions and breeding. Available in various breeds.',
      features: ['Healthy & vaccinated', 'Multiple breeds available', 'Ideal for festivals', 'Breeding quality'],
      inStock: true,
      featured: true,
    },
    {
      id: 2,
      title: 'Dairy Cows',
      category: 'cows',
      price: '₦500,000',
      originalPrice: '₦580,000',
      image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=400&h=300&fit=crop',
      description: 'High-quality dairy cows perfect for milk production and breeding programs.',
      features: ['High milk yield', 'Disease resistant', 'Excellent breeding stock', 'Well-maintained'],
      inStock: true,
      featured: true,
    },
    {
      id: 3,
      title: 'Beef Cattle',
      category: 'cows',
      price: '₦450,000',
      originalPrice: '₦520,000',
      image: 'https://images.unsplash.com/photo-1596854307809-6e791ecf5922?w=400&h=300&fit=crop',
      description: 'Premium beef cattle with excellent meat quality and fast growth rate.',
      features: ['Premium meat quality', 'Fast growth rate', 'Excellent feed conversion', 'Healthy stock'],
      inStock: true,
      featured: false,
    },
    {
      id: 4,
      title: 'Breeding Rams',
      category: 'rams',
      price: '₦200,000',
      originalPrice: '₦240,000',
      image: 'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=400&h=300&fit=crop',
      description: 'Superior breeding rams with proven genetics and excellent offspring quality.',
      features: ['Proven genetics', 'High fertility rate', 'Strong offspring', 'Disease free'],
      inStock: true,
      featured: false,
    },
    {
      id: 5,
      title: 'Young Bulls',
      category: 'cows',
      price: '₦350,000',
      originalPrice: '₦400,000',
      image: 'https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=400&h=300&fit=crop',
      description: 'Strong young bulls perfect for breeding programs and farm operations.',
      features: ['Strong build', 'Good temperament', 'Breeding ready', 'Vaccinated'],
      inStock: false,
      featured: false,
    },
    {
      id: 6,
      title: 'Festival Rams',
      category: 'rams',
      price: '₦120,000',
      originalPrice: '₦140,000',
      image: 'https://images.unsplash.com/photo-1605033198116-93e22e3a1b80?w=400&h=300&fit=crop',
      description: 'Specially selected rams perfect for religious and cultural celebrations.',
      features: ['Festival ready', 'Well-groomed', 'Healthy weight', 'Beautiful appearance'],
      inStock: true,
      featured: false,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Livestock', icon: '🏪' },
    { id: 'rams', name: 'Rams', icon: '🐑' },
    { id: 'cows', name: 'Cattle', icon: '🐄' },
  ];

  const filteredLivestock = selectedCategory === 'all' ? livestock : livestock.filter((item) => item.category === selectedCategory);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  // Styles
  const sectionStyle = {
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdfa 33%, #f0fdf4 100%)',
    overflow: 'hidden',
  };

  const backgroundPatternStyle = {
    position: 'absolute',
    inset: 0,
    opacity: 0.05,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  };

  const containerStyle = {
    position: 'relative',
    padding: isXSmall ? '48px 12px' : isMobile ? '64px 16px' : isTablet ? '80px 24px' : '96px 32px',
    maxWidth: isLargeDesktop ? '1440px' : '1280px',
    margin: '0 auto',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: isXSmall ? '32px' : '64px',
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: isXSmall ? '6px 12px' : '8px 16px',
    backgroundColor: '#d1fae5',
    color: '#065f46',
    borderRadius: '9999px',
    fontSize: isXSmall ? '12px' : '14px',
    fontWeight: '600',
    marginBottom: '16px',
  };

  const mainHeadingStyle = {
    fontSize: isXSmall ? '1.5rem' : isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '24px',
    lineHeight: 1.2,
  };

  const greenTextStyle = {
    color: '#059669',
  };

  const descriptionStyle = {
    fontSize: isXSmall ? '0.875rem' : isMobile ? '1rem' : '1.125rem',
    color: '#6b7280',
    maxWidth: isDesktop ? '768px' : '90%',
    margin: '0 auto',
    lineHeight: 1.75,
    padding: isXSmall ? '0 8px' : '0',
  };

  const filterContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: isXSmall ? '24px' : '48px',
  };

  const filterWrapperStyle = {
    display: isXSmall || isMobile ? 'flex' : 'inline-flex',
    flexDirection: isXSmall || isMobile ? 'column' : 'row',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '8px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    gap: isXSmall || isMobile ? '8px' : '8px',
  };

  const getFilterButtonStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: isXSmall ? '10px 20px' : '12px 24px',
    borderRadius: '12px',
    fontWeight: '500',
    fontSize: isXSmall ? '13px' : isMobile ? '14px' : '16px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: isActive ? '#059669' : 'transparent',
    color: isActive ? '#ffffff' : '#6b7280',
    justifyContent: isXSmall || isMobile ? 'center' : 'flex-start',
    width: isXSmall || isMobile ? '100%' : 'auto',
    minHeight: '44px', // Accessible touch target size
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isXSmall || isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: isXSmall ? '16px' : isMobile ? '24px' : '32px',
    marginBottom: '64px',
  };

  const guideStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    padding: isXSmall ? '24px' : '32px',
    marginBottom: '48px',
  };

  const guideTitleStyle = {
    textAlign: 'center',
    marginBottom: '32px',
  };

  const guideHeadingStyle = {
    fontSize: isXSmall ? '1.25rem' : isMobile ? '1.5rem' : '1.875rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '16px',
  };

  const guideSubtitleStyle = {
    color: '#6b7280',
    fontSize: isXSmall ? '14px' : '16px',
  };

  const stepsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isXSmall || isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isXSmall ? '16px' : '24px',
  };

  const stepStyle = {
    textAlign: 'center',
  };

  const stepIconStyle = {
    width: isXSmall ? '48px' : '64px',
    height: isXSmall ? '48px' : '64px',
    backgroundColor: '#d1fae5',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px auto',
  };

  const stepNumberStyle = {
    color: '#059669',
    fontWeight: 'bold',
    fontSize: isXSmall ? '1rem' : '1.125rem',
    marginBottom: '8px',
  };

  const stepTitleStyle = {
    fontWeight: '600',
    color: '#111827',
    fontSize: isXSmall ? '14px' : '16px',
    marginBottom: '8px',
  };

  const stepDescStyle = {
    fontSize: isXSmall ? '12px' : '14px',
    color: '#6b7280',
  };

  return (
    <section id="livestock" style={sectionStyle} aria-labelledby="livestock-heading">
      <div style={backgroundPatternStyle} />
      <div style={containerStyle}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} style={headerStyle}>
            <div style={badgeStyle}>Premium Livestock</div>
            <h1 id="livestock-heading" style={mainHeadingStyle}>
              Browse Our <span style={greenTextStyle}>Quality Livestock</span>
            </h1>
            <p style={descriptionStyle}>
              Discover our premium collection of healthy, well-bred livestock. Each animal is carefully selected, vaccinated, and ready for farming, trading, or festive occasions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} style={filterContainerStyle}>
            <div style={filterWrapperStyle}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={getFilterButtonStyle(selectedCategory === category.id)}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category.id) {
                      e.target.style.backgroundColor = '#f3f4f6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category.id) {
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                  aria-pressed={selectedCategory === category.id}
                >
                  <span style={{ fontSize: isXSmall ? '16px' : '18px' }}>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={containerVariants} style={gridStyle}>
            {filteredLivestock.map((item) => (
              <LivestockCard
                key={item.id}
                item={item}
                handleSmoothScroll={handleSmoothScroll}
                isMobile={isXSmall || isMobile}
                isTablet={isTablet}
              />
            ))}
          </motion.div>

          <motion.div variants={itemVariants} style={guideStyle}>
            <div style={guideTitleStyle}>
              <h2 style={guideHeadingStyle}>How to Purchase</h2>
              <p style={guideSubtitleStyle}>Simple steps to get your quality livestock</p>
            </div>
            <div style={stepsGridStyle}>
              {[
                { step: '1', title: 'Browse & Select', desc: 'Choose from our quality livestock collection', icon: '👀' },
                { step: '2', title: 'Contact Us', desc: 'Reach out to confirm availability and pricing', icon: '📞' },
                { step: '3', title: 'Secure Payment', desc: 'Make payment through our secure methods', icon: '💳' },
                { step: '4', title: 'Delivery/Pickup', desc: 'Arrange pickup or delivery with our support', icon: '🚛' },
              ].map((item, index) => (
                <div key={index} style={stepStyle}>
                  <div style={stepIconStyle}>
                    <span style={{ fontSize: isXSmall ? '24px' : '32px' }}>{item.icon}</span>
                  </div>
                  <div style={stepNumberStyle}>Step {item.step}</div>
                  <h3 style={stepTitleStyle}>{item.title}</h3>
                  <p style={stepDescStyle}>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LivestockSection;