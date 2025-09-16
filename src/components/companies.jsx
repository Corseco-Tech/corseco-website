'use client';

import React from 'react';
import { Box, Container, Text, Stack, Group, Badge } from '@mantine/core';
import { IconStar, IconTrendingUp } from '@tabler/icons-react';
import Image from 'next/image';

const Companies = () => {
  const companies = [
    { name: 'BIR', logo: '/customers/BIR.png' },
    { name: 'Blue Water Works', logo: '/customers/bluewaterworks-removebg-preview (1).png' },
    { name: 'BMR Middle East', logo: '/customers/BMRMiddleeast.png' },
    { name: 'Calsys', logo: '/customers/Calsyslogo.png' },
    { name: 'Confetti India', logo: '/customers/confettiIndiaLogo.png' },
    { name: 'EMCO Ceramic', logo: '/customers/Emcoceremicatiles_-removebg-preview (1).png' },
    { name: 'ISRI', logo: '/customers/ISRILOGO_-removebg-preview.png' },
    { name: 'MTC Recycling', logo: '/customers/MTCRecycling-removebg-preview.png' },
    { name: 'Now Purchase', logo: '/customers/Nowpurhcase-removebg-preview.png' },
    { name: 'RCIC Canada', logo: '/customers/Rciccanada_-removebg-preview.png' },
    { name: 'Rema', logo: '/customers/RemaImage .jpeg' },
    { name: 'Retail Association of India', logo: '/customers/RetailassociationofIndia_-removebg-preview.png' },
    { name: 'Satinne Dimensions', logo: '/customers/Satinneodimmesnions_-removebg-preview-removebg-preview.png' },
    { name: 'Satyam Paper', logo: '/customers/Satyampaperlogo-removebg-preview.png' },
    { name: 'Vikas Machine Tools', logo: '/customers/VIkasmachientools_-removebg-preview.png' },
  ];

  // Duplicate the array for seamless scrolling
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <Box style={{ backgroundColor: 'white', padding: '4rem 0' }}>
      <Container size="xl">
        <Stack gap="xl" align="center" mb="3rem">
          <Group gap="sm">
            <IconStar size={24} color="var(--mantine-color-yellow-6)" />
            <Badge size="lg" variant="light" color="yellow">
              Trusted Partners
            </Badge>
          </Group>
          
          <Text 
            size="xl" 
            style={{ 
              textAlign: 'center', 
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: '600',
              color: '#1e293b',
              maxWidth: '600px'
            }}
          >
            Trusted by companies worldwide
          </Text>
          
          <Text 
            size="lg" 
            style={{ 
              textAlign: 'center', 
              color: '#64748b',
              maxWidth: '500px'
            }}
          >
            Join industry leaders who trust Corseco for their quality verification needs
          </Text>
        </Stack>

        {/* Auto-scrolling Logo Carousel */}
        <Box
          style={{
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '3rem',
            padding: '2rem 0',
            backgroundColor: '#f8fafc',
            borderRadius: '1.5rem',
            border: '1px solid #e2e8f0'
          }}
        >
          {/* Gradient overlays for smooth fade effect */}
          <Box
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, #f8fafc 0%, transparent 10%, transparent 90%, #f8fafc 100%)',
              zIndex: 2,
              pointerEvents: 'none'
            }}
          />
          
          {/* Scrolling container */}
          <Box
            style={{
              display: 'flex',
              animation: 'scroll 30s linear infinite',
              gap: '3rem',
              alignItems: 'center',
              width: 'max-content'
            }}
            className="logo-scroll-container"
          >
            {duplicatedCompanies.map((company, index) => (
              <Box
                key={`${company.name}-${index}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem 2rem',
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  height: '100px',
                  minWidth: '200px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                  flexShrink: 0
                }}
                className="company-logo"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                  const img = e.currentTarget.querySelector('.logo-image');
                  if (img) {
                    img.style.filter = 'grayscale(0%)';
                    img.style.opacity = '1';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                  const img = e.currentTarget.querySelector('.logo-image');
                  if (img) {
                    img.style.filter = 'grayscale(100%)';
                    img.style.opacity = '0.7';
                  }
                }}
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={140}
                  height={70}
                  style={{
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.7,
                    transition: 'all 0.3s ease',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                  className="logo-image"
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .logo-scroll-container:hover {
          animation-play-state: paused;
        }
        
        .company-logo:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
        }
        
        .company-logo:hover .logo-image {
          filter: grayscale(0%) !important;
          opacity: 1 !important;
        }
        
        @media (max-width: 768px) {
          .logo-scroll-container {
            animation-duration: 20s;
          }
        }
      `}</style>
    </Box>
  );
};

export default Companies;