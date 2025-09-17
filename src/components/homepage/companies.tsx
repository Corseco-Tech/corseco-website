'use client';

import React from 'react';
import { Box, Container, Text, Stack, Group, Badge, Title } from '@mantine/core';
import { IconStar, IconTrendingUp } from '@tabler/icons-react';
import Image from 'next/image';

interface Company {
  name: string;
  logo: string;
}

const Companies: React.FC = () => {
  const companies: Company[] = [
    { name: 'BIR', logo: '/customers/BIR.png' },
    { name: 'Blue Water Works', logo: '/customers/blue-water-works.png' },
    { name: 'BMR Middle East', logo: '/customers/BMR-middle-east.png' },
    { name: 'Calsys', logo: '/customers/calsys.png' },
    { name: 'EMCO Ceramic', logo: '/customers/emco-ceremica-tiles.png' },
    { name: 'ISRI', logo: '/customers/ISRI.png' },
    { name: 'MTC Recycling', logo: '/customers/MTC-recycling.png' },
    { name: 'Now Purchase', logo: '/customers/now-purhcase.png' },
    { name: 'RCIC Canada', logo: '/customers/rcic-canada.png' },
    { name: 'Rema', logo: '/customers/rema.jpeg' },
    { name: 'Retail Association of India', logo: '/customers/retail-association-of-India.png' },
    { name: 'Satinne Dimensions', logo: '/customers/satin-neo-dimmesnions.png' },
    { name: 'Confetti India', logo: '/customers/confetti-India.png' },
    { name: 'Satyam Paper', logo: '/customers/satyam-paper.png' },
    { name: 'Vikas Machine Tools', logo: '/customers/vikas-machine-tools.png' },
  ];

  // Duplicate the array for seamless scrolling
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <Box style={{ backgroundColor: 'white', padding: '4rem 0' }}>
      <Container size="xl">
        <Stack gap="md" align="center" mb="2rem">
          {/* <Group gap="sm">
            <IconStar size={24} color="var(--mantine-color-yellow-6)" />
            <Badge size="lg" variant="light" color="yellow">
              Trusted Partners
            </Badge>
          </Group> */}

            <Title 
                order={2} 
                style={{
                color: '#01172D',
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '700',
                textAlign: 'center',
                margin: 0
                }}
            >
                Powering QC for Global Supply Chains
            </Title>
          
            <Text 
                size="xl" 
                className="companies-subtitle"
            >
                Join the network of global teams using AI-powered QC to eliminate fraud and delays
            </Text>
        </Stack>

        {/* Auto-scrolling Logo Carousel */}
        <Box className="companies-carousel">
          {/* Gradient overlays for smooth fade effect */}
          <Box className="carousel-gradient" />
          
          {/* Scrolling container */}
          <Box className="logo-scroll-container">
            {duplicatedCompanies.map((company, index) => (
              <Box
                key={`${company.name}-${index}`}
                className="company-logo"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                  const img = e.currentTarget.querySelector('.logo-image') as HTMLElement;
                  if (img) {
                    img.style.filter = 'grayscale(0%)';
                    img.style.opacity = '1';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                  const img = e.currentTarget.querySelector('.logo-image') as HTMLElement;
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
