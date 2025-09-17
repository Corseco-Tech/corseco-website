'use client';

import React from 'react';
import { Box, Container, Stack, Grid, Card, Title, Text, Group, Badge, Button } from '@mantine/core';
import { IconStar, IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import HeroSection from '@/components/homepage/hero-section';
import CoreBenefits from '@/components/homepage/core-benefits';
import Companies from '@/components/homepage/companies';
import HowItWorks from '@/components/homepage/how-it-works';
import Testimonials from '@/components/homepage/testimonials';
// import Qualitycheck from '@/components/homepage/quality-check';

export default function Home(): React.JSX.Element {
  
  return (
    <Box style={{ margin: 0, padding: 0, width: '100%' }}>
      
      {/* Hero Section */}
      <HeroSection />

      {/* Core Benefits Section */}
      <CoreBenefits />

      {/* Companies Section */}
      <Companies />

      {/* How It Works Section */}
      <HowItWorks />
     
      {/* Quality Check Section - Commented out incase we need later*/}
      {/* <Qualitycheck /> */}

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <Box 
        style={{ 
          backgroundColor: '#FFFFFF',
          padding: '4rem 0',
          color: '#01172D'
        }}
      >
        <Container size="xl">
          <Stack gap="xl" align="center" style={{ textAlign: 'center' }}>
            <Title 
              order={2} 
              className="cta-title"
            >
              Ready to transform your quality verification?
            </Title>
            <Text 
              size="xl" 
              className="cta-subtitle"
            >
              Join hundreds of companies already using Corseco to ensure quality, 
              trust, and compliance in their trade operations.
            </Text>
            
            <Group gap="md" mt="lg">
              <Button
                size="lg"
                rightSection={<IconArrowRight size={20} />}
                style={{
                  backgroundColor: '#5BA382',
                  border: 'none',
                  color: 'white',
                  padding: '1rem 2rem'
                }}
                onClick={() => window.location.href = '/booking'}
              >
                Book a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                style={{
                  borderColor: '#01172D',
                  color: '#01172D',
                  padding: '1rem 2rem'
                }}
                onClick={() => window.location.href = '/contactus'}
              >
                Contact Sales
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

    </Box>
  );
}