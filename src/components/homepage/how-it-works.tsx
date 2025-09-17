'use client';

import React from 'react';
import { Box, Container, Stack, Grid, Card, Title, Text, Group, Badge } from '@mantine/core';
import { 
  IconClipboard, 
  IconCamera, 
  IconBrain, 
  IconShield,
  IconArrowRight
} from '@tabler/icons-react';

interface Step {
  icon: React.ComponentType<{ size: number; color: string }>;
  title: string;
  description: string;
  stepNumber: number;
  color: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      icon: IconClipboard,
      title: 'Request QC',
      description: 'Choose inspection, factory audit, or shipment validation. Select your specific quality control needs and requirements.',
      stepNumber: 1,
      color: 'blue'
    },
    {
      icon: IconCamera,
      title: 'Capture Verified Data',
      description: 'Freelancers, auditors, or suppliers upload photos, GPS metadata, and documents.',
      stepNumber: 2,
      color: 'green'
    },
    {
      icon: IconBrain,
      title: 'AI Analysis + Human Review',
      description: 'AI detects errors, tampering, or mismatches - supervisors validate when needed.',
      stepNumber: 3,
      color: 'cyan'
    },
    {
      icon: IconShield,
      title: 'Trust Passport',
      description: 'Receive a tamper-proof report combining QC, documents, and proof of origin.',
      stepNumber: 4,
      color: 'orange'
    }
  ];

  return (
    <Box style={{ backgroundColor: '#FFFFFF', padding: '4rem 0' }}>
      <Container size="xl">
        <Stack gap="md" align="center" mb="3rem">
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
            How Corseco Works
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
            Here's how we transform trade complexity into simple, verified steps.
          </Text>
        </Stack>

        <Grid gutter="xl">
          {steps.map((step, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 3 }}>
              <Card
                p="xl"
                radius="xl"
                shadow="sm"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(1, 23, 45, 0.08)',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                className="step-card"
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
                        backgroundColor: `var(--mantine-color-${step.color}-0)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem'
                      }}
                    >
                      {step.icon === IconClipboard && <IconClipboard size={28} color={`var(--mantine-color-${step.color}-6)`} />}
                      {step.icon === IconCamera && <IconCamera size={28} color={`var(--mantine-color-${step.color}-6)`} />}
                      {step.icon === IconBrain && <IconBrain size={28} color={`var(--mantine-color-${step.color}-6)`} />}
                      {step.icon === IconShield && <IconShield size={28} color={`var(--mantine-color-${step.color}-6)`} />}
                    </Box>
                    
                    <Badge
                      size="xl"
                      variant="filled"
                      color={step.color}
                      style={{ 
                        fontWeight: '700',
                        fontSize: '1.1rem',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 0
                      }}
                    >
                      {step.stepNumber}
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
                    {step.title}
                  </Title>
                  
                  <Text
                    size="sm"
                    style={{
                      color: '#344E65',
                      lineHeight: '1.6',
                      flex: 1
                    }}
                  >
                    {step.description}
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

export default HowItWorks;
