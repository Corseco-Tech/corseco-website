'use client';

import React from 'react';
import { Box, Container, Stack, Grid, Card, Title, Text, Group, Badge } from '@mantine/core';
import { 
  IconShield, 
  IconMapPin, 
  IconFileCheck, 
  IconUsers,
  IconTrendingUp,
  IconArrowRight
} from '@tabler/icons-react';

interface Benefit {
  icon: React.ComponentType<{ size: number; color: string }>;
  title: string;
  description: string;
  badge: string;
  color: string;
}

const CoreBenefits: React.FC = () => {
  const benefits: Benefit[] = [
    {
      icon: IconShield,
      title: 'AI Forensics & QC',
      description: 'Advanced computer vision and machine learning algorithms detect defects, inconsistencies, and quality issues with 90+% accuracy.',
      badge: '90+% Accuracy',
      color: 'blue'
    },
    {
      icon: IconMapPin,
      title: 'Real-time Tracking',
      description: 'Real-time GPS tracking and location verification to ensure goods are where they claim to be during transit.',
      badge: 'GPS Verified',
      color: 'green'
    },
    {
      icon: IconFileCheck,
      title: 'Document Authentication',
      description: 'Automated verification of certificates, permits, and trade documents to ensure compliance and authenticity.',
      badge: '100% Compliance',
      color: 'gray'
    },
    {
      icon: IconTrendingUp,
      title: 'Trade Intelligence',
      description: 'AI-driven insights and predictive analytics to optimize trade operations and identify potential issues.',
      badge: 'Smart Insights',
      color: 'cyan'
    },
    {
      icon: IconUsers,
      title: 'Verified Network',
      description: 'Access a global network of certified auditors, inspectors, and trusted partners. Connect with verified professionals who meet our strict quality standards for seamless collaboration.',
      badge: 'Trusted Network',
      color: 'pink'
    }
  ];

  return (
    <Box style={{ backgroundColor: '#FFFFFF', padding: '3rem 0' }}>
      <Container size="xl">
        <Stack gap="md" align="center" mb="2rem">
          {/* <Badge 
            size="lg" 
            variant="light" 
            style={{ 
              backgroundColor: '#E6ECF2', 
              color: '#01172D',
              border: '1px solid rgba(1, 23, 45, 0.1)'
            }}
          >
            Why Choose Corseco
          </Badge> */}
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
            Why Teams Choose Corseco
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
            Because every shipment deserves trust, transparency, and proof.
          </Text>
        </Stack>

        <Grid gutter="xl">
          {benefits.map((benefit, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
              <Card
                p="xl"
                radius="xl"
                shadow="sm"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(1, 23, 45, 0.08)',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                className="benefit-card"
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
                  <Group justify="space-between" align="flex-start">
                    <Box
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        backgroundColor: `var(--mantine-color-${benefit.color}-0)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem'
                      }}
                    >
                      {benefit.icon === IconShield && <IconShield size={28} color={`var(--mantine-color-${benefit.color}-6)`} />}
                      {benefit.icon === IconMapPin && <IconMapPin size={28} color={`var(--mantine-color-${benefit.color}-6)`} />}
                      {benefit.icon === IconFileCheck && <IconFileCheck size={28} color={`var(--mantine-color-${benefit.color}-6)`} />}
                      {benefit.icon === IconTrendingUp && <IconTrendingUp size={28} color={`var(--mantine-color-${benefit.color}-6)`} />}
                      {benefit.icon === IconUsers && <IconUsers size={28} color={`var(--mantine-color-${benefit.color}-6)`} />}
                    </Box>
                    
                    <Badge
                      size="sm"
                      variant="light"
                      color={benefit.color}
                      style={{ marginLeft: 'auto' }}
                    >
                      {benefit.badge}
                    </Badge>
                  </Group>
                  
                  <Title
                    order={4}
                    style={{
                      color: '#01172D',
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      marginBottom: '0.25rem',
                      lineHeight: '1.3'
                    }}
                  >
                    {benefit.title}
                  </Title>
                  
                  <Text
                    size="sm"
                    style={{
                      color: '#344E65',
                      lineHeight: '1.6',
                      flex: 1
                    }}
                  >
                    {benefit.description}
                  </Text>
                  
                  <Group gap="xs" mt="auto" style={{ opacity: 1 }}>
                    <Text size="sm" style={{ color: `var(--mantine-color-${benefit.color}-6)`, fontWeight: '600' }}>
                      Learn more
                    </Text>
                    <IconArrowRight size={16} color={`var(--mantine-color-${benefit.color}-6)`} />
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

export default CoreBenefits;
