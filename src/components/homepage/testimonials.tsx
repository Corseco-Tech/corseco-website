'use client';

import React from 'react';
import { Box, Container, Stack, Grid, Card, Title, Text, Group } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Jitendra Shrivastava',
      role: 'Founder',
      company: 'Bluewaterworks',
      content: 'Corseco has revolutionized our quality control process. The AI-powered detection is incredibly accurate and saves us hours every day.',
      rating: 5,
      avatar: '/images/jitendra.jpg'
    },
    {
      name: 'Siddhartha Chauahan',
      role: 'Founder',
      company: 'Calsys India Pvt. Ltd.',
      content: 'The forensic analysis capabilities are outstanding. We can now verify authenticity with complete confidence.',
      rating: 5,
      avatar: '/images/siddartha.jpeg'
    },
    {
      name: 'Raj Menon',
      role: 'Founder',
      company: 'Emco Ceramic',
      content: 'Document verification has never been this seamless. Corseco ensures we stay compliant effortlessly.',
      rating: 5,
      avatar: '/customers/emco-ceremica-tiles.png'
    }
  ];

  return (
    <Box style={{ backgroundColor: '#F8FAFC', padding: '4rem 0' }}>
      <Container size="xl">
        <Stack gap="md" align="center" mb="2rem">
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
            What our customers say
          </Title>
          <Text 
            size="xl" 
            style={{
              color: '#344E65',
              textAlign: 'center',
              maxWidth: '600px',
              margin: 0
            }}
          >
            Real stories from those using Corseco
          </Text>
        </Stack>

        <Grid gutter="xl">
          {testimonials.map((testimonial, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <Card 
                p="xl" 
                radius="xl" 
                shadow="sm" 
                style={{ 
                  height: '100%',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(1, 23, 45, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                className="testimonial-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(1, 23, 45, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(1, 23, 45, 0.08)';
                }}
              >
                <Stack gap="md" style={{ height: '100%' }}>
                  <Box>
                    <Text 
                      style={{ 
                        color: '#344E65',
                        lineHeight: '1.6',
                        fontStyle: 'italic',
                        fontSize: '1rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      &ldquo;{testimonial.content}&rdquo;
                    </Text>
                    
                    <Group gap="sm">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <IconStar key={i} size={16} color="var(--mantine-color-yellow-6)" fill="var(--mantine-color-yellow-6)" />
                      ))}
                    </Group>
                  </Box>
                  
                  <Group gap="md" mt="auto">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      style={{ 
                        borderRadius: '50%',
                        objectFit: 'cover',
                        width: '48px',
                        height: '48px'
                      }}
                    />
                    <Box>
                      <Text fw={600} style={{ color: '#01172D', fontSize: '1rem' }}>
                        {testimonial.name}
                      </Text>
                      <Text size="sm" style={{ color: '#64748b' }}>
                        {testimonial.role} at {testimonial.company}
                      </Text>
                    </Box>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
