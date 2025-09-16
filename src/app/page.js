'use client';

import React from 'react';
import { Box, Container, Stack, Grid, Card, Title, Text, Group, Badge, Button } from '@mantine/core';
import { IconStar, IconArrowRight } from '@tabler/icons-react';
import HeroSection from '@/components/HeroSection';
import Qualitycheck from '@/components/Qualitycheck';
import Companies from '@/components/companies';
import Image from 'next/image';

export default function Home() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Quality Manager',
      company: 'Global Metals Inc.',
      content: 'Corseco has revolutionized our quality control process. The AI-powered detection is incredibly accurate and saves us hours every day.',
      rating: 5,
      avatar: '/images/profile1.png'
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      company: 'Furniture World',
      content: 'The forensic analysis capabilities are outstanding. We can now verify authenticity with complete confidence.',
      rating: 5,
      avatar: '/images/profile2.png'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Compliance Officer',
      company: 'Retail Solutions',
      content: 'Document verification has never been this seamless. Corseco ensures we stay compliant effortlessly.',
      rating: 5,
      avatar: '/images/profile3.png'
    }
  ];
  
  return (
    <Box>
      {/* Hero Section */}
      <HeroSection />

      {/* Quality Check Section */}
      <Qualitycheck />

      {/* Companies Section */}
      <Companies />

      {/* Testimonials Section */}
      <Box style={{ backgroundColor: 'white', padding: '4rem 0' }}>
        <Container size="xl">
          <Stack gap="xl" align="center" mb="3rem">
            <Badge size="lg" variant="light" color="green" style={{ marginBottom: '1rem' }}>
              Customer Stories
            </Badge>
            <Title 
              order={2} 
              style={{ 
                textAlign: 'center', 
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                color: '#1e293b'
              }}
            >
              What our customers say
            </Title>
            <Text 
              size="xl" 
              style={{ 
                textAlign: 'center', 
                color: '#64748b',
                maxWidth: '600px'
              }}
            >
              See what our customers say about their experience with Corseco
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
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease'
                  }}
                  className="testimonial-card"
                >
                  <Stack gap="md" style={{ height: '100%' }}>
                    <Group gap="sm">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <IconStar key={i} size={16} color="var(--mantine-color-yellow-6)" fill="var(--mantine-color-yellow-6)" />
                      ))}
                    </Group>
                    
                    <Text 
                      style={{ 
                        color: '#374151',
                        lineHeight: '1.6',
                        fontStyle: 'italic',
                        flex: 1
                      }}
                    >
                      "{testimonial.content}"
                    </Text>
                    
                    <Group gap="md" mt="auto">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        style={{ borderRadius: '50%' }}
                      />
                      <Box>
                        <Text fw={600} style={{ color: '#1e293b' }}>
                          {testimonial.name}
                        </Text>
                        <Text size="sm" c="dimmed">
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

      {/* CTA Section */}
      <Box 
        style={{ 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '4rem 0',
          color: 'white'
        }}
      >
        <Container size="xl">
          <Stack gap="xl" align="center" style={{ textAlign: 'center' }}>
            <Title 
              order={2} 
              style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                color: 'white'
              }}
            >
              Ready to transform your quality verification?
            </Title>
            <Text 
              size="xl" 
              style={{ 
                color: '#94a3b8',
                maxWidth: '600px'
              }}
            >
              Join hundreds of companies already using Corseco to ensure quality, 
              trust, and compliance in their trade operations.
            </Text>
            
            <Group gap="md" mt="lg">
              <Button
                size="lg"
                rightSection={<IconArrowRight size={20} />}
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  border: 'none',
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
                  borderColor: '#64748b',
                  color: 'white',
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