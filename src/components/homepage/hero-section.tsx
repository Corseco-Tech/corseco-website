'use client';

import React from 'react';
import { Box, Container, Stack, Title, Text, Group, Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

const HeroSection: React.FC = () => {
  return (
    <Box
      style={{
        background: 'var(--color-primary)',
        paddingTop: '5rem',
        paddingBottom: '4rem',
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container size="xl" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <Stack gap="lg" align="center" style={{ textAlign: 'center' }}>
          <Title
            order={1}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              color: 'var(--white)',
              marginBottom: '0.5rem'
            }}
          >
            {/* Global Trade. Simplified. */}
            No Doubts. No Delays. Just Verified Trade.
          </Title>
          
          <Text
            size="2xl"
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '500',
              lineHeight: '1.6',
              maxWidth: '600px'
            }}
          >
            AI-powered QC for shipments worldwide. <br />
            Instant verification of goods, documents, and origins.

          </Text>
          
          <Button
            size="lg"
            style={{
              backgroundColor: 'var(--color-accent-emerald)',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              color: 'var(--white)'
            }}
            onClick={() => window.location.href = '/booking'}
          >
            Get Started
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
