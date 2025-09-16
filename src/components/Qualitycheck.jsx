'use client';

import React from 'react';
import { Box, Container, Stack, Grid, Card, Title, Text, Group, Badge } from '@mantine/core';
import { IconShield, IconEye, IconFileCheck, IconClock, IconTrendingUp, IconUsers } from '@tabler/icons-react';

const Qualitycheck = () => {
  const features = [
    {
      icon: IconShield,
      title: "AI Quality Control",
      description: "Advanced computer vision and machine learning algorithms detect defects, inconsistencies, and quality issues with 99% accuracy.",
      color: "blue",
      stats: "99% Accuracy"
    },
    {
      icon: IconEye,
      title: "GPS Location Verification",
      description: "Real-time GPS tracking and location verification to ensure goods are where they claim to be during transit.",
      color: "green",
      stats: "Real-time Tracking"
    },
    {
      icon: IconFileCheck,
      title: "Document Authentication",
      description: "Automated verification of certificates, permits, and trade documents to ensure compliance and authenticity.",
      color: "purple",
      stats: "100% Compliance"
    },
    {
      icon: IconClock,
      title: "Certificate Validation",
      description: "Instant validation of certificates and permits to ensure they are genuine and up-to-date.",
      color: "orange",
      stats: "Instant Validation"
    },
    {
      icon: IconTrendingUp,
      title: "Trade Intelligence AI",
      description: "AI-driven insights and predictive analytics to optimize trade operations and identify potential issues.",
      color: "cyan",
      stats: "Smart Insights"
    },
    {
      icon: IconUsers,
      title: "Custom Integrations",
      description: "Seamless integration with your existing systems and workflows for a unified experience.",
      color: "pink",
      stats: "Easy Integration"
    }
  ];

  return (
    <Box style={{ backgroundColor: '#f8fafc', padding: '4rem 0' }}>
      <Container size="xl">
        <Stack gap="xl" align="center" mb="3rem">
          <Badge size="lg" variant="light" color="blue" style={{ marginBottom: '1rem' }}>
            Trust & Quality
          </Badge>
          <Title 
            order={2} 
            style={{ 
              textAlign: 'center', 
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '700',
              lineHeight: '1.2',
              color: '#1e293b'
            }}
          >
            Complete Platform Features
          </Title>
          <Text 
            size="xl" 
            style={{ 
              textAlign: 'center', 
              color: '#64748b',
              maxWidth: '800px',
              lineHeight: '1.6'
            }}
          >
            All the tools you need in one unified platform - AI quality control, GPS verification, 
            document authentication, and certificate validation.
          </Text>
        </Stack>

        <Grid gutter="xl">
          {features.map((feature, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
              <Card 
                p="xl" 
                radius="xl" 
                shadow="sm" 
                style={{ 
                  height: '100%',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                className="hover-card"
              >
                <Stack gap="md" style={{ height: '100%' }}>
                  <Group>
                    <Box
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        backgroundColor: `var(--mantine-color-${feature.color}-0)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem'
                      }}
                    >
                      <feature.icon 
                        size={28} 
                        color={`var(--mantine-color-${feature.color}-6)`}
                      />
                    </Box>
                    <Badge 
                      size="sm" 
                      variant="light" 
                      color={feature.color}
                      style={{ marginLeft: 'auto' }}
                    >
                      {feature.stats}
                    </Badge>
                  </Group>
                  
                  <Title order={4} style={{ color: '#1e293b', fontWeight: '600' }}>
                    {feature.title}
                  </Title>
                  
                  <Text 
                    size="sm" 
                    style={{ 
                      color: '#64748b',
                      lineHeight: '1.6',
                      flex: 1
                    }}
                  >
                    {feature.description}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

      </Container>

    </Box>
  );
};

export default Qualitycheck;